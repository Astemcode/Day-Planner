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

		$('.time-block').each(function() {
			var hourSection = parseInt($(this).attr('id').split('hour')[1]);
			console.log(hourSection, presentTime);

			if (hourSection < presentTime) {
				$(this).addClass('past');
				$(this).removeClass('future');
				$(this).removeClass('present');
			} else if (hourSection === presentTime) {
				$(this).removeClass('past');
				$(this).addClass('present');
				$(this).removeClass('future');
			} else {
				$(this).removeClass('present');
				$(this).removeClass('past');
				$(this).addClass('future');
			}
		});
	}

	// Save Button for Daily Task
	$('.saveBtn').on('click', function() {
		console.log(this);
		var text = $(this).siblings('.description').val();
		var time = $(this).parent().attr('id');

		//Items saved in localStorage
		localStorage.setItem(time, text);
	});

	// Storage of Task using ID and Class
	$('#hour8 .description').val(localStorage.getItem('hour8'));
	$('#hour9 .description').val(localStorage.getItem('hour9'));
	$('#hour10 .description').val(localStorage.getItem('hour10'));
	$('#hour11 .description').val(localStorage.getItem('hour11'));
	$('#hour12 .description').val(localStorage.getItem('hour12'));
	$('#hour13 .description').val(localStorage.getItem('hour13'));
	$('#hour14 .description').val(localStorage.getItem('hour14'));
	$('#hour15 .description').val(localStorage.getItem('hour15'));
	$('#hour16 .description').val(localStorage.getItem('hour16'));
	$('#hour17 .description').val(localStorage.getItem('hour17'));
	$('#hour18 .description').val(localStorage.getItem('hour18'));

	blockTimes();
    taskLog();
    
    $("#clearDay").on("click", function(){
        localStorage.clear();
        initPage()
      }) 
});
