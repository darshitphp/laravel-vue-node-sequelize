<template>
  <AdminLayout :user="user" :token="token">
    <template v-slot:middleContent>
      <div class="row">
        <div class="col-12 col-xl-8">
          <div class="card card-body border-0 shadow mb-4">
            <h2 class="h5 mb-4">General information</h2>
            <form @submit.prevent="submitForm">
              <div class="row align-items-center">
                <div class="col-md-4 mb-3">
                  <div class="form-group">
                    <label for="user_name">User Name</label>
                    <input class="form-control" id="user_name" type="text" v-model="user.user_name" placeholder="Enter your first name" required="">
                    <input type="hidden" name="id" id="id" :value="user.id">
                    <div style="display: none; color: red" id="user_nameError">Please enter username</div>
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input class="form-control" id="email" type="email" placeholder="name@company.com" :value="user.email" disabled="">
                  </div>
                </div>
                <div class="col-md-4 mb-3">
                  <label for="gender">Gender</label>
                  <select class="form-select mb-0" id="gender" aria-label="Gender select example">
                    <option value="">Choose...</option>
                    <option :selected="(user.gender == 'Female')" value="Female">Female</option>
                    <option :selected="(user.gender == 'Male')" value="Male">Male</option>
                    <option :selected="(user.gender == 'Other')" value="Other">Other</option>
                  </select>
                  <div style="display: none; color: red" id="genderError">Please select gender</div>
                </div>
              </div>
              <h2 class="h5 my-4">Location</h2>
              <div class="row">
                <div class="col-sm-9 mb-3">
                  <div class="form-group">
                    <label for="address">Address</label>
                    <input class="form-control" id="address" type="text" v-model="user.address" placeholder="Enter your home address">
                  </div>
                  <div style="display: none; color: red" id="addressError">Please enter address</div>
                </div>
                <div class="col-sm-3 mb-3">
                  <div class="form-group">
                    <label for="number">Number</label>
                    <input class="form-control" v-model="user.number" id="number" type="number" placeholder="No.">
                  </div>
                  <div style="display: none; color: red" id="numberError">Please enter number</div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-4 mb-3">
                  <div class="form-group">
                    <label for="city">City</label>
                    <input class="form-control" id="city" v-model="user.city" type="text" placeholder="City">
                  </div>
                  <div style="display: none; color: red" id="cityError">Please enter city name</div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="zip">ZIP</label>
                    <input class="form-control" id="zip" type="tel" v-model="user.ZIP" placeholder="ZIP">
                  </div>
                  <div style="display: none; color: red" id="zipError">Please enter Zipcode</div>
                </div>
                <div class="col-sm-4">
                  <div class="form-group">
                    <label for="image">Image</label>
                    <input class="form-control" id="image" type="file" >
                  </div>
                  <div style="display: none; color: red" id="imageError">Please enter Zipcode</div>
                </div>
              </div>
              <div class="mt-3">
                <button type="submit" class="btn btn-gray-800 mt-2 animate-up-2">Save All</button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-12 col-xl-4">
          <div class="row">
            <div class="col-12 mb-4">
              <div class="card shadow border-0 text-center p-0">
                <div class="profile-cover rounded-top" data-background="../assets/img/profile-cover.jpg" style="background: url(&quot;../assets/img/profile-cover.jpg&quot;);"></div>
                <div class="card-body pb-5">
                  <img :src="user.image ? '/assets/img/admin_profile/' + user.image : 'https://placehold.co/100x100/EEE/31343C'" class="avatar-xl rounded-circle mx-auto mt-n7 mb-4" alt="Neil Portrait">
                  <h4 class="h3">
                    {{ user.user_name }}
                  </h4>
                  <h5 class="fw-normal">{{ user.number }}</h5>
                  <p class="text-gray mb-4">{{ user.address }}</p>
<!--                  <a class="btn btn-sm btn-gray-800 d-inline-flex align-items-center me-2" href="#">-->
<!--                    <svg class="icon icon-xs me-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">-->
<!--                      </path>-->
<!--                    </svg>-->
<!--                    Connect-->
<!--                  </a>-->
<!--                  <a class="btn btn-sm btn-secondary" href="#">Send Message</a>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
import AdminLayout from "../AdminLayout.vue";
export default {
  components: {
    AdminLayout
  },
  props: {
    user: {
      type: Array,
      required: true,
    },
    token: String,
  },
  data() {
    return {
      formData: new FormData(),
    };
  },
  methods: {
    submitForm() {
      var id = $("#id").val();
      var user_name = $("#user_name").val();
      var gender = $("#gender").val();
      var address = $("#address").val();
      var number = $("#number").val();
      var city = $("#city").val();
      var ZIP = $("#zip").val();

      //Appending Image
      var adminImage = document.getElementById("image");
      var image = adminImage.files[0];
      if(image != undefined){
        this.formData.append('image', image); // Append the header logo file to formData
      }

      this.formData.id = id;
      this.formData.user_name = user_name;
      this.formData.gender = gender;
      this.formData.address = address;
      this.formData.number = number;
      this.formData.city = city;
      this.formData.ZIP = ZIP;

      this.formData.append('id', this.formData.id);
      this.formData.append('user_name', this.formData.user_name);
      this.formData.append('gender', this.formData.gender);
      this.formData.append('address', this.formData.address);
      this.formData.append('number', this.formData.number);
      this.formData.append('city', this.formData.city);
      this.formData.append('ZIP', this.formData.ZIP);

      var error = false;

      if(user_name.length === 0){
        $("#user_nameError").show();
        var error = true;
      }else{
        $("#user_nameError").hide();
      }

      if(gender.length === 0){
        $("#genderError").show();
        var error = true;
      }else{
        $("#genderError").hide();
      }

      if(address.length === 0){
        $("#addressError").show();
        var error = true;
      }else{
        $("#addressError").hide();
      }

      if(number.length === 0){
        $("#numberError").show();
        var error = true;
      }else{
        $("#numberError").hide();
      }

      if(city.length === 0){
        $("#cityError").show();
        var error = true;
      }else{
        $("#cityError").hide();
      }

      if(zip.length === 0){
        $("#zipError").show();
        var error = true;
      }else{
        $("#zipError").hide();
      }

      if(error == false){
        console.log("token: "+this.token);
        console.log(apiBaseUrl+'auth/update_user_data');
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'auth/update_user_data', {
              method: 'POST',
              body: this.formData,
              headers: {
                'x-auth-token': this.token,
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/profile';
            }
          } catch (error) {
            console.error(error);
            // Handle the error, e.g., set an error state or display an error message
          }
        };
        fetchItems();
      }
    }
  }
}
</script>