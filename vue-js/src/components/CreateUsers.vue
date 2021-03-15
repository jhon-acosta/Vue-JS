<template>
  <div class="flex w-1/2 items-center justify-center">
    <div class="border p-8 bg-gray-100 hover:shadow-2xl shadow-md">
      <h1 class="text-center py-5">{{ title }}</h1>
      <form class="w-64">
        <div>
          <p>Nombre:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
        <div>
          <p>Apellido:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
        <div>
          <p>Apodo:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
        <div>
          <p>Edad:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
        <div>
          <p>Correo:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
        <div>
          <p>Contraseña:</p>
          <input
            type="text"
            class="border-2 px-5 py-2 w-full rounded border-yellow-200 bg-gray-50"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      title: "AGREGAR USUARIO",
    };
  },
  methods: {
    postUser: () => {},
  },
  props: {},
};
</script>

<style></style>
