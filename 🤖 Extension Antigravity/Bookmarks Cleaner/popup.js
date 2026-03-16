const CATEGORIES_CONFIG = {
    'Travail': {
        '🏢 Vexco': ['vexco', 'gestionvexco'],
        '🏢 Garde côtière': ['37522', 'garde côtière', 'garde-côtière', 'garde cotiere'],
        '🏷️ SYGIF': ['sygif', 'sygi', 'groupesygif', 'sygreflex'],
        '🏢 GRICS': ['grics', 'mozaik', 'mozaïk', 'portail', 'edu-groupe', 'eduportal', 'do-un-test-de-charge', 'grics.ca', 'mozaikportal.ca'],
        '🏢 Crakmedia': ['crakmedia', 'crakrevenue', 'jerkmate', 'streamate'],
        '🏢 CISSSBSL': ['cisssbsl', 'cisss-bsl', 'bsl', 'santé bas-saint-laurent', 'gouv.qc.ca/cisssbsl'],
        '🏢 PelicanCorp': ['pelicancorp', 'pelican', '1call']
    },
    'Profession': {
        '🤖 AI API': ['console.groq', 'groq.com', 'aistudio.google', 'ai.google.dev', 'makersuite', 'platform.openai', 'console.anthropic', 'api.anthropic', 'api.mistral', 'mistral.ai', 'together.ai', 'replicate.com', 'fireworks.ai', 'cohere.com', 'console.cohere', 'developer.nvidia', 'build.nvidia', 'platform.stability', 'fal.ai', 'ltx.studio'],
        '🔑 Consoles Dev': ['console.cloud.google', 'console.aws', 'portal.azure', 'console.firebase', 'console.heroku', 'supabase.com', 'vercel.com/dashboard', 'app.netlify', 'railway.app', 'render.com/dashboard', 'statuspage.io', 'sonarqube'],
        '🛠️ Développement': ['github', 'stackoverflow', 'bitbucket', 'gitlab', 'npm', 'terminal', 'python', 'javascript', 'js', 'docker', 'rust', 'golang', 'vscode', 'w3schools', 'mdn', 'developer', 'stack exchange', 'towardsdatascience', 'medium', 'dev.to', 'react', 'vue', 'angular', 'node', 'api', 'css', 'html', 'json', 'sql', 'dotnet', 'c#', 'typescript', 'jquery', 'ajax', 'firebase', 'mongodb', 'mermaid', 'localhost', '127.0.0.1', '192.168.', '10.', 'file://', 'gitea', 'balsamiq'],
        '☁️ Cloud & DevOps': ['azure', 'aws', 'gcp', 'cloud', 'console.google', 'kubernetes', 'terraform', 'ovh', 'digitalocean', 'heroku', 'jenkins', 'ansible', 'monitoring', 'grafana', 'prometheus', 'container', 'kubectl'],
        '🤖 IA & Assistants': ['openai', 'chatgpt', 'claude.ai', 'anthropic', 'perplexity', 'gemini', 'midjourney', 'huggingface', 'copilot', 'llama', 'deepseek', 'andisearch', 'agentskills'],
        '⚙️ Gestion & Outils': ['jira', 'confluence', 'trello', 'slack', 'teams', 'office', 'microsoft', 'asana', 'gantt', 'notion', 'clickup', 'smartsheet', 'monday', 'basecamp', 'wrike', 'planner', 'convert', 'speedtest', 'tinyurl', 'bitly', 'regex', 'json', 'base64', 'beautify', 'minify', 'overflow', 'ipinfo', 'dns', 'whois', 'service-now', 'bamboohr', 'bomgar'],
        '📧 Réseautage & Admin': ['linkedin', 'meeting', 'zoom', 'calendar', 'outlook', 'gmail', 'skype', 'doodle', 'we-transfer', 'box.com', 'dropbox', 'onedrive', 'sharepoint'],
        '🎓 Formation': ['uqar', 'pluralsight', 'udemy', 'coursera', 'edx', 'alloprof', 'sigerweb']
    },
    'Maison': {
        '🐾 Animaux': ['lapin', 'chat', 'chien', 'vétérinaire', 'animal', 'animaux', 'pet', 'croquette', 'furet', 'oiseau'],
        '🏥 Santé': ['symptôme', 'traitement', 'maladie', 'doctissimo', 'santé', 'médicament', 'clinique', 'hopital', 'dentiste', 'ophtalmo', 'ordonnance', 'ameli', 'carnetsante', 'portal3.clicsante'],
        '📺 Divertissement': ['youtube', 'netflix', 'twitch', 'spotify', 'disney', 'primevideo', 'deezer', 'dailymotion', 'vimeo', 'plex', 'crunchyroll', 'canalplus', 'streaming', 'prime gaming'],
        '📱 Réseaux Sociaux': ['facebook', 'twitter', 'reddit', 'instagram', 'discord', 'tiktok', 'snapchat', 'pinterest', 'whatsapp', 'telegram', 'quora', 'messenger'],
        '🛒 Achats & Shopping': ['amazon', 'ebay', 'aliexpress', 'shopping', 'panier', 'cdiscount', 'fnac', 'darty', 'ikea', 'decathlon', 'vinted', 'leboncoin', 'temu', 'rakuten', 'panierbleu'],
        '✈️ Loisirs & Voyage': ['game', 'voyage', 'meteo', 'booking', 'airbnb', 'tripadvisor', 'sncf', 'kayak', 'skyscanner', 'hotels.com', 'expedia', 'routard', 'quebec original'],
        '📰 Actualités & Presse': ['news', 'lemonde', 'lefigaro', 'lequipe', 'bfm', 'reuters', 'theguardian', 'nytimes', 'lapresse', 'radio-canada', 'tva', 'journaldemontreal', 'voir.ca', 'huffington', '20minutes'],
        '💰 Finance & Banque': ['bank', 'banque', 'paypal', 'bourse', 'crypto', 'coinbase', 'binance', 'impots', 'desjardins', 'tdbank', 'rbc', 'bitcoin', 'dailyrewards', 'borrowell'],
        '🏛️ Gouvernement': ['saaq', 'ramq', 'clicsequr', 'gouv.qc.ca', 'canada.ca', 'service-public', 'impot']
    }
};
function capitalizeFirstLetter(string) {
    if (!string) return "";
    const upper = string.toUpperCase();
    const specialCaps = ["GRICS", "SYGIF", "CISSSBSL", "CRAKMEDIA", "PELICANCORP", "VEXCO"];
    if (specialCaps.includes(upper)) {
        return upper === "PELICANCORP" ? "PelicanCorp" : upper;
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

async function safeMove(id, parentId, index) {
    if (!id || !parentId) return;
    try {
        const children = await chrome.bookmarks.getChildren(String(parentId));
        let targetIndex = parseInt(index, 10);
        if (targetIndex > children.length) {
            targetIndex = children.length; 
        }
        await chrome.bookmarks.move(String(id), { 
            parentId: String(parentId), 
            index: targetIndex
        });
    } catch (e) {
        console.warn(`Could not move ${id} to ${parentId} at index ${index}: ${e.message}`);
    }
}

function getSmartCluster(bookmarks) {
    const clusters = {};
    const leftovers = [];
    bookmarks.forEach(b => {
        const title = (b.title || "").toLowerCase();
        let domain = "";
        const urlStr = (b.url || "").toLowerCase();
        try { domain = new URL(b.url).hostname.replace('www.', '').split('.')[0]; } catch(e) {}
        
        const strongWords = ['linkedin', 'gmail', 'outlook', 'onedrive', 'google', 'microsoft', 'github', 'mozaik', 'mozaïk', 'grics', 'sygif', 'vexco', 'crakmedia', 'crakrevenue', 'jerkmate', 'cisssbsl', 'pelicancorp', 'javascript', 'stack overflow', 'node', 'react', 'vue', 'azure', 'aws', 'jira', 'confluence', 'slack', 'teams', 'lapin', 'chat', 'chien', 'groupesygif', 'sygreflex', '37522', 'garde côtière'];
        let matched = false;
        for (const word of strongWords) {
            if (title.includes(word) || domain.includes(word) || urlStr.includes(word)) {
                let key = capitalizeFirstLetter(word);
                if (key === "Onedrive") key = "OneDrive";
                if (key === "Linkedin") key = "LinkedIn";
                if (key === "37522" || key === "Garde côtière") key = "🏢 Garde côtière";
                else if (key === "Vexco") key = "🏢 Vexco";
                else if (key === "Sygif" || key === "Groupesygif" || key === "Sygreflex") key = "🏷️ SYGIF";
                else if (["GRICS", "Crakmedia", "CISSSBSL", "PelicanCorp"].includes(key)) key = "🏢 " + key;
                
                if (!clusters[key]) clusters[key] = [];
                clusters[key].push(b);
                matched = true; break;
            }
        }
        if (matched) return;
        if (domain && domain.length > 2) {
            const key = "🌐 " + capitalizeFirstLetter(domain);
            if (!clusters[key]) clusters[key] = [];
            clusters[key].push(b);
            return;
        }
        leftovers.push(b);
    });
    const finalGroups = {};
    const finalLeftovers = [...leftovers];
    for (const [key, list] of Object.entries(clusters)) {
        if (list.length >= 2) finalGroups[key] = list;
        else finalLeftovers.push(...list);
    }
    return { groups: finalGroups, separate: finalLeftovers };
}

document.getElementById('cleanBtn').addEventListener('click', async () => {
    const status = document.getElementById('status');
    const loader = document.getElementById('loader');
    const btn = document.getElementById('cleanBtn');
    btn.disabled = true;
    loader.style.display = 'block';
    status.innerText = "Analyse Précision v3.12...";

    try {
        const tree = await chrome.bookmarks.getTree();
        const allBookmarks = [];
        function flatten(nodes) {
            for (const node of nodes) {
                if (node.url) allBookmarks.push(node);
                if (node.children) flatten(node.children);
            }
        }
        flatten(tree);

        const uniqueUrls = new Set();
        const duplicates = [];
        const structure = { 'Travail': {}, 'Profession': {}, 'Maison': {} };

        for (const b of allBookmarks) {
            let normUrl = (b.url || "").toLowerCase().trim();
            if (uniqueUrls.has(normUrl)) { duplicates.push(b.id); continue; }
            uniqueUrls.add(normUrl);
            const text = (b.url + " " + (b.title || "")).toLowerCase();
            let matched = false;
            
            const travailOrder = ['🏢 Vexco', '🏢 Garde côtière', '🏷️ SYGIF', '🏢 GRICS', '🏢 Crakmedia', '🏢 CISSSBSL', '🏢 PelicanCorp'];
            for (const subTitle of travailOrder) {
                const keywords = CATEGORIES_CONFIG['Travail'][subTitle];
                if (keywords && keywords.some(kw => text.includes(kw))) {
                    if (!structure['Travail'][subTitle]) structure['Travail'][subTitle] = [];
                    structure['Travail'][subTitle].push(b);
                    matched = true; break;
                }
            }

            if (!matched) {
                for (const [mainCat, subCats] of Object.entries(CATEGORIES_CONFIG)) {
                    if (mainCat === 'Travail') continue;
                    for (const [subTitle, keywords] of Object.entries(subCats)) {
                        if (keywords.some(kw => text.includes(kw))) {
                            if (!structure[mainCat][subTitle]) structure[mainCat][subTitle] = [];
                            structure[mainCat][subTitle].push(b);
                            matched = true; break;
                        }
                    }
                    if (matched) break;
                }
            }
            if (!matched) {
                let catName = "📁 Divers";
                try {
                    const domain = new URL(b.url).hostname.replace('www.', '').split('.')[0];
                    catName = "📁 " + capitalizeFirstLetter(domain);
                } catch(e) {}
                if (!structure['Maison']['📁 Divers']) structure['Maison']['📁 Divers'] = [];
                structure['Maison']['📁 Divers'].push(b);
            }
        }

        for (const id of duplicates) { try { await chrome.bookmarks.remove(String(id)); } catch(e) {} }

        const barId = "1";
        async function getOrCreateFolder(name, parentId) {
            const existing = await chrome.bookmarks.getChildren(String(parentId));
            const folder = existing.find(f => f.title === name && !f.url);
            if (folder) return folder.id;
            return (await chrome.bookmarks.create({ parentId: String(parentId), title: name })).id;
        }

        const rootIds = {
            'Travail': await getOrCreateFolder("💼 Travail", barId),
            'Profession': await getOrCreateFolder("💻 Profession", barId),
            'Maison': await getOrCreateFolder("🏠 Maison", barId)
        };

        const rootOrder = [rootIds.Travail, rootIds.Profession, rootIds.Maison];
        for (let i = 0; i < rootOrder.length; i++) { await safeMove(rootOrder[i], barId, i); }

        const folderMap = {}; 
        const parentCounters = {}; 

        for (const [mainName, subFolders] of Object.entries(structure)) {
            const parentId = rootIds[mainName];
            const sortedSubNames = Object.keys(subFolders).sort((a,b) => {
                if (a.includes("SYGIF")) return -1; if (b.includes("SYGIF")) return 1;
                return a.localeCompare(b, undefined, {sensitivity: 'base'});
            });

            for (let subIndex = 0; subIndex < sortedSubNames.length; subIndex++) {
                const subName = sortedSubNames[subIndex];
                
                let currentParentId = parentId;
                if (mainName === 'Travail' && (subName === '🏢 Vexco' || subName === '🏢 Garde côtière')) {
                    if (folderMap['🏷️ SYGIF']) {
                        currentParentId = folderMap['🏷️ SYGIF'];
                    }
                }

                if (!parentCounters[currentParentId]) parentCounters[currentParentId] = 0;
                const targetIndex = parentCounters[currentParentId]++;

                const folderId = await getOrCreateFolder(subName, currentParentId);
                folderMap[subName] = folderId; 
                
                await safeMove(folderId, currentParentId, targetIndex);

                const { groups, separate } = getSmartCluster(subFolders[subName]);
                const sortedGroupKeys = Object.keys(groups).sort((a,b) => a.localeCompare(b, undefined, {sensitivity: 'base'}));
                
                for (let gIdx = 0; gIdx < sortedGroupKeys.length; gIdx++) {
                    const key = sortedGroupKeys[gIdx];
                    const subSubId = await getOrCreateFolder(key, folderId);
                    await safeMove(subSubId, folderId, gIdx);
                    const sortedItems = groups[key].sort((a,b) => (a.title||"").localeCompare(b.title||"", undefined, {sensitivity: 'base'}));
                    for (let i = 0; i < sortedItems.length; i++) { await safeMove(sortedItems[i].id, subSubId, i); }
                }

                const sortedSep = separate.sort((a,b) => (a.title||"").localeCompare(b.title||"", undefined, {sensitivity: 'base'}));
                const offset = (await chrome.bookmarks.getChildren(String(folderId))).filter(f => !f.url).length;
                for (let i = 0; i < sortedSep.length; i++) { await safeMove(sortedSep[i].id, folderId, offset + i); }
            }
        }

        const protectedIds = Object.values(rootIds).concat(["0", "1", "2"]);
        async function cleanEmptyFolders(nodes) {
            for (const node of nodes) {
                if (node.children) await cleanEmptyFolders(node.children);
                if (!node.url && !protectedIds.includes(String(node.id))) {
                    try {
                        const content = await chrome.bookmarks.getChildren(String(node.id));
                        if (content.length === 0) await chrome.bookmarks.remove(String(node.id));
                    } catch (e) {}
                }
            }
        }
        await cleanEmptyFolders((await chrome.bookmarks.getTree())[0].children);
        status.innerText = "Version 3.13.0 Terminée ! 🎯\nSuppression de 'A classer' et détection enrichie (UQAR, Développement, Santé).";
    } catch (err) { status.innerText = "Erreur: " + err.message; }
    finally { loader.style.display = 'none'; btn.disabled = false; }
});
