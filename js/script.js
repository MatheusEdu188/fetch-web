const ul = document.querySelector("ul");


async function buscarDados() {
    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!result.ok){
            throw new Error("erro na requisição")
        }
        const dados = await result.json()



        return dados;
        
    } catch (error) {
        console.error("Erro", error);

    }
    
}


async function renderizar() {
    const usuarios = await buscarDados();

    try {
        ul.innerHTML = "";
        usuarios.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = element.name;

            ul.appendChild(li)
            
        });
    } catch (error) {
        ul.innerHTML = `Erro ao renderizar ${error}`
        
    }
}


renderizar()