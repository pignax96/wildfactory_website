var countDownDate = new Date("Apr 4, 2018 00:00:00").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("days").innerHTML = days;
    if(hours<=9){
        hours='0'+hours;
    }
    
    document.getElementById("hours").innerHTML = hours;
    if(minutes<=9){
        minutes='0'+minutes;
    }
    
    document.getElementById("minutes").innerHTML = minutes;
    if(seconds<=9){
        seconds='0'+seconds;
    }
    
    document.getElementById("seconds").innerHTML = seconds;
    
}, 0);