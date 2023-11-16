<script lang="ts">
import CheerFooterCopywrite from '../../components/atom/footer/footerCopyWrite/CheerFooterCopyWrite.vue';
import CheerHeaderAuth from '../../components/organizms/header/HeaderAuth/CheerHeaderAuth.vue';


</script>

<template>
    <div class="l-auth-layout">
        <CheerHeaderAuth />
        <slot />
        <footer class="l-auth-layout__footer">
            <CheerFooterCopywrite />
        </footer>
    </div>
</template>

<style lang="scss">
.l-auth-layout {
    max-width: 400px;
    margin: 0px auto;
}
</style>