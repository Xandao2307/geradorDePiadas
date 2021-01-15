const button = document.querySelector('.container button')
const piadaTexto =  document.querySelector('.container p')

button.addEventListener('click', pegarPiada)

async function pegarPiada() {
    const data = await fetch('https://icanhazdadjoke.com/slack',{
        headers: {
            'Accept':'aplication/json'
        }
    })
    const dataObj = await data.json()
    console.log(dataObj)
    piadaTexto.innerHTML = dataObj['attachments']['0']['fallback']
}