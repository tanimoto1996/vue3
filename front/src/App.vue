<script setup lang="ts">
import {reactive, ref} from "vue"

// 双方向バインディング
const inputTextarea = ref("テキストエリアへの入力文字");
const memberType = ref(1);
const memberTypeSelect = ref(1);
const isAgreed = ref(false);
const isAgreed01 = ref(0);
const selectedOS = ref([]);
const selectedOSSelect = ref([]);


</script>

<template>
  <!-- テキストエリア -->
  <textarea v-model="inputTextarea"></textarea>
  <br>

  <!-- ラジオボタン -->
  <section>
    <label for=""><input type="radio" name="memberType" value="1" v-model="memberType">通常会員</label>
    <label for=""><input type="radio" name="memberType" value="2" v-model="memberType">特別会員</label>
    <label for=""><input type="radio" name="memberType" value="3" v-model="memberType">有料会員</label>
    <br>
    <p>選択されたボタン: {{ memberType }}</p>
  </section>
  <br>

  <section>
    <select v-model="memberTypeSelect">
      <option value="1">通常会員</option>
      <option value="2">特別会員</option>
      <option value="3">有料会員</option>
    </select>
    <br>
    <p>選択されたリスト：{{ memberTypeSelect }}</p>
  </section>
  <br>

  <section>
    <label for=""><input type="checkbox" v-model="isAgreed">同意する</label>
    <p>同意の結果：{{ isAgreed }}</p>
  </section>
  <br>

  <section>
    <label for=""><input type="checkbox" v-model="selectedOS" value="1">macOS</label>
    <label for=""><input type="checkbox" v-model="selectedOS" value="2">Windows</label>
    <label for=""><input type="checkbox" v-model="selectedOS" value="3">Linux</label>
    <label for=""><input type="checkbox" v-model="selectedOS" value="4">iOS</label>
    <label for=""><input type="checkbox" v-model="selectedOS" value="5">Android</label>
    <p>選択されたOS：{{ selectedOS }}</p>
  </section>
  <br>

  <section>
    <select v-model="selectedOSSelect" multiple>
      <option value="1">macOS</option>
      <option value="2">Windows</option>
      <option value="3">Linux</option>
      <option value="4">iOS</option>
      <option value="5">Android</option>
    </select>
    <p>選択されたOS：{{ selectedOSSelect }}</p>
  </section>

  <!-- fileはv-modelを使えない -->

 
</template>

<style scoped>


</style>