<template>
    <div class="menu-wrapper"
        v-on:click="closePopbox"
        ref="popbox"
    >
        <div class="menu"
            @click.stop
        >
            <div class="content">
                <slot/>
            </div>
            <div class="close-icon"
                v-on:click="closePopbox"
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
    watch: {
        open (n, old) {
            if (n) {
                this.openPopbox()
            } else {
                this.closePopbox()
            }
        }
    },
    methods: {
        closePopbox () {
            this.$refs.popbox.style.display = "none"
            this.$emit('close')
        },
        openPopbox () {
            this.$refs.popbox.style.display = "flex"
        }
    }
}
</script>

<style scoped>
    .menu-wrapper {
        display: none;
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
        border: 1px solid transparent;
        border-radius: 0.2em;
        background: rgba(255, 255, 255);
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
        padding: 8px;
        margin: 8px;
        line-height: 1em;
    }
    .close-icon:hover {
        cursor: pointer;
    }
</style>