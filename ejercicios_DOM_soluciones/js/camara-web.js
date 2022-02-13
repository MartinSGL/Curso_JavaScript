const d = document, w = window, n = navigator;
export default function whatchCameraWeb(div){
    const $camera = d.getElementById(div);

    // if (n.mediaDevices.getUserMedia) {
    //     n.mediaDevices.getUserMedia({ video: true })
    //       .then(function (stream) {
    //         $camera.srcObject = stream;
    //         // $camera.play();
    //       })
    //       .catch(function (err0r) {
    //         console.log("Something went wrong!");
    //       });
    //   }

    function stop(e) {
        let stream = $camera.srcObject;
        let tracks = stream.getTracks();
    
        for (var i = 0; i < tracks.length; i++) {
            console.log(i)
            let track = tracks[i];
            track.stop();
        }
    
        $camera.srcObject = null;
    }

    d.addEventListener('keydown', e=>{
        // console.log(e.key)
        if(e.key==="Escape"){
            stop()
        }
    })
    
}