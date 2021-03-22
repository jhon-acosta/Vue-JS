<template>
  <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModal">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="flex p-5 items-center justify-center">
          <div>
            <h1 class="uppercase font-semibold pb-5 text-center">
              {{ titleModal }}
            </h1>
            <div class="flex">
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Nombre</span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="text"
                    v-model="user.name"
                  />
                </span>
              </div>
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Apellido</span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="text"
                    v-model="user.lastname"
                  />
                </span>
              </div>
            </div>
            <div class="flex">
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Edad</span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="text"
                    v-model="user.age"
                  />
                </span>
              </div>
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Apodo</span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="text"
                    v-model="user.nickname"
                  />
                </span>
              </div>
            </div>
            <div class="flex">
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Correo </span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="text"
                    v-model="user.email"
                  />
                </span>
              </div>
              <div class="px-2">
                <span class="flex shadow-md mb-5 text-xs">
                  <span
                    class="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l"
                    >Contraseña</span
                  ><input
                    class="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
                    type="password"
                    v-model="user.password"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-700 hover:text-green-700 text-base font-medium text-white hover:bg-white hover:border-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 sm:ml-3 sm:w-auto sm:text-sm"
            v-on:click="postUpdate"
          >
            {{ nameButton }}
          </button>
          <button
            type="button"
            class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            v-on:click="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const initialUser = {
  id: "",
  name: "",
  lastname: "",
  nickname: "",
  age: "",
  email: "",
  password: "",
};

export default {
  props: {
    showModal: Boolean,
    urlAPI: String,
    allUsers: Array,
    userToUpdata: Object,
    dinamicsTitles: Object,
  },
  beforeUpdate() {
    this.user = this.userToUpdata;
    this.idToUpdate = this.userToUpdata.id;
    this.titleModal = this.dinamicsTitles.titleModal;
    this.nameButton = this.dinamicsTitles.titleButton;
  },
  data() {
    return {
      user: initialUser,
      idToUpdate: "",
      titleModal: "",
      nameButton: "",
    };
  },
  methods: {
    postUpdate() {
      if (this.idToUpdate == "") {
        this.postUser();
      } else {
        this.updateUser();
      }
    },
    async postUser() {
      await axios
        .post(`${this.urlAPI}/user`, this.user)
        .then((response) => {
          let newAllUsers = this.allUsers.concat(response.data.data);
          this.$emit("close", false);
          this.sendNewData(newAllUsers);
          this.$emit("userEmpty", initialUser);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updateUser() {
      try {
        await axios.put(`${this.urlAPI}/user/${this.idToUpdate}`, {
          ...this.user,
        });
        this.idToUpdate = "";
        this.$emit("close", false);
        this.$emit("userEmpty", initialUser);
      } catch (error) {
        console.log(error);
      }
    },
    closeModal() {
      this.$emit("close", false); //Change value child to parend type-boolean
      this.$emit("userEmpty", initialUser);
      this.$emit("chageTitles", {
        titleModal: "REGISTRAR USUARIO",
        titleButton: "AGREGAR",
      });
    },
    sendNewData(newData) {
      this.$emit("getNewData", newData); //Change value child to parend type-array
    },
  },
};
</script>

<style></style>
