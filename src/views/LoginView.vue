<template>
  <div class="login" :style="{ backgroundImage: 'url(' + backgroundImage + ')' }">
    <div class="login-container">
      <h2>欢迎来到宠物寄养系统</h2>
      <form @submit.prevent="handleLogin">
        <!-- 用户名行 -->
        <label for="username">账户</label>
        <div class="empty"></div>
        <input type="text" id="username" v-model="username" required />

        <!-- 密码行 -->
        <label for="password">密码</label>
        <div class="empty"></div>
        <input type="password" id="password" v-model="password" required />

        <!-- 按钮行，占满三列 -->
        <div class="button-container">
          <button type="submit">登录</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import loginBg from '../assets/login-bg.jpg'
import { useAuthStore } from '../stores/auth'

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      backgroundImage: loginBg
    }
  },
  methods: {
    handleLogin() {
      // 模拟登录逻辑
      if (this.username && this.password) {
        const authStore = useAuthStore()
        authStore.login({ username: this.username }, 'dummy-token')
        this.$router.push('/')
      } else {
        alert('请输入用户名和密码')
      }
    }
  }
}
</script>

<style scoped>
/* 整个页面全屏居中 */
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
}

/* 登录容器 */
.login-container {
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}

/* 标题居中 */
.login-container h2 {
  text-align: center;
  margin-bottom: 20px;
}

/* 表单使用三列 grid 布局：
   第一列：固定宽度的 label（右对齐）
   第二列：空白占位列
   第三列：输入框，占满剩余空间 */
form {
  display: grid;
  grid-template-columns: 100px 20px 1fr;
  row-gap: 15px;
  align-items: center;
}

/* label 右对齐 */
label {
  text-align: right;
}

/* 输入框样式 */
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

/* 按钮行：横跨全部三列，居中 */
.button-container {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

button {
  padding: 8px 20px;
  cursor: pointer;
}
</style>
