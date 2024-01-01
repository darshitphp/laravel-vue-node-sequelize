<template>
  <AdminLoginLayout :data="data" :old_remember="old_remember">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div class="text-center text-md-center mb-4 mt-md-0">
                  <h1 class="mb-0 h3">Welcome back</h1>
                </div>
                <form @submit.prevent="submitForm" class="mt-4 123">
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="email">Your Email</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                          <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                          </svg>
                      </span>
                      <input type="email" class="form-control" v-model="vEmail" placeholder="example@company.com" id="email" autofocus required>
                    </div>
                  </div>
                  <!-- End of Form -->
                  <div class="form-group">
                    <!-- Form -->
                    <div class="form-group mb-4">
                      <label for="password">Your Password</label>
                      <div class="input-group">
                        <span class="input-group-text" id="basic-addon2">
                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <input type="password" placeholder="Password" v-model="vPassword" class="form-control" id="password" required>
                      </div>
                    </div>
                    <!-- End of Form -->
                    <div class="d-flex justify-content-between align-items-top mb-4">
                      <label for="remember">
                        <input type="checkbox" name="remember" id="remember" v-model="remember">
                        Remember Me
                      </label>
                      <div class="text-end"><a href="/forgot-password" class="small text-right">Lost password?</a>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-gray-800">Sign in</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
  </AdminLoginLayout>
</template>
<script>
import AdminLoginLayout from "../AdminLoginLayout.vue";
import axios from "axios";
export default {
  components: {
    AdminLoginLayout
  },
  props: {
    old_remember: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      vEmail: '',
      vPassword: '',
      remember: false,
      data: ''
    };
  },
  mounted() {
    // Check if "Remember Me" was selected in the previous login
    const rememberSelected = localStorage.getItem('rememberSelected');

    if (rememberSelected === 'true') {
      // Autofill username and password
      this.vEmail = localStorage.getItem('savedUsername') || '';
      this.vPassword = localStorage.getItem('savedPassword') || '';
      this.remember = true;
    }
  },
  methods: {
    submitForm() {
      const rememberToken = $("#remember").val();
      const formData = {
        email: this.vEmail,
        password: this.vPassword,
        remember:this.remember
      };
      // Store the "Remember Me" option
      localStorage.setItem('rememberSelected', this.remember);
      // If "Remember Me" is selected, store the username and password
      if (this.remember) {
        localStorage.setItem('savedUsername', this.vEmail);
        localStorage.setItem('savedPassword', this.vPassword);
      }
      axios.post('/login-action', formData)
          .then(response => {
            // Handle the response from the Laravel controller
            if(response.data.status == 200){
              const notyf = new Notyf({
                position: {
                  x: 'right',
                  y: 'top',
                },
                types: [
                  {
                    type: 'error',
                    background: '#FA5252',
                    icon: {
                      className: 'fas fa-times',
                      tagName: 'span',
                      color: '#fff'
                    },
                    dismissible: false
                  }
                ]
              });
              notyf.open({
                type: 'success',//error/success
                message: response.data.data.user_name+' Login Successfully.'//custom message
              });
              setTimeout(function(){
                console.log(response);
                window.location.href = 'dashboard';
              },500);
            }else if(response.data.status == 500){
              const notyf = new Notyf({
                position: {
                  x: 'right',
                  y: 'top',
                },
                types: [
                  {
                    type: 'error',
                    background: '#FA5252',
                    icon: {
                      className: 'fas fa-times',
                      tagName: 'span',
                      color: '#fff'
                    },
                    dismissible: false
                  }
                ]
              });
              notyf.open({
                type: 'error',//error/success
                message: response.data.message//custom message
              });
            }else{
              const notyf = new Notyf({
                position: {
                  x: 'right',
                  y: 'top',
                },
                types: [
                  {
                    type: 'error',
                    background: '#FA5252',
                    icon: {
                      className: 'fas fa-times',
                      tagName: 'span',
                      color: '#fff'
                    },
                    dismissible: false
                  }
                ]
              });
              notyf.open({
                type: 'error',//error/success
                message: response.data.message//custom message
              });
            }
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
    }
  }
};
</script>