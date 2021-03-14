const app = new Vue({
  el: "#app",
  data: {
    name: "JHON",
    lastname: "ACOSTA",
    numberOne: 15,
    numberTwo: 25,
    show: true,
    clients: [
      { name: "Maria", payment: 25 },
      { name: "Pao", payment: 18 },
      { name: "Jhon", payment: 19 },
      { name: "Kevin", payment: 25 },
      { name: "Dome", payment: 20 },
    ],
    sendHTML: "<h1>By App</h1>",
    status: false,
    message: "Learning Vue JS",
  },
  computed: {
    greetings: (text) => {
      alert(`Buenas ${text}`);
      //save cache and no load again
    },
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
