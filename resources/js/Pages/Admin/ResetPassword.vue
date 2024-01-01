<template>
  <AdminLoginLayout :data="data" :email="email">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
    <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
      <div class="container">
      <div class="row justify-content-center form-bg-image">
        <p class="text-center"><a href="/login" class="d-flex align-items-center justify-content-center">
          <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
          Back to log in
        </a>
        </p>
        <div class="col-12 d-flex align-items-center justify-content-center">
          <div class="bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
            <h1 class="h3 mb-4">Reset password</h1>
            <form @submit.prevent="submitForm">
              <div class="form-group mb-4">
                <label for="password">Your Password</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2">
                      <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  </span>
                  <input type="hidden" name="email" id="email" :value="email">
                  <input type="password" placeholder="Password" class="form-control" id="password" required="">
                </div>
              </div>
              <div class="form-group mb-4">
                <label for="confirm_password">Confirm Password</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon2">
                      <svg class="icon icon-xs text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                  </span>
                  <input type="password" placeholder="Confirm Password" class="form-control" id="confirm_password" required="">
                </div>
              </div>
              <div class="d-grid">
                <button type="submit" class="btn btn-gray-800">Reset password</button>
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
    email: {
      type: String,
    },

  },
  data() {
    return {
      data: ''
    };
  },
  methods: {
    submitForm() {
      var password = $('#password').val();
      var confirm_password = $('#confirm_password').val();
      if(password === confirm_password){
        const formData = {
          email: this.email,
          password:password
        };

        axios.post('/reset-password-action', formData)
        .then(response => {
          // Handle the response from the Laravel controller
          if(response.data.code == 200){
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
          }else if(response.data.code == 500){
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
          message: "Password and confirm password should be equal"//custom message
        });
      }
    }
  }
};
</script>