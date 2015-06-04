/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        console.log("the term this refers to " + this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

var whichMeas = ""

$('#menuitems li').on('click', function() {
    $('#type-meas').html($(this).find('a').html());
    
    console.log("this is the value of whichmeas" + whichMeas);
    
    if (whichMeas === "temp"){$('#jumper').attr('href','#temperatures');
    } else if (whichMeas === "atm") {
      $('#jumper').attr('href','#pressures');  
    } else if (whichMeas === "wind") {
      $('#jumper').attr('href','#winds');
    } else if (whichMeas === "rain") {
        $('#jumper').attr('href','#rains');
    } else if (whichMeas === "sun") {
        $('#jumper').attr('href','#radiations'); 
    } else if (whichMeas === "rh") {
        $('#jumper').attr('href','#humidities');
    } else {
        $('#jumper').attr('href','#');
    }
});

// The value of the human input box-- $('#human-input').val();
$('#airtemperature').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 56.7) {
        $('#response').text('No, that is too hot!');
    } else if (Number(value) < -89.2) {
         $('#response').text('No, that is too cold!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "temp";

}); 

$('#dewpoint').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 42.2) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < -22.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "temp";
}); 


$('#atmospheric').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 1083.3) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 870.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "atm";
}); 

$('#VPD').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 100.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "atm";
}); 


$('#nrad').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 1367.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "sun";
}); 

$('#par').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 1150.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "sun";
});

$('#windspeed').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 108.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "wind";
});  

$('#rain').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 1185.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "rain";
}); 

$('#rainyear').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 11485.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "rain";
}); 

$('#relhum').click(function(){
    event.preventDefault();
    var value = $('#human-input').val();

    if (Number(value) > 100.0) {
        $('#response').text('No, that is too high!');
    } else if (Number(value) < 0.0) {
         $('#response').text('No, that is too low!');
    } else {
         $('#response').text('Yes! That is possible on earth!');
    }

    return whichMeas = "rh";
}); 

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});