let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value.trim();
 
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);

    document.getElementById('amigo').value = '';
    
    atualizarLista();
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    
    amigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        li.classList.add('list-item');
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para poder sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}`;
}