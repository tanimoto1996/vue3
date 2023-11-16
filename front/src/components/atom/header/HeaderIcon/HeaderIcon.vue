<script setup lang="ts">
import { computed } from 'vue';
import type { HeaderIconProps } from './type';

const props = withDefaults(defineProps<HeaderIconProps>(), {
    width: 30
})

const computedStyles = computed<{}>(() => {
    return {
        width: `${props.width}px`
    }
})

</script>

<template>
    <span class="c-header-icon" :style="computedStyles">
        <img src="./../../../../assets/twitter.png" alt="">
    </span>
</template>

<style lang="scss">
.c-header-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    img {
        width: 100%;
    }
}
</style>

