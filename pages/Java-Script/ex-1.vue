<template>
    <div>
      <cabecalho />
      <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
        <article>
          <!-- Exercício 1 -->
          <section class="ex-1 border-b-2 border-black/70">
            <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
              <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
                <strong>EX1:</strong> Exibindo Mensagens no Alerta
              </h2>
              <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[400]">
                Crie uma página HTML com um botão que exibe uma mensagem em um alerta quando clicado.
              </p>
              <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[400]">
                Clique no botão para mostrar uma mensagem no alerta.
              </p>
              <button
                class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
                type="button"
                @click="exibirAlerta"
              >
                Alerta
              </button>
            </div>
          </section>
          
          <!-- Exercício 2 -->
          <section class="ex-2 border-b-2 border-black/70">
            <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6n lg:px-8">
              <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
                <strong>EX2:</strong> Mudando o Texto de um Parágrafo
              </h2>
              <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[400]">
                Crie um botão que, ao ser clicado, altera o texto de um parágrafo na página.
              </p>
              <button
                class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
                @click="mudarTexto"
                type="button"
              >
                Mudar o Texto
              </button>
              <p
                id="texto-mudado"
                class="font-open-sans text-[1.1em] mt-4 text-justify font-[400]"
              >
                Seja bem-vindo (a) ao meu site!
              </p>
            </div>
          </section>
  
          <!-- Exercício 3 -->
           <section>
             <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6n lg:px-8">
               <h2 class="bg-white text-black text-[1.4em] font-montserrat font-[600] md:flex-1">
                 <strong>EX3:</strong> Calculadora Simples
               </h2>
               <p class="font-open-sans text-[1.1em] mt-4 text-justify font-[400]">
                Crie um formulário que permita ao usuário inserir dois números e, ao clicar em um botão, exiba a soma desses números.
               </p>
               <form action="">
                 <div class="flex flex-col">
                   <label for="n1">Primeiro número:</label>
                   <input type="number" id="n1" class="border-2 border-black rounded-md p-2">
                 </div>
                 <div class="flex flex-col">  
                   <label for="n2">Segundo número:</label>
                   <input type="number" id="n2" class="border-2 border-black rounded-md p-2">
                 </div>
                 <button
                class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
                @click="somar"
                type="button"
              >
                Somar
              </button>
              <p id="resultado" class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md">
                0
              </p>
               </form>
             </div>
           </section>
        </article>
      </main>
      <Rodape />
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      exibirAlerta() {
        alert('Hello World!');
      },
      mudarTexto() {
        const texto = document.getElementById('texto-mudado');
        texto.innerHTML= 'Obrigado por visitar meu site!';
      },
      somar() {
        const resultado = document.getElementById('resultado');
        const n1 = parseFloat(document.getElementById('n1').value);
        const n2 = parseFloat(document.getElementById('n2').value);
        const soma = n1 + n2;
        if (isNaN(soma)) {
          resultado.innerHTML = '0';
        } else {
          resultado.innerHTML = soma;
        }
      },
    },
  };
  </script>
  