<script setup lang="ts">
import HeaderIcon from '@/components/atom/header/HeaderIcon/HeaderIcon.vue';
import HeaderTitle from '@/components/atom/header/headerTitle/HeaderTitle.vue';
import { HeaderTitleProp } from '@/components/atom/header/headerTitle/type';
</script>

<template>
    <header class="c-header-auth">
        <div class="c-header-auth__container">
            <HeaderIcon :width="50"/>
            <HeaderTitle :title="HeaderTitleProp.Staff"/>
        </div>
    </header>
</template>

<style lang="scss">
.c-header-auth {
    &__container {
        padding: 16px;
    }
}
</style>