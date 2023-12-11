<template>
  <AdminLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/header" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Header</h1>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="title">Header title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Header Title</div>
                </div>
                <div class="mb-4">
                  <label for="position">Select Position type</label>
                  <div class="input-group">
                    <select id="position" name="position" class="form-control">
                      <option value="">Select header position type</option>
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                  <div id="positionError" className="text-danger d-none">Please Select header position type</div>
                </div>
                <div class="mb-4">
                  <label>Header Logo</label>
                  <div class="input-group">
                    <input type="file" class="form-control" id="header_logo" name="image" accept="image/*" @change="handleHeaderLogoUpload" required>
                  </div>
                  <div id="imageError" className="text-danger d-none">Please select logo image</div>
                </div>
                <div class="mb-4">
                  <label>Social Links</label>
                  <div class="">
                    <div class="mb-4">
                      <label>Social account title</label>
                      <div class="input-group">
                        <input type="text" class="form-control social_title" placeholder="Enter title name" name="logo_title" required>
                      </div>
                      <div id="titleError" className="text-danger d-none">Please enter social title</div>
                    </div>
                    <div class="mb-4">
                      <label>Social account image</label>
                      <div class="input-group">
                        <input type="file" class="form-control social_image" :name="'social_image[' + index + ']'" @change="handleFileUpload" accept="image/*" required>
                      </div>
                      <div id="imageError" className="text-danger d-none">Please select logo image</div>
                    </div>
                    <div class="mb-4">
                      <label>Social account link</label>
                      <div class="input-group">
                        <input type="text" class="form-control social_link" placeholder="Enter social link" name="link" required>
                      </div>
                      <div id="titleError" className="text-danger d-none">Please enter social link</div>
                    </div>
                  </div>
                  <button type="button" id="addMoreInputs" class="btn btn-gray-800">Add</button>
                  <div class="moreSocialContents"></div>
                  <div class="input-group" id="socialGroup" style="display: none">
                    <div>
                      <div class="mb-4">
                        <label>Social account title</label>
                        <div class="input-group">
                          <input type="text" class="form-control social_title" placeholder="Enter title name" name="logo_title" required>
                        </div>
                        <div id="titleError" className="text-danger d-none">Please enter social title</div>
                      </div>
                      <div class="mb-4">
                        <label>Social account image</label>
                        <div class="input-group">
                          <input type="file" class="form-control social_image" :name="'social_image[' + index + ']'" @change="handleFileUpload" accept="image/*" required>
                        </div>
                        <div id="imageError" className="text-danger d-none">Please select logo image</div>
                      </div>
                      <div class="mb-4">
                        <label>Social account link</label>
                        <div class="input-group">
                          <input type="text" class="form-control social_link" placeholder="Enter social link" name="link" required>
                        </div>
                        <div id="titleError" className="text-danger d-none">Please enter social link</div>
                      </div>
                      <button type="button" @click="removeFileUpload(index)" class="btn btn-danger removeMoreSocial">Remove</button>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <label for="content">Content Text</label>
                  <editor id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
$(document).ready(function() {

  $(document).on("click","#addMoreInputs",function() {
    var hiddenInputs = $('#socialGroup').html();
    $('.moreSocialContents').append(hiddenInputs);
  });

  $(document).on('click', '.removeMoreSocial', function() {
    $(this).parent().remove();
  });

});

import AdminLayout from "@/Pages/AdminLayout.vue";
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    AdminLayout,
    'editor': Editor
  },
  data() {
    return {
      data: '',
      body: '',
      fileUploads: [],
      social_image: [],
      header_logo: '',
      formData : new FormData(),
      custom_js: '',
      custom_css: '',
      editorConfig: {
        // Example options
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code',
          'insertdatetime table contextmenu paste code'
        ],
        toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | table | removeformat | help',
      }
    };
  },
  methods: {
    removeFileUpload(index) {
      this.fileUploads.splice(index, 1);
    },
    handleFileUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.social_image = files[i];
      }
    },
    handleHeaderLogoUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.header_logo = files[i];
      }
    },
    handleSubmit(){
      this.formData.title = document.getElementById("title").value;
      this.formData.position = document.getElementById("position").value;
      this.formData.content = tinymce.get('content').getContent();

      this.formData.append('title', this.formData.title);
      this.formData.append('position', this.formData.position);
      this.formData.append('content', this.formData.content);

      // const formData = new FormData();
      const fileInputs = document.querySelectorAll('.social_image'); // Get all elements with class name "slider_image"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        this.formData.append('social_image[]', file);
      });

      const social_title = new Array();
      $(".social_title").each(function(){
        var vTitle = $(this).val();
        if(vTitle.length != 0){
          social_title.push(vTitle);
        }
      })

      this.formData.social_title = social_title;
      this.formData.append('social_title', this.formData.social_title);
      // const social_link = document.querySelectorAll('.social_link');
      const social_link = new Array();
      $(".social_link").each(function(){
        var vLink = $(this).val();
        if(vLink.length != 0){
          social_link.push(vLink);
        }
      })

      this.formData.social_link = social_link;
      this.formData.append('social_link', this.formData.social_link);

      var header_logo = document.getElementById("header_logo");
      var headerLogoFile = header_logo.files[0];
      this.formData.append('header_logo', headerLogoFile); // Append the header logo file to formData

      var titleError = document.getElementById("titleError");
      var positionError = document.getElementById("positionError");

      let error = false;

      if (this.formData.title.length === 0) {
        titleError.classList.remove("d-none");
        error = true;
      } else {
        titleError.classList.add("d-none");
      }

      if (this.formData.position.length === 0) {
        positionError.classList.remove("d-none");
        error = true;
      } else {
        positionError.classList.add("d-none");
      }

      if (error === false) {
        console.log(this.formData);
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'header/addHeaderData', {
              method: 'POST',
              body: this.formData,
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/header';
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