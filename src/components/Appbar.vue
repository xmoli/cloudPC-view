<template>
    <div class="appbar">
        <div class="sidebar-blank-box"/>
        <div class="search-box">
            <Searchbar />
        </div>
        <div class="page-tool-box">
            <slot/>
        </div>
        <div class="message-box">
            <Message/>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Appbar',
    components: {
        Searchbar: ()=> import('./Searchbar.vue'),
        Message: ()=> import('./Message.vue'),
    }
}
</script>
<style scoped>
    .appbar {
        position: fixed;
        width: 100vw;
        height: 9vh;
        min-height: 2.5em;
        z-index: 1000;

        background: white;
        margin: 0;
        
        display: flex;
        align-items: center;
    }
    .appbar div {
        margin: 0 16px;
    }
    .sidebar-blank-box {
        width: 12vw;
    }
    .search-box {
        overflow: hidden;
    }
    .page-tool-box {
        display: flex;
        justify-content: center;
    }
    .message-box {
        min-width: 3em;
        display: flex;
        justify-content: flex-end;
    }
</style>