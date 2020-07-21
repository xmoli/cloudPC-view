<template>
        <div 
            class="menu"
            v-on:click.stop="closeMenu"
            v-on:keyup.esc="closeMenu"
            ref="menu"
        >
            <slot/>
        </div>
</template>

<script>
export default {
    props: {
        open: Boolean
    },
    data () {
        return {
            eventBlur: null
        }
    },
    watch: {
        open (n, old) {
            if (n === true) {
                this.openMenu()
            } else {
                this.closeMenu()
            }
        }
    },
    methods: {
        blur () {
            this.$refs.menu.style.display = "none"
        },
        openMenu () {
            document.addEventListener('click', this.blur, true)
            let ele = this.$refs.menu
            ele.style.display = "block"
            ele.getElementsByTagName('button')[0].focus()
        },
        closeMenu () {
            document.removeEventListener('click', this.blur)
            this.blur()
            this.$emit('close-menu')
        }
    }
}
</script>
<style scoped>
.menu {
    display: none;
    position: absolute;
    z-index: 1000;

    border-radius: 0.2em;
    background: white;
    border: 2px solid rgba(0, 31, 102, 0.35);
    transform: translateX(1em);
}
</style>