export function Post(props){
    let {content,date,title} = props;
    let dateFormat = new Date(date).toDateString();
    return `
        <section class="post-page">
            <aside>
                <h2>${title.rendered}</h2>
                <time datetime="${date}">${dateFormat}</time>
            </aside>
            <hr>
            <article class="content">${content.rendered}</article>
        </section>
    `
}