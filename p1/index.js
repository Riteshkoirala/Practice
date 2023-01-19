let isOnline = true, intervalId, time = 10;
let ale = document.querySelector('.alert');
let message = document.querySelector('.message h1');
let descc = document.querySelector('.desc');
let reconnect = document.querySelector('.reconnect');
let icons = document.querySelector(".icon i")




const checkNetwork = async () => {
    try{
        const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
        isOnline = responce.status >=200 && responce.status<=300;

     } catch(error){
        isOnline = false;
    }
    time = 10;
    clearInterval(intervalId);
    handleAlert(isOnline);


}


const handleAlert = (status) => {
    if(status){
        icons.classList = "uil uil-wifi";
            message.textContent = "Network Restored";
            descc.innerHTML = "You are online again. you are connected in network";
            reconnect.disabled = true;
            ale.classList.add("online");
        return setTimeout(() => ale.classList.remove("show", "online"),2000);
    }
    icons.classList = "uil uil-wifi-slash";
    message.textContent = "Connection Lost";
    descc.innerHTML = "You are currently offline! we are trying to reconnect<br> you in <b>10</b> seconds.";
    reconnect.disabled = false;
    ale.classList.add("show");
    intervalId = setInterval(() => {
        time--;
        if(time === 0 ) checkNetwork();
        ale.querySelector(".desc b").innerText = time; 

    },1000);
}


setInterval(() => isOnline && checkNetwork(), 3000);
reconnect.addEventListener("click", checkNetwork);