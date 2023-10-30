console.log('Hello World!');


const data = {
    labels: [
        'Pushing',
        'Supporting',
        'Versatility',
        'Farming',
        'Emotionless',
        'Fighting',
    ],
    datasets: [{
        label: 'Christine',
        data: [1,4,3,3,2,2],
        fill: true,
        backgroundColor: 'rgba(246, 185, 219, 0.6)',
        pointRadius: 0
    }, {
        label: 'Jordan',
        data: [3,2,4,6,1,5],
        fill: true,
        backgroundColor: 'rgba(169, 220, 253, 0.6)',
        pointRadius: 0
    }]
};

const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 0
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            r: {
                ticks: {
                    display: false

                },
                grid:{
                    circular: true
                }
            }
        }
    },
};
const ctx = document.getElementById('myChart');

new Chart(ctx, config);