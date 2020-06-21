<template>
    <div>
    <div class="menu-wrapper"
        v-on:click="closeMenu"
    >
        <div class="menu">
            <slot/>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeMenu () {

        }
    }
}
</script>

<style scoped>
    .menu-wrapper {
        display: none;
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.1);
    }
    .menu {
        display: none;
        position: absolute;
        overflow: hidden;
        border: 1px solid grey;
        box-shadow: 1px 1px 2px 2px grey;
        border-radius: 0.3em;
        background: rgba(255, 255, 255, 0.8);
        z-index: 1000;
    }
    .menu::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: inherit;
        filter: blur(10px);
        z-index: 2000;
    }
</style>