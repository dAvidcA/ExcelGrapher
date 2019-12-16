const range = (start, end, step) => {
  return Array.from(Array.from(Array(Math.ceil((end-start)/step)).keys()), x => start+ x*step);
}
var barChartData = { labels: range(1, 25, 1) };

$(document).ready(function(){	
	$('#files').change(handleFile);	
	var ctx = document.getElementById('canvas').getContext('2d');
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			responsive: true,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Bar Chart'
			}
		}
	});
});

function handleFile(e) {	
	emptyData();
	var files = e.target.files;	
	var i, f;
	for (i = 0; i != files.length; i++) {
		f = files[i];
		var reader = new FileReader();
		reader.name = f.name;
		reader.onload = function (e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, { type: 'binary' });			
			var sheet_name_list = workbook.SheetNames;
			
			var nameSheet = $('#nameSheet').val();
			var dataFile = XLSX.utils.sheet_to_json(workbook.Sheets[nameSheet]);
			
			if (dataFile.length > 0) {
				renderGraph([{name: e.target.name, data: dataFile}]);
			}
		};
		reader.readAsBinaryString(f);
	}
}

function renderGraph(graphData) {
	console.log(graphData);
	var color = Chart.helpers.color;
	var colorNames = Object.keys(window.chartColors);
	var colorName = colorNames[barChartData.datasets.length % colorNames.length];
	
	$.each(graphData,function(i,info){
		var dsColor = window.chartColors[colorName];
		var newDataset = {
			label: info.name,
			backgroundColor: color(dsColor).alpha(0.5).rgbString(),
			borderColor: dsColor,
			borderWidth: 1,
			data: []
		};
		
		var dataFile = info.data;
		for (var index = 0; index < barChartData.labels.length; ++index) {
			var tmpNum = parseFloat(dataFile[index].SystemCost).toFixed(2);
			newDataset.data.push(tmpNum);
		}

		barChartData.datasets.push(newDataset);
	});
	window.myBar.update();
}

function emptyData(){
	barChartData.datasets = [];
	window.myBar.update();
}