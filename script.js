const btnAdicionar = document.getElementById('adicionar')
const valorTarefa = document.getElementById('text-input') 
let array = []

btnAdicionar.addEventListener('click', (evento)=>{
    evento.preventDefault();
  

    if(valorTarefa.value == ''){
        alert('Informe uma tarefa valida')
    }
    else{
        array.push(valorTarefa.value)
        console.log(array)
        localStorage.setItem('adicionar', JSON.stringify(array))
        let salvarTarefa = JSON.parse(localStorage.getItem('adicionar'))
        console.log(salvarTarefa)
        listaTarefas.innerHTML = '';
        salvarTarefa.forEach(evento =>{
            renderizarTarefas(evento)
            console.log(evento)
        })
    }

   

    valorTarefa.value = ''

   
})
const listaTarefas = document.querySelector('ul')

listaTarefas.addEventListener('click', (elemento) =>{

    const itemClicado = elemento.target

    if(itemClicado.classList.contains('excluir')){
       let removeTexto = itemClicado.parentElement.parentElement.firstChild.innerText 
       let compararTexto = JSON.parse(localStorage.getItem('adicionar'))
       compararTexto.splice(compararTexto.indexOf(removeTexto), 1)
       localStorage.setItem('adicionar', JSON.stringify(compararTexto))
        itemClicado.parentElement.parentElement.remove()
    }
    if(itemClicado.classList.contains('concluir')){
        itemClicado.parentElement.parentElement.firstChild.classList.toggle('concluido')
        let tarefaConcluida = itemClicado.parentElement.parentElement.firstChild.innerText
       
        
       
       
    }

})

function criarTarefa(valorTarefa){
 
    const li = document.createElement('li') 
   

    li.innerHTML = `<p>
    ${valorTarefa}</p>
    <div>
    <button class="excluir"></button>
    <button class="concluir"></button>
  </div> `

  return li
    
}

function renderizarTarefas(tarefa) {
    const listaTarefas = document.querySelector('ul');
  
    
    const li = criarTarefa(tarefa);
    listaTarefas.appendChild(li);
}
 
if(localStorage.getItem('adicionar')){
    array = JSON.parse(localStorage.getItem('adicionar'))
    array.forEach(evento =>{
    renderizarTarefas(evento)
    console.log(evento)
})

}







