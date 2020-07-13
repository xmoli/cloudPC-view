<template>
    <form v-on:submit.prevent="submit">
        <label>
            <i class="fa fa-user"/>
            <input 
                v-model="username"
                v-on:change="checkUsernameInput"
                autofocus="autofocus" 
                placeholder="邮箱"
            />
            <i class="fa fa-times-circle"
                v-if="check.usernameInputError"
            />
            <i
                class="fa fa-check-circle"
                v-else-if="check.usernameInput"
            />
        </label>
        <label>
            <i class="fa fa-lock" />
            <input 
                v-model="password"
                v-on:change="checkPasswordInput"
                type="password" 
                placeholder="密码"
            />
            <span class="input-error" v-if="check.passwordInputError">
                <i class="fa fa-times-circle" />
            </span>
            <span v-else-if="check.passwordInput">
                <i class="fa fa-check-circle"/>
            </span>
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
            <input v-else type="submit" value="注册并登录"
                v-on:click="submit"
            />
        </label>
    </form>
</template>

<script>
import isEmail from '../util/isEmail'

export default {
    name: 'Login',
    data (){
        return {
            login: true,
            username: '',
            password: '',
            keep: false,
            check: {
                hasChecked: false,
                usernameInput: false,
                passwordInput: false,
                passwordInputError: null,
                usernameInputError: null,
            },
            error: ''
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
        async userLogin (userInfo) {
            const res = await fetch("api/user/login",{
                method: "POST",
                body: JSON.stringify(userInfo)
            })
            const json = await res.json()
            if (json.error) {
                this.error = res.error
                return false
            } else {
                sessionStorage.setItem("server-admin-sessionId", json.Token)
                return true
            }
        },
        async userRegister (userInfo) {
            const res = await fetch("api/user/register",{
                method: "POST",
                body: JSON.stringify(userInfo)
            })
            if (res.ok) {
                const ok = await this.userLogin(userInfo)
                if (ok) {
                    this.$router.push('/')
                }
            } else {
                this.error = res.statusText
            }
        },
        async submit () {
            let username = this.username.trim(),
                password = this.password
            const userInfo = {
                username,
                password
            }

            if (this.login && this.validateAll()) {
                const ok = await this.userLogin(userInfo)
                if (ok) {
                    this.$router.push('/')
                }
                this.tryKeepOnline()
            } else if (this.check.hasChecked) {
                const err = await this.userRegister(userInfo)
                this.tryKeepOnline()
            }
            
        },
        tryKeepOnline () {
            if (this.keep) {
                const sessionId = sessionStorage.getItem("admin-server-sessionId")
                localStorage.setItem("admin-server-sessionId", sessionId)
                return true
            }
        },
        validateAll () {
            if (this.check.usernameInput && this.check.passwordInput) {
                this.check.hasChecked = true
                return true
            }
            else {
                this.check.hasChecked = false
                return false
            }
        },
        checkUsernameInput () {
            if (this.username) {
                this.check.usernameInput = true
                this.check.usernameInputError = null
            } else {
                this.check.usernameInput = false
                this.check.usernameInputError = "请输入合法的邮箱地址"
            }
        },
        checkPasswordInput () {
            if (this.password.length >= 6) {
                this.check.passwordInput = true
                this.check.passwordInputError = null
            } else {
                this.check.passwordInput = false
                this.check.passwordInputError = "长度不够"
            }
        }
    }
}
</script>

<style scoped>

@media screen and (min-width: 1000px){ 
    form {
        width: 30em;
        height: 18.54em;
        min-width: 15em;
    }
}
@media screen and (max-width: 720px){
    form {
        width: 12.36em;
        height: 20em;
        min-width: 19em;    
    }
}
@media screen and (max-height: 450px){
    form {
        height: 11em;
    }
}
    form {   
        position: absolute;
        top: 50vh;
        left: 50vw;
        transform: translate(-50%,-50%);
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
        color: rgb(22, 77, 148);
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
        width: 16em;
        padding: 0 8px 0 2.5em;
        border-radius: 0.25em;
    }
    .fa-times-circle {
        color: red;
    }
    .fa-check-circle {
        color: green;
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
        background: rgb(22, 77, 148);
        color: white;
        padding: 0;
        font-weight: bold;       
    }
    .submit input:hover {
        cursor: pointer;
    }
</style>