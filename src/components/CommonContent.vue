<template>
    <div class="container">
        <ul>
            <li v-for="item in items" :key="item.name">
                {{item}}
            </li>
        </ul>
        <div class="detail">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        padding: 1em 16px;
    }
    ul {
        border-radius: 0.25em;
        background: white;
        width: 50%;
        margin: 0 8px 0 8px;
    }
    li {
        border-top: 1px solid rgba(185, 185, 185, 0.562);
        padding: 1em 16px;
    }
    li:hover {
        background: rgba(4, 66, 148, 0.342);
    }
    li:first-child {
        border:none;
        border-radius: 0.3em 0.3em 0 0;
    }
    li:last-child {
        border-radius: 0 0 0.3em 0.3em;
    }
    .detail {
        padding: 1em;
        width: 50%;
        margin: 0 8px 0 8px;
        background: white;
        border-radius: 0.3em;
    }
</style>