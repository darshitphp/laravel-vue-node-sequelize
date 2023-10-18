<template>
  <AdminLoginLayout :data="data">
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
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="remember">
                        <label class="form-check-label mb-0" for="remember">
                          Remember me
                        </label>
                      </div>
                      <div><a href="/forgot-password" class="small text-right">Lost password?</a>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-gray-800">Sign in</button>
                  </div>
                </form>
                <div class="d-flex justify-content-center align-items-center mt-4">
                  <span class="fw-normal">
                      Not registered?
                      <a href="/register" class="fw-bold">Create account</a>
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
      data: ''
    };
  },
  methods: {
    submitForm() {
      const formData = {
        email: this.vEmail,
        password: this.vPassword
      };
      console.log(formData);

      axios.post('/login-action', formData)
          .then(response => {
            // Handle the response from the Laravel controller
            console.log(response.data);
            if(response.data.status == 200){
              window.location.href = 'tag';
            }else if(response.data.status == 500){
              alert(response.data.message);
            }else{
              alert(response.data.message);
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