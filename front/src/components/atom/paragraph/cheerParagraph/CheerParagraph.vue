<script setup lang="ts">
import { computed } from 'vue';
import {ParagraphVariantProp, type ParagraphProps} from './type'

const props = withDefaults(defineProps<ParagraphProps>(), {
    variant: ParagraphVariantProp.Black
});

const computedClasses = computed<string[]>(() => {
    const classes: string[] = [];

    classes.push(props.variant);

    return classes;
})

</script>


<template>
    <p class="c-paragraph" :class="computedClasses">
        <slot />
    </p>
</template>

<style lang="scss">
.c-link-with-icon {
    display: flex;
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
    &.black {
        color: #333;
    }
    &.white {
        color: #fff;
    }
    &.gray {
        color: gray;
    }
}
</style>