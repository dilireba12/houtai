<template>
  <div class="login-container">
    <div class="form-box">
      <img src="@/assets/common/tx.jpg" alt="" />
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="el-icon-user-solid"></i
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password">
            <i slot="prefix" class="el-icon-lock"></i
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-item">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.loginFormRef.resetFields()
    },
    // 二次校验 手动校验
    async login () {
      try {
        await this.$refs.loginFormRef.validate()
        try {
          const res = await login(this.loginForm)
          console.log(res)
          // todo 把token存到vuex中，并且持久化localStorage
          this.$store.commit('myToken', res.data.data.token)
          if (res.data.meta.status === 200) {
            this.$router.push('/home')
            this.$message.success('登录成功')
          } else {
            this.$message.error('用户名或密码有误')
          }
        } catch (err) {
          console.log(err)
        }
      } catch (err) {
        console.log('登录表单校验失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100vw;
  height: 100vh;
  background: url("@/assets/bg.jpg") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    // padding: 30px 15px;
    box-sizing: border-box;
    img {
      position: relative;
      left: 170px;
      top: -50px;
      width: 100px;
      height: 100px;
      border-radius: 50%;
    }
    .el-input {
      /deep/input {
        width: 400px;
        height: 50px;
        margin: 0 20px;
        // margin-left: 20px;
      }
      i {
        width: 80px;
        height: 80px;
        // font-size: 20px;
        text-align: center;
        line-height: 50px;
      }
    }
    .el-button {
      position: relative;
      left: 250px;
      font-size: 20px;
    }
  }
}
::v-deep .el-form-item__error {
  margin-left: 20px;
}
</style>
