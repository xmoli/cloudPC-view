<template>
        <div 
            class="menu"
            v-on:click.stop="$emit('close-menu')"
            ref="menu"
        >
            <slot/>
        </div>
</template>

<script>
export default {
    props: {
        position: {
            x: Number,
            y: Number,
            open: Boolean
        }
    },
    data () {
        return {
            eventBlur: null
        }
    },
    mounted () {
        this.$refs.menu.style.display = "none"
    },
    watch: {
        position (n, o) {
            if (n.open) {
                this.open()
            } else {
                this.close()
            }
        }
    },
    methods: {
        blur () {
            this.$refs.menu.style.display = "none"
        },
        open () {
            let eleStyle = this.$refs.menu.style
            eleStyle.display = "block"
            eleStyle.position = "absolute"
            eleStyle.top = this.position.y+'px'
            eleStyle.left = this.position.x+'px'
            document.addEventListener('click', this.blur, true)
        },
        close () {
            document.removeEventListener('click', this.blur)
        }
    }
}
</script>
<style scoped>
.menu {
    display: block;
    position: absolute;
    z-index: 1000;

    border-radius: 0.2em;
    background: white;
    border: 1px solid rgba(128, 128, 128, 0.3);
    transform: translateY(1em);
}
</style>