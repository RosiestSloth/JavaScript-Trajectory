<template>
  <div>
    <cabecalho />
    <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
      <article>
        <section class="mx-auto mt-4 max-w-8xl py-8 md:flex">
          <div class="px-4">
            <h2 class="bg-white text-black md:text-[1.6em] text-[1.3em] font-montserrat font-[600]">
              Aqui, você encontrará todas as páginas desenvolvidas por mim utilizando JavaScript
            </h2>
            <p class="font-open-sans md:text-[1.1em] mt-4 text-justify font-[500]">
              Recentemente, concluí um curso de JavaScript com o professor Gustavo Guanabara, onde aprendi os fundamentos dessa linguagem. Motivado a aprimorar minhas habilidades, decidi aplicar o conhecimento adquirido desenvolvendo diversas páginas interativas. Esse processo tem sido fundamental para consolidar meu aprendizado e explorar as possibilidades do JavaScript no desenvolvimento web.
            </p>
          </div>
          
        </section>
        <section class="mx-[-16px] inset-ring-[rgba(0,0,0,0.1] bg-[url('/imgs/programador.jpg')] bg-cover bg-fixed bg-center p-8 flex flex-col md:flex-row md:flex-gap-4 items-center">
          <div class="backdrop-blur-lg min-w-[300px] bg-white/20 p-8 rounded-lg shadow-lg h-full w-[80%] md:w-[50%] mr-2 mb-4 md:mb-0">
            <h2 id="texto-conteiner" class="text-white text-[1.4em] font-montserrat font-[700] text-center mb-4">
              Principais exercícios
            </h2>
            <div id="slide" class="w-full h-full justify-center items-center overflow-hidden flex flex-col md:flex-row sm:grid grid-cols-2 gap-2 justify-items-center">
              <div class="border-2 border-white w-[100%] h-[200px] rounded-2xl bg-[url('/imgs/ex-1.jpg')] bg-cover text-white w-[100%] relative" id="pagina">
                <div class="absolute inset-0 bg-black/50 p-4 rounded-2xl">
                  <div id="content" class="">
                    <h3 class="text-white md:text-[1.2em] text-[1em] font-montserrat font-[700] text-center mb-4">
                      10 Exercícios
                    </h3>
                    <p class="font-open-sans text-[0.7em] mt-4 font-[500] md:text-[0.9em]">
                      Exercícios simples para praticar JavaScript.
                    </p>
                    <NuxtLink class="mx-auto font-poppins font-[800] text-white bg-blue-700 p-2 my-4 block w-[80%] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C] max-w-[200px]" to="/java-script/ex-1">Aqui</NuxtLink>
                  </div>
                </div>
              </div>
              <div class="p-4 border-2 border-white w-[100%] h-[200px] rounded-2xl  bg-[url('/imgs/ex-2.jpg')] bg-cover text-white relative" id="pagina">
                <div class="absolute inset-0 bg-black/50 p-4 rounded-2xl">
                  <div id="content" class="">
                    <h3 class="text-white md:text-[1.2em] text-[1em] font-montserrat font-[700] text-center mb-4">
                      Condições JS
                    </h3>
                    <p class="font-open-sans text-[0.7em] mt-4 font-[500] md:text-[0.9em]">
                      Exercícios envolvendo extrutura de validação em JavaScript.
                    </p>
                    <NuxtLink class="font-poppins font-[800] mx-auto text-white bg-blue-700 p-2 my-4 block w-[80%] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C] max-w-[200px]" to="/java-script/ex-2">Aqui</NuxtLink>
                  </div>
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
      </article>
      <article>
        <section>
          <h1 class="text-black text-[1.4em] md:text-[1.9em] font-montserrat font-[600] md:flex-1">
            Trilha de aprendizado de JavaScript
          </h1>
          <ul class="ml-4" style="list-style-type: decimal; list-style-position: inside;">
            <li class="contagem">
              <h2 class="text-black text-[1.2em] md:text-[1.2em] md:text-[1.4em] font-montserrat font-[600] inline">10 Exercícios Simples</h2>
              <p class="ml-4">
                Com os <a class="text-blue-600 hover:underline font-[800]" href="/java-script/ex-1">10 exercícios</a> da JavaScript Trajectory, você irá treinar conceitos básicos de JavaScript, como variáveis e manipulação do DOM (Document Object Model). Isso ajudará a praticar outras áreas da linguagem de forma mais eficiente.
              </p>
            </li>
          </ul>
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