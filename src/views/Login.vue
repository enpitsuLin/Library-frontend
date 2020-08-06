<template>
  <el-card class="login-card">
    <div slot="header" class="clearfix">
      <span>登录</span>
    </div>
    <el-form label-width="90px" ref="formdata" :model="formdata">
      <el-form-item label="账号" prop="username">
        <el-input v-model="formdata.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formdata.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      this.axios
        .post("/api/user/login", this.formdata)
        .then((res) => {
          if (res.data == "success") {
            console.log(res, "login"); // 成功的返回
          }
        })
        .catch((error) => console.log(error, "error")); // 失败的返回
    },
  },
};
</script>

<style lang="less">
.login-card {
  margin: 0 auto;
  width: 480px;
}
.clearfix {
  font-size: 16px;
  clear: both;
  :before,
  :after {
    display: table;
    content: "";
  }
  :after {
    clear: both;
  }
}
</style>