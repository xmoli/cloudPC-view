<template>
        <div 
            class="menu"
            @keyup.esc="closeMenu"
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
        openMenu () {
            document.addEventListener('click', this.closeMenu, true)
            let ele = this.$refs.menu
            ele.style.display = "block"
            ele.getElementsByTagName('button')[0].focus()
        },
        closeMenu () {
            document.removeEventListener('click', this.closeMenu, true)
            this.$refs.menu.style.display = "none"
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

    border-radius: 0.25em;
    background: white;
    border: 2px solid rgba(0, 31, 102, 0.35);
}
</style>