<template>
  <AdminLayout :category="category" :token="token">
    <!-- Your middle slider content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/category" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-1">
              <form class="row">
                <div class="mb-4 col-4">
                  <label for="name">Slider name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter name name" v-model="category.name" @input="updatePage('name')" id="name" required>
                    <input type="hidden" name="id" id="id" :value="category.id">
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Slider Title</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="status">Select status</label>
                  <div class="input-group">
                    <select id="status" name="status" class="form-control" v-model="category.status">
                      <option value="">Select Category Status</option>
                      <option value="enable" :selected="category.status === 'enable'">Enable</option>
                      <option value="disable" :selected="category.status === 'disable'">Disable</option>
                    </select>
                  </div>
                  <div id="statusError" className="text-danger d-none">Please Select Category Status</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="status">Include in menu</label>
                  <div class="input-group">
                    <select id="include" name="include" class="form-control">
                      <option value="">Include in menu</option>
                      <option :selected="category.include === 'yes'" value="yes">Yes</option>
                      <option :selected="category.include === 'no'" value="no">No</option>
                    </select>
                  </div>
                  <div id="includeError" className="text-danger d-none">Please Select Include Option</div>
                </div>
                <div class="mb-4 col-12">
                  <label for="content">Content</label>
                  <editor id="content" v-model="category.content" @input="updatePage('content')" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                  <div id="contentError" className="text-danger d-none">Please enter slider content</div>
                </div>
                <div class="mb-4 col-6">
                  <label for="options">Upload category images</label>
                  <div class="input-group mb-2">
                    <input type="file" name="banner_image" class="form-control" id="banner_image" @change="handleFileUpload" accept="image/*">
                  </div>
                  <div class="d-flex">
                    <i class="fa fa-close removeCategoryImage" :data-id="category.id" :data-src="category.banner_image" style="font-size:14px;color:darkgrey;cursor: pointer;position: absolute;padding-left: 63px"></i>
                    <img :src="'/assets/img/category/' + category.banner_image" id="old_banner_image" :data-src="category.banner_image" height="75" style="width: 75px!important;border: 2px solid grey;border-radius: 5px;" />
                  </div>
                </div>
                <div class="mb-4 col-6">
                  <label for="slug">Category slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" id="slug" v-model="category.slug" @input="updatePage('slug')" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Category Slug</div>
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
import AdminLayout from "@/Pages/AdminLayout.vue";
import editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor,
    AdminLayout
  },
  props: {
    category: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
    token: String,
  },
  data() {
    return {
      category: this.category,
      data: '',
      body: '',
      fileUploads: [],
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
        this.formData.banner_image = files[i];
      }
    },
    updatePage(propertyName, event) {
      this.category[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      this.formData.id = id;
      this.formData.name = document.getElementById("name").value;
      this.formData.content = tinymce.get('content').getContent();
      this.formData.slug = document.getElementById("slug").value;
      this.formData.include = document.getElementById("include").value;
      this.formData.status = document.getElementById("status").value;
      this.formData.old_banner_image = $("#old_banner_image").data('src');

      this.formData.append('id', this.formData.id);
      this.formData.append('name', this.formData.name);
      this.formData.append('slug', this.formData.slug);
      this.formData.append('content', this.formData.content);
      this.formData.append('include', this.formData.include);
      this.formData.append('status', this.formData.status);
      this.formData.append('old_banner_image', this.formData.old_banner_image);
      //
      var nameError = document.getElementById("nameError");
      var slugError = document.getElementById("slugError");
      var contentError = document.getElementById("contentError");
      var statusError = document.getElementById("statusError");
      var includeError = document.getElementById("includeError");

      var banner_image = document.getElementById("banner_image");
      var bannerImageFile = banner_image.files[0];
      this.formData.append('banner_image', bannerImageFile); // Append the header logo file to formData

      //
      let error = false;
      if (this.formData.name.length === 0) {
        nameError.classList.remove("d-none");
        error = true;
      } else {
        nameError.classList.add("d-none");
      }

      if (this.formData.slug.length === 0) {
        slugError.classList.remove("d-none");
        error = true;
      } else {
        slugError.classList.add("d-none");
      }

      if (this.formData.content.length === 0) {
        contentError.classList.remove("d-none");
        error = true;
      } else {
        contentError.classList.add("d-none");
      }

      if (this.formData.status.length === 0) {
        statusError.classList.remove("d-none");
        error = true;
      } else {
        statusError.classList.add("d-none");
      }

      if (this.formData.include.length === 0) {
        includeError.classList.remove("d-none");
        error = true;
      } else {
        includeError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'category/updateCategoryData', {
              method: 'POST',
              body: this.formData,
              headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.token,
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/category';
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