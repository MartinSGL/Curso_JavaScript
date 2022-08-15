// console.log('--------------------Elementos del documento----------')
// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.doctype)
// console.log(document.characterSet)
// console.log(document.doctype)
// console.log(document.title)
// console.log(document.links)
// console.log(document.images)
// console.log(document.forms)
// console.log(document.styleSheets)
// console.log(document.scripts)
// setTimeout( ()=>{
//     console.log(document.getSelection().toString())
// },3000)

// document.write('<h2>Hola mundo desde el DOM</h2>')

console.log('--------------------------Video 63-----------------------')

// console.log(document.getElementsByTagName('li'))
// console.log(document.getElementsByClassName('card'))
// console.log(document.getElementsByName('nombre'))
// console.log(document.getElementById('menu'))//usado actualmente
// console.log(document.querySelector('a'))// usado actualmente
// console.log(document.querySelectorAll('a')) //usado actualmente
// console.log(document.querySelectorAll('a').length) 
// document.querySelectorAll('a').forEach(e =>{
//     console.log(e)
// })
// console.log(document.querySelector('.card'))
// console.log(document.querySelectorAll('.card')[2])
// console.log(document.querySelectorAll('#menu li'))

console.log('--------------------------Video 64----attributes y data-attributes-')
// console.log(document.documentElement.lang)
// console.log(document.documentElement.getAttribute('lang'))

// console.log(document.querySelector('.link-dom').href)
// console.log(document.querySelector('.link-dom').getAttribute("href"))

// document.documentElement.lang = 'en'
// console.log(document.documentElement.lang)

// document.documentElement.setAttribute('lang','es-MX')
// console.log(document.documentElement.lang)

// const $linkDOM = document.querySelector('.link-dom')

// $linkDOM.setAttribute('target','_blank')
// $linkDOM.setAttribute('rel','noopener')
// $linkDOM.setAttribute('href','https://vetealariata.com')
// console.log($linkDOM.hasAttribute('rel'))
// $linkDOM.removeAttribute('rel')
// console.log($linkDOM.hasAttribute('rel'))

// //Data-Attributes
// console.log($linkDOM.getAttribute('data-description'))
// console.log($linkDOM.dataset)
// console.log($linkDOM.dataset.id)

// $linkDOM.setAttribute('data-description','Modelo de Objeto del Documento')
// console.log($linkDOM.getAttribute('data-description'))
// $linkDOM.dataset.description = "Suscribete a mi canal y comparte"
// $linkDOM.dataset.description = "Suscribete a mi canal y comparte"

console.log('-------------video 65 estilos y variables CSS----------------')

// const $linkDOM = document.querySelector('.link-dom')

// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute('style'));
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

// $linkDOM.style.setProperty("text-decoration","none")
// $linkDOM.style.setProperty("display","block")

// $linkDOM.style.width="50%";
// $linkDOM.style.textAlign="center";
// $linkDOM.style.marginLeft="auto";
// $linkDOM.style.marginRight="auto";
// $linkDOM.style.padding="1rem";
// $linkDOM.style.borderRadius="0.5rem";

// console.log($linkDOM.style);

// //vaibles CSS - Custom Properties CSS
// const $html = document.documentElement, $body = document.body;
// let varDarkColor = getComputedStyle($html).getPropertyValue('--dark-color'),
//     varYellowColor = getComputedStyle($html).getPropertyValue('--yellow-color');

// console.log(varDarkColor)
// console.log(varYellowColor)

// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;

// $html.style.setProperty("--dark-color",'#000')
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
// $body.style.backgroundColor = varDarkColor

console.log('-------------video 66 clases CSS----------------')
// const $card = document.querySelector(".card")
// console.log($card)
// console.log($card.className)
// console.log($card.classList)
// console.log($card.classList.contains('rotate-45'))
// $card.classList.add('rotate-45')
// $card.classList.remove('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.toggle('rotate-45')
// $card.classList.replace('rotate-45','rotate-135')
// $card.classList.add('opacity-80','sepia')
// $card.classList.remove('opacity-80','sepia')
// $card.classList.toggle('opacity-80','sepia')
// console.log($card.classList)
// $card.classList.toggle('rotate-135')
// console.log($card.classList)

console.log('-------------video 67 clases CSS----------------')


// const $whatisDOM = document.getElementById('que-es')
// let text = ` 
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
//     API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `

