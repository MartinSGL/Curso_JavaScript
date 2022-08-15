export function Loader(){

    const $loader = document.createElement('div');
    $loader.classList.add('lds-ring');
    $loader.innerHTML = ` <div></div><div></div><div></div><div>`;
    return $loader;
}