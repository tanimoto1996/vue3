<script setup lang="ts">
import { computed } from 'vue';
import type { FormInputProps } from './type';

const props = withDefaults(defineProps<FormInputProps>(), {});

const computedClasses = computed<string[]>(() => {
    const classes: string[] = [];

    if(props.isError) {
        classes.push('is-error');
    }

    return classes;
})

const emit = defineEmits(['update:modelValue']);

const onInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    emit('update:modelValue', value);
}

</script>

<template>
    <input 
        :id="props.id" 
        :class="computedClasses"
        class="c-form-input" 
        type="text"
        :placeholder="props.placeholder"
        :value="props.modelValue" 
        @input="onInput"
    >
</template>

<style lang="scss">
.c-form-input {
    height: 40px;
    border: none;
    border: solid 1px;
    border-color: gray;
    border-radius: 4px;
    padding: 0 16px;
    max-width: 100%;
    &.is-error {
        border-color: red;
    }
}
</style>