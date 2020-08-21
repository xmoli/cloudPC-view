<template>
    <div class="menu-wrapper"
        v-on:click="closePopbox"
        v-on:keyup.esc="closePopbox"
        ref="popbox"
    >
        <div class="menu"
            @click.stop
            ref="menu"
        >
            <div class="content">
                <slot/>
            </div>
            <button class="close-icon"
                v-on:click="closePopbox"
            >
                <i class="fa fa-close"/>
                关闭
            </button>
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
            document.body.removeAttribute('style')
        },
        openPopbox () {
            let popbox = this.$refs.popbox
            let menu = this.$refs.menu
            popbox.style.display = "flex"
            menu.getElementsByTagName('input')[0].focus()
            document.body.style.overflowY = "hidden"
        }
    }
}
</script>

<style scoped lang="stylus">
@import "../main.styl"
    .menu-wrapper {
        display: none;
        position: fixed;
        z-index: 2000;
        justify-content: center;
        align-items: center;

        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.2);
    }
    .menu {
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 2px solid rgba(19, 19, 255, 0.35);
        border-radius: 0.2em;
        background: white;
        padding: 8px;
        transform: translateY(-2em);
        letter-spacing: 2px;
        @extend .shadow-holo-max
    }
    .content {
        padding: 8px;
    }
    .close-icon {
        color: white;
        background:grey;
        border-radius: 0.25em;
        border: 1px solid transparent;
        padding: 8px;
        margin: 8px;
        line-height: 1em;
    }
    .close-icon:hover {
        cursor: pointer;
    }
</style>