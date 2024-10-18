const url = 'https://raw.githubusercontent.com/guilhermeonra'
async function visualizarInformacoesGlobais() {
   const res = await fetch(url) 
   const dados = await res.json()
   console.log(dados);
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container_texto')
}
visualizarInformacoesGlobais()







