<template>
  <AdminLayout :header="header" :token="token">
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
            <div class="p-1 col-12">
              <form class="row">
                <!-- Form -->
                <div class="mb-4 col-6">
                  <label for="title">Header title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" :value="header.title" id="title" required>
                    <input type="hidden" name="id" id="id" :value="header.id">
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Header Title</div>
                </div>
                <div class="mb-4 col-6">
                  <label for="position">Select Position type</label>
                  <div class="input-group">
                    <select id="position" name="position" class="form-control">
                      <option value="">Select header position type</option>
                      <option :selected="header.position === 'left'" value="left">Left</option>
                      <option :selected="header.position === 'center'" value="center">Center</option>
                      <option :selected="header.position === 'right'" value="right">Right</option>
                    </select>
                  </div>
                  <div id="positionError" className="text-danger d-none">Please Select header position type</div>
                </div>
                <div class="mb-4 col-6 d-flex gap-2">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="headerOption" :checked="header.logo_img != null && header.logo_img.length" value="logo" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Logo
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="headerOption" :checked="header.social_links !== null && header.social_links.length !== 0" value="link" id="flexRadioDefault2">
                    <label class="form-check-label" for="flexRadioDefault2">
                      Social Links
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="headerOption" :checked="header.content != null && header.content.length" value="content" id="flexRadioDefault3">
                    <label class="form-check-label" for="flexRadioDefault3">
                      Content
                    </label>
                  </div>
                </div>
                <div class="mb-4 col-6 logoWrapper" :style="{ display: header.logo_img !== null && header.logo_img.length ? 'block' : 'none' }">
                  <label>Header Logo</label>
                  <div class="input-group">
                    <input type="file" class="form-control" id="header_logo" name="image" accept="image/*" @change="handleHeaderLogoUpload" required>
                    <input type="hidden" id="old_header_logo" :value="header.logo_img">
                  </div>
                  <img :src="'/assets/img/header_logo/'+header.logo_img" class="image-preview" alt="" height="50" width="50">
                  <div id="imageError" className="text-danger d-none">Please select logo image</div>
                </div>
                <div class="mb-4 socialWrapper socialLinkWrapper" :style="{ display: header.social_links !== null && header.social_links.length !== 0 ? 'block' : 'none' }">
                  <div class="moreSocialContents">
                    <div class="row addedSocialLink m-0 mt-2" v-for="(datas, index) in header.social_links" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                      <div class="mb-4 col-4 socialWrapper">
                        <label>Social account title</label>
                        <div class="input-group">
                          <input type="text" class="form-control social_title" placeholder="Enter title name" name="logo_title" v-model="datas[0]" :id="'logo_title_'+index" @input="updatePage('logo_title_'+index,$event)" required>
                        </div>
                        <div id="titleError" className="text-danger d-none">Please enter social title</div>
                      </div>
                      <div class="mb-4 col-4">
                        <label>Social account image</label>
                        <div class="input-group">
                          <input type="file" class="form-control social_image" name="social_image[]" accept="image/*" required>
                          <input type="hidden" name="social_image" class="hidden_social_image" :value="datas[1]">
                        </div>
                        <img :src="'/assets/img/header_logo/social_media/'+datas[1]" class="image-preview" alt="" height="50" width="50">
                        <div id="imageError" className="text-danger d-none">Please select logo image</div>
                      </div>
                      <div class="mb-4 col-4">
                        <label>Social account link</label>
                        <div class="input-group">
                          <input type="text" class="form-control social_link" placeholder="Enter social link" name="link" v-model="datas[2]" :id="'link_'+index" @input="updatePage('link_'+index,$event)" required>
                        </div>
                        <div id="titleError" className="text-danger d-none">Please enter social link</div>
                      </div>
                      <div class="col-12 text-end addMoreWrapper" :data-counter="index">
                        <button type="button" v-if="index != 0" class="btn btn-danger removeEditMoreSocial mx-1">Remove</button>
                        <button type="button" @click="addFileUpload" v-if="index == Object.keys(header.social_links).length - 1" id="addMoreSocialLink" class="btn btn-gray-800">Add More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="hiddenSocialGroup" style="display: none">
                  <div class="row m-0 mt-2" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <div class="mb-4 col-4">
                      <label>Title</label>
                      <div class="input-group">
                        <input type="text" class="form-control social_title" placeholder="Enter social title" v-model="header.logo_title" @input="updatePage('logo_title',$event)" name="logo_title" required>
                      </div>
                      <div id="titleError" className="text-danger d-none">Please enter social title</div>
                    </div>
                    <div class="mb-4 col-4">
                      <label>Image</label>
                      <div class="input-group">
                        <input type="file" class="form-control social_image" name="social_image[]" accept="image/*" required>
                        <input type="hidden" name="social_image" class="hidden_social_image" value="">
                      </div>
                      <img src="https://placehold.co/50x50/EEE/31343C" class="image-preview" alt="" height="50" width="50">
                      <div id="imageError" className="text-danger d-none">Please select logo image</div>
                    </div>
                    <div class="mb-4 col-4">
                      <label>Link</label>
                      <div class="input-group">
                        <input type="text" class="form-control social_link" placeholder="Enter social link" name="link" required>
                      </div>
                      <div id="titleError" className="text-danger d-none">Please enter social link</div>
                    </div>
                  </div>
                </div>

                <div class="mb-4 contentWrapper" :style="{ display: header.content !== null && header.content.length !== 0 ? 'block' : 'none' }">
                  <label for="content">Content Text</label>
                  <editor id="content" @input="updatePage('content',$event)" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Update</button>
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
  var clicker = $(".addedSocialLink").length;
  $(document).on("change","#header_logo",function(event){
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
        const response = await fetch(apiBaseUrl + 'header/headerLogoUpload', {
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
          that.parent().parent().find('#old_header_logo').val(respdata.data);
          that.parent().parent().find('.image-preview').attr('src','/assets/img/header_logo/'+respdata.data);
        }
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };
    fileUpload();
  });

  $(document).on("change",".social_image",function(event){
    var input = event.target;
    var that = $(this);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        that.parent().parent().find('.image-preview').attr('src',e.target.result);
      };
      console.log(input.files[0]);
      reader.readAsDataURL(input.files[0]);
    }

    const myFormData = new FormData();
    myFormData.append('file', input.files[0]);
    const fileUpload = async () => {
      try {
        const response = await fetch(apiBaseUrl + 'header/socialImageUpload', {
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
          that.parent().parent().find('.hidden_social_image').val(respdata.data);
          that.parent().parent().find('.image-preview').attr('src','/assets/img/header_logo/social_media/'+respdata.data);
        }
      } catch (error) {
        console.error(error);
        // Handle error if necessary
      }
    };

    fileUpload();
  });

  $(document).on("click","#addMoreSocialLink",function() {
    $("#addMoreSocialLink").remove();
    $('#hiddenSocialGroup').find('.addMoreWrapper').remove();
    $(".addMoreWrapper").each(function(){
      var count = $(this).data("counter");
      if((count) == (clicker-1)){
        $(this).find("#addMoreSocialLink").remove();
      }
    })
    $('#hiddenSocialGroup').find('.row').append('<div class="col-12 text-end addMoreWrapper" data-counter="'+clicker+'"> <button type="button" class="btn btn-danger removeEditMoreSocial">Remove</button> <button type="button" id="addMoreSocialLink" class="btn btn-gray-800">Add More</button> </div>');
    var hiddenInputs = $('#hiddenSocialGroup').html();
    $('.moreSocialContents').append(hiddenInputs);
    clicker++;
  });

  $(document).on('click', '.removeEditMoreSocial', function() {
    var countValues = [];
    $(this).parent().parent().remove();
    $(".socialLinkWrapper").find(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      countValues.push(count);
      $(this).find("#addMoreSocialLink").remove();
    });
    var maxCount = Math.max(...countValues);
    $(".socialLinkWrapper").find(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      const include = `<button class="btn btn-primary" type="button" id="addMoreSocialLink">Add more</button>`;
      if(maxCount == count){
        $(this).append(include);
      }
    });
  });

});

