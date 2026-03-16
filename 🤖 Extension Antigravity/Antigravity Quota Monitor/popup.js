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

function updateDashboard() {
    // Remove previous script if exists
    const oldScript = document.getElementById('data-script');
    if (oldScript) oldScript.remove();

    // Inject new script with cache buster
    const script = document.createElement('script');
    script.id = 'data-script';
    script.src = 'quota_data.js?t=' + new Date().getTime();
    
    script.onload = () => {
        if (!window.quotaData) return;
        const data = window.quotaData;

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
    };

    script.onerror = () => {
        console.error('Erreur lors du chargement de quota_data.js');
        document.getElementById('status-text').innerText = 'Attente des données (lance /quota-monitor)...';
    };

    document.body.appendChild(script);
}

// Update every 5 seconds
setInterval(updateDashboard, 5000);
updateDashboard();
