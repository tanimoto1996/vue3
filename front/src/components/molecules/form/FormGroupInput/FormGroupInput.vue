<script setup lang="ts">
import FormLabel from '@/components/atom/form/FormLabel/FormLabel.vue';
import FormInput from '@/components/atom/form/FormInput/FormInput.vue';
import type { FormGroupInputProps } from './type';

const props = withDefaults(defineProps<FormGroupInputProps>(), {});

const emit = defineEmits(['update:modelValue']);

const onInput = (e: Event): void => {
    const value = (e.target as HTMLInputElement).value;
    emit('update:modelValue', value);
}
</script>

<template>
    <div class="c-form-group-input">
        <FormLabel 
            v-if="props.label"
            :html-for="props.id" 
            :label="props.label"
            class="c-form-group-input__label"
        />
        <FormInput 
            :id="props.id"
            :placeholder="props.placeholder" 
            :model-value="props.modelValue" 
            @input="onInput" 
            :is-error="false"
            class="c-form-group-input__form"
        />
    </div>
</template>

<style lang="scss">
.c-form-group-input {
    display: flex;
    flex-direction: column;
    &__label {
        margin-bottom: 8px;
    }
}
</style>