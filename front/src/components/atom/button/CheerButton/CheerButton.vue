<script setup lang="ts">
import { computed } from 'vue';
import { ButtonVariantProp, type ButtonProps } from './type';

const props = withDefaults(defineProps<ButtonProps>(),{
    variant: ButtonVariantProp.Primary,
    type: 'button',
    isOutline: false,
});

const computedClasses = computed<string[]>(() => {
    const classes: string[] = [];

    classes.push(props.variant);

    if(props.isOutline) {
        classes.push('is-outlined');
    }

    return classes;
})

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const onClick = () => {
  emit("click")
};

</script>

<template>
    <button class="c-button" :class="computedClasses" @click="onClick">
        {{ props.text }}
    </button>
</template>

<style lang="scss" scoped>
.c-button{
    cursor: pointer;
    box-sizing: border-box;
    height: 40px;
    border-radius: 4px;
    border: none;
    border: solid 1px;
    min-width: 120px;
    font-weight: bold;
    &.primary {
        color: white;
        background-color: blue;
        border-color: blue;
        &.is-outlined {
            background-color: white;
            border-color: blue;
            color: blue;
        }
    }
    &.secondary {
        color: white;
        background-color: black;
        border-color: black;
        &.is-outlined {
            color: black;
            background-color: white;
            border-color: black;
        }
    }
}
</style>