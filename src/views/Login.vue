<template>
  <div class="login-container">

      <div class="logo" id="gohome" />

    <a-form id="components-form-demo-normal-login" :form="form" class="login-form" @submit="handleSubmit">

      <a-form-item>
        <a-input v-decorator="['userName', { rules: [{ required: true, message: 'Please input your username!' }] }]" placeholder="Username">
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-input v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] }]" type="password" placeholder="Password">
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>

      <a-form-item>
        <a-checkbox v-decorator="['remember', {valuePropName: 'checked', initialValue: true,}]">Remember me</a-checkbox>
        <a class="login-form-forgot" href="">Forgot password</a>
        <a-button type="primary" html-type="submit" class="login-form-button">Log in
        </a-button>
        Or
        <a href="">Request register!</a>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
    let form;

    export default {
        name: 'Login',
        beforeCreate() {
            this.form = this.$form.createForm(this, { name: 'normal_login' });
        },
        methods: {
            handleSubmit(e) {
                e.preventDefault();

                this.$http.get('https://jsonplaceholder.typicode.com/posts')
                    .then((r) => {
                        console.log(r);
                    });

                this.form.validateFields((err, values) => {
                    if (!err) {
                        console.log('Received values of form: ', values);
                    }
                });
            },
        },
    };
</script>

<style scoped>
  .logo {
    width: 120px;
    height: 36px;
    background-image: url("../assets/logo.png");
    margin: 100px 50px 50px 90px;
  }
  .login-container {
    margin: auto;
    width: 300px;
    text-align: center;
  }
  .login-container .login-form {
    max-width: 300px;
  }
  /*.login-container .login-form-forgot {*/
  /*  float: right;*/
  /*}*/
  .login-container .login-form-button {
    width: 100%;
  }
</style>
