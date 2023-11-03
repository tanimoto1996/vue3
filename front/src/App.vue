<script setup lang="ts">
import {reactive, ref} from "vue"

// クリックイベント
const randValue = ref("まだです。");
const onButtonClick = (): void => {
  const rand = Math.round(Math.round(Math.random() * 10));
randValue.value = String(rand);
}

// ホバーイベント
const imgAttributes = reactive({
  src: "/images/logo.svg",
  alt: "Vueのロゴ",
  width: 75,
  height: 75
})

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
}

// prevent修飾子
const msg = ref("未送信");
const onFormSubmit = (): void => {
  msg.value = "送信されました。"
}

// keyEvent
const keyMsg = ref("まだ");
const onEnterKey = (): void => {
  keyMsg.value = "エンターキーが押下されました";
}

const onRightButtonClick = (): void => {
  keyMsg.value = "右クリックされました。";
}

const onShiftClick = (): void => {
  keyMsg.value = "右クリックされました。";
}

</script>

<template>
  <!-- クリックイベント -->
  <section>
    <button v-on:click="onButtonClick">クリック！</button>
    <p>クリックの結果：{{ randValue }}</p>
  </section>

  <!-- ホバーイベント -->
  <section>
    <img v-bind:="imgAttributes" v-on:mousemove="onImgMousemove">
    <p>ポインタの位置： X={{ mousePointerX }}; y={{ mousePointerY }}</p>
  </section>

  <!-- prevent修飾子 -->
  <form action="#" v-on:submit.prevent="onFormSubmit">
    <input type="text" required>
    <button type="submit">送信</button>
  </form>
  <p>{{ msg }}</p>

  <!-- keyEvent -->
  <input type="text" v-on:keydown.enter="onEnterKey"><br>
  <button v-on:click.right="onRightButtonClick">右クリック</button><br>
  <button v-on:click.shift="onShiftClick">シフトを押しながらクリックする</button>
  <p>{{ keyMsg }}</p>
</template>

<style scoped>


</style>