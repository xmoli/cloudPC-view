<template>
    <div class="appbar">
        <div class="sidebar-blank-box"/>
        <div class="search-box">
            <Searchbar @search="search"/>
        </div>
        <div class="page-tool-box">
            <slot/>
        </div>
        <div class="message-box">
            <Message @error="$emit('error',$event)"/>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Appbar',
    components: {
        Searchbar: ()=> import('./Searchbar.vue'),
        Message: ()=> import('./Message.vue'),
    },
    methods: {
        search (keyword) {
            this.$emit('search',keyword)
        }
    }
}
</script>
<style scoped>
    .appbar {
        position: fixed;
        width: 100vw;
        height: 4em;
        min-height: 2.5em;
        z-index: 1100;

        background: white;
        margin: 0;
        
        display: flex;
        align-items: center;
    }
    .search-box {
        overflow: hidden;
    }
    .page-tool-box {
        display: flex;
        justify-content: center;
    }
</style>
<style scoped>
@media only screen and (min-width: 800px){
    .sidebar-blank-box {
        width: 12vw;
    }

    .message-box {
        min-width: 3em;
        display: flex;
        justify-content: flex-end;
    }
}
</style>
<style scoped>
@media only screen and (max-width: 800px) {
    .message-box{
        display: none;
    }
    .appbar{
        justify-content: space-around;
        height: 3.5em;
        background: rgb(42, 45, 70);
    }
}
</style>