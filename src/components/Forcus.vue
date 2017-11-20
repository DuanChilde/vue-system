<template>
  <div class="forcus">
  <head-component activeIndex="3"></head-component>
  <div class="line"></div>
    
  </div>
</template>

<script>
export default {
  name: 'Forcus',
  data () {
    return {

    }
  },
  methods: {
  handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
  }
}
</script>

<style scoped>

</style>
