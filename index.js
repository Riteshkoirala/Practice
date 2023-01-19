let but = document.querySelector('#btn');
let waEl = document.querySelector('#wk1');
let waEll = document.querySelector('#wk2');
let laEl = document.querySelector('#lt1');
let laEll = document.querySelector('#lt2');
let stEl = document.querySelector('#st1');
let stEll = document.querySelector('#st2');
let plEl = document.querySelector('#pt1');
let plEll = document.querySelector('#pt2');
let npEl = document.querySelector('#appt');
let npEll = document.querySelector('#appt2');
let ima = document.querySelector('#img');

const date = new Date();

console.log(date.getTime());


function he(elem, elem1){

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();

    let time = hh + ":"+mm;
    let elemN = elem.value;

    // var timeArr = elem.split(":");
    // var startTime = timeArr[0];
    // var endTime = timeArr[1];

    let elem1N = elem1.value;

    // var timeArr1 = elem1.split(":");
    // var startTime1 = timeArr1[0];
    // var endTime1 = timeArr1[1];

    // const between = (x, min, max) => {
    //     return x>=min && x<=max
    // }
if(elem==waEl && elem1==waEll){
    if((time >= elemN && time<=elem1N) || (time <= elemN && time>=elem1N)){
        ima.src = "angryEmoji.jpg";
    }
}
if(elem==laEl && elem1==laEll){
    if((time >= elemN && time<=elem1N) || (time <= elemN && time>=elem1N)){
        ima.src = "lunch.jpg";
    }
}
if(elem==stEl && elem1==stEll){
    if((time >= elemN && time<=elem1N) || (time <= elemN && time>=elem1N)){
        ima.src = "study.jpg";
    }
}
if(elem==plEl && elem1==plEll){
    if((time >= elemN && time<=elem1N) || (time <= elemN && time>=elem1N)){
        ima.src = "play.jpg";
    }
}
if(elem==npEl && elem1==npEll){
    if((time >= elemN && time<=elem1N) || (time <= elemN && time>=elem1N)){
        ima.src = "nap.jpg";
    }
}
}

but.addEventListener("click", function(){

    he(waEl, waEll);
    he(laEl, laEll);
    he(stEl, stEll);
    he(plEl, plEll);
    he(npEl, npEll);


})

let start = document.getElementById("#start");
let set = document.getElementById("#pk");

function timer(){

    var deadline = new Date("15 jan 2024 15:37:27").getTime();
    var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("countdown").innerHTML = days + "d " 
    + hours + "h " + minutes + "m " + seconds + "s ";
        if (t < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}


timer();




