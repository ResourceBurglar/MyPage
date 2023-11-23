<script setup>
defineProps({
  content:String
})




</script>

<template>
  <div class="right">
    <slot></slot>
  </div>
</template>

<style scoped>
  .right {
    /* border-left: 1px solid black; */
    /* border: 1px solid black; */
    float: right;
    width: 17%;
    margin-top: 20px;
    
  

  }
</style>