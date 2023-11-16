<script setup lang="ts">
import { ref } from 'vue';
import CheerButton from '../components/atom/button/CheerButton/CheerButton.vue';
// import { ButtonVariantProp } from '../components/atom/button/CheerButton/type';
import FormGroupInput from '../components/molecules/form/FormGroupInput/FormGroupInput.vue';
import PageTitle from '../components/atom/pageTitle/PageTitle.vue';
import CheerDivider from '../components/atom/divider/CheerDivider.vue';
import CheerLink from '../components/atom/link/CheerLink/CheerLink.vue';
import CheerLinkWithIcon from '../components/atom/link/CheerLinkWithIcon/CheerLinkWithIcon.vue';
import CheerParagraph from '../components/atom/paragraph/cheerParagraph/CheerParagraph.vue';
import { ButtonVariantProp } from '@/components/atom/button/CheerButton/type';
import AuthLayout from '../layouts/AuthLayout/AuthLayout.vue'

const email = ref('');
const password = ref('');

</script>

<template>
    <AuthLayout class="p-login">
      <PageTitle title="ログイン" href="https://google.com"/>
      <CheerDivider />

      <div class="p-login__container">
        <form class="p-login__form" action="">
          <FormGroupInput
            id="email" 
            label="メールアドレス"
            v-model="email"
            class="input-email"
          />
          <FormGroupInput
            id="password" 
            label="パスワード"
            v-model="password"
            class="input-password"
          />
          <CheerLinkWithIcon class="link-reset-password" text="パスワードを忘れた方" href=""/>
          <CheerButton class="button" text="ボタン"/>

          <CheerParagraph>
            <CheerLink text="利用規約" href=""/>
            及び
            <CheerLink text="プライバシーポリシー" href=""/>
            に同意の上、登録又はログインへお進みください。
          </CheerParagraph>
        </form>
      </div>
    </AuthLayout> 
    <div>メールアドレス：{{ email }}</div>
    <div>パスワード{{ password }}</div>

    <CheerButton text="ボタン"/>
    <CheerButton is-outline text="ボタン"/>
    <CheerButton :variant="ButtonVariantProp.Secondary" text="ボタン"/>
    <CheerButton :variant="ButtonVariantProp.Secondary" is-outline text="ボタン"/>
</template>

<style lang="scss" scoped>
.p-login {
  &__container {
    padding: 40px 16px;
  }
  &__form {    
    display: flex;
    flex-direction: column;
    .input-email {
      margin-bottom: 30px;
    }
    .input-password {
      margin-bottom: 10px;
    }
    .link-reset-password {
      justify-content: flex-end;
    }
    .button {
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
}
</style>
