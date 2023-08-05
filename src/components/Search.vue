<template>
  <div class="text-center">
    <div class="input-group justify-content-center">
      <span class="input-group-text bg-white-transparent rounded-pill rounded-pill-left text-white border border-white border-1 border-end-0" id="basic-addon1">
        <i class="bi bi-google"></i>
      </span>
      <input type="text" name="search" class="bg-white-transparent rounded-pill rounded-pill-right py-2 px-3 border border-white border-1 border-start-0 text-white w-75 fs-5" value="" aria-label="Input group example" aria-describedby="basic-addon1"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.blah();
  },
  methods: {
    blah() {
    },
  },
};
</script>

<style>

input:focus {
    outline-width: 0;
    caret-color: #fff;
}
.rounded-pill-right {
  border-top-left-radius: 0!important;
  border-bottom-left-radius: 0!important;
}
.rounded-pill-left {
  border-top-right-radius: 0!important;
  border-bottom-right-radius: 0!important;
}
</style>