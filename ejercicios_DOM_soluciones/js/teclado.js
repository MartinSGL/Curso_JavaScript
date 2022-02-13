// const d = document;
// const w = window;
// let $eventoMover;

// export function moverPelota(pelota,recuadro){
//     d.addEventListener('click', e=>{
//         if(e.target.matches(recuadro)){
//             let mover = e=>{
//                 if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
//                     e.preventDefault();
//                     moveIt(e.code,pelota)
//                 }
//             } 
//             w.addEventListener('keydown',mover);
//         }
//     });
// }

// function  moveIt(key,pelota){
//     let top,right;
//     let $pelota = d.querySelector(pelota);
//     let $pelotaStyle = w.getComputedStyle($pelota);
//     if(key==='ArrowUp' || key==='ArrowDown'){    
//         top = parseInt($pelotaStyle.getPropertyValue('top').replace(/px/,''))
//         key==='ArrowUp'? top = top - 1 : top = top + 1
//         top = (top+'px').toString();
//         $pelota.style.top = top;
//     }else{
//         right = parseInt($pelotaStyle.getPropertyValue('right').replace(/px/,''))
//         key==='ArrowRight'? right = right - 1 : right = right + 1
//         right = (right+'px').toString();
//         $pelota.style.right = right;
//     }
// }

const d = document;
let x=0,y=0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball),
        $stage = d.querySelector(stage),
        limitsBall = $ball.getBoundingClientRect(),
        limitsStage = $stage.getBoundingClientRect();
    
    // console.log(limitsBall)
    // console.log(limitsStage)

    switch(e.keyCode){
        case 37: //left
            if(limitsBall.left> limitsStage.left){x--; e.preventDefault();}
            break;
        case 38: //up
            if(limitsBall.top > limitsStage.top){e.preventDefault();y--;}
            break;
        case 39: //right
            if(limitsBall.right< limitsStage.right){e.preventDefault();x++;}
            break;
        case 40: //down
            if(limitsBall.bottom < limitsStage.bottom){e.preventDefault();y++;}
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}

export function shortcuts(e){
    // console.log(e);
    // console.log(e.type);
    // console.log(e.keyCode);
    // console.log(e.ctrlKey);
    // console.log(e.altKey);
    // console.log(e.shiftKey);

    if(e.key==='a' && e.altKey){
        alert('haz mandado una alerta con el teclado')
    }
    if(e.key==='c' && e.altKey){
        confirm('haz mandado una confirmacion con el teclado')
    }
    if(e.key==='p' && e.altKey){
        prompt('haz mandado una aviso con el teclado')
    }
}
