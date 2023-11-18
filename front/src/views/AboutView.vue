<script setup lang="ts">
import { reactive } from 'vue';
import BaseLayout from '../layouts/BaseLayout/BaseLayout.vue';
import PageTitle from '../components/atom/pageTitle/PageTitle.vue';
import CheerDivider from '@/components/atom/divider/CheerDivider.vue';
import FormGroupInput from '@/components/molecules/form/FormGroupInput/FormGroupInput.vue';

const state = reactive<Person>({ email: '', password: '' });

interface Person {
    email: string,
    password: string
}

</script>

<template>
    <BaseLayout>
        <PageTitle title="ログイン" href="https://google.com"/>
        <CheerDivider class="border"/>

        <div class="p-login__container">
        <form class="p-login__form" action="">
          <FormGroupInput
            id="email" 
            label="メールアドレス"
            v-model="state.email"
            class="input-email"
          />
          <FormGroupInput
            id="password" 
            label="パスワード"
            v-model="state.password"
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
        
    </BaseLayout>
</template>

<style scoped lang="scss">
    .border {
        margin-bottom: 10px;
    }
</style>
