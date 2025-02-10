<template>
    <div>
        <Cabecalho />
        <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
            <article>
                <!--Introdução-->
                <section>
                    <h1 class="text-black text-[1.4em] font-montserrat font-[600] md:text-[1.9em]">
                        Condições JS
                    </h1>
                    <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                        As estruturas de validação em <strong>JavaScript</strong>, assim como na maioria das linguagens de programação, são fundamentais para o funcionamento do código e a verificação de condições. <br>
                        Um exemplo disso é a validação do preenchimento de e-mail e senha em um site. Nos bastidores da interface, diversas verificações são realizadas para garantir que os dados inseridos sejam corretos e protegidos contra vazamentos.
                    </p>
                </section>
                <!--Exercício 1-->
                <section>
                    <h2 class="text-black text-[1.4em] font-montserrat font-[550] md:text-[1.7em]">
                        Exercícios:
                    </h2>
                    <h3 class="text-black text-[1.4em] font-montserrat font-[500]"><strong>1</strong> Verificando se um Número é Par ou Ímpar</h3>
                    <p class="font-open-sans text-[0.9em] md:text-[1.2em] mt-4 text-justify font-[400]">Crie um formulário onde o usuário insira um número e, ao clicar em um botão, exiba na tela se ele é par ou ímpar.</p>
                    <input 
                    v-model="numero"
                    class="border-2 border-black rounded-md p-2 hover:bg-gray-200 duration-200" type="number" 
                    name="numero" 
                    id="numero">
                    <button 
                    class="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200 active:bg-sky-700" type="button" 
                    @click="verificar()">
                    Verificar
                </button>
                    <p id="resp">
                        {{ resposta }}
                    </p>
                </section>
                <!--Exercício 2-->
                <section>
                    <h3 class="text-black text-[1.4em] font-montserrat font-[500]"><strong>1</strong> Verificando se um Número é Par ou Ímpar</h3>
                    <p class="font-open-sans text-[0.9em] md:text-[1.2em] mt-4 text-justify font-[400]">Crie um formulário onde o usuário insira um número e, ao clicar em um botão, exiba na tela se ele é par ou ímpar.</p>
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
                numero: '',
                resposta: '',
            };
        },
        methods: {
            verificar() {
                const numInt = parseInt(this.numero);

                if (isNaN(numInt)) {
                    this.resposta = 'Por favor, insira um número válido.';
                    return;
                }

                if (numInt % 2 === 0) {
                    this.resposta = 'O número é PAR';
                } else {
                    this.resposta = 'O número é ÍMPAR';
                }
            },
        },
        
    }
</script>