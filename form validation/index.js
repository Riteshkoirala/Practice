btn = document.getElementById("add");
nam = document.getElementById("name");
em = document.getElementById("email");
ph = document.getElementById("phone");
me = document.getElementById("media");

spn = document.getElementById("namew");
spem = document.getElementById("emailw");
spph = document.getElementById("phonew");
spme = document.getElementById("mediaw");

function validate(){
    if(nam.value === ""){
        spn.textContent = " "
        spn.textContent = "You have not entered your name.";
    }
    if(em.value === ""){
        spn.textContent = " "

        spem.textContent = "You have not entered your name.";
    }
    if(ph.value === ""){
        spn.textContent = " "

        spph.textContent = "You have not entered your name.";
    }
    if(me.value === ""){
        spn.textContent = " "

        spme.textContent = "You have not entered your name.";
    }
    else{
        // window.location.href = "http://www.w3schools.com";

    }


}

