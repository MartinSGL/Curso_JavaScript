export function ContactForm(){
    const d = document,
        $form = d.createElement("form"),
            $styles = d.getElementById('dynamic-styles');
    
    $form.classList.add('contact-form')

    $styles.innerHTML = `
        .contact-form{
            --form-ok-color:#4caf50;
            --form-error-color:#f44336;
            margin-left: auto;
            margin-right: auto;
            width: 80%;
        }
        
        .contact-form > *{
            padding: 0.5rem;
            margin: 1rem auto;
            display: block;
            width: 80%;
        }
        
        .contact-form textarea{
            resize: none;
        }
        
        .contact-form-legend,
        .contact-form-response{
            font-size: 1.5rem;
            font-weight: bold;
            text-align: center;
        }
        
        .contact-form input,
        .contact-form textarea{
            font-size: 1rem;
            font-family: sans-serif;
        }
        
        .contact-form input[type="submit"]{
            width: 50%;
            font-weight: bold;
            cursor: pointer;
        }
        
        .contact-form *::placeholder{
            color:#000;
        }
        
        .contact-form [required]:valid{
            border:thin solid var(--form-ok-color)
        }
        
        .contact-form [required]:invalid{
            border:thin solid var(--form-error-color)
        }
        
        .contact-form-error{
            margin-top: -1rem;
            font-size: 80%;
            background-color: var(--form-error-color);
            color: #fff;
            transition: all 800ms ease;
        }
        
        .contact-form-error.is-active{
            display:  block;
            animation: show-message 1s 1 normal 0s ease-out both;
        }
        
        .none{
            display: none;
        }
        
        @keyframes show-message {
            0%{
                visibility: hidden;
                opacity: 0;
            }
            100%{
                visibility: visible;
                opacity: 1;
            }
        }
    `

    $form.innerHTML = `
        <legend>Envianos tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribre tu nombre" 
            title="El nombre sólo acepta letras y espacios en blanco" required
            pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$">
        <input type="email" name="email" placeholder="Escribe tu correo" required
            title="email incorrecto"
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$">
        <input type="text" name="subject" placeholder="Escribe un asunto" required
            title="El asunto es requerido">
        <textarea name="coments" id="" cols="50" rows="5" placeholder="Escribe tus comentarios" required 
            data-pattern="^.{1,255}$"  title="Tu comentario no debe exceder los 255 caracteres"></textarea>
        <input type="submit">
        <div class="contact-form-loader none">
            <img src="assets/loader.gif" alt="cargando">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
        `
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
    
    setTimeout(()=>  contactFormValidation(),100);
   

    return $form;
}