export function PostCard(props){
    let {date,id,slug,title, _embedded} = props;
    let dateFormat = new Date(date).toDateString(),
        urlPoster = _embedded["wp:featuredmedia"] 
            ? _embedded["wp:featuredmedia"][0].source_url 
            : "app/assets/favicon.ico"

    document.addEventListener('click', e=>{
        if(!e.target.matches('.post-card a')) return false;
        localStorage.setItem('wpPostId', e.target.dataset.id);
    })
            
    return `
        <article class="post-card">
        <img src="${urlPoster}" atl='${title.rendered}'/>
        <h3>${title.rendered}</h3>
        <p>
            <time datetime="${date}">${dateFormat}</time>
            <a data-id="${id}" href="#/${slug}">Ver Publicacion</a>
        </p>
        </article>
    `;
}