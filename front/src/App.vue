<script setup lang="ts">
import {reactive, ref} from "vue"

const url = ref("https://vuejs.org/");
const isSendButtonDisablesd = ref(true);
const widthOrHeight = ref("height"); // widthに変更される可能性があるのでref関数が必要。
const widthOrHeightValue = ref(100);

const imgAttributes = reactive({
  src: "/images/logo.svg",
  alt: "Vueのロゴ",
  width: 75,
  height: 75
})

const msg = ref("こんちわ―世界");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);


</script>

<template>
  <!-- v-bindディレクティブ -->
  <p><a v-bind:href="url" target="_blank">Vue.jsのサイト</a></p>
  <p><a :href="url" target="_blank">Vue.jsのサイト（省略系）</a></p>  <!-- 省略形は基本的に使わない。 -->
  <p><a v-bind:href="url + 'guide/introduction.html'" target="_blank">Vue.jsガイドページ</a></p>
  <p><a href="{{ url }}">{{ url }}</a></p>  <!-- もちろん、属性の値に変数を使用することは不可なので、ディレクティブを使用する -->

  <!-- 値がない属性に対してのv-bind -->
  <p><button type="button" v-bind:disabled="isSendButtonDisablesd">送信</button></p>

  <!-- テンプレート変数を使用したv-bindの使用例 -->
  <p><img src="./assets/logo.svg" v-bind:[widthOrHeight]="widthOrHeightValue" alt="VueLogo"></p>

  <!-- templateの属性の方が優先される -->
  <p><img v-bind="imgAttributes"></p> <!-- <img src="/images/logo.svg" alt="Vueのロゴ" width="75" height="75"> -->
  <p><img v-bind="imgAttributes" alt="ロゴです～～"></p><!-- <img src="/images/logo.svg" alt="ロゴです～～" width="75" height="75"> -->

  <!-- v-bind:classで値にboolを指定することで、classの表示有無を記述できる -->
  <p v-bind:class="{ textColorRed: isTextColorRed }">
    {{ msg }}
  </p>

  <p v-bind:class="{ textColorRed: isBgColorBlue }">
    {{ msg }}
  </p>
</template>

<style scoped>
.textColorRed {
  color: red;
}

</style>