$(document).ready(function(){

// Time Set
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var timeInterval = setInterval(function() {
    var currentTime = moment();
    $('#currentDay').html(currentTime.format('YYYY MMMM DD') + ' '
                        + currentTime.format('dddd')
                         .substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate + " " + currentTime.format('hh:mm:ss A'));
  }, 10);
  



// Block Colors
$(".time-block").each(function(){
    var id = parseInt($(this).attr("id"));
        if(id < currentHour){
            
        }
})
})