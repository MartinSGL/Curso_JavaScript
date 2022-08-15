const d =document, w = window, n = navigator;
export default function geoInformation(div){
    const $geoinfo = d.getElementById(div);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
      
    const success=(pos)=> {
        let crd = pos.coords;

        $geoinfo.innerHTML = 
        `Tu posicion actual es<br>
        Latitud: <b>${crd.latitude}</b><br>
        Longitud: <b>${crd.longitude}</b><br>
        Presición: <b>${crd.accuracy}</b><br>
        <a target="_blank" href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},15z"
        rel="noopener">
        Abrir link</a>     
        `
    }
    
    const error = (err)=> {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success,error,options)
}