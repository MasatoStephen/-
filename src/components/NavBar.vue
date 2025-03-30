<template>
    <nav class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/login">登录</router-link></li>
        <li><router-link to="/management">管理</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 10px;
  }
  .logo img {
    height: 40px;
  }
  .nav-links {
    list-style: none;
    display: flex;
    margin-left: auto;
  }
  .nav-links li {
    margin: 0 10px;
  }
  </style>
  