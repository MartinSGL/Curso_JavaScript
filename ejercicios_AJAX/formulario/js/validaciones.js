const d = document;
function contactFormValidation(){
    const $form = d.querySelector('.contact-form'),
        $inputs = d.querySelectorAll('.contact-form [required]');
    
    $inputs.forEach(input=>{
        const $span = d.createElement('span');
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add('contact-form-error','none')
        input.insertAdjacentElement('afterend',$span)
    })

    d.addEventListener('keyup',e=>{
        if(e.target.matches('.contact-form [required]')){
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern; //selecciona los data-attributes del DOM
            
            if(pattern && $input.value !==""){
                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                    ?   d.getElementById($input.name).classList.add('is-active')
                    :   d.getElementById($input.name).classList.remove('is-active')
            }

            if(!pattern){
                return $input.value ===''
                    ?   d.getElementById($input.name).classList.add('is-active')
                    :   d.getElementById($input.name).classList.remove('is-active') 
            }
        }

        
    })

    d.addEventListener('submit', e=>{
        e.preventDefault();
        const $loader = d.querySelector('.contact-form-loader'),
            $response = d.querySelector('.contact-form-response');

        $loader.classList.remove('none');
        let form = new FormData(e.target)
        console.log(form.get('name'))

        fetch("https://formsubmit.co/ajax/martingaytan.lugo@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
            },
            // body: JSON.stringify({
            //     name: $form.name.value,
            //     subject: $form.subject.value,
            //     email: $form.email.value,
            //     message: $form.coments.value
            // })
            body: new FormData(e.target)
           
        })
        .then(response => response.ok ? response.json():Promise.reject(response) )
        .then(
            data => {
                console.log(data)
                $loader.classList.add('none');
                $response.classList.remove('none');
                $response.innerHTML = `<p>${data.message}</p>`
                e.target.reset()
            })
        .catch(error => console.log(error));

    })
}

