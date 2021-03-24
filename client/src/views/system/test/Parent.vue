<template>
  <div class="is-centered">
    <b-button type="is-primary is-light" @click="changeStateModal">
      Estado Modal
    </b-button>
    <Child 
    :stateModal="stateModal"
    @can-cancel="handleChangeStateModal($event)"
    />
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components:{
    Child
  },
  data() {
    return{
      stateModal:false
    }
  },
  methods:{
    changeStateModal(){
      this.stateModal = true
    },
    handleChangeStateModal(boolean){
      this.stateModal = boolean
      console.log(boolean)
    }
  }
};
</script>

<style>
</style>