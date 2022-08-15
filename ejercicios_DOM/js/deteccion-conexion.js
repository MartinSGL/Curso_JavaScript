// const d = document,
//     w = window,
//     n = navigator;

// export default function conexionDetection(id){
//     let $mensaje = d.getElementById(id);
//     let conexion = n.onLine;

//     setInterval(() => {
//         let prueba = n.onLine;
//         if(conexion !== prueba){ 
//             if(!conexion){
//                 $mensaje.innerHTML = `<h1>Conexion Restablecida</h1>`;
//                 setTimeout(() => {
//                     $mensaje.innerHTML = '';
//                 }, 1000);
//             }else{
//                 $mensaje.innerHTML = `<h1>Conexion Perdida</h1>`;
//                 setTimeout(() => {
//                     $mensaje.innerHTML = '';
//                 }, 1000);
//             }
//             conexion = prueba;
//         }
        
//     }, 1000);
    
// }   

const d = document,
    w =  window,
    n = navigator;

export default function networkStatus(){
    const isOnline = () =>{
        const $div = d.createElement('div');
        if(n.onLine){
            $div.textContent = 'Conexión Reestablecida';
            $div.classList.add('online');
            $div.classList.remove('offline');
        }else{
            $div.textContent = 'Conexión Perdida';
            $div.classList.remove('online');
            $div.classList.add('offline');
        }
        d.body.insertAdjacentElement('afterbegin',$div)
        setTimeout(() => d.body.removeChild($div), 2000);
    }
    w.addEventListener("online",isOnline)
    w.addEventListener("offline",isOnline)
}

// getUserMedia.MediaDevices