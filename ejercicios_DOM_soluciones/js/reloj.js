
// export default function clock () {
//     const d = document;
//     const $STARTCLOCK = d.getElementById('start-clock');
//     const $STOPCLOCK = d.getElementById('stop-clock');
//     const $STARTALARM = d.getElementById('start-alarm');
//     const $STOPALARM = d.getElementById('stop-alarm');
//     let reloj, alarm, audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");;
    
//     d.addEventListener('click',function(e){
//         if(e.target.id==='start-clock'){
//             startClock();
//             reloj = setInterval(startClock, 1000);
//             $STARTCLOCK.disabled = true;
//         }else if(e.target.id==='stop-clock'){
//             stopClock(reloj);   
//         }
//         else if(e.target.id==='start-alarm'){
//             audio.play();
//             alarm = setInterval(function(){
//                  audio.play();
//             } , 6000);
//             $STARTALARM.disabled =true;
//         }
//         else if(e.target.id==='stop-alarm'){
//             audio.pause();
//             clearInterval(alarm);
//             $STARTALARM.disabled = false;
//         }
       
//     })

// }

// function startClock(){
//     const d = document;
//     const fecha = new Date();
//     d.getElementById('clock-information').textContent = fecha.toLocaleTimeString();
// }

// function stopClock(reloj){
//     const d = document;
//     d.getElementById('clock-information').textContent = null;
//     d.getElementById('start-clock').disabled = false;
//     clearInterval(reloj)
// }

const d = document;

export function digitalClock(clock, btnPlay, btnStop){
    let clockTempo;
    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo)
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
export function alarm(sound,btnPlay,btnStop){
    let alarmaTempo;
    const $alarm = d.createElement('audio');
    $alarm.src = sound;
    d.addEventListener('click',e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(()=>{
                $alarm.play();
            },2000)
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            $alarm.pause();
            d.querySelector(btnPlay).disabled = false;
        }
    })
}