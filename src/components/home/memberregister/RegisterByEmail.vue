<template>
	<div class="container">
		<div class="section-wrapper top-wrapper">
			<div>
				<mt-field
						class="input-wrapper"
					v-model="username"
					placeholder="用户名"
					maxlength="25"
				/>
			</div>
		</div>
		<label class="tips">用户名为3-25位，可以包含英文与数字</label>
		<div class="section-wrapper bottom-wrapper">
			<div>
				<mt-field
					type="password"
					class="input-wrapper"
					v-model="password"
					placeholder="设置密码"
					maxlength="20"
				/>
			</div>
			<div>
				<mt-field
					type="password"
					class="input-wrapper"
					v-model="confirmPassword"
					placeholder="确认密码"
					maxlength="20"
				/>
			</div>
		</div>
		<label class="tips">6-20位数字/字母/符号</label>

		<mt-button class="ds-button-large mt-10 mb-10" type="primary" v-on:click="onSubmit">注册</mt-button>
		<div class="link-wrapper">
			<span class="left-text">点击注册表示同意</span>
			<span class="right-text" @click="onAgreement">《用户协议》</span>
		</div>
	</div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { mapState, mapMutations } from 'vuex'
import { register } from '../../../api/memberRegister'
export default {
  name: 'RegisterByEmail',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      aggrementUrl: ''
    }
  },
  created: function () {

  },
  computed: {
    ...mapState({
      inviter_id: state => state.member.inviterId
    })
  },
  methods: {
    ...mapMutations({
      saveAuthInfo: 'memberLogin'
    }),
    goBack () {
      this.$router.go(-1)
    },
    goProfile () {
      this.$router.go(-2)
    },
    goProfileAdd () {
      this.$router.push({ name: 'profileAdd' })
    },
    check () {
      let username = this.username
      let password = this.password
      let confirmPassword = this.confirmPassword
      if (username.length === 0) {
        Toast('请输入3-25个字符的用户名')
        return false
      }
      if (username.length < 3 || username.length > 25) {
        Toast('请输入3-25个字符的用户名')
        return false
      }
      if (password.length === 0) {
        Toast('请输入密码')
        return false
      }
      if (password.length < 6 || password.length > 20) {
        Toast('请输入6-20个字符的密码')
        return false
      }
      if (confirmPassword.length === 0) {
        Toast('请输入确认密码')
        return false
      }
      if (password.length !== confirmPassword.length) {
        Toast('确认密码与输入密码不一致')
        return false
      }
      if (password !== confirmPassword) {
        Toast('确认密码与输入密码不一致')
        return false
      }

      return true
    },
    signup () {
      if (!this.check()) {
        return
      }
      Indicator.open()
      let inviterId = this.inviter_id // 获取邀请人id
      register(this.username, this.password, this.confirmPassword, inviterId).then(
        response => {
          Indicator.close()
          this.saveAuthInfo({ token: response.result.token, info: response.result.info })
          this.$router.push({ name: 'MemberIndex' })
        },
        error => {
          Indicator.close()
          Toast(error.message)
        }
      )
    },
    onSubmit () {
      this.signup()
    },
    onAgreement () {
      this.$router.push({
        name: 'HomeDocument',
        query: { type: '' }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: stretch;
	//background-color: #e93b3d;
	.section-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;
		background-color: #ffffff;
		border-top: 1px solid #e8eaed;
		border-bottom: 1px solid #e8eaed;
		.input-wrapper {
			font-size: .8rem;
			display: flex;
			flex-direction: row;
			align-content: flex-start;
			align-items: center;
			background-color: #fff;
			height:2.2rem;
			padding-left:0.5rem;
			input {
				flex: 1;
			}
			.bottom-input {
				border-bottom-width: 0;
			}
		}
	}
	.link-wrapper {
		height:2.2rem;
		margin-top:0.5rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: stretch;
		span {
			font-size:0.7rem;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
		.left-text {
			color: #c3c3c3;
		}
		.right-text {
			color: $primaryColor;
		}
	}
}
.top-wrapper {
	margin-top:0.5rem;
}
.bottom-wrapper {
	margin-top:0.5rem;
}
.tips {
	color: #c3c3c3;
	font-size:0.6rem;
	margin-left: 0.9rem;
	margin-top:0.5rem;
	text-align: left;
}
</style>
