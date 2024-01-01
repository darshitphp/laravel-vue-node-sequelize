<template>
  <AdminLoginLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <!-- Section -->
      <!-- Section -->
      <section class="vh-lg-100 mt-5 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
          <div class="row justify-content-center form-bg-image">
            <p class="text-center"><a href="/login" class="d-flex align-items-center justify-content-center">
              <svg class="icon icon-xs me-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
              Back to log in
            </a>
            </p>
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="signin-inner my-3 my-lg-0 bg-white shadow border-0 rounded p-4 p-lg-5 w-100 fmxw-500">
                <h1 class="h3">Forgot your password?</h1>
                <p class="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <form @submit.prevent="submitForm">
                  <!-- Form -->
                  <div class="mb-4">
                    <label for="email">Your Email</label>
                    <div class="input-group">
                      <input type="email" class="form-control" v-model="email" placeholder="john@company.com" required autofocus>
                    </div>
                  </div>
                  <!-- End of Form -->
                  <div class="d-grid">
                    <button type="submit"  class="btn btn-gray-800">Recover password</button>
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
  data() {
    return {
      email: '',
      data: '',
    };
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.email,
      };

      axios.post('/forgot-password-action', formData)
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
            message: response.data.message//custom message
          });
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