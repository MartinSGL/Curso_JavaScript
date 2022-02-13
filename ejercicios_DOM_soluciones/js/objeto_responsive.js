// const d = document, w = window;
// export default function responsiveDocument(video,map){
//     const $video = d.querySelector(video), $map = d.querySelector(map);
//     const $frameVideo = `<iframe width="560" height="315" src="https://www.youtube.com/embed/16geDhp5Xmg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//     const $frameMap = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15096.368142174046!2d-103.97241455!3d18.92731995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smx!4v1641495605617!5m2!1sen!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
//     const $linkVideo = `<a target="_blank" href="https://www.youtube.com/watch?v=16geDhp5Xmg&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=90">ver video</a>`;
//     const $linkMap = `<a target="_blank" href="https://www.google.com/maps/@18.92732,-103.9724145,15z">ver mapa</a>`;
//     minimunSize($video,$map,$frameVideo,$frameMap,$linkVideo,$linkMap);
    
//     w.addEventListener('resize', e=>{
//         minimunSize($video,$map,$frameVideo,$frameMap,$linkVideo,$linkMap);
//     })
    
// }

// function minimunSize($video,$map,$frameVideo,$frameMap,$linkVideo,$linkMap){
//     let size = window.matchMedia('(max-width: 680px)').matches;
//     if(!size){
//         $video.innerHTML = $frameVideo;
//         $map.innerHTML = $frameMap;
//     }else{
//         $video.innerHTML = $linkVideo;
//         $map.innerHTML = $linkMap;
//     }
// }
const d = document, w = window;
export default function responsiveMedia(id,mq,mobileContent,desktopContent){
    let breakpoint = w.matchMedia(mq);
    const responsive = e =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
    }
    breakpoint.addListener(responsive);
    responsive(breakpoint);
}