// // $whatisDOM.innerText = text;
// $whatisDOM.textContent = text;
// $whatisDOM.innerHTML = text;
// $whatisDOM.outerHTML = text; // remplaza el elemento por el contenido

console.log('-------------video 68 DOM traversing----------------')

// const $cards = document.querySelector('.cards')
// console.log($cards)
// console.log($cards.children)
// console.log($cards.childNodes) //hijos con todo y saltos de linea
// console.log($cards.children[2])
// console.log($cards.parentElement)
// console.log($cards.firstChild)
// console.log($cards.firstElementChild)
// console.log($cards.previousSibling)
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)
// console.log($cards.closest('body'))
// console.log($cards.children[3].closest('section'))

console.log('-------------video 69 Creando Elementos y Fragmentos----------------')

// const $figure = document.createElement('figure'),
//     $image = document.createElement('img'),
//     $figcaption = document.createElement('figcaption'),
//     $figcaptionText = document.createTextNode('Animals'),
//     $cards = document.querySelector('.cards'),
//     $figure2 = document.createElement('figure');

//     $image.setAttribute('src',"https://placeimg.com/200/200/animals");
//     $image.setAttribute('alt',"Animals");
//     $figure.classList.add('card');

// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($image);    
// $figure.appendChild($figcaption); 
// $cards.appendChild($figure);

// $figure2.innerHTML = `
//     <img src="https://placeimg.com/200/200/people" alt="People">
//     <figcaption>People</figcaption>
// `;

// $figure2.classList.add('card');
// $cards.appendChild($figure2);

// const estaciones = ['Primavera','Verano','Otoño','Invierno'],
//     $ul = document.createElement('ul');

// document.write('<h3>Estaciones del año</h3>')
// document.body.appendChild($ul);

// estaciones.forEach(el => {
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $ul.appendChild($li);
// })

// const continentes = ['Africa','América','Asia','Europa','Oceania'],
//     $ul2 =  document.createElement('ul');

// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
// $ul2.innerHTML = "";
// continentes.forEach(el => $ul2.innerHTML += `<li>${el}</li>`)

// const meses = [
//     'Enero',
//     'Febrero',
//     'Marzo',
//     'Abril',
//     'Mayo',
//     'Junio',
//     'Julio',
//     'Agosto',
//     'Septiembre',
//     'Octubre',
//     'Noviembre',
//     'Diciembre'
// ],
//     $ul3 = document.createElement('ul'),
//     $fragment = document.createDocumentFragment();

// meses.forEach(el => {
//     const $li = document.createElement('li');
//     $li.textContent = el;
//     $fragment.appendChild($li);
// })

// document.write("<h3>Meses del año</h3>")
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);
//utilizar los fragmentos porque consumen menos recursos para agregar contenido al DOM

console.log('-------------video 70 Templates HTML----------------')

// const $card = document.querySelector('.cards'),
//     $template = document.getElementById("template-card").content,
//     $fragment = document.createDocumentFragment(),
//     cardContent = [
//         {
//             title:'Tecnologia',
//             img:'https://placeimg.com/200/200/tech',
//         },
//         {
//             title:'Animales',
//             img:'https://placeimg.com/200/200/animals',
//         },
//         {
//             title:'Arquitectura',
//             img:'https://placeimg.com/200/200/arch',
//         },
//         {
//             title:'Gente',
//             img:'https://placeimg.com/200/200/people',
//         },
//         {
//             title:'Naturaleza',
//             img:'https://placeimg.com/200/200/nature',
//         },
//     ];

//     cardContent.forEach(el => {
//         $template.querySelector('img').setAttribute('src',el.img);
//         $template.querySelector('img').setAttribute('alt',el.title);
//         $template.querySelector('figcaption').textContent = el.title;

//         let $clone = document.importNode($template,true); //true para copiar todo el elemento
//         $fragment.appendChild($clone);
//     })

//     $card.appendChild($fragment);

console.clear()
console.log('-------------video 71 modificando elementos----------------')

// const $cards = document.querySelector('.cards'),
//     $newCard = document.createElement('figure'),
//     $cloneCars = $cards.cloneNode(); //mandar true dentro para clonar todo el elemento

// $newCard.innerHTML = `
// <img src="https://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>
// `;

// $newCard.classList.add('card');

// // $cards.replaceChild($newCard, $cards.children[2])
// // $cards.insertBefore($newCard,$cards.firstElementChild)
// // $cards.removeChild($cards.lastElementChild);
// document.body.appendChild($cloneCars);

