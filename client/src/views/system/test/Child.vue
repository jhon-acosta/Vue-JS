<template>
  <section>
    <b-modal v-model="this.stateModal" full-screen class="columns is-centered" style="background: #fff;">
      <div class="column is-half">
        <iframe
          width="800"
          height="420"
          src="https://www.youtube.com/embed/41GqAl3lTrY?autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
        <b-button label="Cerrar" @click="setStateModal" />
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  props: {
    stateModal: Boolean,
  },
  methods: {
    setStateModal() {
      return this.$emit("can-cancel", false);
      // return this.$parent.close();
    },
  },
};
</script>

<style>
</style>