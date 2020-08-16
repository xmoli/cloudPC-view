<template>
<keep-alive>
<div>
    <tip-box :message="message"/>
    <appbar class="file-option" @error="message={message:$event}" >
        <button class="download">下载</button>
        <label class="upload" for="upload-input" @change="upload">
                上传
        </label>
        <input hidden type="file" id="upload-input"/>
        <button>移动</button>
        <button>重命名</button>
        <button>删除</button>
        <button>属性</button>
        <file-option/>
    </appbar>
    <fetch-progress :status="progress"/>
    <sidebar/>
    <content-file class="file-content"
        :items="items"
        @find="getFilelist"
        @download="download"
    />
</div>
</keep-alive>
</template>
<script>
import getToken from '../token/getToken'
export default {
    components: {
        "appbar": ()=> import("../components/Appbar"),
        "sidebar": ()=> import("../components/sidebar/Sidebar"),
        "content-file": ()=> import("../components/Filecontent"),
        "tip-box": ()=> import("../components/Messagebox"),
        "file-option": ()=> import("../components/FileOption"),
        "fetch-progress": ()=> import('../components/FetchProgress')
    },
    data () {
        return {
            data: [],
            message: {},
            progress: false,
            headers: null
        }
    },
    created() {
        document.title = "ADMIN | 文件"
        let headers = new Headers()
        headers.append("X-Auth-Token", getToken())
        this.headers = headers
        this.getFilelist()
    },
    computed: {
        items() {
            let data = this.data
            data.sort((c,n)=> c.length - n.length)
            let folder = []
            let file = []
            for(let i =0; i<data.length; i++){
                if (data[i].type === "folder"){
                    folder.push(data[i])
                } else {
                    file.push(data[i])
                }
            }
            return folder.concat(file)
        }
    },
    methods: {
        getFilelist(path="/") {
            this.progress = true
            fetch('/api/v1/file/find',{
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({path: path})
            })
            .then(res=> res.json() )
            .then(json =>{
                if(json.error) {
                    this.message = {message: json.error}
                } else {
                    this.data = json.data
                    this.progress = false
                }
            })
            .catch(err => {this.message = {message: err}})
        },
        download(item) {
            this.progress = true
            fetch(`/api/v1/file?path=${item.path}`,{
                method:"GET",
                headers: this.headers
            })
            .then(res => res.blob())
            .then(blob => {
                let link = document.createElement('a')
                link.download = item.name
                link.href = URL.createObjectURL(blob)
                link.click()
                this.progress = false
            })
            .catch(err=>{
                this.message = {message: err}
            })
        },
        remove(path){
            this.progress = true
            fetch('/api/v1/file',{
                method: "POST",
                headers: this.headers,
                body: JSON.stringify({
                    path: path
                })
            })
            .then(res => res.json())
            .then(json => {
                if (json.error){
                    this.message = {message: json.error}
                }else{
                    this.message = {message: `${path}已经被删除！`}
                }
            })
        },
        upload() {
            const i = document.getElementById('upload-input')
            console.log(i)
            let form_data = []
            fetch('/api/v1/file',{
                method: "POST",
                headers: this.headers,
                body: form_data
            })
            .then(res => res.json())
            .then(json => {
                if (json.error){
                    this.message = {message: json.error}
                }else {
                    this.message = {message: `${i}上传完毕！`}
                }
            }).catch(err => {
                this.message = {message: err}
            })
        }
    }
}
</script>
<style scoped>
.file-content {
    background: white;
    border-radius: .25em;
    position: absolute;
    width: 60vw;
    margin-top: 12vh;
    margin-left:15vw;
    overflow-x: hidden;
}
button, .upload{
    display: block;
    letter-spacing: 2px;
    margin-right: .5em;
    border: none;
    background: rgb(207, 207, 207);
    border-radius: .3em;
    padding: 8px;
    width: 5em;
    outline: none;
}
button:hover, .upload:hover{
    cursor: pointer;
}
button:focus, .upload:focus{
        box-shadow: -2px -2px 5px rgba(131, 131, 243, 0.3),
        2px 2px 5px rgba(131, 131, 243, 0.3),
        2px -2px 5px rgba(131, 131, 243, 0.3),
        -2px 2px 5px rgba(131, 131, 243, 0.3);
}
button.download, .upload {
    font-size: inherit;
    background:rgb(0, 26, 110);
    color: white;
}
</style>
<style scoped>
@media only screen and (max-width: 800px){
    .file-option button {
        display: none;
    }
    .file-content {
        background: white;
        position: absolute;
        margin: 0;
        margin-top: 3.5em;
        width: 100%;
        overflow: hidden;
    }
}
</style>