<template>
    <form v-on:submit.prevent="submit">
        <label>
            <i class="fa fa-user"/>
            <input 
                v-model="username"
                autofocus="autofocus" 
                placeholder="用户名/邮箱"
                />
        </label>
        <label>
            <i class="fa fa-key" />
            <input 
                v-model="password"
                type="password" 
                placeholder="密码"
            />
        </label>
        <div class="info">
            <a v-if="login" v-on:click="toggleLogin" >没有账号？注册</a>
            <a v-else v-on:click="toggleLogin">已有有账号？登录</a>
            <label class="keep">
                <span>保持登录</span>
                <input 
                    v-model="keep"
                    type="checkbox"
                />
            </label>
        </div>
        <label class="submit">
            <input v-if="login" type="submit" value="登录"/>
            <input v-else type="submit" value="注册"/>
        </label>
    </form>
</template>

<script>
export default {
    name: 'Login',
    data (){
        return {
            login: true,
            username: null,
            password: null,
            keep: false
        }
    },
    created () {
        if (this.login) {
            document.title = 'admin - 登录'
        } else {
            document.title = 'admin - 注册'
        }
    },
    updated () {
        if (this.login) {
            document.title = 'admin - 登录'
        } else {
            document.title = 'admin - 注册'
        }
    },
    methods: {
        toggleLogin () {
            this.login = ! this.login
        },
        submit () {
            if (this.login) {
                console.log('login...',this.username,this.password)
            } else {
                console.log('register...',this.username,this.password)
            }
        }
    }
}
</script>

<style scoped>
    form {
        width: 25vw;
        min-width: 15em;
        position: absolute;
        top: 50vh;
        left: 50vw;
        transform: translate(-55%, -55%);

        display: flex;
        flex-direction:column;
        justify-content: center;
        flex-wrap: nowrap;
        background: rgba(255, 255, 255, 0.822);

        border-radius: 0.3em;
        padding: 3em 0;
    }
    label {
        color:rgb(117, 117, 117);
        padding: 8px;
        margin: 16px 0;
    }
    .fa {
        position: absolute;
        margin: 0.5em;
        margin-top: 0.7em;
        color: rgba(22, 77, 148);
        z-index: 2001;
    }
    label:hover {
        cursor: text;
    }
    input {
        z-index: 2000;
        border: none;
        background: rgb(209, 209, 209);
        outline: none;
        height: 3em;
        width: 13em;
        padding: 0 8px 0 2.5em;
        border-radius: 0.25em;
    }
    .info {
        color:rgb(117, 117, 117);
        font-size: 0.7em;
        display: flex;
        justify-content: space-around;
        align-items: center;
        
    }
    a:hover {
        cursor: pointer;
    }
    .info label{
        margin: 0;
        padding: 0;
    }
    .keep {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .keep input {
        width: 1.25em;
        height: 1.25em;
    }
    .keep input:hover {
        cursor: text;
    }
    .submit input {
        background: rgba(22, 77, 148);
        color: white;
        padding: 0;
        font-weight: bold;       
    }
    .submit input:hover {
        cursor: pointer;
    }
</style>