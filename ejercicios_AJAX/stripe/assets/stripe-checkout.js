import STRIPE_KEYS from './stripe-keys.js'

const d = document,
    $tamales = d.getElementById('tamales'),
    $template = d.getElementById('tamal-template').content,
    $fragment = d.createDocumentFragment(),
    fetchOptions = {
        headers:{
            Authorization:`bearer ${STRIPE_KEYS.secret}`,
        }
    };

    let products,prices;

    const moneyFormat = num => `$${num.slice(0,-2)}.${num.slice(-2)}`

    Promise.all([
        fetch('https://api.stripe.com/v1/products',fetchOptions),
        fetch('https://api.stripe.com/v1/prices',fetchOptions),
    ])
    .then(responses=> Promise.all(responses.map(res => res.json())))
    .then(json=>{
        products = json[0].data;
        prices = json[1].data;
        console.log(products,prices)
        prices.forEach(el =>{
            let productData = products.filter(product => product.id === el.product);
            
            $template.querySelector('.tamal').setAttribute('data-price',el.id);
            $template.querySelector('img').src = productData[0].images[0];
            $template.querySelector('img').alt = productData[0].name;
            $template.querySelector('figcaption').innerHTML = `${productData[0].name}
            <br>
            ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
            <br>
            <p class="description">
            ${productData[0].description}
            </p>
            `

            let $clone = d.importNode($template,true);
            $fragment.appendChild($clone)
        })

        $tamales.appendChild($fragment)

    })
    .catch(err =>{
        let message = err.statusText || 'Ocurrio un error al conectarse con la API de Stripe';
        $tamales.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        console.log(err)
    })

    d.addEventListener('click',e=>{
        if(e.target.matches('.tamal *')){
            let priceId = e.target.parentElement.getAttribute('data-price');
            
            Stripe(STRIPE_KEYS.public)
            .redirectToCheckout({
                lineItems:[{price:priceId, quantity:1}],
                mode:'subscription',
                successUrl:'http://127.0.0.1:5500/ejercicios_AJAX/stripe/assets/stripe-success.html',
                cancelUrl:'http://127.0.0.1:5500/ejercicios_AJAX/stripe/assets/stripe-error.html',
            })
            .then(res => {
                if(res.error){
                    $tamales.insertAdjacentHTML('afterend',res.error.message)
                }
            })
            
        }
    })
