<script setup lang="ts">
import type {LinkWithIconProps} from './type'

const props = defineProps<LinkWithIconProps>();

</script>


<template>
    <a class="c-link-with-icon" :href="props.href">
        <span class="c-link-with-icon__text">{{ props.text }}</span>
        <span class="c-link-with-icon__icon">></span>
    </a>
</template>

<style lang="scss">
.c-link-with-icon {
    display: inline-flex;
    align-items: center;
    color: blue;
    text-decoration: none;
    line-height: 1.8;
    &__text {
        font-size: 11px;
    }
    &__icon {
        display: inline-block;
        margin-left: 4px;
    }
}
</style>