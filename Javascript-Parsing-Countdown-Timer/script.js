const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const hinput = document.getElementById("h");
const minput = document.getElementById("m");
const sinput = document.getElementById("s");

const startbtn = document.getElementById("start");
const resetbtn = document.getElementById("reset");

let stop = false;

hinput.addEventListener("change", () => {
    hour.textContent = hinput.value < 10 ? "0" + hinput.value : hinput.value;
});
minput.addEventListener("change", () => {
    minute.textContent = minput.value < 10 ? "0" + minput.value : minput.value;
});
sinput.addEventListener("change", () => {
    second.textContent = sinput.value < 10 ? "0" + sinput.value : sinput.value;
});

startbtn.addEventListener("click", startTimer);
resetbtn.addEventListener("click", () => {
    stop = true;
    hour.textContent = "10";
    minute.textContent = "00";
    second.textContent = "00";
    hinput.value = "10";
    minput.value = "00";
    sinput.value = "00";
    location.reload()
});

function startTimer(){
    let hSet = hour.textContent;
    let mSet = minute.textContent;
    let sSet = second.textContent;


    const interval = setInterval(() => {
        sSet--;
        sSet = sSet < 10 ? "0" + sSet : sSet;
 

        if(sSet == "0-1"){
            mSet--;
            sSet = 59;
        }
        if(mSet == "-1"){
            hSet--;
            mSet = 59;
        }
        if((hSet == 0 && mSet == 0 && sSet == 0 || hSet == 00 && mSet == 00 && sSet == 00 )){
            clearInterval(interval);
            window.alert("Time Out!!");
            hinput.value = "00";
            minput.value = "00";
            sinput.value = "00";

        }
        if(stop){
            clearInterval(interval);
            return;
        }

        hour.textContent = hSet;
        minute.textContent = mSet;
        second.textContent = sSet;
    }, 1000);
    

}

