
const divLocal = document.getElementById('Local')
const divSession = document.getElementById('Session')

const nomes = ['Esther', 'Renata', 'Bruno', 'Maria Clara']


localStorage.setItem('teste' , JSON.stringify(nomes))

const recuperandoDados = JSON.parse(localStorage.getItem('teste'))

console.log(typeof(recuperandoDados))



recuperandoDados.push('Gustavo')


recuperandoDados.forEach(element => {
    console.log(element)
});




