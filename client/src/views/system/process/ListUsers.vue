<template>
  <div class="h-screen" id="list">
    <div class="p-10 bg-gray-900 bg-opacity-70 h-screen">
      <div class="w-full py-2">
        <button
          type="button"
          class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 text-base font-medium text-white hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
          @click="showModal = true"
        >
          REGISTRAR +
        </button>
      </div>
      <div class="overflow-y-auto">
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
                  @click="sendUserUpdate(user)"
                ></i>
                <i
                  class="far fa-trash-alt fa-lg cursor-pointer text-red-600"
                  @click="deleteUser(user.id)"
                ></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CreateUsers
        @close="handleClose($event)"
        @getNewData="handleUsers($event)"
        @userEmpty="handleUserEmpty($event)"
        @chageTitles="handleChangeTitles($event)"
        :showModal="showModal"
        :urlAPI="urlAPI"
        :allUsers="data"
        :userToUpdata="userToUpdata"
        :dinamicsTitles="dinamicsTitles"
      />
    </div>
  </div>
</template>

<script>
import CreateUsers from "./CreateUsers";
import axios from "axios";

export default {
  name: "Home",
  components: {
    CreateUsers,
  },
  mounted() {
    this.getUser();
  },
  data() {
    return {
      urlAPI: "https://arcade-game-v2.herokuapp.com/api",
      data: [],
      userToUpdata: {
        id: "",
        name: "",
        lastname: "",
        nickname: "",
        age: "",
        email: "",
        password: "",
      },
      dinamicsTitles: {
        titleModal: "REGISTRAR USUARIO",
        titleButton: "AGREGAR",
      },
      showModal: false,
    };
  },
  methods: {
    async getUser() {
      await axios.get(`${this.urlAPI}/users`).then((response) => {
        this.data = response.data.data;
      });
    },
    async deleteUser(userId) {
      try {
        await axios.delete(`${this.urlAPI}/user/${userId}`);
        this.getUser();
      } catch (error) {
        console.log(error);
      }
    },
    sendUserUpdate(data) {
      this.userToUpdata = data;
      this.showModal = true;
      this.dinamicsTitles = {
        titleModal: "ACTUALIZAR USUARIO",
        titleButton: "ACTUALIZAR",
      };
      // console.log(this.userToUpdata);
    },
    handleClose(showModal) {
      this.showModal = showModal;
    },
    handleUsers(newData) {
      this.data = newData;
    },
    handleUserEmpty(object) {
      this.userToUpdata = object;
    },
    handleChangeTitles(object) {
      this.dinamicsTitles = object;
    },
  },
};
</script>
<style scoped>
#list {
  background-image: url("../../../assets/imgs/geometric.jpg");
}
</style>
