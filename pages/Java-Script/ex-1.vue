<template>
    <div>
      <cabecalho />
      <main id="main" class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
        <article>
            <h1 class="bg-white text-black text-[1.3em] text-justify md:text-[1.9em] font-montserrat font-[600] md:flex-1">
                10 Exercícios de JavaScript para iniciantes.
            </h1>
          <!-- Exercício 1 -->
          <section class="ex-1 border-b-2 border-black/70">
            <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
              <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                <strong>EX1:</strong> Exibindo Mensagens no Alerta
              </h2>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                Crie uma página HTML com um botão que exibe uma mensagem em um alerta quando clicado.
              </p>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
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
              <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                <strong>EX2:</strong> Mudando o Texto de um Parágrafo
              </h2>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
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
               <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                 <strong>EX3:</strong> Calculadora Simples
               </h2>
               <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
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
           <section id="ex4">
             <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6n lg:px-8">
               <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                 <strong>EX4:</strong> Alterando a Cor de Fundo
               </h2>
               <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                Adicione três botões em uma página, cada um mudando a cor de fundo para vermelho, verde ou azul.
               </p>
               <button 
               type="button" 
               class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="vermelho()"               
               >
                 Vermelho
               </button>
               <button 
               type="button" 
               class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="verde()"
               >
                 Verde
               </button>
               <button 
               type="button" 
               class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="azul()"
               >
                 Azul
               </button>
               <button 
               type="button" 
               class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="branco()"
               >
                 Branco
               </button>
             </div>
           </section>
           <section id="ex5">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX5:</strong> Mostrando e Escondendo Elementos
            </h2>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">Crie um botão que mostre ou esconda um texto na página quando clicado.</p>
              <button 
               type="button" 
               class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="show()"
               >
                Aqui
               </button>
               <div id="elemento" style="display: none;">
                <NuxtImg
                  class="w-full h-[300px] object-cover"
                  src="imgs\ex-4.jpg"
                  alt="Programador"
                  quality="50"
                />
               </div>
           </section>
           <section>
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX6:</strong> Contador Incremental
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Crie uma página com um botão que incrementa um contador toda vez que é clicado.
            </p>
            <button 
              type="button" 
              class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
              @click="somarUm()"
              >Somar</button>
              <p id="numero" class="text-white font-[600] font-poppins bg-blue-400 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md ">
                {{ soma }}
              </p>
           </section>
           <section id="ex-7">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX7:</strong> Validando um campo de Formulário:
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Crie um formulário com um campo de texto e um botão. Ao clicar no botão, verifique se o campo de texto está vazio e exiba uma mensagem de erro, se necessário.
            </p>
            <form onsubmit="event.preventDefault(); Validar();" class="pt-4">
              <label for="nome">Digite seu nome: </label>
              <input class="p-2 border-2 border-black rounded-md " type="text" id="nome">
              <button
              class="hover:bg-black hover:text-white ani py-2 px-4 mx-2 rounded-md border-2 border-black/30"
              type="button"
              @click="Validar()"
              >Submit</button>
              <p id="erro"></p>
            </form>
           </section>
        </article>
      </main>
      <Rodape />
    </div>
  </template>
  
<script lang="js">
    export default {
      data() {
        return {
          soma: 0,
        };
      },
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
            vermelho() {
              const corpo = document.getElementById('main');
              corpo.style.backgroundColor = 'red';
            },
            verde() {
              const corpo = document.getElementById('main');
              corpo.style.backgroundColor = 'green';
            },
            azul() {
              const corpo = document.getElementById('main');
              corpo.style.backgroundColor = 'blue';
            },
            branco() {
              const corpo = document.getElementById('main');
              corpo.style.backgroundColor = 'white';
            },
            show() {
              const elemento = document.getElementById('elemento'); 
              if (elemento.style.display === 'none' || elemento.style.display === '') {
                elemento.style.display = 'block'
              } else {
                elemento.style.display = 'none';
              }
            },
            somarUm() {
              this.soma += 1;
            },
            Validar() {
              const submit = document.getElementById('nome');
              const erro = document.getElementById('erro');
              var regex = /^[A-Za-z\s]+$/;

              if (!submit.value.trim()) {
                erro.innerHTML = 'ERRO! Você deve digitar um nome válido.';
                erro.style.color = 'red';
              } else if (!regex.test(submit.value)) {
                erro.innerHTML = 'ERRO! Seu nome pode ter apenas letras.';
                erro.style.color = 'red';
              } else if (submit.value.length < 3) {
                erro.innerHTML = 'ERRO! Seu nome deve ter pelo menos 3 letras.';
                erro.style.color = 'red';
              } else {
                erro.innerHTML = 'SUCESSO! Nome cadastrado com exito.';
                erro.style.color = 'green';
              }
            },
        },
    };
</script>
  