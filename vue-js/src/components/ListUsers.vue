<template>
  <div class="flex w-1/2 items-center justify-center p-5">
    <div>
      <h1 class="text-center">{{ title }}</h1>
      <button v-on:click="getUser">DATA</button>
      <table class="table-fixed">
        <thead>
          <tr>
            <th class="w-1/2 ...">Title</th>
            <th class="w-1/4 ...">Author</th>
            <th class="w-1/4 ...">Views</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intro to CSS</td>
            <td>Adam</td>
            <td>858</td>
          </tr>
          <tr class="bg-blue-200">
            <td>
              A Long and Winding Tour of the History of UI Frameworks and Tools
              and the Impact on Design
            </td>
            <td>Adam</td>
            <td>112</td>
          </tr>
          <tr>
            <td>Intro to JavaScript</td>
            <td>Chris</td>
            <td>1,280</td>
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
  data() {
    return {
      title: "LISTADO DE USUARIOS",
      users: {},
    };
  },
  methods: {
    getUser: async () => {
      await axios
        .get(`${URL}/users`)
        .then((response) => {
          this.users = response;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    this.getUser();
  },
};
</script>

<style></style>
