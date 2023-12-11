<template>
  <AdminLayout :slider="slider">
    <!-- Your middle slider content goes here -->
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
              <h1 class="h3 mb-4">Add Page</h1>
              <form>
                <div class="mb-4">
                  <label for="title">Slider title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" v-model="slider.title" @input="updatePage('title')" id="title" required>
                    <input type="hidden" name="id" id="id" :value="slider.id">
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Slider Title</div>
                </div>
                <div class="mb-4">
                  <label for="slug">Slider shortcode</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" v-model="slider.shortcode" @input="updatePage('shortcode')" id="shortcode" required>
                  </div>
                  <div id="shortcodeError" className="text-danger d-none">Please Enter Slider Name</div>
                </div>
                <div class="mb-4">
                  <label for="content">Content</label>
                  <editor id="content" v-model="slider.content" @input="updatePage('content')" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                  <div id="contentError" className="text-danger d-none">Please enter slider content</div>
                </div>
                <div class="mb-4">
                  <label for="options">Options</label>
                  <editor id="options" v-model="slider.options" @input="updatePage('options')" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
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
                  <div class="row">
                    <div style="width: 100px!important;position: relative;" v-for="arr in JSON.parse(slider.slider_image)" :key="arr">
                      <input type="hidden" id="slider_img_src" :value="slider.slider_image">
                      <input type="hidden" name="old_slider_image" id="old_slider_image" class="form-control" :value="slider.slider_image">
                      <i class="fa fa-close removeSliderImage" :data-id="slider.id" :data-src="arr" style="font-size:14px;color:darkgrey;cursor: pointer;position: absolute;padding-left: 63px"></i>
                      <img :src="'/assets/img/slider_image/' + arr" height="75" style="width: 100px!important;border: 2px solid grey;border-radius: 5px;" />
                    </div>
                  </div>
                </div>
                <button @click="addFileUpload" type="button" class="btn btn-primary">Add More</button>
                <div class="mb-4">
                  <label for="status">Select status</label>
                  <div class="input-group">
                    <select id="status" name="status" class="form-control" v-model="slider.status">
                      <option :value="'active'" :selected="slider.status === 'active'">Active</option>
                      <option :value="'inactive'" :selected="slider.status === 'inactive'">Inactive</option>
                    </select>
                  </div>
                </div>

                <div class="mb-4">
                  <label for="start_from">Start Date</label>
                  <div class="input-group">
                    <input type="date" id="start_from" v-model="slider.start_from" @input="updatePage('start_from')" class="form-control" name="start_from">
                  </div>
                  <div id="start_fromError" className="text-danger d-none">Please select start date</div>
                </div>

                <div class="mb-4">
                  <label for="end_to">End Date</label>
                  <div class="input-group">
                    <input type="date" id="end_to" v-model="slider.end_to" @input="updatePage('end_to')" class="form-control" name="end_to">
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
import editor from "@tinymce/tinymce-vue";
$(document).on("click",".removeSliderImage",function(){
  var source = $(this).data('src');
  var array = JSON.parse($("#slider_img_src").val());
  var id = $(this).data('id');
  var uniqueArray = [];

  //Remove same indexes from an array and create new unique array
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== source) {
      uniqueArray.push(array[i]);
    }
  }

  var slider_image = [...new Set(uniqueArray)];

  //convert into JSON
  slider_image = JSON.stringify(slider_image)
  const removeItems = async () => {
    const response = await fetch(apiBaseUrl+'slider/UpdateAfterRemoveImgData', {
      method: 'POST',
      body: JSON.stringify({
        slider_image: slider_image,
        id:id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if(data.status == 'success'){
      $(this).parent().remove();
    }
  };

  var result = window.confirm('Are you sure?');
  if (result == false) {
    event.preventDefault();
  }else{
    removeItems();
  }
})

export default {
  components: {
    editor,
    AdminLayout
  },
  props: {
    slider: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      slider: this.slider,
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
    updatePage(propertyName, event) {
      this.slider[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      document.addEventListener('DOMContentLoaded', function() {
        // Get the current date
        const currentDate = new Date().toISOString().split('T')[0];

        // Set the minimum date for start_from input to the current date
        const startFromInput = document.getElementById('start_from');
        startFromInput.setAttribute('min', currentDate);
      });
      this.formData.id = id;
      this.formData.title = document.getElementById("title").value;
      this.formData.shortcode = document.getElementById("shortcode").value;
      this.formData.content = tinymce.get('content').getContent();
      this.formData.options = tinymce.get('options').getContent();
      this.formData.start_from = document.getElementById("start_from").value;
      this.formData.end_to = document.getElementById("end_to").value;
      this.formData.status = document.getElementById("status").value;

      this.formData.append('id', this.formData.id);
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
            const response = await fetch(apiBaseUrl+'slider/updateSliderData', {
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
      }
    }
  }
}
</script>