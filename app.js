
let amigos = []; 

 function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nombreAmigo = inputAmigo.value.trim(); 
    
  if (nombreAmigo == '') {
    alert('Ingrese un nombre'); 
    return;
  }  
    
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} ya está en la lista`);
    return;
  }
  
  if (nombreAmigo.length < 3 || /\d/.test(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} no es válido`);
    return;
  }
  
  amigos.push(nombreAmigo);
  
  inputAmigo.value = '';
  
    actualizarListaAmigos();
 }
 
function actualizarListaAmigos() {
    const ListaAmigos = document.getElementById('listaAmigos');
    ListaAmigos.innerHTML = '';
    
    for(let i = 0; i < amigos.length; i++) {
        const Li = document.createElement('Li');
        Li.textContent = amigos [i];
        ListaAmigos.appendChild(Li);

    }
}

function sortearAmigo(){
    
    if (amigos.length == 0) {
        alert('Ingrese uno o más amigos a la lista');
        return;
    }
    
    const random = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[random];
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es:<Li>${amigoSorteado}</Li>`;
}
