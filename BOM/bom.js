// window.addEventListener('resize',(e)=>{
//     console.clear()
//     console.log('******Evento Resize******')
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
 
// })

// window.addEventListener('scroll',e=>{
//     console.clear()
//     console.log('******Evento Resize******')
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e)
// })

// window.addEventListener('load',e=>{
   
//     console.log('******Evento Load******')
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })

// document.addEventListener('DOMContentLoaded',e =>{ //funcion con mayor eficiencia
   
//     console.log('******Evento DOMContentLoadedad******')
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e)
// })


console.log('---------------Video 78 Métodos---------------------------')

// const $btnAbrir = document.getElementById('abrir-ventana'),
//     $btnCerrar = document.getElementById('cerrar-ventana'),
//     $btnImprimir = document.getElementById('imprimir-ventana');

// let ventana;

// $btnAbrir.addEventListener('click', e=>{
//     ventana = window.open('https://jonmircha.com')
// })
// $btnCerrar.addEventListener('click', e=>{
//     ventana.close();
// })
// $btnImprimir.addEventListener('click', e=>{
//     window.print();
// })
console.clear()
console.log('---------------Video 79 Objetos: URL, Historial y Navegador---------------------------')


// console.log('------------------ Objeto URL (location)--------------')
// console.log(location)
// console.log(location.origin)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.href) //URL completa
// console.log(location.hash) //detectar lo que va despues de # hash
// console.log(location.search) //variables despues de ?
// console.log(location.pathname)//nombre del archivo

// //location.reaload()

// console.clear()
// console.log('------------------ Objeto Historial (location)--------------')
// console.log(history.length)
// console.log(history.back()) //regresa el numero de paginas que tenga almacenada el navegador
// console.log(history.forward()) //se mueve hacia adelante al numero de páginas que tenga almacenadas el navegador
// console.log(history.go())// hacia adelane o atras dependienteo del numero positivo o negativo

// console.clear()
// console.log('-------------Objeto navigator----------------')
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);