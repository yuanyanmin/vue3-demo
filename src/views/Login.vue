<template>
	<div class="login-box">
    <div class="login-container">
			<p class="login-h1">登 录</p>
    	<el-form ref="loginForm" :model="formData" :rules="ruleForm" class="login-form">
				<el-form-item prop="name">
					<el-input v-model="formData.name" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
				</el-form-item> 
				<el-form-item prop="pass">
					<el-input v-model="formData.pass" placeholder="请输入密码" type="password" prefix-icon="el-icon-key"></el-input>
				</el-form-item>
				<el-form-item>
        	<el-button type="primary" @click="login" class="login-btn">登录</el-button>
				</el-form-item>
      </el-form>
    </div>
	</div>
</template>

<script>
import { reactive, ref } from 'vue'
import { loginApi } from "../api/api";
import { useRouter } from 'vue-router';
export default {
  setup() {
		const router = useRouter();
		const loginForm = ref(null);
    const formData = reactive({
			name: '',
			pass: ''
		})
		const ruleForm = {
      name: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      pass: [
        { required: true, message: '请输入密码', trigger: 'blur' },
      ]
    }
		const login = async () => {
			if (!loginForm.value || !await loginForm.value.validate()) {
         return false;
      }
			let {name, pass} = formData
			loginApi({
				username: name,
				pass: pass
			}).then(res => {
				if (res.code === 0) {
					router.push('/index')
				}
			}).catch(err => {
				console.log('login-err', err)
			})
		}
    return {
      formData,
			ruleForm,
			loginForm,
			login
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
	height: 100%;
	position: relative;
}
.login-container {
	position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login-h1 {
	font-size: 32px;
	color: #fff;
	margin-bottom: 40px;
}
.el-form {
	width: 400px;
	margin: 0 auto;
	.login-btn {
		width: 100%;
	}
}

</style>