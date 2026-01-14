lucide.createIcons();

const ctx = document.getElementById('growthChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(58, 131, 60, 0.2)');
gradient.addColorStop(1, 'rgba(58, 131, 60, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2017', '2020', '2023', '2025'],
        datasets: [{
            data: [10, 18, 25, 35, 42],
            borderColor: '#3a833c',
            borderWidth: 3,
            fill: true,
            backgroundColor: gradient,
            tension: 0.4,
            pointRadius: [0, 5, 5, 5, 8],
            pointBackgroundColor: '#3a833c'
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }
});