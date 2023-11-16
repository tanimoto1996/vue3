<script setup lang="ts">
import type { FormLabelProps } from './type';

const props = withDefaults(defineProps<FormLabelProps>(), {});

</script>

<template>
    <label class="c-form-label" :for="props.htmlFor">{{ props.label }}</label>
</template>

<style lang="scss">
.c-form-label {
    font-size: 14px;
    font-weight: bold;
}
</style>