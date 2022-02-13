// export default function dayNingthMode(btn){
//     const d = document, $btn = d.querySelector(btn), $body = d.querySelector('body');
  
//     d.addEventListener('click', e=>{
//         if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
//             if($btn.firstElementChild.matches('.fa-moon')){
//                 $body.style.backgroundColor = '#000';
//                 $body.style.color = getComputedStyle(d.documentElement).getPropertyValue('--main-color');
//             }else{
//                 $body.style.backgroundColor = '#FFF';
//                 $body.style.color = getComputedStyle(d.documentElement).getPropertyValue('--second-color');;
//             }
//             $btn.firstElementChild.classList.toggle('fa-moon')
//             $btn.firstElementChild.classList.toggle('fa-sun');
//         }
//     })
    
// }

const d = document;
const myStorage= window.localStorage;

export default function darkTheme(btn,classDark){
    const $themeBtn = d.querySelector(btn), $selectors = d.querySelectorAll('[data-dark]');
    let moon = '🌙',sun='☀️';

    const ligthMode = ()=>{
         $selectors.forEach(el =>{
            el.classList.remove(classDark)
            $themeBtn.textContent = moon;
            myStorage.setItem('theme','ligth')
        });
    }
    const darkMode = ()=>{
       $selectors.forEach(el =>{
            el.classList.add(classDark)
            $themeBtn.textContent = sun;
            myStorage.setItem('theme','dark')
        });
    }

    d.addEventListener('click', e=>{
        if(e.target.matches(btn)){
            if($themeBtn.textContent === moon){
                darkMode()
            }else{
                ligthMode()
            }
        }
    })

    d.addEventListener('DOMContentLoaded', e=>{
        if(myStorage.getItem('theme')===null) myStorage.setItem('theme','light')
        if(myStorage.getItem('theme')==='light') ligthMode();
        if(myStorage.getItem('theme')==='dark') darkMode();

    })

}