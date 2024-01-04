<template>
  <AdminLayout :slider="slider" :token="token">
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
            <div class="p-1 col-12">
              <form>
                <div class="d-flex col-12 row">
                  <!-- Form -->
                  <div class="mb-4 col-6">
                    <label for="title">Title</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter title name" :value="slider.slider.title" @input="updatePage('title',$event)" id="title" required>
                      <input type="hidden" name="id" id="id" :value="slider.slider.id">
                    </div>
                    <div id="titleError" className="text-danger d-none">Please Enter Slider Title</div>
                  </div>
                  <div class="mb-4 col-6">
                    <label for="shortcode">Shortcode</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter page name" :value="slider.slider.shortcode" @input="updatePage('shortcode',$event)" id="shortcode" required>
                    </div>
                    <div id="shortcodeError" className="text-danger d-none">Please Enter Slider Name</div>
                  </div>
                  <div id="appendMorSliders">
                    <div style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px !important;" class="addedSliders row m-0" v-for="(arr, key) in slider.sliderTransaction">
                      <div class="mb-4 col-6">
                        <label :for="`slider_content_`+key">Content</label>
                        <editor :id="`slider_content_`+key" @input="updateContent(`slider_content_`+key,$event)" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                          menubar: 'file edit view format tools',
                          plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                          toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                        }"></editor>
                        <div class="contentError text-danger d-none">Please Enter Slider Content</div>
                      </div>
                      <div class="mb-4 col-4">
                        <label>Image</label>
                        <div class="input-group mb-2">
                          <input type="file" :name="'slider_image['+key+']'" class="form-control slider_image" @change="handleFileUpload" accept="image/*">
                        </div>
                        <div class="row m-0">
                          <div style="width: 100px!important;position: relative;">
                            <input type="hidden" name="old_slider_image" class="form-control old_slider_image" :value="arr.slider_image ? arr.slider_image : ''">
                            <i class="fa fa-close removeSliderImage" :data-id="arr.id" :data-src="arr.slider_image" style="font-size:14px;color:darkgrey;cursor: pointer;position: absolute;padding-left: 63px"></i>
                            <img :src="arr.slider_image ? '/assets/img/slider_image/' + arr.slider_image : 'https://placehold.co/100x100/EEE/31343C'" height="75" class="image-preview" style="width: 100px!important;border: 2px solid grey;border-radius: 5px;" />
                          </div>
                        </div>
                      </div>
                      <div class="mb-4 col-2">
                        <div class="form-check form-switch">
                          <input class="form-check-input status" :checked="arr.status === 'active'" type="checkbox" :id="`status_`+key">
                          <label class="form-check-label" :for="`status_`+key">Status</label>
                        </div>
                        <div class="statusError text-danger d-none">Please Select Slider Status</div>
                      </div>
                      <div class="col-12 text-end addMoreWrapper" :data-counter="key">
                        <button type="button" v-if="key != 0" class="btn btn-danger removeAddedSliders mb-2">Remove</button>
                        <button class="btn btn-primary" v-if="key == Object.keys(slider.sliderTransaction).length - 1" type="button" id="addMoreSlider">Add more</button>
                      </div>
                    </div>
                  </div>
                  <div class="mb-4 col-6">
                    <label for="start_from">Start Date</label>
                    <div class="input-group">
                      <input type="date" id="start_from" :value="slider.slider.start_from" @input="updatePage('start_from',$event)" class="form-control" name="start_from">
                    </div>
                    <div id="start_fromError" className="text-danger d-none">Please select start date</div>
                  </div>
                  <div class="mb-4 col-6">
                    <label for="end_to">End Date</label>
                    <div class="input-group">
                      <input type="date" id="end_to" :value="slider.slider.end_to" @input="updatePage('end_to',$event)" class="form-control" name="end_to">
                    </div>
                    <div id="end_toError" className="text-danger d-none">Please select end date</div>
                  </div>
                  <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                    <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Update</button>
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
  var clicker = $(".addedSliders").length;
  $(document).on("click","#addMoreSlider",function(){
    $("#addMoreSlider").remove();
    $(".addMoreWrapper").each(function(){
      var count = $(this).data("counter");
      if((count) == (clicker-1)){
        $(this).find("#addMoreSlider").remove();
      }
    })

    var uniqueId = 'slider_content_'+clicker;
    var uniqueCheckBox = 'status_'+clicker;
    var html = `<div class="addedSliders row m-0" style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px !important;">
                  <div class="mb-4 col-6">
                    <label>Content</label>
                    <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ plugins: 'code',toolbar: 'code',}"></editor>
                    <div class="contentError text-danger d-none">Please Enter Slider Content</div>
                  </div>
                  <div class="mb-4 col-4">
                    <label>Image</label>
                    <div class="input-group mb-2">
                      <input type="file" name="slider_image[`+clicker+`]" class="form-control slider_image" accept="image/*">
                    </div>
                    <div class="row">
                      <div style="width: 100px!important;position: relative;">
                        <input type="hidden" name="old_slider_image" class="form-control old_slider_image" value="">
                        <i class="fa fa-close removeSliderImage d-none" data-id="" data-src="" style="font-size:14px;color:darkgrey;cursor: pointer;position: absolute;padding-left: 63px"></i>
                        <img src="https://placehold.co/100x100/EEE/31343C" height="75" class="image-preview" style="width: 100px!important;border: 2px solid grey;border-radius: 5px;" />
                      </div>
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
                    <button type="button" class="btn btn-danger removeAddedSliders mb-2">Remove</button>
                    <button type="button" class="btn btn-primary mb-2" id="addMoreSlider">Add More</button>
                  </div>
                </div>`;
    $("#appendMorSliders").append(html);
    tinymce.init({
      selector: '#'+uniqueId,
      apiKey: '2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh',
      menubar: 'file edit view format tools',
      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
    });
    clicker++;
  })

  $(document).on("change",".slider_image",function(event){
    var input = event.target;
    var that = $(this);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        that.parent().parent().find('.image-preview').attr('src',e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }

    const myFormData = new FormData();
    myFormData.append('file', input.files[0]);
    const fileUpload = async () => {
      try {
        const response = await fetch(apiBaseUrl + 'slider/sliderImageUpload', {
          method: 'POST',
          body: myFormData,
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': this.token,
          },
        });
        const respdata = await response.json();
        if (respdata && respdata.data) {
          // Update old_slider_image only when the file upload is successful
          that.parent().parent().find('.old_slider_image').val(respdata.data);
          if(that.parent().parent().find('.removeSliderImage').hasClass('d-none')){
            that.parent().parent().find('.removeSliderImage').removeClass('d-none');
          }
          that.parent().parent().find('.image-preview').attr('src','/assets/img/slider_image/'+respdata.data);
        }
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };

    fileUpload();
  });

  $(document).on("click",".removeAddedSliders",function(){
    var countValues = [];
    $(this).parent().parent().remove();
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      countValues.push(count);
      $(this).find("#addMoreSlider").remove();
    });
    var maxCount = Math.max(...countValues);
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      const include = `<button class="btn btn-primary" type="button" id="addMoreSlider">Add more</button>`;
      if(maxCount == count){
        $(this).append(include);
      }
    });
  });
})

