<template>
  <div class="flex w-1/2 items-center justify-center p-5">
    <div>
      <h1 class="text-center">{{ title }}</h1>

      <table class="table-fixed border-2">
        <thead>
          <tr>
            <th class="w-1/2 border-2">Nombre</th>
            <th class="w-1/4 border-2">Apellido</th>
            <th class="w-1/4 border-2">Apodo</th>
            <th class="w-1/4 border-2">Edad</th>
            <th class="w-1/4 border-2">Correo</th>
            <th class="w-1/4 border-2">Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border-2">Intro to CSS</td>
            <td class="border-2">Adam</td>
            <td class="border-2">858</td>
            <td class="border-2">Intro to CSS</td>
            <td class="border-2">Intro to CSS</td>
            <td class="border-2">Intro to CSS</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { URL } from "../enviroment/serverUrl";
import axios from "axios";
export default {
  data: function() {
    return {
      title: "LISTADO DE USUARIOS",
      allData: [],
    };
  },
  methods: {
    getUser: async () => {
      await axios
        .get(`${URL}/users`)
        .then((response) => {
          this.allData = response.data.data;
          console.log(this.allData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style></style>
