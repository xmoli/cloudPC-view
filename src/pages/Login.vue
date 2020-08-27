<template>
    <div class="wrapper">
    <fetch-progress :status="progress"/>
    <form v-on:submit.prevent="submit">
        <i class="fa fa-server"/>
        <label>
            <div class="container">
            <i class="fa fa-user"/>
            <input 
                v-model.trim="username"
                v-on:input="checkUsernameInput"
                ref="firstInput"
                placeholder="邮箱"
            />
            <i class="left fa fa-times-circle"
                v-if="check.usernameInputError"
            />
            <i
                class="fa fa-check-circle"
                v-else-if="check.usernameInput"
            />
            </div>
        </label>
        <label>
            <div class="container" >
            <i class="left fa fa-lock" />
            <input 
                v-model.trim="password"
                v-on:input="checkPasswordInput"
                type="password" 
                placeholder="密码"
            />
            <i class="fa fa-times-circle" v-if="check.passwordInputError"/>
            <i class="fa fa-check-circle" v-else-if="check.passwordInput"/>
            </div>
        </label>
        <div class="submit">
            <input v-if="login" type="submit" value="登录"/>
            <input v-else type="submit" value="注册并登录"
                v-on:click="submit"
            />
        </div>
        <div class="info">
            <div class="container">
                <label>
                    <a tabindex="0" v-if="login" v-on:click="toggleLogin" >没有账号？注册</a>
                    <a tabindex="0" v-else v-on:click="toggleLogin">已有有账号？登录</a>
                </label>
                <label class="keep">
                    <span>保持登录</span>
                    <input 
                        v-model="keep"
                        type="checkbox"
                    />
                </label>
            </div>
        </div>
    </form>
    </div>
</template>

<script>
import isEmail from '../util/isEmail'
import setToken from '../token/setToken'
export default {
    name: 'Login',
    components: {
        "fetch-progress": ()=> import('../components/FetchProgress')
    },
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
            error: '',
            progress: false
        }
    },
    mounted () {
        if (this.login) {
            document.title = 'ADMIN | 登录'
        } else {
            document.title = 'ADMIN | 注册'
        }
        this.$refs.firstInput.focus()
    },
    updated () {
        if (this.login) {
            document.title = 'ADMIN | 登录'
        } else {
            document.title = 'ADMIN | 注册'
        }
    },
    methods: {
        toggleLogin () {
            this.login = ! this.login
            this.$refs.firstInput.focus()
        },
        userLogin (userInfo) {
            this.progress = true
            fetch("/api/user/login",{
                method: "POST",
                body: JSON.stringify(userInfo)
            })
            .then(res => res.json())
            .then(json => {
                if (json.error) {
                    this.error = json.error
                } else {
                    this.token = json.data.token
                    setToken(false , this.token)
                    this.progress = false
                    this.$router.push('/')
                }
            })
        },
        async userRegister (userInfo) {
            this.progress = true
            try{
                const res = await fetch("/api/user/register",{
                    method: "POST",
                    body: JSON.stringify(userInfo)
                })
                const json = await res.json()
            if (!json.error) {
                const ok = await this.userLogin({
                    email: userInfo.email,
                    pass_word: userInfo.pass_word
                })
                this.progress = false
                return true
            } else {
                this.error = res.statusText
                return false
            }
            } catch(e) {
                console.log(e)
            }
        },
        async submit () {
            let username = this.username,
                password = this.password

            if (this.login && this.validateAll()) {
                const ok = await this.userLogin({
                    email: username,
                    pass_word: password
                })
                this.tryKeepOnline()
            } else if (!this.login && this.validateAll) {
                const err = await this.userRegister({
                    email: username,
                    nick: username,
                    pass_word: password
                })
                this.tryKeepOnline()
            }
            
        },
        tryKeepOnline () {
            setToken(this.keep, this.token)
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
<style lang="stylus" scoped>
@import '../main.styl'
.wrapper
    position fixed
    height 100vh
    width 100vw
    top 0
    left 0

    display flex
    justify-content center
    align-items center

form
    @extend .shadow-holo-sm
    width 364px
    height @width
    border-radius 4px
    padding 40px 0 38px 0;
    background rgba(255,255,255,.9)
    display flex
    flex-direction column

.fa, .fa-server
    color $main-color
    font-size 16px
.fa-server 
    font-size 62px
    margin 16px 0
form>label
    margin 8px 0
    display flex
    justify-content center
.container i 
    position absolute
    margin 10px 4px
input
    padding 0 18px
    height 3em
    width 200px
    border-width 0px
    background lighten($main-color, 85%)
    border-radius 4px
    &:focus
        outline none
.submit input
    background $main-color
    color white
    font-weight bold
    letter-spacing 2px
    border-radius 4px 4px 30% 30%
    width 236px
    &:hover
        cursor pointer
    &:focus
        @extend .shadow-holo-sm
div.info
    display flex
    justify-content center
    font-size 0.8em
    margin-top 36px
    & .container
        width 235px
        display flex
        justify-content space-between
        align-items center
        & a:focus
            outline none
            border 1px dashed $main-color
    & .keep
        display flex
        align-items center
        & input:focus
            @extend .shadow-holo-sm
    & input 
        width 1em
        height 1em
</style>