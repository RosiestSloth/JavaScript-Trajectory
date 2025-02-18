<template>
    <div>
        <Cabecalho />
        <main class="p-4 max-w-[1200px] mx-auto bg-white shadow-2xl shadow-white/30">
            <article>
                <!--Introdução-->
                <section class="border-b-2 border-black/70 mt-4 pb-4 px-4">
                    <h1 class="text-black text-[1.4em] font-montserrat font-[600] md:text-[1.9em]">
                        Condições JS
                    </h1>
                    <p class="font-open-sans text-[0.9em] md:text-[1.3em] mt-4 text-justify font-[400]">
                        As estruturas de validação em <strong>JavaScript</strong>, assim como na maioria das linguagens de programação, são fundamentais para o funcionamento do código e a verificação de condições. <br>
                        Um exemplo disso é a validação do preenchimento de e-mail e senha em um site. Nos bastidores da interface, diversas verificações são realizadas para garantir que os dados inseridos sejam corretos e protegidos contra vazamentos.
                    </p>
                    <h2 class="mt-4 text-black text-[1.4em] font-montserrat font-[550] md:text-[1.7em]">
                        Exercícios:
                    </h2>
                </section>
                <!--Exercício 1-->
                <section class="border-b-2 border-black/70 mt-4 pb-4 px-4">
                    
                    <h3 class="text-black text-[1.4em] font-montserrat font-[500]"><strong>1</strong> Verificando se um Número é Par ou Ímpar</h3>
                    <p class="font-open-sans text-[0.9em] md:text-[1.2em] mt-4 text-justify font-[400]">Crie um formulário onde o usuário insira um número e, ao clicar em um botão, exiba na tela se ele é par ou ímpar.</p>
                    <input 
                    v-model="numero"
                    class="border-2 border-black rounded-md p-2 hover:bg-gray-200 duration-200" type="number" 
                    name="numero" 
                    id="numero">
                    <button 
                    class="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200 active:bg-sky-700 font-[800] font-poppins" type="button" 
                    @click="verificar()">
                    Verificar
                </button>
                    <p id="resp">
                        {{ resposta }}
                    </p>
                </section>
                <!--Exercício 2-->
                <section class="border-b-2 border-black/70 mt-4 pb-4 px-4">
                    <h3 class="text-black text-[1.4em] font-montserrat font-[500]"><strong>2</strong> Validando a Idade para Acesso</h3>
                    <p class="font-open-sans text-[0.9em] md:text-[1.2em] mt-4 text-justify font-[400]">Crie um campo onde o usuário insira sua idade e um botão "Verificar". Se a idade for menor que 18, exiba "Acesso negado". Caso contrário, exiba "Acesso permitido".</p>
                    <input 
                    class="border-2 border-black rounded-md p-2 hover:bg-gray-200 duration-200"
                    type="number" 
                    name="idade" 
                    id=""
                    v-model="idade">
                    <button
                    class="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200 active:bg-sky-700 font-poppins font-[800]"
                    type="button"
                    @click="verificarIdade()">
                        Verificar
                    </button>
                    <p id="acesso">
                        {{ acesso }}
                    </p>
                </section>
                <!--Exercício 3-->
                <section class="border-b-2 border-black/70 mt-4 pb-4 px-4">
                    <h3 class="text-black text-[1.4em] font-montserrat font-[500]"><strong>3</strong> Classificando Notas Escolares</h3>
                    <p class="font-open-sans text-[0.9em] md:text-[1.2em] mt-4 text-justify font-[400]">
                        Crie um formulário onde o usuário insira sua nota de 0 a 10. Use `if` e `else` para classificar a nota como:
                        <ul class="ml-4" style="list-style-type: disc; list-style-position: inside;">
                            <li>0 a 4: "Reprovado"</li>
                            <li>5 a 6: "Recuperação"</li>
                            <li>6 a 10: "Aprovado"</li>
                        </ul>
                        <input
                        type="number" 
                        name="Nota" 
                        id="nota" placeholder="Insira a nota do aluno" 
                        v-model="nota" 
                        class="border-2 border-black rounded-md p-2 hover:bg-gray-200 duration-200">
                        <button
                        class="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 mx-2 rounded-md border-2 border-black/30 duration-200 active:bg-sky-700 font-poppins font-[800]"
                        type="button"
                        @click="verificarNota()"
                        >Verificar</button>
                        <p id="resultadoNota">
                            {{ resultadoNota }}
                        </p>
                    </p>
                </section>
                <!--Exercício 4-->
                <section>

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
                idade: '',
                acesso: '',
                nota: '',
                resultadoNota: '',
            };
        },
        methods: {
            // Exercício 1
            verificar() {
                const numInt = parseInt(this.numero);
                const resp = document.getElementById('resp');

                if (isNaN(numInt)) {
                    this.resposta = 'Por favor, insira um número válido.';
                    resp.style.color = 'red';
                    return;
                }

                if (numInt % 2 === 0) {
                    this.resposta = 'O número é PAR';
                    resp.style.color = 'blue';
                } else {
                    this.resposta = 'O número é ÍMPAR';
                    resp.style.color = 'green';
                }
            },
            // Exercício 2
            verificarIdade() {
                const idade = parseInt(this.idade);
                const acesso = document.getElementById('acesso');

                if (isNaN(idade)) {
                    this.acesso = 'Digite uma idade válida.';
                    acesso.style.color = 'red';
                    return;
                }

                if (idade < 18 || idade > 0) {
                    this.acesso = 'NEGADO! Você é menor de idade.';
                    acesso.style.color = 'red';
                } else if (idade < 130) {
                    this.acesso = 'APROVADO! Você é maior de idade.';
                    acesso.style.color = 'green';
                } else {
                    this.acesso = 'ERRO! Idade inválida';
                    acesso.style.color = 'red';
                }
            },
            // Exercício 3
            verificarNota(){
                const Nota = document.getElementById('resultadoNota');

                if (this.nota <= 4 && this.nota >= 0) {
                    this.resultadoNota = 'Reprovado';
                    Nota.style.color = 'red'
                } else if (this.nota <= 5 && this.nota >= 5) {
                    this.resultadoNota = 'Recuperação';
                    Nota.style.color = 'yellow';
                } else if (this.nota <= 10 && this.nota >= 6) {
                    this.resultadoNota = 'Aprovado';
                    Nota.style.color = 'green';
                } else {
                    this.resultadoNota = 'ERRO. Insira uma nota válida.'
                    Nota.style.color = 'red';
                }
            },
        },
        
    }
</script>