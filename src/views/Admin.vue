<template>
  <div class="admin">
    <el-row :gutter="10" type="flex" justify="center" align="middle">
      <h2 class="title">图书馆后台管理系统</h2>
    </el-row>
    <el-row :gutter="10" type="flex" justify="center" align="middle">
      <el-col :xs="24" :sm="14" :md="12" :lg="8" :xl="8">
        <el-card class="login-card">
          <div slot="header" class="clearfix">
            <h3>登录</h3>
          </div>
          <el-form ref="formdata" :model="formdata">
            <el-form-item prop="username">
              <el-input prefix-icon="el-icon-user" v-model="formdata.username" placeholder="请输入账号"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                prefix-icon="el-icon-lock"
                v-model="formdata.password"
                placeholder="请输入密码"
                show-password
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="login" id="login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      formdata: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      if (this.formdata.username == "") {
        this.$alert("请输入用户名!", "提示", {});
        return;
      }
      if (this.formdata.password == "") {
        this.$alert("请输入密码!", "提示", {});
        return;
      }
      this.axios
        .post("/api/user/login", this.formdata)
        .then((res) => {
          if (res.data.code == 1) {
            this.$message({
              message: "登录成功!",
              type: "success",
            });
          } else if (res.data.code == -1) {
            this.$message.error("登录失败,请检查用户名密码!");
          }
        })
        .catch((error) => console.log(error, "error")); // 失败的返回
    },
    handleLogin: function () {},
  },
};
</script>

<style lang="less">
.admin {
  height: 100%;
  width: 100%;
  background: url("../assets/bg-admin.png") no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
}
.title {
  font-size: 38px;
  /* color: #fff; */
  text-align: center;
  margin: 80px 0;
}
.login-card {
  /* margin-top: 40px; */
}
.clearfix {
  clear: both;
  h3 {
    font-size: 22px;
    color: #555;
    font-weight: initial;
  }
  :before,
  :after {
    display: table;
    content: "";
  }
  :after {
    clear: both;
  }
  span {
    font-size: 24px;
    color: #555;
  }
}
</style>