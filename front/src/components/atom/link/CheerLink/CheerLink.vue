<script setup lang="ts">
import type {LinkProps} from './type'

const props = defineProps<LinkProps>();

</script>


<template>
    <a class="c-link" :href="props.href">{{ props.text }}</a>
</template>

<style lang="scss">
.c-link {
    display: inline-block;
    align-items: center;
    color: blue;
    text-decoration: none;
    line-height: 1.8;
    &__text {
        font-size: 11px;
    }
}
</style>