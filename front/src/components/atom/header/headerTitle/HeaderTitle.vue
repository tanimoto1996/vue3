<script lang="ts" setup>
import { computed } from 'vue';
import { HeaderTitleProp, type HeaderTitleProps } from './type';

const props = defineProps<HeaderTitleProps>();

const computedTitle = computed<string>(() => {
    const {title} = props;
    switch(title) {
        case HeaderTitleProp.Bussiness:
            return 'チアペイビジネス';
        case HeaderTitleProp.Corporation:
            return 'チアペイ法人';
        case HeaderTitleProp.Staff:
            return 'チアペイスタッフ';
        case HeaderTitleProp.User:
            return 'チアペイ投げ銭ユーザー';
        default:
            return '';
    }
})

</script>

<template>
    <h1 class="c-header-title">{{ computedTitle }}</h1>    
</template>

<style lang="scss">
.c-header-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
}
</style>