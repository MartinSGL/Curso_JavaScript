// const d = document;
// let newYear = new Date('01/01/2023').getTime();

// export function countDown(div){
//     setInterval(() => {
//         let now = new Date().getTime();
//         let remainder;
//         let nowToNewYear = newYear - now;
//         let days = nowToNewYear/(1000*60*60*24)
//         remainder =  nowToNewYear%(1000*60*60*24)
//         let hours = remainder/(1000*60*60);
//         remainder = remainder%(1000*60*60);
//         let minutes = remainder/(1000*60);
//         remainder = remainder%(1000*60)
//         let seconds = (remainder/1000);

//         let res = `${Math.floor(days)} días ${Math.floor(hours)} horas ${Math.floor(minutes)} minutos ${Math.floor(seconds)} segundos`;
    
//         d.querySelector(div).textContent = res
//     }, 1000);
   
// }

const d = document;
export default function countdown(id,limitDate,finalMessage){
    const $countdown = d.getElementById(id),
        countdownDate = new Date(limitDate).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitDate = countdownDate - now,
            days = Math.floor(limitDate/(1000*60*60*24)),
            hours = ("0" + Math.floor((limitDate % (1000*60*60*24))/(1000*60*60))).slice(-2),
            minutes = ("0" + Math.floor((limitDate % (1000*60*60))/(1000*60))).slice(-2),
            seconds = ("0" + Math.floor((limitDate % (1000*60))/(1000))).slice(-2);

        $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos</h3>`;

        if(limitDate<0){
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
}