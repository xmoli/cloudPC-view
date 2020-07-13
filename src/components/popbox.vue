<template>
    <div class="menu-wrapper"
        v-on:click="closeMenu"
        ref="popbox"
    >
        <div class="menu">
            <div class="content">
                <slot/>
            </div>
            <div class="close-icon"
                v-on:click="closeMenu"
            >
                <i class="fa fa-close"/>
                关闭
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        open: Boolean
    },
    mounted() {
        if (this.open) {
            this.$refs.popbox.style.display = "flex"
        } else {
            this.$refs.popbox.style.display = "none"
        }
    },
    methods: {
        closeMenu () {

        }
    }
}
</script>

<style scoped>
    .menu-wrapper {
        display: flex;
        position: absolute;
        z-index: 2000;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
    }
    .menu {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(1, 0, 58, 0.5);
        border-radius: 0.2em;
        background: rgba(255, 255, 255, 0.8);
        padding: 8px;
        transform: translateY(-2em);
    }
    .content {
        padding: 8px;
    }
    .close-icon {
        color: white;
        background:rgb(172, 0, 0);
        border-radius: 0.2em;
        padding: 4px;
        line-height: 1em;
    }
    .close-icon:hover {
        cursor: pointer;
    }
</style>