$(document).ready(function(){
	
	setInterval(function(){
	var dateTime = new Date();
	var minutesTwoDigitsWithLeadingZeros = ("0" + dateTime.getMinutes()).substr(-2);
		$("#milliseconds").text(dateTime.getMilliseconds());
		$("#seconds").text(dateTime.getSeconds());
		$("#minutes").text(minutesTwoDigitsWithLeadingZeros);
		$("#hours").text(dateTime.getHours() %12);

			if (minutesTwoDigitsWithLeadingZeros %2 === 0 ) {
			document.body.style.color = "red";
		}else if(minutesTwoDigitsWithLeadingZeros %2 !== 0){
			document.body.style.color ="blue"}

		var randomColor = "#000000 ".replace(/0/g, function(){return (~~(Math.random()*10)).toString(16);})	

			if (minutesTwoDigitsWithLeadingZeros %5 === 0 ) {
				document.body.style.backgroundColor = 
				randomColor
			}
		var Colorz = [Yellow,turquoise]
		var Yellow = "yellow"
		var turquoise = "turquoise"
			if (hours %2 === 0) {
				document.body.style.backgroundColor = Colorz[0]
			}else if (hours %2 !== 0) {
				document.body.style.backgroundColor = Colorz[1]
			}

	
	}, 100);

	});

	

//if ( 'minutesWithTwoLeadingZeros' === 1&&3&&5&&7&&9&&11&&13&&15&&17&&19&&21&&23&&25&&27&&29&&31&&33&&35&&37&&39&&41&&43&&45&&47&&49&&51&&53&&55&&57&&59) 
//	{function myfunction(){
//		document.body.style.backgroundColor = "black"
//}};