console.clear()
console.log('-------------video 72 Modificando elementos ----------------')

/* 
    insertAdjacent...
        .insertAdjacnetElement(position,el)
        .insertAdjacnetHTML(position,html)
        .insertAdjacnetText(position,text)
    
    Posiciones:
        beforebegin(hermano anterior)
        afterbegin(primer hijo)
        beforeend(ultimo hijo)
        afterend(hermano siguiente)
*/

// const $cards = document.querySelector('.cards'),
//     $newCard = document.createElement('figure');

// // $newCard.innerHTML = `
// // <img src="https://placeimg.com/200/200/any" alt="Any">
// // <figcaption>Any</figcaption>
// // `;

// let $contentCard =`
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
//     `;

// $newCard.classList.add('card');
// $newCard.insertAdjacentHTML("afterbegin",$contentCard);
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin','Any')
// $cards.insertAdjacentElement('afterbegin',$newCard);

// $cards.before($newCard);
// $cards.after($newCard);
// $cards.prepend($newCard);
// $cards.append($newCard);

console.clear()
console.log('-------------video 73 Manejadores de eventos ----------------')

// function holaMundo(e){
//     alert('hola mundo')
//     console.log(e);
// }

// const $eventoSemantico = document.getElementById('eventoSemantico'),
//     $eventoMultiple = document.getElementById('evento-multiple');
// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function(e){
//     alert('Hola mundo manejador de eventos semanticos')
//     console.log(e);
//     console.log(event);
// }

// $eventoMultiple.addEventListener("click",holaMundo);
// $eventoMultiple.addEventListener("click",(e)=>{
//     alert('hola mundo manejador de eventos multipls')
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });

console.clear()
console.log('-------------video 74 Eventos con parámetros y remover eventos ----------------')

// const $eventoMultiple = document.getElementById('evento-multiple'),
//     $eventoRemover =document.getElementById('evento-remover');

// function saludar(nombre="desconocid@"){
//     alert(`hola ${nombre} - ${event}`)
// }

// $eventoMultiple.addEventListener("click",() => {
//     saludar('chavin')}
// );
// $eventoMultiple.addEventListener("click",(e)=>{
//     alert('hola mundo manejador de eventos multipls')
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });

// const removerEvento = (e)=>{
//     alert(`Removiendo el evento ${e.type}`)
//     $eventoRemover.removeEventListener("dblclick",removerEvento);
// }

// $eventoRemover.addEventListener('dblclick',removerEvento);

console.clear()
console.log('-------------video 75 flujo de los eventos ----------------')

const $divsEventos = document.querySelectorAll(".eventos-flujo div")

console.log($divsEventos)

function flujoEventos(e){
    console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.cl}`)
}

$divsEventos.forEach(div=>{
    // fase de burbuja
    // div.addEventListener('click',flujoEventos);//burbuja
    // div.addEventListener('click',flujoEventos,false);
    // fase de captura
    div.addEventListener('click',flujoEventos,true);
    // div.addEventListener('click',flujoEventos,{
    //     capture: false,
    //     once:true
    // });
})
console.clear()
console.log('-------------video 76 stopPropagation & preventDefault ----------------')

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector('.eventos-flujo a');


// console.log($divsEventos)

// function flujoEventos(e){
//     console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.cl}`)
//     e.stopPropagation();
// }

// $divsEventos.forEach(div=>{
//     // fase de burbuja
//     div.addEventListener('click',flujoEventos);//burbuja
//     // div.addEventListener('click',flujoEventos,false);
//     // fase de captura
//     // div.addEventListener('click',flujoEventos,true);
// })

// $linkEventos.addEventListener('click', e=> {
//     alert('hola soy tu amigo vergas')
//     e.preventDefault();
//     e.stopPropagation();
// })

console.clear()
// console.log('-------------video 77 delegacion de eventos ----------------')

// const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//     $linkEventos = document.querySelector('.eventos-flujo a');

// function flujoEventos(e){
//     console.log(`hola te saluda ${this.className}, el click lo originó ${e.target.cl}`)
// }

// document.addEventListener('click',(e)=>{
//     console.log('click en ', e.target);

//     if(e.target.matches('.eventos-flujo div')){
//         flujoEventos(e);
//     }

//     if(e.target.matches(".eventos-flujo a")){
//         alert('hola soy tu amigo vergas')
//         e.preventDefault()
//     }
// })

//se mejora el rendimiento de memoria y recursos y ademas el codigo se reduce

