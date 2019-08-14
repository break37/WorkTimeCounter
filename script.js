$(document).ready(function(){
	// #region Variables declarations
	var startDate;
	var startH;
	var startM;
	var startSecs;
	var finishSecs;
	var startTime;
	var finishTime;
	var currDate;
	var currentSecs;
	// #endregion
	
	// uncomment below if you want to start couting automatically on page load
	// be careful however, because countdown will start from the beginning every time page is reloaded
	// startTime = new Date();
	
	// or set time at which you start your work
	// format is (YYYY, MM-1, DD, HH, MM, SS)
	startDate = new Date(2019, 07, 14, 07, 05, 00);
	
	calculateStartAndfinishTime();		
	showStartAndFinishTime();
	
	refreshTime();
	startInterval();
	
	// #region Functions
	function calculateStartAndfinishTime(){
		startH = startDate.getHours();
		startM = startDate.getMinutes();
		formatTimeNumbers();
		
		startTime= startH + ":" + startM;
		finishTime= parseInt(startH) + parseInt(8) + ":" + startM;
		
		startSecs = startDate.getTime();
		finishSecs = startSecs + parseInt(8*60*60*1000);
	}	
	
	function showStartAndFinishTime(){
		$("#startTime").html("Godzina rozpoczęcia: " + startTime);
		$("#finishTime").html("Godzina zakończenia: " + finishTime);
	}
	
	function formatTimeNumbers(){
		if (startH < 10) startH = 0 + "" + startH;
		if (startM < 10) startM = 0 + "" + startM;
	}
	
	function startInterval() {
		setInterval(function(){
			refreshTime();
		}, 10000);
	}
	
	function refreshTime(){
		currDate = new Date();
		currentSecs = currDate.getTime();
		var millisecsToHoursMultiplier = 60*60*1000;
		var progress = Math.round(100 - parseFloat(finishSecs-currentSecs)/millisecsToHoursMultiplier/8*100);
		
		if (progress < 100){	
			
			$("#caption").html("Dzień pracy ukończono w " + progress + "%");
			$("#progressbar-thumb").css("width", progress + "%");
		}
		else if (progress >= 100){	
			$("#caption").html("Dzień pracy ukończono w " + progress + "%");
			$("#progressbar-thumb").css("width", progress + "%");
			$(window).focus();
		}
	}
	// #endregion
});