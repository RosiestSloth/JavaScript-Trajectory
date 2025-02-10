<template>
  <header class="bg-gradient-to-l from-[#033E8C] to-[#1B65A6] text-white p-4 drop-shadow-[0_7px_15px_rgba(0,0,0,0.4)]">
    <h1 class="titulo text-[3em] font-[900] text-shadow-md font-montserrat text-center">Trajetória JavaScript</h1>
    <nav class="w-full pt-4 mt-2 border-t border-sky-600">
      <ul class="flex flex-wrap md:gap-4">
        <li>
          <NuxtLink class="menu-item  md:text-[1.2em] font-montserrat font-[600] p-2" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="menu-item md:text-[1.2em] font-montserrat font-[600] p-2" to="/exercicios">Exercícios</NuxtLink>
        </li>
        <li>
          <NuxtLink class="menu-item md:text-[1.2em] font-montserrat font-[600] p-2" to="/experiencia">Experiência</NuxtLink>
        </li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
  .titulo {
    text-shadow: 3px 3px 1px rgba(0, 0, 0, 0.404);
  }

  .menu-item {
  position: relative;
  }

  .menu-item::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background-color: #232323 ;
    transition: width 0.3s ease;
  }

  .menu-item:hover::after {
    width: 100%;
  }

  .menu-item:hover {
    color: rgba(255, 255, 255, 0.69);
    transition-duration: 200ms;
  }

</style>