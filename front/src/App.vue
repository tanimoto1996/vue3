<script setup lang="ts">
import { ref, reactive, computed } from "vue";

// 現在時刻
const now = new Date();
const nowStr = now.toLocaleTimeString();
let timeStr = nowStr;
const timeStrRef = ref(nowStr);

function changeTime(): void {
  const newTime = new Date();
  const newTimeStr = newTime.toLocaleTimeString();
  timeStrRef.value = newTimeStr;
}
setInterval(changeTime, 1000);

// 円の計算

const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
});

const area = computed(
  ():number => {
    return data.radius * data.radius * data.PI;
  }
);

setInterval(
  ():void => {
    data.radius = Math.round(Math.random() * 10);
  },
  1000
);

</script>

<template>
  <h1>時刻</h1>
  <p>現在時刻： {{ timeStr }}</p>
  <p>現在時刻(ref)： {{ timeStrRef }}</p>

  <h1>円周率</h1>
  <p>半径{{ data.radius }}の円の面積を円周率{{ data.PI }}で計算すると、{{ area }}になる</p>

</template>