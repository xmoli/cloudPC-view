<template>
        <div 
            v-bind:class="{'menu-hidden': !open, menu: open}"
            v-on:click.stop="$emit('close-menu')"
            ref="menu"
        >
            <slot/>
        </div>
</template>

<script>
export default {
    props: ["open"],
    data () {
        return {
            eventBlur: null
        }
    },
    mounted () {
        
    },
    watch: {
        open (n, o) {
            if (n) {
                document.addEventListener('click', this.blur, true)
            } else if (o){
                document.removeEventListener('click', this.blur)
            }
        }
    },
    methods: {
        blur () {
            if (this.open) {
                this.$emit('close-menu')
            }
        }
    }
}
</script>
<style scoped>
.menu {
    display: block;
    position: absolute;
    z-index: 1000;

    border-radius: 0.3em;
    background: white;
    border: 1px solid rgba(128, 128, 128, 0.397);

    padding: 8px;
    transform: translateY(1em);
}
.menu-hidden {
    display: none;
}
</style>