let boomM = new Audio("sounds/boom.wav");
let clapM = new Audio("sounds/clap.wav");
let hihatM = new Audio("sounds/hihat.wav");
let kickM = new Audio("sounds/kick.wav");
let openhatM = new Audio("sounds/openhat.wav");
let rideM = new Audio("sounds/ride.wav");
let snareM = new Audio("sounds/snare.wav");
let tinkM = new Audio("sounds/tink.wav");
let tomM = new Audio("sounds/tom.wav");

// let btn1 = document.getElementById("boom")
// let btn2 = document.getElementById("clap")
// let btn3 = document.getElementById("hihat")
// let btn4 = document.getElementById("kick")
// let btn5 = document.getElementById("openhat")
// let btn6 = document.getElementById("ride")
// let btn7 = document.getElementById("snare")
// let btn8 = document.getElementById("tink")
// let btn9 = document.getElementById("tom")


let button = document.getElementsByTagName("button");

document.addEventListener("keypress",(event) =>{
    console.log(event)
    if(event.code == "KeyA"){
        event.preventDefault()
        document.getElementById("boom").click();
    }
    else if (event.code == "KeyS"){
        clapM.pause()
        clapM.currentTime= 0
        clapM.play();
    }
    else if (event.code == "KeyD"){
        hihatM.pause()
        hihatM.currentTime= 0
        hihatM.play();
    }
    else if (event.code == "KeyF"){
        kickM.pause()
        kickM.currentTime= 0
        kickM.play();
    }
    else if (event.code == "KeyG"){
        openhatM.pause()
        openhatM.currentTime= 0
        openhatM.play();
    }
    else if (event.code == "KeyH"){
        rideM.pause()
        rideM.currentTime= 0
        rideM.play();
    }
    else if (event.code == "KeyJ"){
        snareM.pause()
        snareM.currentTime= 0
        snareM.play();
    }
    else if (event.code == "KeyK"){
        tinkM.pause()
        tinkM.currentTime= 0
        tinkM.play();
    }
    else if (event.code == "KeyL"){
        tomM.pause()
        tomM.currentTime= 0
        tomM.play();
    }
});

let btn1 = () =>{
    boomM.pause()
    boomM.currentTime= 0
    boomM.play();
}
let btn2 = () =>{
    clapM.pause()
    clapM.currentTime= 0
    clapM.play();
}
let btn3 = () =>{
    hihatM.pause()
    hihatM.currentTime= 0
    hihatM.play();
}
let btn4 = () =>{
    kickM.pause()
    kickM.currentTime= 0
    kickM.play();
}
let btn5 = () =>{
    openhatM.pause()
    openhatM.currentTime= 0
    openhatM.play();
}
let btn6 = () =>{
    rideM.pause()
    rideM.currentTime= 0
    rideM.play();
}
let btn7 = () =>{
    snareM.pause()
    snareM.currentTime= 0
    snareM.play();
}
let btn8 = () =>{
    tinkM.pause()
    tinkM.currentTime= 0
    tinkM.play();
}
let btn9 = () =>{
    tomM.pause()
    tomM.currentTime= 0
    tomM.play();
}

// btn1.addEventListener('click', ()=>{
//     boomM.pause()
//     boomM.currentTime= 0
//     boomM.play();
// });
// btn2.addEventListener('click', ()=>{
// });
// btn3.addEventListener('click', ()=>{
// });
// btn4.addEventListener('click', ()=>{
// });
// btn5.addEventListener('click', ()=>{
// });
// btn6.addEventListener('click', ()=>{
// });
// btn7.addEventListener('click', ()=>{
// });
// btn8.addEventListener('click', ()=>{
// });
// btn9.addEventListener('click', ()=>{
// });


