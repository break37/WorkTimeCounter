$(document).ready(function(){
	#region Variables declarations
	var startDate;
	var startH;
	var startM;
	var startSecs 
	var finishSecs
	var startTime;
	var finishTime;
	var currDate;
	var currentSecs;
	#endregion
	
	// uncomment below if you want to start couting automatically on page load
	// be careful however, because countdown will start from the beginning every time page is reloaded
	// startDate = new Date();
	
	// or set time at which you start your work
	// format is (YYYY, MM-1, DD, HH, MM, SS)
	startDate = new Date(2019, 07, 13, 07, 25, 00);
	
	calculateStartAndfinishTime();		
	showStartAndFinishtime()
	
	refreshTime();
	startInterval();
	
	#region Functions
	function calculateStartAndfinishTime(){
		startH = startDate.getHours();
		startM = startDate.getMinutes();
		formatTimeNumbers();
		
		startTime= startH + ":" + startM;
		finishTime= parseInt(startH) + parseInt(8) + ":" + startM;
		
		startSecs = startDate.getTime();
		finishSecs = startSecs + parseInt(8*60*60*1000);
	}	
	
	showStartAndFinishtime(){
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
		
		if (currentSecs <= finishSecs){	
			var progress = Math.round(100 - parseFloat(finishSecs-currentSecs)/millisecsToHoursMultiplier/8*100);
			
			$("#caption").html("Dzień pracy ukończono w " + progress + "%");
			$("#progressbar-thumb").css("width", progress + "%");
		}
	}
	#endregion
});