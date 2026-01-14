// 1. Inicializa os ícones do Lucide
lucide.createIcons();

// 2. Configuração do Gráfico de Crescimento
const ctx = document.getElementById('growthChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(34, 197, 94, 0.3)');
gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2017', '2020', '2023', '2025'],
        datasets: [{
            data: [12, 18, 28, 38, 45],
            borderColor: '#3a833c',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            pointRadius: [4, 4, 4, 4, 7],
            pointBackgroundColor: '#3a833c'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { 
                grid: { color: '#f0f0f0' },
                ticks: { display: false }
            }
        }
    }
});

// 3. Scroll suave para os links do menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});