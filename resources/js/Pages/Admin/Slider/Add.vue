<template>
  <AdminLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/slider" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Slider</h1>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="title">Slider title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Slider Title</div>
                </div>
                <div class="mb-4">
                  <label for="slug">Slider shortcode</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" id="shortcode" required>
                  </div>
                  <div id="shortcodeError" className="text-danger d-none">Please Enter Slider Name</div>
                </div>
                <div class="mb-4">
                  <label for="content">Content</label>
                  <editor v-model="content" id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                  <div id="contentError" className="text-danger d-none">Please enter slider content</div>
                </div>
                <div class="mb-4">
                  <label for="options">Options</label>
                  <editor v-model="options" id="options" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                  <div id="optionsError" className="text-danger d-none">Please enter slider options</div>
                </div>
                <div class="mb-4">
                  <label for="options">Upload slider images</label>
                  <div class="input-group mb-2">
                    <input type="file" :name="'slider_image[' + index + ']'" class="form-control slider_image" @change="handleFileUpload" accept="image/*">
                  </div>
                  <div v-for="(fileUpload, index) in fileUploads" :key="index" class="fileUpload">
                    <div class="input-group mb-2">
                      <input type="file" :name="'slider_image[' + index + ']'" class="form-control slider_image" @change="handleFileUpload" accept="image/*">
                      <button @click="removeFileUpload(index)" type="button" class="btn btn-danger">Remove</button>
                    </div>
                  </div>
                </div>
                <button @click="addFileUpload" type="button" class="btn btn-primary">Add More</button>
                <div class="mb-4">
                  <label for="status">Select status</label>
                  <div class="input-group">
                    <select id="status" name="status" class="form-control">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                </div>

                <div class="mb-4">
                  <label for="start_from">Start Date</label>
                  <div class="input-group">
                    <input type="date" id="start_from" class="form-control" name="start_from" value="">
                  </div>
                  <div id="start_fromError" className="text-danger d-none">Please select start date</div>
                </div>

                <div class="mb-4">
                  <label for="end_to">End Date</label>
                  <div class="input-group">
                    <input type="date" id="end_to" class="form-control" name="end_to" value="">
                  </div>
                  <div id="end_toError" className="text-danger d-none">Please select start date</div>
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
      custom_js: '',
      custom_css: '',
      fileUploads: [],
      slider_image: [],
      formData : new FormData(),
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
    addFileUpload() {
      this.fileUploads.push({});
    },
    removeFileUpload(index) {
      this.fileUploads.splice(index, 1);
    },
    handleFileUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.slider_image = files[i];
      }
    },
    handleSubmit(){
      document.addEventListener('DOMContentLoaded', function() {
        // Get the current date
        const currentDate = new Date().toISOString().split('T')[0];

        // Set the minimum date for start_from input to the current date
        const startFromInput = document.getElementById('start_from');
        startFromInput.setAttribute('min', currentDate);
      });
      this.formData.title = document.getElementById("title").value;
      this.formData.shortcode = document.getElementById("shortcode").value;
      this.formData.content = tinymce.get('content').getContent();
      this.formData.options = tinymce.get('options').getContent();
      this.formData.start_from = document.getElementById("start_from").value;
      this.formData.end_to = document.getElementById("end_to").value;
      this.formData.status = document.getElementById("status").value;

      this.formData.append('title', this.formData.title);
      this.formData.append('shortcode', this.formData.shortcode);
      this.formData.append('content', this.formData.content);
      this.formData.append('options', this.formData.options);
      this.formData.append('start_from', this.formData.start_from);
      this.formData.append('end_to', this.formData.end_to);
      this.formData.append('status', this.formData.status);

      //
      var titleError = document.getElementById("titleError");
      var shortcodeError = document.getElementById("shortcodeError");
      var contentError = document.getElementById("contentError");
      var optionsError = document.getElementById("optionsError");
      var start_fromError = document.getElementById("start_fromError");
      var end_toError = document.getElementById("end_toError");

      // const formData = new FormData();
      const fileInputs = document.querySelectorAll('.slider_image'); // Get all elements with class name "slider_image"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        // formData.append('file', file);
        this.formData.append('slider_image[]', file); // Add each file separately
      });

      //
      let error = false;
      if (this.formData.title.length === 0) {
        titleError.classList.remove("d-none");
        error = true;
      } else {
        titleError.classList.add("d-none");
      }

      if (this.formData.shortcode.length === 0) {
        shortcodeError.classList.remove("d-none");
        error = true;
      } else {
        shortcodeError.classList.add("d-none");
      }

      if (this.formData.content.length === 0) {
        contentError.classList.remove("d-none");
        error = true;
      } else {
        contentError.classList.add("d-none");
      }

      if (this.formData.options.length === 0) {
        optionsError.classList.remove("d-none");
        error = true;
      } else {
        optionsError.classList.add("d-none");
      }

      if (this.formData.start_from.length === 0) {
        start_fromError.classList.remove("d-none");
        error = true;
      } else {
        start_fromError.classList.add("d-none");
      }

      if (this.formData.end_to.length === 0) {
        end_toError.classList.remove("d-none");
        error = true;
      } else {
        end_toError.classList.add("d-none");
      }

      if (error === false) {

        const fetchItems = async () => {
          try {
            const response = await fetch('http://localhost:7000/api/slider/addSliderData', {
              method: 'POST',
              body: this.formData,
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/slider';
            }
          } catch (error) {
            console.error(error);
            // Handle the error, e.g., set an error state or display an error message
          }
        };
        fetchItems();

        const currentDate = new Date().toISOString().split('T')[0];

        const startDateInput = document.getElementById('start_from')
        startDateInput.value = currentDate;
      }
    }
  }
}

</script>