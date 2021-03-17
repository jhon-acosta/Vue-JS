<template>
  <div class="p-10">
    <div class="w-full py-2">
      <button
        type="button"
        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
        @click="showModal = true"
      >
        REGISTRAR +
      </button>
    </div>
    <table class=" items-center justify-center border-collapse w-full">
      <thead>
        <tr>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            NOMBRE - APELLIDO
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            EDAD
          </th>
          <th
            class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell"
          >
            SOBRENOMBRE
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
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
          >
            {{ user.nickname }}
          </td>
          <td
            class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static"
          >
            {{ user.age }}
          </td>
          <td
            class="w-full lg:w-auto p-3 text-gray-800 border border-b text-center block lg:table-cell relative lg:static"
          >
            <i
              class="far fa-edit fa-lg px-2 cursor-pointer text-yellow-500"
            ></i>
            <i
              class="far fa-trash-alt fa-lg cursor-pointer text-red-600"
              v-on:click="deleteUser(user.id)"
            ></i>
          </td>
        </tr>
      </tbody>
    </table>
    <CreateUsers
      v-on:close="handleClose($event)"
      v-on:getNewData="handleUsers($event)"
      :showModal="showModal"
      :urlAPI="urlAPI"
      v-bind:allUsers="data"
    />
  </div>
</template>

<script>
import axios from "axios";
import CreateUsers from "./CreateUsers";

export default {
  name: "Home",
  components: {
    CreateUsers,
  },
  data() {
    return {
      urlAPI: "https://arcade-game-v2.herokuapp.com/api",
      data: [],
      showModal: false,
    };
  },
  methods: {
    getUser() {
      axios.get(`${this.urlAPI}/users`).then((response) => {
        this.data = response.data.data;
        // console.log(this.data);
      });
    },
    deleteUser(userId) {
      axios
        .delete(`${this.urlAPI}/user/${userId}`)
        .then((response) => {
          console.log(response);
          this.getUser();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleClose(showModal) {
      this.showModal = showModal;
    },
    handleUsers(newData) {
      this.data = newData;
    },
  },
  mounted() {
    this.getUser();
    // this.handleUsers();
  },
};
</script>
