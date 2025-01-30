<template>
    <div>
      <cabecalho />
      <main id="main" class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
        <article>
            <h1 class="bg-white text-black text-[1.3em] text-justify md:text-[1.9em] font-montserrat font-[600] md:flex-1">
                10 Exercícios de JavaScript para iniciantes.
            </h1>
          <!-- Exercício 1 -->
          <section class="ex-1 border-b-2 border-black/70 mb-4 px-4 pb-4">
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
                class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
                type="button"
                @click="exibirAlerta"
              >
                Alerta
              </button>
            </div>
          </section>
          
          <!-- Exercício 2 -->
          <section class="ex-2 border-b-2 border-black/70 mb-4 px-4 pb-4">
            <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6n lg:px-8">
              <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                <strong>EX2:</strong> Mudando o Texto de um Parágrafo
              </h2>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                Crie um botão que, ao ser clicado, altera o texto de um parágrafo na página.
              </p>
              <button
                class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
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
           <section class="ex-3 border-b-2 border-black/70 mb-4 px-4 pb-4">
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
                class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
                @click="somar"
                type="button"
              >
                Somar
              </button>
              <p id="resultado" class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md">
                0
              </p>
               </form>
             </div>
           </section> 
           <!-- Exercício 4 -->
           <section class="ex4 border-b-2 border-black/70 mb-4 px-4 pb-4">
             <div class="mx-auto max-w-7xl py-8 px-4 sm:px-6n lg:px-8">
               <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
                 <strong>EX4:</strong> Alterando a Cor de Fundo
               </h2>
               <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                Adicione três botões em uma página, cada um mudando a cor de fundo para vermelho, verde ou azul.
               </p>
               <button 
               type="button" 
               class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="vermelho()"               
               >
                 Vermelho
               </button>
               <button 
               type="button" 
               class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="verde()"
               >
                 Verde
               </button>
               <button 
               type="button" 
               class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="azul()"
               >
                 Azul
               </button>
               <button 
               type="button" 
               class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
               @click="branco()"
               >
                 Branco
               </button>
             </div>
           </section>
           <!-- Exercício 5 -->
           <section class="ex5 border-b-2 border-black/70 mb-4 px-4 pb-4">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX5:</strong> Mostrando e Escondendo Elementos
            </h2>
              <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">Crie um botão que mostre ou esconda um texto na página quando clicado.</p>
              <button 
               type="button" 
               class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
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
           <!-- Exercício 6 -->
           <section class="ex6 border-b-2 border-black/70 mb-4 px-4 pb-4">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX6:</strong> Contador Incremental
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Crie uma página com um botão que incrementa um contador toda vez que é clicado.
            </p>
            <button 
              type="button" 
              class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md duration-200 hover:bg-[#1B65A6] hover:border-white active:bg-[#033E8C]"
              @click="somarUm()"
              >Somar</button>
              <p id="numero" class="text-white font-[700] font-poppins bg-blue-600 p-2 mx-auto m-4 block w-[200px] text-center border-2 border-black rounded-md ">
                {{ soma }}
              </p>
           </section>
           <!-- Exercício 7 -->
           <section class="ex7 border-b-2 border-black/70 mb-4 px-4 pb-4">
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
              class="hover:bg-black hover:text-white ani py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200"
              type="button"
              @click="Validar()"
              >Submit</button>
              <p id="erro"></p>
            </form>
           </section>
           <!-- Exercício 8 -->
           <section class="ex8 border-b-2 border-black/70 mt-4 pb-4 px-4">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX8:</strong> Criando uma Lista de Tarefas:
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Crie um campo de entrada e um botão para adicionar itens a uma lista exibida na página.
            </p>
            <form onsubmit="event.preventDefault(); adicionarTarefa();">
              <input class="p-2 border-2 border-black/50 rounded-md" type="text" id="tarefa" placeholder="Digite uma tarefa">
              <button 
              id="item"
              class="hover:bg-black hover:text-white ani py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200" 
              type="submit"
              @click="adicionarTarefa()"
              >Adicionar</button>
              <p id="erro-tarefa">

              </p>
            </form>
            <ul id="listaTaref">
              
            </ul>

           </section>
           <!-- Exercício 9 -->
           <section class="ex9 border-b-2 border-black/70 mt-4 pb-4 px-4">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX9:</strong> Exibindo a Data e Hora Atual:
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Adicione um botão que exibe a data e a hora atual em um parágrafo da página.
            </p>
            <button
            @click="mostrarHora()"
            >
              <p class="hover:bg-black hover:text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200">
                Hora e Data
              </p>
            </button>
            <p id="hora">
              HH:MM
            </p>
            <p id="data">
              DD/MM/AAAA
            </p>
           </section>
           <!-- Exercício 10 -->
           <section class="ex10 border-b-2 border-black/70 mt-4 pb-4 px-4">
            <h2 class="bg-white text-black text-[1.1em] md:text-[1.4em] font-montserrat font-[600] md:flex-1">
              <strong>EX10:</strong> Mudando o Estilo do Texto:
            </h2>
            <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
              Crie três botões que mudem o tamanho, a cor e o estilo (negrito ou itálico) de um texto na página.
            </p>
            <button 
            class="hover:bg-black hover:text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200" @click="mudarEstilo(estilo = 'bold')" 
            type="button">
              Negrito
            </button>
            <button
            class="hover:bg-black hover:text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200" @click="mudarEstilo(estilo = 'italic')"
            type="button"
            >
            Itálico
            </button>
            <button
            class="hover:bg-black hover:text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200" @click="mudarEstilo(estilo = 'red')"
            type="button"
            >
              Vermelho
            </button>
            <button
            class="hover:bg-black hover:text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200" @click="mudarEstilo(estilo = '')"
            type="button"
            >
              Limpar
            </button>
            <p id="texto">
              Seja bem vindo(a) ao meu site!
            </p>
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
              const regex = /^[A-Za-z\s]+$/;

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
            adicionarTarefa() {
              const tarefa = document.getElementById('tarefa');
              const erro = document.getElementById('erro-tarefa');
              const item = document.getElementById('listaTaref');
              const novoItem = document.createElement('li');

              if (tarefa.value.length < 3) {
                erro.innerHTML = 'ERRO! A tarefa não pode ter menos que 3 caracteres!';
                erro.style.color = 'red';

              } else if (!tarefa.value.trim()) {
                erro.innerHTML = 'ERRO! Você não pode enviar um formulário vazio.';
                erro.style.color = 'red';

              } else if (!tarefa.value) {
                erro.innerHTML = 'ERRO! Vocês precisa digitar uma tarefa!';
                erro.style.color = 'red';

              } else {
                for (let li of item.getElementsByTagName('li')) {
                  if (li.textContent === tarefa.value) {
                    erro.innerHTML = 'ERRO! Essa tarefa já foi adicionada.';
                    erro.style.color = 'red';
                    return;
                  }
                }

                erro.innerHTML = 'Tarefa cadastrada!';
                erro.style.color = 'green';

                novoItem.textContent = tarefa.value;
                item.appendChild(novoItem);

                tarefa.value = '';
                }
            },
            mostrarHora() {
              const hora = document.getElementById('hora');
              const dia = document.getElementById('data');
              const h = new Date();

              hora.innerHTML = `${h.getHours().toString().padStart(2, '0')}:${h.getMinutes().toString().padStart(2, '0')}`;
              dia.innerHTML = `${h.getDate().toString().padStart(2, '0')}/${(h.getMonth() + 1).toString().padStart(2, '0')}/${h.getFullYear().toString().padStart(4, '0')}`;
            },

            mudarEstilo(estilo) {
              const texto = document.getElementById('texto');
              if (estilo == 'bold') {
                texto.style.fontWeight = estilo;
              } else if (estilo == 'italic'){
                texto.style.fontStyle = estilo;
              } else if (estilo == 'red') {
                texto.style.color = estilo;
              } else {
                texto.style.fontWeight = 'normal';
                texto.style.fontStyle = 'normal';
                texto.style.color = 'black';
              }
            },
        },
    };
</script>

<style scoped>
  #listaTaref {
    list-style-type: decimal;
  }

</style>
