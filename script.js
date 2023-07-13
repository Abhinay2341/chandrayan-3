var countDownDate = new Date("July 14, 2023 14:35:17").getTime(); 
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    
    }, 1000);




















// let daysItem = document.querySelector("#days");
// let hoursItem = document.querySelector("#hours");
// let minItem = document.querySelector("#min"); 
// let secItem = document.querySelector("#sec");

// let countDown = () => {
// let futureDate= new Date("1 Jan 2021");
// let currentDate= new Date();
// let myDate = futureDate - currentDate;

// console.log(myDate);
// }
// countDown()


// setInterval(countDown, 1000)
























    //     var countDownDate = new Date("July 14, 2023 02:25:00").getTime();
    //     var x = setInterval(function(){
    //         var now = new Date().getTime();
    //         var distance = countDownDate - now;

    //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         document.getElementById("days").innerHTML = days;
    //         document.getElementById("hours").innerHTML = hours;
    //         document.getElementById("minutes").innerHTML = minutes;
    //         document.getElementById("seconds").innerHTML = seconds;

    // },1000);


    // // Converting string to required date format
    // let deadline = new Date("July 14, 2023 02:35:00")
    //                 .getTime();

    // // To call defined fuction every second
    // let x = setInterval(function () {
         
    //     // Getting current time in required format
    //     let now = new Date().getTime();

    //     // Calculating the difference
    //     let t = deadline - now;

    //     // Getting value oloor(
    //         (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     let minutes = Math.floor(
    //         (t % (1000 * 60 * 60)) / (1000 * 60));
    //     let seconds = Math.floor(
    //         (t % (1000 * 60)) / 1000);

    //     // Output the remaining time
    //     document.getElementById("demo").innerHTML =
    //         days + "d " + hours + "h " +
    //         minutes + "m " + seconds + "s ";

    //     // Output for over time
    //     if (t < 0) {
    //         clearInterval(x);
    //         document.getElementById("demo")
    //                 .innerHTML = "EXPIRED";
    //     }
    // }, 1000);

    //         // Output for over time
    //         if (t < 0) {
    //             clearInterval(x);
    //             document.getElementById("demo")
    //                     .innerHTML = "EXPIRED";f days, hours, minutes, seconds
    //     let days = Math.floor(t / (1000 * 60 * 60 * 24));
    //     let hours = Math.f






