// Navigation logic
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view');

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetView = item.innerText.toLowerCase().includes('usage') ? 'usage-view' : 
                          item.innerText.toLowerCase().includes('sessions') ? 'sessions-view' :
                          item.innerText.toLowerCase().includes('settings') ? 'settings-view' : 'api-view';
        
        // Update nav
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Update views
        views.forEach(v => v.style.display = 'none');
        document.getElementById(targetView).style.display = 'flex';
        document.getElementById(targetView).style.flexDirection = 'column';
        document.getElementById(targetView).style.gap = '40px';
    });
});

async function updateDashboard() {
    try {
        const response = await fetch('quota_data.js', { cache: 'no-store' });
        if (!response.ok) throw new Error('Network response was not ok');
        
        const textData = await response.text();
        
        // quota_data.js looks like: window.quotaData = { ... };
        // We need to extract just the JSON part to avoid eval()
        const jsonString = textData.replace('window.quotaData = ', '').replace(/;$/, '');
        const data = JSON.parse(jsonString);

        if (!data) return;

        document.getElementById('usage-val').innerText = data.usage + '%';
        if (document.getElementById('usage-bar')) {
            document.getElementById('usage-bar').style.width = data.usage + '%';
        }
        
        document.getElementById('tokens-val').innerText = data.tokens;
        if (document.getElementById('tokens-bar')) {
            const tokenPercent = Math.min((parseFloat(data.tokens) / 500) * 100, 100);
            document.getElementById('tokens-bar').style.width = tokenPercent + '%';
        }

        document.getElementById('complexity-val').innerText = data.complexity;
        document.getElementById('cost-val').innerText = '$' + data.cost;
        document.getElementById('status-text').innerText = data.status;
        
        if (data.lastUpdate) {
            const date = new Date(data.lastUpdate);
            document.getElementById('last-update').innerText = 'Dernière mise à jour: ' + date.toLocaleTimeString();
        }

    } catch (error) {
        console.error('Erreur lors du chargement de quota_data.js:', error);
        document.getElementById('status-text').innerText = 'Attente des données (lance /quota-monitor)...';
    }
}

// Update every 5 seconds
setInterval(updateDashboard, 5000);
updateDashboard();
