<script lang="ts">
import CheerDivider from '@/components/atom/divider/CheerDivider.vue';
import CheerFooterCopywrite from '../../components/atom/footer/footerCopyWrite/CheerFooterCopyWrite.vue';


</script>

<template>
    <div class="l-base-layout">
        <header class="l-base-layout__header"></header>
        <CheerDivider />

        <slot />
        <footer class="l-base-layout__footer">
            <CheerFooterCopywrite />
        </footer>
    </div>
</template>

<style lang="scss">
.l-base-layout {
    max-width: 400px;
    margin: 0px auto;
}
</style>