<script setup lang="ts">
import {reactive, ref} from "vue"


const price = ref(1000);
</script>

<template>
  <section>
    <input type="number" v-model="price">円<br>
    <p>金額は{{ price }}です</p>
    <p v-once>金額は{{ price }}円です（初期値から変化しない）</p>
  </section>

 
</template>

<style scoped>


</style>