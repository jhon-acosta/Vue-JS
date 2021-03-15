<template>
  <div id="app" class="flex h-screen w-full">
    <CreateUsers msg="Welcome to Your Vue.js App" />
    <ListUsers msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import ListUsers from "./components/ListUsers.vue";
import CreateUsers from "./components/CreateUsers.vue";

export default {
  name: "App",
  components: {
    ListUsers,
    CreateUsers,
  },
};
</script>

<style></style>
