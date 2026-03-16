import json
import os
import shutil
import argparse
from datetime import datetime

# --- CONFIGURATION ---
# Ajoutez ici des mots-clés ou domaines pour chaque catégorie
KEYWORDS_TRAVAIL = [
    'jira', 'github', 'stackoverflow', 'confluence', 'slack', 
    'azure', 'aws', 'linkedin', 'meeting', 'calendar', 'docs.google',
    'office', 'teams', 'bitbucket', 'gitlab', 'trello', 'vexco', 'sygif', 'grics', 'crakmedia', 'cisssbsl', 'pelicancorp'
]

KEYWORDS_MAISON = [
    'youtube', 'facebook', 'netflix', 'amazon', 'reddit', 
    'twitter', 'news', 'game', 'bank', 'shopping', 'voyage',
    'spotify', 'twitch', 'discord', 'instagram', 'panierbleu', 'rakuten', '20minutes'
]

BOOKMARKS_PATH = os.path.join(
    os.environ['LOCALAPPDATA'], 
    r'Google\Chrome\User Data\Default\Bookmarks'
)

BACKUP_DIR = 'backups'

def backup_bookmarks():
    if not os.path.exists(BACKUP_DIR):
        os.makedirs(BACKUP_DIR)
    
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    backup_path = os.path.join(BACKUP_DIR, f'Bookmarks_{timestamp}.bak')
    shutil.copy2(BOOKMARKS_PATH, backup_path)
    print(f"[*] Backup créé : {backup_path}")
    return backup_path

def flat_bookmarks(node, results=None):
    if results is None:
        results = []
    
    if node.get('type') == 'url':
        results.append(node)
    elif node.get('type') == 'folder':
        for child in node.get('children', []):
            flat_bookmarks(child, results)
    
    return results

def get_category(bookmark):
    url = bookmark.get('url', '').lower()
    name = bookmark.get('name', '').lower()
    
    for kw in KEYWORDS_TRAVAIL:
        if kw in url or kw in name:
            return 'Travail'
            
    for kw in KEYWORDS_MAISON:
        if kw in url or kw in name:
            return 'Maison'
            
    return 'Autres'

def clean_and_reorganize(dry_run=False):
    if not os.path.exists(BOOKMARKS_PATH):
        print(f"[!] Fichier favoris non trouvé à: {BOOKMARKS_PATH}")
        return

    print(f"{'--- MODE SIMULATION ---' if dry_run else '--- MODE EXECUTION ---'}")

    # 1. Backup (seulement si pas dry_run)
    if not dry_run:
        backup_bookmarks()

    with open(BOOKMARKS_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # 2. Récupérer tous les favoris
    all_bookmarks = []
    for root in ['bookmark_bar', 'other', 'synced']:
        if root in data['roots']:
            all_bookmarks.extend(flat_bookmarks(data['roots'][root]))

    print(f"[*] Total favoris identifiés : {len(all_bookmarks)}")

    # 3. Dédoublonnage et Classification
    unique_urls = set()
    categories = {
        'Maison': [],
        'Travail': [],
        'Autres': []
    }
    
    duplicates_count = 0
    
    for b in all_bookmarks:
        url = b['url']
        if url in unique_urls:
            duplicates_count += 1
            continue
        
        unique_urls.add(url)
        cat = get_category(b)
        categories[cat].append({
            "date_added": b.get("date_added", "0"),
            "id": b.get("id", "0"), # Trick: Chrome generates IDs, but will regenerate if missing
            "name": b["name"],
            "type": "url",
            "url": b["url"]
        })

    print(f"[*] Doublons à supprimer : {duplicates_count}")
    print(f"[*] Répartition cible :")
    print(f"    - Maison  : {len(categories['Maison'])}")
    print(f"    - Travail : {len(categories['Travail'])}")
    print(f"    - Autres (vers Maison/Divers) : {len(categories['Autres'])}")

    if dry_run:
        print("[*] Simulation terminée. Aucune modification n'a été faite.")
        return

    # 4. Reconstruction du fichier JSON
    new_roots = {
        "bookmark_bar": {
            "children": [
                {
                    "date_added": "0",
                    "date_modified": "0",
                    "name": "Maison",
                    "type": "folder",
                    "children": categories['Maison']
                },
                {
                    "date_added": "0",
                    "date_modified": "0",
                    "name": "Travail",
                    "type": "folder",
                    "children": categories['Travail']
                },
                {
                    "date_added": "0",
                    "date_modified": "0",
                    "name": "Divers",
                    "type": "folder",
                    "children": categories['Autres']
                }
            ],
            "name": "Barre de favoris",
            "type": "folder"
        },
        "other": {
            "children": [],
            "name": "Autres favoris",
            "type": "folder"
        },
        "synced": {
            "children": [],
            "name": "Favoris mobiles",
            "type": "folder"
        }
    }

    data['roots'] = new_roots

    # 5. Sauvegarde
    with open(BOOKMARKS_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4)

    print("[+] Nettoyage terminé avec succès !")
    print("[!] IMPORTANT : Fermez complètement Chrome et relancez-le pour voir les changements.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Nettoie et organise les favoris Chrome.")
    parser.add_argument("--dry-run", action="store_true", help="Affiche les actions sans modifier le fichier.")
    args = parser.parse_args()
    
    clean_and_reorganize(dry_run=args.dry_run)
