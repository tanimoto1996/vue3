<script lang="ts">
import CheerHeaderAuth from '../../components/organizms/header/HeaderAuth/CheerHeaderAuth.vue';
import CheerFooterCopywrite from '../../components/atom/footer/footerCopyWrite/CheerFooterCopyWrite.vue';

export default {
    name: 'BaseLayout',
    components: {
        CheerHeaderAuth,
        CheerFooterCopywrite
    }
};
</script>

<template>
    <div class="l-base-layout">
        <CheerHeaderAuth />

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