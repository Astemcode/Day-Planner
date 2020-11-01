$(document).ready(function() {    
	// Time Set
	var currentDate = moment().format('dddd') + ' ' + moment().format('Do MMM YYYY');
	var timeInterval = setInterval(function() {
		var currentTime = moment();
		$('#currentDay').html(
			currentTime.format('YYYY MMMM DD') + ' ' + currentTime.format('dddd').substring(0, 3).toUpperCase()
		);
		$('#currentDay').html(currentDate + ' ' + currentTime.format('hh:mm:ss A'));
	}, 10);


    // Time Block Color change Using Loops
    function blockTimes() {
        var presentTime = moment().hour();

        $(".time-block").each(function () {
            var hourSection = parseInt($(this).attr("id").split("hour")[1]);
            console.log( hourSection, presentTime)

            if (hourSection < presentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourSection === presentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    blockTimes();
});
