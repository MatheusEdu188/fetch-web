const listaAnimes = document.getElementById("listaAnimes");

async function receberDados() {
    try {
        const result = await fetch("https://api.jikan.moe/v4/top/anime");

        if(!result.ok){
            throw new Error("Erro no carregamento")
        }

        const data = await result.json();

        return data;
        
    } catch (error) {
        console.error(error);
    }
    
}



async function renderAnimes(){
    const resposta = await receberDados();
    const animes = resposta.data;


    animes.forEach(anime => {
        const li = document.createElement("div");
        li.classList.add("liItem")  
        li.innerHTML = `
            <span class="tituloAnime">${anime.title}</span>
            <span class="descAnime">${anime.synopsis}</span>
        `
        
        listaAnimes.appendChild(li);
    });
}


renderAnimes()