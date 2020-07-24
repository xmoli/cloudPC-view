<template>
    <div class="container">
        <ul class="list-head">
            <li>
                <span>级别</span>
                <span>信息</span>
                <span>类型</span>
                <span>时间</span>
                <span/>
            </li>
        </ul>
        <ul class="list-body">
            <li v-for="(item, index) in items" :key="index">
                <span>
                    {{item.Level}}
                </span>
                <span>
                    {{item.Message}}
                </span>
                <span>
                    {{item.Node}}
                </span>
                <span>
                    {{item.Ctime}}
                </span>
                <span>
                    展开控件
                </span>
                <div class="list-content">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ["items"],
    
}
</script>