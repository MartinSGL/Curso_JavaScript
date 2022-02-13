// export default function goToStart(btnInicio){
//     const d = document;
//     const $button = d.querySelector(btnInicio);
//     d.addEventListener('scroll',e =>{
//         if(scrollY >200){
//             $button.classList.remove('hidden');
//         }else{
//             $button.classList.add('hidden');
//         }
//     })

//     d.addEventListener('click', e=>{
//         if(e.target.matches(btnInicio) || e.target.matches(`${btnInicio} *`)){
//             if(scrollY >200){
//                 window.location.href = ('#seccion1');
//             }
//         }
//     })

// } 

const d=document,w=window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener('scroll', e=>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop>600){
            $scrollBtn.classList.remove('hidden')
        }else{
            $scrollBtn.classList.add('hidden')
        }
    })

    d.addEventListener('click', e=>{
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: 'smooth',
                top:0
            })
        }
    })
}