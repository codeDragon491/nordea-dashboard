///////// Chart (Visitor on page)
function showVisitorGraph(canvasId , labelArray , oldLabel , oldArray , newLabel , newArray , wSize , hSize){
	var chart = document.querySelector(canvasId);
	chart.width = wSize;
	chart.height = hSize;
	var chartContent = new Chart(chart , {
		type: "line" ,
		data: 
		{
			labels: labelArray,
	        datasets: [{
				label: newLabel,
				data: newArray,
				fill: false,
				lineTension: 0,
				borderColor: 'rgba(0, 0, 160, 1)',
				backgroundColor:'rgba(0, 0, 160, 0.2)'
			},
			{
	            label: oldLabel,
				data: oldArray,
	            backgroundColor: 'rgba(251,217,202,0.5)',
	            borderColor: 'rgba(255,99,132,1)',
				lineTension: 0,
	            borderWidth: 1
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

///////// Chart (Subscribers)
function chartSignUp(chartId , labels , data , wSize , hSize , zValue){
	var signUpChart = document.querySelector(chartId);
	signUpChart.height = hSize;
	signUpChart.width = wSize;
	var chartContent = new Chart(signUpChart , {
		type: "line" ,
		data: 
		{
			labels: labels,
			datasets: [{
				label: 'Numbers of subscribers',
				data: data,
				fill: true,
				lineTension: 0,
				borderColor: 'rgba(0, 0, 160, 1)',
				backgroundColor:'rgba(0, 0, 160, 0.2)',
				borderWidth: 1
			}]
		}, 
		options: {
			scales: {
				yAxes: [{
					ticks:{
						beginAtZero:zValue
					}
				}]
			}, 
			tooltips: {
				mode: 'nearest',
				intersect: false
			}
		}
	});
};

///////// Pie (Time of visit)
function pieTimeOfVisit(chartId , data){
	var tovChart = document.querySelector(chartId);
	tovChart.height = 10;
	tovChart.width = 10;
	var aLabels = ["12-15", "15-18", "18-21", "21-00", "00-03", "03-06", "06-09", "09-12"];
	var chartContent = new Chart(tovChart , {
		type: "doughnut" ,
		data: 
		{
			labels: aLabels,
			datasets: [{
				data: data,
				backgroundColor:
				[
					'rgba(0, 0, 160, 1)' , 
					'rgba(255, 99, 132, 1)' , 
					'rgba(245, 170, 190, 1)' , 
					'rgba(153, 204, 255, 1)' ,
					'rgba(255, 159, 64, 1)' ,
					'rgba(153, 102, 255, 1)' ,
					'rgba(75, 192, 192, 1)' ,
					'rgba(54, 162, 235, 1)'
				],
				borderColor:'rgba(253, 236, 228, 1)'
			}]
		},
		options:
		{
			layout: {
				padding: {
					left: 30,
					right: 20,
					top: 10,
					bottom: 20
				}
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


///////// table (Graph Full size)
function showTable(label , newArray , oldArray){
	var showLabels = "";
    var sNewData = "";
    var sOldData = "";
    var iNewSum = 0;
    var iOldSum = 0;  
	for(var i = 0; i < label.length; i++){
		showLabels += '<td>'+label[i]+'</td>';
		sNewData += '<td>'+newArray[i]+'</td>';
		sOldData += '<td>'+oldArray[i]+'</td>';
		iNewSum += newArray[i];
		iOldSum += oldArray[i];
	};

	var sTableDayVisitorTW = 
	'<thead>\
		<tr>\
			<th>This week</th>\
			'+showLabels+'\
		</tr>\
	</thead>\
	<tbody>\
		<tr>\
			<th>Visitors</th>\
			'+sNewData+'\
		</tr>\
		<tr>\
			<th>Total</th>\
			<td>\
				<strong>'+iNewSum+'</strong>\
			</td>\
		</tr>\
	</tbody>';

	var sTableDayVisitorLW =
	'<thead>\
		<tr>\
			<th>Last week</th>\
			'+showLabels+'\
		</tr>\
	</thead>\
	<tbody>\
		<tr>\
			<th>Visitors</th>\
			'+sOldData+'\
		</tr>\
		<tr>\
			<th>Total</th>\
			<td><strong>'+iOldSum+'</strong></td>\
		</tr>\
	</tbody>';

	visitorTW.innerHTML = sTableDayVisitorTW;
	visitorLW.innerHTML = sTableDayVisitorLW;
};

