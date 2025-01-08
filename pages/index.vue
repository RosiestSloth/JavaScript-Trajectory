<template>
  <div>
  <cabecalho />
  <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
    <article>
      <div class="mx-auto mt-4 max-w-8xl py-8 px-4  md:flex md:items-center md:justify-between">
        <div class="max-w-2xl md:mx-8">
          <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
            Aqui, você encontrará todas as páginas desenvolvidas por mim utilizando JavaScript.
          </h2>
          <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
            Recentemente, concluí um curso de JavaScript com o professor Gustavo Guanabara, onde aprendi os fundamentos dessa linguagem. Motivado a aprimorar minhas habilidades, decidi aplicar o conhecimento adquirido desenvolvendo diversas páginas interativas. Esse processo tem sido fundamental para consolidar meu aprendizado e explorar as possibilidades do JavaScript no desenvolvimento web.
          </p>
        </div>
        <div class="mt-4 md:w-[550px]">
          <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
            Navegue pelas páginas desenvolvidas
          </h2>
          <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
            Aqui Mostro minha experiência com JavaScript e conto de forma detalhada todo meu processo de aprendizado.
          </p>
          <NuxtLink class="text-white bg-blue-400 p-2 m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]" to="/experiencia">Minha Experiência</NuxtLink>
          <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
            Aqui mostro os exercícios desenvolvidos com JavaScript. Onde eu aplico meu conhecimento adquirido para criar páginas interativas e dinâmicas.
          </p>
          <NuxtLink class="text-white bg-blue-400 p-2 m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]" to="/exercicios">Exercícios Realizados</NuxtLink>
        </div>
      </div>
      <div class="mx-[-16px] bg-[url('/imgs/programador.jpg')] bg-cover bg-fixed bg-center p-8 flex flex-col md:flex-row md:flex-gap-4 items-center">
        <div class="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg h-full md:w-[50%] mr-2 mb-4 md:mb-0">
          <h2 id="texto-conteiner" class="text-white text-[1.4em] font-montserrat font-[700] text-center">
            Principais exercícios
          </h2>
          <div id="slide" class="w-full h-full justify-center items-center overflow-hidden flex flex-col md:flex-row sm:grid grid-cols-2 gap-4 justify-items-center">
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-1.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-2.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] bg-white h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-3.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] bg-white h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-4.jpg')] bg-cover my-4 md:mb-0 text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
          </div>
        </div>
        <div class="backdrop-blur-lg bg-white/20 p-8 rounded-lg shadow-lg h-full md:w-[50%] mr-2">
          <h2 id="texto-conteiner" class="text-white text-[1.4em] font-montserrat font-[700] text-center">
            Principais exercícios
          </h2>
          <div id="slide" class="w-full h-full justify-center items-center overflow-hidden flex flex-col md:flex-row sm:grid sm:grid-cols-2 gap-4 justify-items-center">
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-1.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-2.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] bg-white h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-3.jpg')] bg-cover text-white" id="pagina">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
            <div class="p-4 border-2 border-white w-[200px] md:w-[50px] bg-white h-[200px] mx-2 rounded-2xl transition-all duration-500 ease-in-out hover:w-[200px] bg-[url('/imgs/ex-4.jpg')] bg-cover md:mb-0 text-white my-4" id="pagina ">
              <div id="content" class="md:hidden">
                conteudo
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </main>
  <rodape />
  </div>
</template>

<style scoped>
  #texto-conteiner h2 {
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.479);
  }

  #pagina:hover #content {
    display: block;
    overflow: hidden;
  }

</style>