import AdminLayout from "@/Pages/AdminLayout.vue";
import editor from "@tinymce/tinymce-vue";
$(document).on("click",".removeSliderImage",function(event){
  var id = $(this).data('id');
  const removeItems = async () => {
    const response = await fetch(apiBaseUrl+'slider/removeSliderImgTransactionData', {
      method: 'POST',
      body: JSON.stringify({
        id:id,
        slider_image:null
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': this.token,
      },
    });
    const data = await response.json();
    if(data.status == 'success'){
      $(this).parent().find('.image-preview').attr('src','https://placehold.co/100x100/EEE/31343C');
      $(this).parent().find('old_slider_image').val('');
      $(this).parent().find('removeSliderImage').addClass('d-none');
    }
  };

  var removeFileFromPath = async () => {
    var csrfToken = $('meta[name="csrf-token"]').attr('content');
    const imagePath = $(this).parent().find('.image-preview').attr('src');
    const response = await fetch(laravelBaseUrl+'removeFileFromPath', {
      method: 'POST',
      body: JSON.stringify({
        filePath: imagePath
      }),
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
    });
    const data = await response.json();
    if(data.success == true){
      alert(data.message);
    }else{
      alert(data.message);
    }
  };

  var result = window.confirm('Are you sure?');
  if (result == false) {
    event.preventDefault();
  }else{
    removeFileFromPath();
    //if get id then it will remove From database else it will only remove file source
    if(id != ''){
      removeItems();
    }else{
      $(this).parent().find('.image-preview').attr('src','https://placehold.co/100x100/EEE/31343C');
      $(this).parent().find('old_slider_image').val('');
      $(this).parent().find('removeSliderImage').addClass('d-none');
    }
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
    token: String,
  },
  mounted() {
    const self = this;
    setTimeout(function(){
      for (let i = 0; i < self.slider.sliderTransaction.length; i++) {
        // console.log(self.slider.sliderTransaction[i].content);
        const element = document.getElementById(`slider_content_${i}`);
        if (element) {
          var content = self.slider.sliderTransaction[i].content;
          tinymce.get(`slider_content_${i}`).setContent(content);
        }
      }
    },1000);
  },
  data() {
    return {
      data: '',
      body: '',
      arr: {
        content: 'Initial content',
      },
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
      // this.slider[propertyName] = event.target.value;
    },
    updateContent(propertyName, event){
      // this.slider[propertyName] = event.target.value;
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
      this.formData.start_from = document.getElementById("start_from").value;
      this.formData.end_to = document.getElementById("end_to").value;

      this.formData.append('id', this.formData.id);
      var content = new Array();
      $(".content").each(function(){
        var id = $(this).attr('id');
        if(id != undefined){
          const innercontent = tinymce.get(id).getContent();
          content.push(innercontent);
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
      console.log(this.formData.status);
      this.formData.append('status', this.formData.status);

      var slider_image = new Array();
      $(".old_slider_image").each(function(){
        const old_slider_image = $(this).val();
        slider_image.push(old_slider_image);
      })

      var transactionArray = new Array();
      $(".addedSliders").each(function(index, element){
        const old_slider_image = $(this).find('.old_slider_image').val();

        if($(this).find('.status').is(':checked')){
          var status = 'active';
        }else{
          var status = 'inactive';
        }
        var content = null;
        var id = $(this).find('.content').attr('id');
        if(id != undefined){
          const innercontent = tinymce.get(id).getContent();
          content = innercontent;
        }
        if (!transactionArray[index]) {
          transactionArray[index] = [];
        }
        transactionArray[index].push(["slider_image" , old_slider_image]);
        transactionArray[index].push(["status" , status]);
        transactionArray[index].push(["content" , content]);
      })
      this.formData.transactionArray = transactionArray;
      this.formData.append('transactionArray', this.formData.transactionArray);

      this.formData.slider_image = slider_image;
      this.formData.append('slider_image', this.formData.status);

      this.formData.append('title', this.formData.title);
      this.formData.append('shortcode', this.formData.shortcode);
      this.formData.append('start_from', this.formData.start_from);
      this.formData.append('end_to', this.formData.end_to);

      //
      var titleError = document.getElementById("titleError");
      var shortcodeError = document.getElementById("shortcodeError");
      var start_fromError = document.getElementById("start_fromError");
      var end_toError = document.getElementById("end_toError");

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

      $(".addedSliders").each(function(index, element){
        var id = $(this).find('.content').attr('id');
        var status = $(this).find('.status').val();
        var content = null;
        if(id != undefined){
          const innercontent = tinymce.get(id).getContent();
          content = innercontent;
        }
        if (content.length === 0) {
          $(this).find('.contentError').removeClass("d-none");
          error = true;
        } else {
          $(this).find('.contentError').addClass("d-none");
        }

        if (status.length === 0) {
          $(this).find('.statusError').removeClass("d-none");
          error = true;
        } else {
          $(this).find('.statusError').addClass("d-none");
        }
      })

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'slider/updateSliderData', {
              method: 'POST',
              body: JSON.stringify(this.formData),
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
      }
    }
  }
}
</script>