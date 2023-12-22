<template>
  <AdminLoginLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <!-- Section -->
      <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center form-bg-image" data-background-lg="/assets/img/illustrations/signin.svg">
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="bg-white shadow border-0 rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div class="text-center text-md-center mb-4 mt-md-0">
                  <h1 class="mb-0 h3">Create Account </h1>
                </div>
                <form @submit.prevent="submitForm" class="mt-4">
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="email">Your Name</label>
                    <div class="input-group">
                      <input type="text" class="form-control" v-model="vName" placeholder="Enter your name" id="name" autofocus required>
                    </div>
                  </div>
                  <!-- Form -->
                  <div class="form-group mb-4">
                    <label for="email">Your Email</label>
                    <div class="input-group">
                      <span class="input-group-text" id="basic-addon1">
                          <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
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
                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input type="password" placeholder="Password" v-model="vPassword" class="form-control" id="password" required>
                      </div>
                    </div>
                    <!-- End of Form -->
                    <!-- Form -->
                    <div class="form-group mb-4">
                      <label for="confirm_password">Confirm Password</label>
                      <div class="input-group">
                        <span class="input-group-text" id="basic-addon2">
                            <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                        </span>
                        <input type="password" placeholder="Confirm Password" v-model="vConfirmPassword" class="form-control" id="confirm_password" required>
                      </div>
                    </div>
                    <!-- End of Form -->
                    <div class="mb-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="remember">
                        <label class="form-check-label fw-normal mb-0" for="remember">
                          I agree to the <a href="#" class="fw-bold">terms and conditions</a>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-gray-800">Sign up</button>
                  </div>
                </form>

                <div class="d-flex justify-content-center align-items-center mt-4">
                  <span class="fw-normal">
                      Already have an account?
                      <a href="/login" class="fw-bold">Login here</a>
                  </span>
                </div>
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
  data() {
    return {
      vEmail: '',
      vPassword: '',
      data: '',
      vConfirmPassword: '',
      vName:''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.vEmail,
        password: this.vPassword,
        user_name: this.vName
      };
      const vConfirmPassword = this.vConfirmPassword;

      if((this.vPassword == vConfirmPassword)){
        axios.post('/register-action', formData)
          .then(response => {
            // Handle the response from the Laravel controller
            console.log(response.data);
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
                message: 'Registration successfully we will get back you to Login!'//custom message
              });
              setTimeout(function(){
                window.location.href = 'login';
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
                type: 'success',//error/success
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
                type: 'success',//error/success
                message: response.data.message//custom message
              });
            }
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
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
            if(error.response.data.errors.password){
              notyf.open({
                type: 'error',//error/success
                message: error.response.data.errors.password//custom message
              });
            }else if(error.response.data.errors.user_name){
              notyf.open({
                type: 'error',//error/success
                message: error.response.data.errors.user_name//custom message
              });
            }
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
          message: 'your password didnt match'//custom message
        });
      }
    }
  }
};
</script>