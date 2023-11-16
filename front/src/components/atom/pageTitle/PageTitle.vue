<script setup lang="ts">
import type { PageTitleProps } from './type';

const props = defineProps<PageTitleProps>();
</script>

<template>
    <div class="c-page-title">
        <h2 class="c-page-title__text">{{ props.title }}</h2>
        <a class="c-page-title__link" v-if="props.href" :href="props.href">></a>
    </div>
</template>

<style lang="scss">
.c-page-title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    text-align: center;
    &__text {
        font-size: 16px;
        font-weight: bold;
    }
    &__link {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    }
}
</style>