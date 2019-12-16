<!doctype html>
<html>

<head>
	<title>Bar Chart</title>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.core.min.js"></script>
	<script src="../lib/Chart.min.js"></script>
	<script src="../lib/utils.js"></script>
	<script src="js.js"></script>
	<style>
	canvas {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	#namSheet{
		position: relative;
		float: right;
		font-size: 12px;
		font-weight: bold;
	}
	#namSheet input{
		font-size: 12px;
		font-weight: normal;
	}
	.inputfile:focus + label {
		outline: 1px dotted #000;
		outline: -webkit-focus-ring-color auto 5px;
	}
	</style>
</head>

<body>
	<div id="namSheet">Sheet name: <input type="text" id="nameSheet" value="SystemCost"></div>
	<input type="file" id="files" name="files" multiple/> 
	<div id="container" style="widthbarChartData: 75%;">
		<canvas id="canvas"></canvas>
	</div>
</body>

</html>
