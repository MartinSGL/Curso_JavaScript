const d = document,
    w = window;
export default function smartVideo(){
    const $videos = d.querySelectorAll('video[data-smart-video]');

    d.addEventListener("visibilitychange", function() {
        if (d.visibilityState === 'visible') {
            return true;
        } else {
            return false;
        }
    });
    
    
    const cb = (entries) =>{
        entries.forEach(entry=>{
            const video = entry.target;
            let area = false;
            if(entry.isIntersecting){
                video.play()
                area=true;
            }else{
                video.pause()
                area=false;
            }

            w.addEventListener("visibilitychange", function() {
                if (d.visibilityState === 'visible' && area===true) {
                    video.play()
                } else {
                    video.pause()
                }
            });

        })
    }

    const observer = new IntersectionObserver(cb,{
        // root
        // rootMargin: "-300px" // reducción del margen del observador
        threshold: [0.5,0.75]
    })

    $videos.forEach(el=>observer.observe(el));
}