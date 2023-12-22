<template>
  <AdminLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/gallary" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Image</h1>
              <form>
                <div class="mb-4">
                  <div class="">
                    <div class="mb-4">
                      <label>Image alter</label>
                      <div class="input-group">
                        <input type="text" class="form-control alter" placeholder="Enter image alter" required>
                      </div>
                      <div className="text-danger d-none gallary_alterError">Please enter image alter name</div>
                    </div>
                    <div class="mb-4">
                      <label>Image</label>
                      <div class="input-group">
                        <input type="file" class="form-control gallary_image" :name="'gallary_image[' + index + ']'" @change="handleFileUpload" accept="image/*" required>
                      </div>
                      <div id="gallary_imageError" className="text-danger d-none">Please select image</div>
                    </div>
                    <div class="mb-4">
                      <label>Image Custom link</label>
                      <div class="input-group">
                        <input type="text" class="form-control custom_link" placeholder="Enter image custom link" name="custom_link" required>
                      </div>
                      <div id="custom_linkError" className="text-danger d-none">Please enter image custom link</div>
                    </div>
                  </div>
                  <div class="moreGallaryContents"></div>
                  <div class="text-end">
                    <button id="addMoreGallery" type="button" class="btn btn-primary mt-2">Add More</button>
                  </div>
                  <div class="input-group" id="gallaryGroup" style="display: none">
                    <div>
                      <div class="mb-4">
                        <label>Image alter</label>
                        <div class="input-group">
                          <input type="text" class="form-control alter" placeholder="Enter image alter" required>
                        </div>
                        <div className="text-danger d-none gallary_alterError">Please enter image alter name</div>
                      </div>
                      <div class="mb-4">
                        <label>Image</label>
                        <div class="input-group">
                          <input type="file" class="form-control gallary_image" :name="'gallary_image[' + index + ']'" @change="handleFileUpload" accept="image/*" required>
                        </div>
                        <div id="gallary_imageError" className="text-danger d-none">Please select image image</div>
                      </div>
                      <div class="mb-4">
                        <label>Image Custom link</label>
                        <div class="input-group">
                          <input type="text" class="form-control custom_link" placeholder="Enter image custom link" name="custom_link" required>
                        </div>
                        <div id="custom_linkError" className="text-danger d-none">Please enter image custom link</div>
                      </div>
                      <div class="text-end">
                      <button type="button" @click="removeFileUpload(index)" class="btn btn-danger removeMoreGallary">Remove</button>
                      </div>
                    </div>
                  </div>
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
//add more gallary click event
$(document).on("click","#addMoreGallery",function(){
  // alert('yes');
  var hiddenInputs = $('#gallaryGroup').html();
  $('.moreGallaryContents').append(hiddenInputs);
})

//remove more gallary click event
$(document).on('click', '.removeMoreGallary', function() {
  $(this).parent().parent().remove();
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
      gallary_image: [],
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
    removeFileUpload(index) {
      this.fileUploads.splice(index, 1);
    },
    handleFileUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.gallary_image = files[i];
      }
    },
    handleSubmit(){
      const alter = new Array();
      $(".alter").each(function(){
        var vTitle = $(this).val();
        if(vTitle.length != 0){
          alter.push(vTitle);
        }
      })
      this.formData.alter = alter;
      this.formData.append('alter', this.formData.alter);

      const custom_link = new Array();
      $(".custom_link").each(function(){
        var vTitle = $(this).val();
        if(vTitle.length != 0){
          custom_link.push(vTitle);
        }
      })
      this.formData.custom_link = custom_link;
      this.formData.append('custom_link', this.formData.custom_link);

      const fileInputs = document.querySelectorAll('.gallary_image'); // Get all elements with class name "gallary_image"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        // formData.append('file', file);
        this.formData.append('gallary_image[]', file); // Add each file separately
      });



      //
      let error = false;
      // if (this.formData.alter.length === 0) {
      //   alterError.classList.remove("d-none");
      //   error = true;
      // } else {
      //   alterError.classList.add("d-none");
      // }
      //
      // if (this.formData.custom_link.length === 0) {
      //   custom_linkError.classList.remove("d-none");
      //   error = true;
      // } else {
      //   custom_linkError.classList.add("d-none");
      // }

      if (error === false) {

        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'gallary/addGallaryData', {
              method: 'POST',
              body: this.formData,
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/gallary';
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