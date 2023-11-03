<script setup lang="ts">
import {reactive, ref, computed} from "vue"

const randomNumber = computed(
  (): number => {
    return Math.round(Math.random() * 100);
  }
);

const randomBool = computed(
  (): Boolean => {
    const randomNum = Math.round(Math.random() * 150);
    return 100 < randomNum;
  }
)

</script>

<template>
  <p>
    点数は{{ randomNumber }}点で
    <span v-if="randomNumber >= 80">優です。</span>
    <span v-else-if="randomNumber >= 70">良です。</span>
    <span v-else-if="randomNumber >= 60">可です。</span>
    <span v-else>不可です。</span>
  </p>
  <br>

  <!--v-if-->
  <section>
    ■v-ifを使用する
    <p v-if="randomBool">
      条件に合致したので表示
    </p>
  </section>
  <br>

  <!-- <p style="display: none;"> 条件に合致したので表示 </p> -->
  <!-- 非表示はにするだけは処理が軽い -->
  <section>
    ■v-showを使用する
    <p v-show="randomBool">
      条件に合致したので表示
    </p>
  </section>
</template>

<style scoped>

</style>