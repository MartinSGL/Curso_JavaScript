import hamburguerMenu from "./menu-hambuerguesa.js";
// import clock from "./reloj.js";
import { digitalClock,alarm } from "./reloj.js";
// import { moverPelota } from "./teclado.js";
import { moveBall,shortcuts } from "./teclado.js";
import countdown from "./cuenta-regresiva.js";
// import goToStart from "./inicio.js";
import scrollTopButton from "./inicio.js";
import darkTheme from "./tema-oscuro.js";
import responsiveDocument from "./objeto_responsive.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion-conexion.js";
import whatchCameraWeb from "./camara-web.js";
import geoInformation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import sorteo from "./sorteo.js";
import slider from "./carussel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidation from "./validaciones_formulario.js";
import speechReader from "./narrador.js";
// import conexionDetection from "./deteccion-conexion.js";



const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    hamburguerMenu(".panel-btn",".panel",".menu a")
    // clock("start-clock")
    digitalClock('#reloj','#activar-reloj','#desactivar-reloj')
    alarm('assets/alarma.mp3','#activar-alarma','#desactivar-alarma')
    // moverPelota('#pelota','.area_pelota');
    countdown('countdown','jan 05,2022 14:07','Feliz cumpleaños Chavinshon 😀')
    // goToStart('.inicio-btn')
    scrollTopButton('.inicio-btn')
    responsiveMedia(
        'youtube',
        '(min-width:1024px)',
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        'gmaps',
        '(min-width:1024px)',
        `<a target="_blank" href="https://www.google.com/maps/@18.92732,-103.9724145,15z">ver mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15096.368142174046!2d-103.97241455!3d18.92731995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1641495605617!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    
    responsiveTester('responsive-tester')
    userDeviceInfo('user-device')
    // conexionDetection('conexion-info')
    whatchCameraWeb('videoElement')
    geoInformation('geo-info')
    searchFilters('.card-filter','.card');
    sorteo('#sortear-btn','.sorteo li')
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidation();
    
    
})

d.addEventListener('keydown', e=> {
    shortcuts(e);
    moveBall(e,'.ball','.stage')
})

darkTheme('.dark-theme-btn','dark-mode')
networkStatus()
speechReader();