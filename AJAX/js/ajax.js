(()=>{
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener('readystatechange', e=>{
        if(xhr.readyState !==4) return
        if(xhr.status >=200 && xhr.status < 300){
            // console.log('éxito')
            // console.log(xhr.responseText.parse)
            let json = JSON.parse(xhr.responseText);
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            });
            $xhr.appendChild($fragment);
        }else{
            console.log('error')
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }

        // console.log('este mensaje cargará de cualquier forma')
        
    })

    // xhr.open('GET','https://jsonplaceholder.typicode.com/users')
    xhr.open('GET','js/users.json')
    xhr.send();
})();

(()=>{
    const $fetch = document.getElementById('fetch'),
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment();

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            // console.log(res)
            return res.ok ? res.json() : Promise.reject(res);
        })
        .then(json =>{
            // console.log(json)
            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            });
            $fetch.appendChild($fragment);
        })
        .catch(err =>{
            let message = err.statusText || 'Ocurrio un error';
            $fetch.innerHTML = `Error ${err.status}: ${message}`
        })
        .finally(()=>{
            // console.log('esto se ejecuta independientemente del resultado')
        })
    
})();

(()=>{
    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users'),
                json = await res.json();

            // if(!res.ok) throw new Error('ocurrio un error al soilicitar los datos')
            if(!res.ok) throw {
                status: res.status,
                statusText: res.statusText
            }
            
            // console.log(res,'hola');

            json.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            });
           $fetchAsync.appendChild($fragment);
        } catch (err) {
            let message = err.statusText || 'Ocurrio un error';
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        }finally{
            // console.log('esto se ejecuta independientemente del resultado')
        }   
    }

    getData();

    
})();

(()=>{
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            res.data.forEach(el => {
                const $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li)
            });
            $axios.appendChild($fragment);
        })
        .catch(err =>{
            let message = err.response.statusText || 'Ocurrio un error';
            $axios.innerHTML = `Error ${err.response.status}: ${message}`
        })   
        .finally(()=>{
            // console.log('esto se ejecutará independientem del resultado de Axios')
        });

    

    
})();

(()=>{
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();
        
    async function getData(){
        try{
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await res.data;
                
            json.forEach(el=>{
                let $li = document.createElement('li');
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            })
            console.log($fragment)
            $axiosAsync.appendChild($fragment);

        }catch(err){
            let message = err.response.statusText || 'Ocurrio un error';
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`

        }finally{
            console.log('Esto se ejecuta independientemente del try-catch')
        }
    }

    getData();
    
})();

