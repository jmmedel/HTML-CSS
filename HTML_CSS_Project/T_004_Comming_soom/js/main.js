// set The date we`re counting donw to 
var countdownrate =  new Date("March 15,2018 00:00:00").getTime();




// Update the count down every 1second
var countdownfucntion = setInterval(function(){
// Get todays date and time
var now = new Date().getTime();
// Find the distance between now an the count down date
var distance = countdownrate - now;
// Time calculation for days , hours minutes and seconds 
var days = Math.floor(distance / (1000 * 60 * 60* 24));
var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60 ))/ (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// Output the result in an elemnts with id="demo"
document.getElementById('demo').innerHTML = days + "d " + hour + "h " + minutes + "m " + seconds + "s ";

// if the count down is over wirte some text
if(distance < 0 )
 {
    clearInterval(countdownfucntion);
    document.getElementById('demo').innerHTML = "Expired";

 }

},1000);


