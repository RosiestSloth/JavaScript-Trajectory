<template>
  <header class="bg-gradient-to-l from-[#033E8C] to-[#1B65A6] text-white p-4 drop-shadow-[0_7px_15px_rgba(0,0,0,0.4)]">
    <h1 class="titulo text-[3em] font-[800] text-shadow-md font-montserrat text-center">Trajetória JavaScript</h1>
    <nav class=" w-full pt-4 mt-2 border-t border-sky-600">
      <ul class="flex space-x-4 font-poppins font-semibold">
        <li><NuxtLink class="hover:text-black hover:bg-blue-400 p-2 rounded-md duration-200" to="/">Home</NuxtLink></li>
        <li><NuxtLink class="hover:text-black hover:bg-blue-400 p-2 rounded-md duration-200" to="/exercicios">Sobre</NuxtLink></li>
        <li><NuxtLink class="hover:text-black hover:bg-blue-400 p-2 rounded-md duration-200" to="/experiencia">Minha Experiência</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .titulo {
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.404);
  }
</style>