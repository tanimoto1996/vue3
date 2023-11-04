<script setup lang="ts">
import {reactive, ref, computed} from "vue"

// 単純配列のv-for
const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const cocktailList = ref(cocktailListInit);

// MAP関数でのv-for
const mapListInit = new Map<number, string>();
mapListInit.set(2345, "ホワイトレディ");
mapListInit.set(3345, "ブラックレディ");
mapListInit.set(4345, "ピンクレディ");
const mapList = ref(mapListInit);

// typecriptのinterfaceを使用した型宣言
const faceList: face[] = [
  { id: 2345, name: "ホワイトレディ", price: 1200 },
  { id: 3345, name: "ブラックレディ", price: 2200 },
  { id: 4345, name: "ピンクレディ", price: 3200 },
  { id: 5345, name: "ブラウンレディ", price: 4200 },
];

interface face {
  id: number;
  name: string;
  price: number;
}


</script>

<template>
  <!-- 単純配列のv-for -->
  <ul>
    <li v-for="cocktailName in cocktailList" v-bind:key="cocktailName">
      {{ cocktailName }}
    </li>
  </ul>

  <ul>
    <li v-for="(cocktailName, index) in cocktailList" v-bind:key="cocktailName">
      {{ cocktailName }}（インデックス{{ index }}）
    </li>
  </ul>

  <!-- MAP関数でのv-for -->
  <ul>
    <li v-for="[id, name] in mapList" v-bind:key="id">
      IDが{{ id }}のカクテルは{{ name }}です！
    </li>
  </ul>

  <!-- typecriptのinterfaceを使用した型宣言 -->
  <ul>
    <li v-for="item in faceList" v-bind:key="item.id">
      {{ item.name }}の値段は{{ item.price }}円で～す（{{ item.id }}）
    </li>
  </ul>

  <!-- セレクトボックスで年数を表示する -->
  <select>
    <option v-for="year in 60" v-bind:key="year" v-bind:value="year + 1965">
      {{ year + 1965 }}年
    </option>
  </select>
</template>

<style scoped>

</style>