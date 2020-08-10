<template>
<div>
    <tip-box :tips="tips"/>
    <appbar>
        <button class="download">下载</button>
        <button>移动</button>
        <button>重命名</button>
        <button>删除</button>
        <button>属性</button>
    </appbar>
    <sidebar/>
    <content-file class="content-file" :items="items"/>
</div>
</template>
<script>
import getToken from '../util/getToken'
export default {
    components: {
        "appbar": ()=> import("../components/Appbar"),
        "sidebar": ()=> import("../components/sidebar/Sidebar"),
        "content-file": ()=> import("../components/Filecontent"),
        "tip-box": ()=> import("../components/Tipbox")
    },
    data () {
        return {
            data: [],
            items: [],
            tips: [],
        }
    },
    created() {
        document.title = "ADMIN | 文件"
        this.getFilelist()
    },
    methods: {
        getFilelist() {
            fetch('/api/v1/file/find',{
                method: "POST",
                headers: {
                    "X-Auth-Token": getToken()
                }
            })
            .then(res=> res.json())
            .then(json =>{
                if(json.error) {
                    console.log(json.error)
                } else {
                    this.items = json.data
                }
            })
        }
    }
}
</script>
<style scoped>
.content-file {
    background: white;
    border-radius: .25em;
    position: absolute;
    margin: 15vh 0 0 18vw;
    width: 60vw;
}
button {
    letter-spacing: 2px;
    margin-right: .5em;
    border: none;
    background: rgb(207, 207, 207);
    border-radius: .3em;
    padding: 8px;
    width: 5em;
    outline: none;
}
button:hover {
    cursor: pointer;
}
button:focus {
        box-shadow: -2px -2px 5px rgba(131, 131, 243, 0.3),
        2px 2px 5px rgba(131, 131, 243, 0.3),
        2px -2px 5px rgba(131, 131, 243, 0.3),
        -2px 2px 5px rgba(131, 131, 243, 0.3);
}
button.download {
    padding: .7em;
    background:rgb(0, 26, 110);
    color: white;
    border:none;
    border-radius: .25em;
}
</style>