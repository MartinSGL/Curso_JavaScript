const d = document;
export default function sorteo(btn,list){
    const $btn = d.getElementById(btn),
        $elementos = d.querySelectorAll(list);

    const getWinner = (selector) =>{
        const $players = d.querySelectorAll(list),
            random = Math.floor(Math.random()* $players.length),
            winner = $players[random];

            return `El ganador es: ${winner.textContent}`;
    }

    d.addEventListener('click', e=>{
        if(e.target.matches(btn)){
            // const numeroSuerte = Math.round(Math.floor()*$elementos.length)
            // alert(`el numero lenguaje ganador es: ${$elementos[numeroSuerte].textContent}`) 
            // console.log(`el numero lenguaje ganador es: ${$elementos[numeroSuerte].textContent}`) 

            let result = getWinner($elementos);
            alert(result)
            console.log(result)
;        }
    })

    
}