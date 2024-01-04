<template>
  <AdminLayout :data="data" :token="token">
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
            <div class="p-1 col-12">
<!--              <h1 class="h3 mb-4">Add Slider</h1>-->
              <form>
                <div class="d-flex col-12 row">
                <!-- Form -->
                <div class="mb-4 col-6">
                  <label for="title">Title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Slider Title</div>
                </div>
                <div class="mb-4 col-6">
                  <label for="slug">Shortcode</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" id="shortcode" required>
                  </div>
                  <div id="shortcodeError" className="text-danger d-none">Please Enter Slider Name</div>
                </div>
                <div id="appendMoreSliders">
                  <div class="row m-0" style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px;">
                    <div class="mb-4 col-6">
                      <label for="slider_content_0">Content</label>
                      <editor id="slider_content_0" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                      menubar: 'file edit view format tools',
                      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                      toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                    }"></editor>
                      <div id="contentError" className="text-danger d-none">Please enter slider content</div>
                    </div>
                    <div class="mb-4 col-4">
                      <label>Image</label>
                      <div class="input-group mb-2">
                        <input type="file" name="slider_image_add[0]" class="form-control slider_image_add" @change="handleFileUpload" accept="image/*">
                      </div>
                    </div>
                    <div class="mb-4 col-2">
                      <div class="form-check form-switch">
                        <input class="form-check-input status" type="checkbox" id="flexSwitchCheckChecked" >
                        <label class="form-check-label" for="flexSwitchCheckChecked">Status</label>
                      </div>
                      <div class="statusError text-danger d-none">Please Select Slider Status</div>
                    </div>
                    <div class="col-12 text-end mt-2 addMoreWrapper" data-counter="0">
                      <button type="button" class="btn btn-primary" id="addSlider">Add More</button>
                    </div>
                  </div>
                </div>
                <div class="mb-4 col-6">
                  <label for="start_from">Start Date</label>
                  <div class="input-group">
                    <input type="date" id="start_from" class="form-control" name="start_from" value="">
                  </div>
                  <div id="start_fromError" className="text-danger d-none">Please select start date</div>
                </div>
                <div class="mb-4 col-6">
                  <label for="end_to">End Date</label>
                  <div class="input-group">
                    <input type="date" id="end_to" class="form-control" name="end_to" value="">
                  </div>
                  <div id="end_toError" className="text-danger d-none">Please select end date</div>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Submit</button>
                </div>
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
$(document).ready(function () {
  var clicker = 1;
  $(document).on("click","#addSlider",function(){
    $("#addSlider").remove();
    $(".addMoreWrapper").each(function(){
      var count = $(this).data("counter");
      if((count) == (clicker-1)){
        $(this).find("#addSlider").remove();
      }
    })

    var uniqueId = 'slider_content_'+clicker;
    var uniqueCheckBox = 'status_'+clicker;
    var html = `<div class="row m-0" style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px !important;">
                  <div class="mb-4 col-6">
                    <label>Content</label>
                    <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ plugins: 'code',toolbar: 'code',}"></editor>
                  </div>
                  <div class="mb-4 col-4">
                    <label>Image</label>
                    <div class="input-group mb-2">
                      <input type="file" name="slider_image_add[`+clicker+`]" class="form-control slider_image_add" @change="handleFileUpload" accept="image/*">
                    </div>
                  </div>
                  <div class="mb-4 col-2">
                    <div class="form-check form-switch">
                      <input class="form-check-input status" type="checkbox" id="`+uniqueCheckBox+`">
                      <label class="form-check-label" for="`+uniqueCheckBox+`">Status</label>
                    </div>
                    <div class="statusError text-danger d-none">Please Select Slider Status</div>
                  </div>
                  <div class="col-12 text-end addMoreWrapper" data-counter="`+clicker+`">
                    <button type="button" class="btn btn-danger removeSlider mb-2">Remove</button>
                    <button type="button" class="btn btn-primary mb-2" id="addSlider">Add More</button>
                  </div>
                </div>`;
    $("#appendMoreSliders").append(html);
    tinymce.init({
      selector: '#'+uniqueId,
      apiKey: '2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh',
      menubar: 'file edit view format tools',
      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
    });
    clicker++;
  })

  $(document).on("click",".removeSlider",function(){
    var countValues = [];
    $(this).parent().parent().remove();
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      countValues.push(count);
      $(this).find("#addSlider").remove();
    });
    var maxCount = Math.max(...countValues);
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      const include = `<button class="btn btn-primary mb-2" type="button" id="addSlider">Add more</button>`;
      if(maxCount == count){
        $(this).append(include);
      }
    });
  });
})
import AdminLayout from "@/Pages/AdminLayout.vue";
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    AdminLayout,
    'editor': Editor
  },
  props:{
    token: String,
  },
  data() {
    return {
      data: '',
      body: '',
      custom_js: '',
      custom_css: '',
      fileUploads: [],
      slider_image_add: [],
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
    handleFileUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.slider_image_add = files[i];
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
      this.formData.start_from = document.getElementById("start_from").value;
      this.formData.end_to = document.getElementById("end_to").value;

      var content = new Array();
      $(".content").each(function(){
        var id = $(this).attr('id');
        if(id != undefined){
          const innercontent = tinymce.get(id).getContent();
          if(innercontent.length != 0){
            content.push(innercontent);
          }
        }
      })
      this.formData.content = content;
      this.formData.append('content', this.formData.content);

      var status = new Array();
      $(".status").each(function(){
        if($(this).is(':checked')){
          var activestatus = 'active';
        }else{
          var activestatus = 'inactive';
        }
        status.push(activestatus);
      })
      this.formData.status = status;
      this.formData.append('status', this.formData.status);

      this.formData.append('title', this.formData.title);
      this.formData.append('shortcode', this.formData.shortcode);
      this.formData.append('start_from', this.formData.start_from);
      this.formData.append('end_to', this.formData.end_to);


      //
      var titleError = document.getElementById("titleError");
      var shortcodeError = document.getElementById("shortcodeError");
      var start_fromError = document.getElementById("start_fromError");
      var end_toError = document.getElementById("end_toError");

      // const formData = new FormData();
      const fileInputs = document.querySelectorAll('.slider_image_add'); // Get all elements with class name "slider_image_add"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        // formData.append('file', file);
        this.formData.append('slider_image_add[]', file); // Add each file separately
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
        console.log(this.formData);
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'slider/addSliderData', {
              method: 'POST',
              body: this.formData,
              headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.token,
              },
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