import AdminLayout from "@/Pages/AdminLayout.vue";
import editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor,
    AdminLayout
  },
  props: {
    header: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
    token: String,
  },
  mounted() {
    const self = this;
    setTimeout(function(){
      var content = self.header.content;
      tinymce.get(`content`).setContent(content);
    },1000);
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
    addFileUpload() {
      this.fileUploads.push({});
    },
    removeFileUpload(index) {
      this.fileUploads.splice(index, 1);
    },
    handleHeaderLogoUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.header_logo = files[i];
      }
    },
    updatePage(propertyName, event) {
      if (event.target) {
        this.header[propertyName] = event.target.value;
      }
    },
    handleSubmit(){
      this.formData.title = document.getElementById("title").value;
      this.formData.position = document.getElementById("position").value;
      this.formData.content = tinymce.get('content').getContent();
      this.formData.id = document.getElementById("id").value;

      this.formData.append('title', this.formData.title);
      this.formData.append('position', this.formData.position);
      this.formData.append('content', this.formData.content);
      this.formData.append('id', this.formData.id);

      var socialImageArray = new Array();
      $(".hidden_social_image").each(function(index, element){
        var social_image = $(this).val();
        var social_title = $(this).parent().parent().parent().find('.social_title').val();
        var social_link  = $(this).parent().parent().parent().find('.social_link').val();
        //assigning null index then push values into that index
        if (!socialImageArray[index] && social_image.length != 0 && social_title.length != 0 && social_link.length != 0) {
          socialImageArray[index] = [];
        }
        if(social_title.length != 0) {
          socialImageArray[index].push(social_title);
        }
        if(social_image.length != 0){
          socialImageArray[index].push(social_image);
        }
        if(social_link.length != 0) {
          socialImageArray[index].push(social_link);
        }
      })
      this.formData.socialImageArray = socialImageArray;
      this.formData.append('socialImageArray', this.formData.socialImageArray);

      this.formData.logo_img = $("#old_header_logo").val();
      this.formData.append('logo_img', this.formData.logo_img); // Append the header logo file to formData

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
            const response = await fetch(apiBaseUrl+'header/updateHeaderData', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
                'x-auth-token': this.token,
              },
              body: JSON.stringify(this.formData),
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