<template>
    <div class="tip-box">
        {{tips}}
        <i class="fa fa-close"/>
    </div>
</template>
<script>
export default {
    props: ['tips'],
    methods: {
        
    }
}
</script>
<style scoped>
.tip-box .hidden {
    top: -1em;
}
.tip-box {
    position: fixed;
    z-index: 2000;
    border-radius: .3em;
    padding: .8em;
    top: 1em;
    right: 1em;
    background: rgb(12, 12, 114);

    transition: all .3s ease-out;
}
.tip-box .fa-close {
    color: white;
}
.tip-box .fa-close:hover {
    cursor: pointer;
}
</style>