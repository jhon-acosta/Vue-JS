<template>
  <table class="border-collapse w-full" :data="data">
    <thead>
      <tr>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Descripción
        </th>
        <th
          class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
        >
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0"
        v-for="user in data"
        v-bind:key="user.id"
      >
        <td
          class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
        >
          {{ user.name }} {{ user.lastname }}
        </td>
        <td
          class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
        >
          <i class="far fa-edit fa-lg px-2 cursor-pointer text-yellow-500"
            >Edit</i
          >
          <i class="far fa-trash-alt fa-lg cursor-pointer text-red-600"
            >Delete</i
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      data: [],
    };
  },
  methods: {
    getUser() {
      this.data = [];
      axios
        .get("https://arcade-game-v2.herokuapp.com/api/users")
        .then((response) => {
          this.data = response.data.data;
          console.log(this.data);
        });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
