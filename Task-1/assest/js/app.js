var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var coun = document.getElementById("coun");

var start = document.getElementById("start");
var stop = document.getElementById("stop");
var restart = document.getElementById("reset");

let hour = 0;
let minute = 0;
let second = 0;
let counter = 0;

let timer = false;

                                        // Event method

// function startbtn() {
//     timer = true;
//     stopWatch()
// }

// function stopbtn() {
//     timer = false;
// }

// function restartbtn() {
//     timer = false;

//     hr.innerHTML = "00 :";
//     min.innerHTML = "00 :";
//     sec.innerHTML = "00 :";
//     coun.innerHTML = "00";

//     hour = 0;
//     minute = 0;
//     second = 0;

 
// }

// function stopWatch() {
//     if (timer == true) {
//         counter++
//         setTimeout(stopWatch,10)
//         coun.innerHTML = counter;
//     }

//     if (counter == 100) {
//         second++;
//         sec.innerHTML = second + ":";
//         counter = 0 ;
//     }

//     if (second < 10) {
//         sec.innerHTML = "0" + second + ":";
//     }

//     if (second == 60) {
//         minute++;
//         min.innerHTML = minute + ":";
//         second = 0;
//     }

//     if (minute < 10) {
//         min.innerHTML = "0" + minute + ":";
//     }

//     if (minute == 60) {
//         hour++;
//         hr.innerHTML = hour + ":";
//         minute = 0;
//     }

//     if (hour < 10) {
//         hr.innerHTML = "0" + hour + ":";
//     }

// }










                                                // addEventListener method


stop.addEventListener('click',function() {
    timer = false;
});
start.addEventListener('click',function() {
    timer = true;
    watch()
});

restart.addEventListener('click',function() {
    timer = false;
    hour = 0;
    minute = 0;
    second = 0;
    counter = 0;

    hr.innerHTML = "00 :";
    min.innerHTML = "00 :";
    sec.innerHTML = "00 :";
    coun.innerHTML = "00"

});

function watch() {
    if (timer) {
        counter++

        coun.innerHTML = (counter < 10 ? "0" + counter : counter);
        sec.innerHTML = (second < 10 ? "0" + second : second) + ":"; 
        min.innerHTML = (minute < 10 ? "0" + minute : minute) + ":"; 
        hr.innerHTML = (hour < 10 ? "0" + hour : hour) + ":"; 
    
        if (counter === 100) {
          second++;
          counter = 0;
        }
        if (second === 60) {
          minute++;
          second = 0;
        }
        if (minute === 60) {
          hour++;
          minute = 0;
        }
    
        setTimeout(watch, 10);
      }

}


