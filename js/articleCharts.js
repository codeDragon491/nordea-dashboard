///////// Bar (Article posted)
function showLineChart(canvasId , labelArray , oldLabel , oldArray , newLabel , newArray , wSize , hSize){
    var chart = document.querySelector(canvasId);
    chart.width = wSize;
    chart.height = hSize;
    var chartContent = new Chart(chart , {
        type: "bar" ,
        data: 
        {
            labels: labelArray,
            datasets: [{
                label: newLabel,
                data: newArray,
                backgroundColor:'rgba(0, 0, 160, 0.2)',
                lineTension: 0
            },
            {
                label: oldLabel,
                data: oldArray,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                lineTension: 0
            }]
        }, 
        options: {
            scales: {
                yAxes: [{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }, 
			tooltips: {
				mode: 'index',
				intersect: false
			}
        }
    });
};

///////// Pie (Article readership)
function showPieChart(chartId , data){
	var tovChart = document.querySelector(chartId);
	tovChart.height = 10;
	tovChart.width = 12;
	var aLabels = ["New readers", "Revisited readers" , "Subscribers"];
	var chartContent = new Chart(tovChart , {
		type: "pie" ,
		data: 
		{
			labels: aLabels,
			datasets: [{
				data: data,
				backgroundColor:
				[
					'rgba(0, 0, 160, 1)' , 
					'rgba(255, 99, 132, 1)' , 
					'rgba(153, 204, 255, 1)'
				],
				borderColor:'rgba(253, 236, 228, 1)'
			}]
		},
        options:
        { 
            title: {
                display: true,
                text: 'Data shown in %'
            },
			tooltips: {
				mode: 'nearest',
				intersect: true
			},
			pieceLabel: {
				render:'percentage',
				fontColor: '#fff',
				overlap: true
			}
        }
	});
};