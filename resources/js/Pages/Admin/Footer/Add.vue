<template>
  <AdminLayout :page="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/footer" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Footer</h1>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="title">Footer title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Header Title</div>
                </div>
                <div class="mb-4">
                  <label for="position">Footer status</label>
                  <div class="input-group">
                    <select id="footerStatus" name="footerStatus" class="form-control">
                      <option value="">Select footer status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div id="footerStatusError" className="text-danger d-none">Please Select header position type</div>
                </div>
                <div class="mb-4">
                  <div class="">
                    <div class="mb-4">
                      <label>Link Type</label>
                      <div class="input-group">
                        <select name="position" class="form-control linkType">
                          <option value="">Select Link Type</option>
                          <option value="predefined">Predefined</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                    <div class="mb-4 customLinkWrapper" style="display: none;">
                      <label>Custom link</label>
                      <div class="input-group">
                        <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
                      </div>
                      <div id="customLinkError" style="display: none" className="text-danger">Please Enter Custom Link</div>
                    </div>
                    <div class="mb-4 pageLinkWrapper" style="display: none;">
                      <label>Select page link</label>
                      <div class="input-group">
                        <select name="pageLink" class="form-control">
                          <option value="">Select Page Link</option>
                          <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                    <div class="mb-4">
                      <label>Content Text</label>
                      <editor id="content" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                          menubar: false,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                          ],
                          toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                      }"></editor>
                    </div>
                    <div class="mb-4">
                      <label for="position">Footer link status</label>
                      <div class="input-group">
                        <select id="footerLinkStatus" name="footerLinkStatus" class="form-control">
                          <option value="">Select footer link status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                      <div id="footerLinkStatusError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                  </div>
                  <button type="button" id="addMoreFooters" class="btn btn-gray-800">Add</button>
                  <div class="moreSocialContents"></div>
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
  var count = 0;
  $(document).on("click","#addMoreFooters",function() {
    // var hiddenInputs = $('#socialGroup').html();
    var uniqueId = 'editor_'+count;
    var hiddenInputs = `<div class="">
      <div class="mb-4">
        <label>Link Type</label>
        <div class="input-group">
          <select name="position" class="form-control linkType">
            <option value="">Select Link Type</option>
            <option value="predefined">Predefined</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div id="positionError" class="text-danger d-none">Please Select header position type</div>
      </div>
      <div class="mb-4 customLinkWrapper" style="display: none;">
        <label>Custom link</label>
        <div class="input-group">
          <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
        </div>
        <div id="customLinkError" class="text-danger" style="display: none">Please Enter Custom Link</div>
      </div>
      <div class="mb-4 pageLinkWrapper" style="display: none;">
        <label>Select page link</label>
        <div class="input-group">
          <select name="pageLink" class="form-control">
            <option value="">Select Page Link</option>
            <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
          </select>
        </div>
        <div class="text-danger positionError" style="display: none">Please Select header position type</div>
      </div>
      <div class="mb-4">
        <label>Content Text</label>
        <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ menubar: false, plugins: [ 'advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount' ], toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help' }"></editor>
      </div>
      <div class="mb-4">
        <label for="position">Footer link status</label>
        <div class="input-group">
          <select id="footerLinkStatus" name="footerLinkStatus" class="form-control">
            <option value="">Select footer link status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="text-danger footerLinkStatusError" style="display: none">Please Select header position type</div>
      </div>
      <button type="button" class="btn btn-danger removeMoreSocial">Remove</button>
    </div>`;
    $('.moreSocialContents').append(hiddenInputs);
    tinymce.init({
      selector: '#'+uniqueId,
      apiKey: '2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh',
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
    });
    count++;
  });

  $(document).on("change",".linkType",function() {
    var linkType = $(this).val();
    if(linkType == 'predefined'){
      $(this).parent().parent().parent().find(".pageLinkWrapper").show();
      $(this).parent().parent().parent().find(".customLinkWrapper").hide();
    }
    else if(linkType == 'custom'){
      $(this).parent().parent().parent().find(".customLinkWrapper").show();
      $(this).parent().parent().parent().find(".pageLinkWrapper").hide();
    }
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
  props: {
    data: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
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
    handleSubmit(){
      var title = document.getElementById("title").value;
      var content = tinymce.get('.content').getContent();

      this.formData.append('title', this.formData.title);
      this.formData.append('position', this.formData.position);
      this.formData.append('content', this.formData.content);

      // const formData = new FormData();
      const fileInputs = document.querySelectorAll('.social_image'); // Get all elements with class name "slider_image"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        this.formData.append('social_image[]', file);
      });

      // const social_title = document.querySelectorAll('.social_title');
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
            const response = await fetch('http://127.0.0.1:7000/api/footer/addFooterData', {
              method: 'POST',
              body: this.formData,
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/footer';
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