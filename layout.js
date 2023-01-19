const design = `
<div class="container p-2 border bg-primary text-white" id="cont">
<h1 class="bg-primary"> ENJOY YOUR TIME LETS PLAY WITH ANGRY BIRD ALARM</h1>
<img src="prof.jpg" alt="angry" class="mx-auto d-block" id="img"><br><br>
<div class="container-fluid ms-2 bg-primary text-center">
Wake up Time:<input type="time" class="ms-4" value="01:00" id="wk1" name="appt" min="09:00" max="18:00">::<input type="time" id="wk2" value="12:00" name="appt" min="09:00" max="18:00"><br>
Lunch Time: <input type="time" class="ms-5" value="12:00" id="lt1" name="appt" min="09:00" max="18:00">::<input type="time" id="lt2" value="12:00" name="appt" min="09:00" max="18:00"><br>
Study Time: <input type="time" id="st1" value="12:00" name="appt" class="ms-5" min="09:00" max="18:00">::<input type="time" id="st2" value="12:00" name="appt" min="09:00" max="18:00"><br>
play Time: <input type="time" id="pt1" value="12:00" name="appt" class="ms-5" min="09:00" max="18:00">::<input type="time" id="pt2" value="12:00" name="appt" min="09:00" max="18:00"><br>
Nap Time: <input type="time" id="appt" value="12:00" name="appt" class="ms-5" min="09:00" max="18:00">::<input type="time" id="appt2" value="12:00" name="appt" min="09:00" max="18:00"><br><br>

<button class="ms-5 ms-5" id="btn">Let's See The Time</button>
</div>
</div>
`

let lay = document.querySelector('.clock');
lay.innerHTML = design;


function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";

    if(hh == 0){
        hh=12;
    }
    if(hh>12){
        hh = hh-12;
        session = 'PM';
    }

    hh = (hh<10) ? "0" + hh : hh;
    mm = (mm<10) ? "0" + mm : mm;
    ss = (ss<10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss + " " + session;

    document.getElementById("time").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
}
  currentTime();


