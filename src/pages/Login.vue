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
            <i class="fa fa-key" />
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
            <input v-else type="submit" value="注册并登录"/>
        </label>
    </form>
</template>

<script>
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
            if (res.ok) {
                const json = await res.json()
                this.$sessionId = json.sessionId
                this.$router.push('/')
            } else {
                this.error = res.statusText
            }
        },
        async userRegister (userInfo) {
            const res = await fetch("api/user/register",{
                method: "POST",
                body: JSON.stringify(userInfo)
            })
            if (res.ok) {
                await this.userLogin(userInfo)
            } else {
                this.error = res.statusText
            }
        },
        async submit () {
            let username = this.username,
                password = this.password
            const userInfo = {
                username,
                password
            }
            if (this.login && this.check.hasChecked) {
                await this.userLogin(userInfo)
                this.tryKeepOnline()
            } else if (this.check.hasChecked) {
                await this.userRegister(userInfo)
                this.tryKeepOnline()
            }
            
        },
        tryKeepOnline () {
            if (this.keep) {
                localStorage.setItem("admin-server-sessionId",this.$sessionId)
            } else {
                sessionStorage.setItem("admin-server-sessionId",this.$sessionId)
            }
        },
        checkUsernameInput () {
            if (this.isEmail(this.username)) {
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
        },
        isEmail (val) {
            let pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;
            let domains= ["qq.com","163.com","vip.163.com","263.net","yeah.net","sohu.com","sina.cn","sina.com","eyou.com","gmail.com","hotmail.com","42du.cn"];
            if(pattern.test(val)) {
                let domain = val.substring(val.indexOf("@")+1);
                for(let i = 0; i< domains.length; i++) {
                if(domain == domains[i]) {
                    return true;
                }
                }
            }
            return false;
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
        background: rgba(22, 77, 148);
        color: white;
        padding: 0;
        font-weight: bold;       
    }
    .submit input:hover {
        cursor: pointer;
    }
</style>