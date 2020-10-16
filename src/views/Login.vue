<template>
  <div id="form_id">
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form"
      @submit="handleSubmit"
    >
      <a-form-item>
        <a-input
          v-decorator="[
            'phone',
            { rules: [{ required: true, message: '请输入用户名!' }] },
          ]"
          placeholder="用户名"
        >
          <a-icon
            slot="prefix"
            type="user"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-decorator="[
            'pwd',
            { rules: [{ required: true, message: '请输入密码!' }] },
          ]"
          type="password"
          placeholder="密码"
        >
          <a-icon
            slot="prefix"
            type="lock"
            style="color: rgba(0, 0, 0, 0.25)"
          />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-checkbox
          v-decorator="[
            'remember',
            {
              valuePropName: 'checked',
              initialValue: true,
            },
          ]"
          >记住登录状态</a-checkbox
        >
        <a-button type="primary" html-type="submit" class="login-form-button"
          >登 录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { login } from "../request";

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          values.pwd = this.$encrypt(values.pwd);
          const { data } = await login.login(values);
          if (data.token) {
            sessionStorage.setItem('departmentsId', data.departmentsId)
            sessionStorage.setItem('departmentsName', data.departmentsName)
            sessionStorage.setItem('dicName', data.dicName)
            sessionStorage.setItem('userId', data.userId)
            sessionStorage.setItem('userName', data.name)
            sessionStorage.setItem('token', data.token)
            sessionStorage.setItem('rights', data.rights)
            this.$router.push('/')
          }
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
#form_id {
  position: absolute;
  width: 100%;
  .login-form {
    width: 500px;
    margin: 20% auto;
  }
  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
}
</style>