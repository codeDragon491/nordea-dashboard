///////// Bar (Pages / Session)
function timeOnSiteBar(canvasId , chartLabels , newArray , sTitle){
	var barChart = document.querySelector(canvasId);
	barChart.height = 100;
	barChart.width = 60;

	var chartContent = new Chart(barChart , {
		type: "bar" ,
		data: 
		{
			labels: chartLabels,
			datasets: 
			[{
				data: newArray,
                backgroundColor:
                [
                    'rgba(0, 0, 160, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                hoverBackgroundColor:
                [
                    'rgba(0, 0, 160, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ],
				borderWidth:2,
                borderColor:
                [
                    'rgba(0, 0, 160, 1)',
                    'rgba(255, 99, 132, 1)'
                ]
			}]
		}, 
		options: {
            legend: { display: false },
            title: {
                display: true,
                text: sTitle
            },
			scales: {
				yAxes: [{
					ticks:{
						beginAtZero:true
					}
				}],
				xAxes: [{
					barThickness : 50
				}]
			}, 
			tooltips: {
				mode: 'nearest',
				intersect: false
			}
		}
	});
};

///////// Bar (Traffic sources)
function trafficSourcesBar(canvasId , TSData , wSize , hSize){
	var barChart = document.querySelector(canvasId);
	barChart.width = wSize;
	barChart.height = hSize;

	var chartContent = new Chart(barChart , {
		type: "bar" ,
		data: 
		{
			labels: ["Direct" , "Referrals" , "Search" , "Social Media" , "Email"],
			datasets: 
			[{
				data: TSData,
                backgroundColor:
                [
                    'rgba(0, 0, 160, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(153, 204, 255, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)'
                ],
                hoverBackgroundColor:
                [
                    'rgba(0, 0, 160, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 204, 255, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
				borderWidth:2,
                borderColor:
                [
                    'rgba(0, 0, 160, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(153, 204, 255, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)'
                ]
			}]
		}, 
		options: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Data shown in %'
            },
			scales: {
				yAxes: [{
					ticks:{
						beginAtZero:true
					}
				}],
				xAxes: [{
					barThickness : 50
				}]
			}, 
			tooltips: {
				mode: 'nearest',
				intersect: false
			}
		}
	});
};


