<template>
  <div>
    <div class="flex h-20 items-center shadow-2xl border-b-2 border-red-700">
      <div class="w-1/5">
        Logo
      </div>
      <div class="flex items-center justify-center w-4/5">
        <router-link to="/" class="px-2">INICIO</router-link>
        <router-link to="/user-registration" class="px-2"
          > LISTADO DE USUARIOS 
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style></style>
