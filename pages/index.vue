<template>
  <div>
    <cabecalho />
    <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
      <article>
        <section class="mx-auto mt-4 max-w-8xl py-8 md:flex">
          <div class="md:w-[50%] md:border-r-2 border-black/70 px-4">
            <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
              Aqui, você encontrará todas as páginas desenvolvidas por mim utilizando JavaScript
            </h2>
            <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
              Recentemente, concluí um curso de JavaScript com o professor Gustavo Guanabara, onde aprendi os fundamentos dessa linguagem. Motivado a aprimorar minhas habilidades, decidi aplicar o conhecimento adquirido desenvolvendo diversas páginas interativas. Esse processo tem sido fundamental para consolidar meu aprendizado e explorar as possibilidades do JavaScript no desenvolvimento web.
            </p>
          </div>
          <div class="mt-4 md:m-0 md:w-[50%] px-4">
            <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
              Navegue pelas páginas desenvolvidas
            </h2>
            <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
              Aqui Mostro minha experiência com JavaScript e conto de forma detalhada todo meu processo de aprendizado.
            </p>
            <NuxtLink class="text-white bg-blue-700 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]" to="/experiencia">Minha Experiência</NuxtLink>
            <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
              Aqui mostro os exercícios desenvolvidos com JavaScript. Onde eu aplico meu conhecimento adquirido para criar páginas interativas e dinâmicas.
            </p>
            <NuxtLink class="mx-auto text-white bg-blue-700 p-2 my-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]" to="/exercicios">Exercícios Realizados</NuxtLink>
          </div>
        </section>
        <section class="mx-[-16px] bg-[url('/imgs/programador.jpg')] bg-cover bg-fixed bg-center p-8 flex flex-col md:flex-row md:flex-gap-4 items-center">
          <div class="backdrop-blur-lg min-w-[300px] bg-white/20 p-8 rounded-lg shadow-lg h-full w-[80%] md:w-[50%] mr-2 mb-4 md:mb-0">
            <h2 id="texto-conteiner" class="text-white text-[1.4em] font-montserrat font-[700] text-center mb-4">
              Principais exercícios
            </h2>
            <div id="slide" class="w-full h-full justify-center items-center overflow-hidden flex flex-col md:flex-row sm:grid grid-cols-2 gap-2 justify-items-center">
              <div class="border-2 border-white w-[100%] h-[200px] rounded-2xl bg-[url('/imgs/ex-1.jpg')] bg-cover text-white w-[100%] relative" id="pagina">
                <div class="absolute inset-0 bg-black/40 p-4 rounded-2xl">
                  <div id="content" class="">
                    <h3 class="text-white md:text-[1.2em] text-[1em] font-montserrat font-[700] text-center mb-4">
                      10 Exercícios
                    </h3>
                    <p class="font-open-sans text-[0.7em] mt-4 font-[500] md:text-[0.9em]">
                      exercícios simples para praticar JavaScript.
                    </p>
                    <NuxtLink class="mx-auto text-white bg-blue-700 p-2 my-4 block w-[80%] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C] max-w-[200px]" to="/java-script/ex-1">Aqui</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] h-[200px] rounded-2xl  bg-[url('/imgs/ex-2.jpg')] bg-cover text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] bg-white h-[200px] rounded-2xl bg-[url('/imgs/ex-3.jpg')] bg-cover text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] bg-white h-[200px] rounded-2xl bg-[url('/imgs/ex-4.jpg')] bg-cover md:mb-0 text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
            </div>
          </div>
          <div class="backdrop-blur-lg min-w-[300px] bg-white/20 p-8 rounded-lg shadow-lg w-[80%] h-full md:w-[50%]">
            <h2 id="texto-conteiner" class="text-white text-[1.4em] font-montserrat font-[700] text-center mb-4">
              Principais experiências
            </h2>
            <div id="slide" class="w-full h-full justify-center items-center overflow-hidden flex flex-col md:flex-row sm:grid sm:grid-cols-2 gap-2 justify-items-center">
              <div class="p-4 border-2 border-white w-[100%] h-[200px] rounded-2xl bg-[url('/imgs/ex-1.jpg')] bg-cover text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] h-[200px] rounded-2xl bg-[url('/imgs/ex-2.jpg')] bg-cover text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] bg-white h-[200px] rounded-2xl bg-[url('/imgs/ex-3.jpg')] bg-cover text-white" id="pagina">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] bg-white h-[200px] rounded-2xl bg-[url('/imgs/ex-4.jpg')] bg-cover md:mb-0 text-white" id="pagina ">
                <div id="content" class="">
                  conteudo
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
            Resumo
          </h2>
          <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[500]">
            Um resumo de minha experiência 
          </p>
        </section>
      </article>
      </main>
    <rodape />
  </div>
</template>

<style scoped>
  #texto-conteiner h2 {
    text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.479);
  }

</style>