<template>
  <AdminLayout :product="product" :category="category">
    <!-- Your middle slider content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/product" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Edit Product</h1>
              <form>
                <div class="mb-4">
                  <label for="title">Slider title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" v-model="product.title" @input="updatePage('title',$event)" id="title" required>
                    <input type="hidden" name="id" id="id" :value="product.id">
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Slider Title</div>
                </div>
                <div class="mb-4">
                  <label>Select product category</label>
                  <div class="input-group">
                    <select name="category_id" id="category_id" class="form-control">
                      <option value="">Select Product Category</option>
                      <option v-for="(item, index) in category" :selected="product.category_id === item.id" :value="item.id">{{ item.name }}</option>
                    </select>
                  </div>
                  <div id="category_idError" className="text-danger d-none">Please Select Product Category</div>
                </div>
                <div class="mb-4">
                  <label for="status">Select Product status</label>
                  <div class="input-group">
                    <select id="status" name="status" class="form-control" v-model="product.status">
                      <option value="">Select product status</option>
                      <option value="enable" :selected="product.status === 'enable'">Enable</option>
                      <option value="disable" :selected="product.status === 'disable'">Disable</option>
                    </select>
                  </div>
                  <div id="statusError" className="text-danger d-none">Please Select Product Status</div>
                </div>
                <div class="mb-4">
                  <label for="short_description">Product short description</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter product short description" v-model="product.short_description" @input="updatePage('short_description',$event)" id="short_description" required>
                  </div>
                  <div id="short_descriptionError" className="text-danger d-none">Please Enter Product Short Description</div>
                </div>
                <div class="mb-4">
                  <label for="options">Upload slider images</label>
                  <div class="input-group mb-2">
                    <input type="file" class="form-control product_image" @change="handleFileUpload" accept="image/*">
                  </div>
                  <div v-for="(fileUpload, indx) in fileUploads" :key="indx" class="fileUpload">
                    <div class="input-group mb-2">
                      <input type="file"  class="form-control product_image" @change="handleFileUpload" accept="image/*">
                      <button @click="removeFileUpload(indx)" type="button" class="btn btn-danger">Remove</button>
                    </div>
                  </div>
                  <div class="row">
                    <div style="width: 100px!important;position: relative;" v-for="arr in JSON.parse(product.images)" :key="arr">
                      <input type="hidden" id="product_img_src" :value="product.images">
                      <input type="hidden" name="old_product_image" id="old_product_image" class="form-control" :value="product.images">
                      <i class="fa fa-close removeProductImage" :data-id="product.id" :data-src="arr" style="font-size:14px;color:darkgrey;cursor: pointer;position: absolute;padding-left: 63px"></i>
                      <img :src="'/assets/img/product/' + arr" height="75" style="width: 100px!important;border: 2px solid grey;border-radius: 5px;" />
                    </div>
                  </div>
                  <button @click="addFileUpload" type="button" class="btn btn-primary">Add More</button>
                </div>
                <div class="mb-4">
                  <label for="slug">Product Slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter product slug" id="slug" v-model="product.slug" @input="updatePage('slug',$event)" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Product Slug</div>
                </div>
                <div class="mb-4">
                  <label for="unique_id">Product Unique Id</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter product unique id" id="unique_id" v-model="product.unique_id" @input="updatePage('unique_id',$event)" required>
                  </div>
                  <div id="unique_idError" className="text-danger d-none">Please Enter Product Unique Id</div>
                </div>
                <div class="mb-4">
                  <label>Select product layout</label>
                  <div class="input-group">
                    <select name="layout" id="layout" class="form-control">
                      <option value="">Select Product Layout</option>
                      <option :selected="product.layout === 'layout1'" value="layout1">Layout 1</option>
                      <option :selected="product.layout === 'layout2'" value="layout2">Layout 2</option>
                      <option :selected="product.layout === 'layout3'" value="layout3">Layout 3</option>
                    </select>
                  </div>
                  <div id="layoutError" className="text-danger d-none">Please Select Product Category</div>
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

$(document).on("click",".removeProductImage",function(){
  var source = $(this).data('src');
  // var array = JSON.parse($("#product_img_src").val());
  var array = new Array();
  $(".removeProductImage").each(function(){
    var imageSrc = $(this).data('src');
    array.push(imageSrc);
  })
  var id = $(this).data('id');
  var uniqueArray = [];

  //Remove same indexes from an array and create new unique array
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== source) {
      uniqueArray.push(array[i]);
    }
  }

  var product_image = [...new Set(uniqueArray)];

  //convert into JSON
  product_image = JSON.stringify(product_image)
  const removeItems = async () => {
    const response = await fetch(apiBaseUrl+'product/UpdateAfterRemoveImgData', {
      method: 'POST',
      body: JSON.stringify({
        images: product_image,
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
  removeItems();
})

export default {
  components: {
    editor,
    AdminLayout
  },
  props: {
    product: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
    category: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      data: '',
      body: '',
      custom_js: '',
      custom_css: '',
      fileUploads: [],
      product_image: [],
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
    removeFileUpload(indexs) {
      this.fileUploads.splice(indexs, 1);
    },
    handleFileUpload(event) {
      var files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        this.formData.product_image = files[i];
      }
    },
    updatePage(propertyName, event) {
      this.product[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      this.formData.id = id;
      this.formData.title = document.getElementById("title").value;
      this.formData.short_description = document.getElementById("short_description").value;
      this.formData.category_id = document.getElementById("category_id").value;
      this.formData.slug = document.getElementById("slug").value;
      this.formData.unique_id = document.getElementById("unique_id").value;
      this.formData.layout = document.getElementById("layout").value;
      this.formData.status = document.getElementById("status").value;

      this.formData.append('id', this.formData.id);
      this.formData.append('title', this.formData.title);
      this.formData.append('short_description', this.formData.short_description);
      this.formData.append('category_id', this.formData.category_id);
      this.formData.append('slug', this.formData.slug);
      this.formData.append('unique_id', this.formData.unique_id);
      this.formData.append('layout', this.formData.layout);
      this.formData.append('status', this.formData.status);

      //
      var titleError = document.getElementById("titleError");
      var short_descriptionError = document.getElementById("short_descriptionError");
      var category_idError = document.getElementById("category_idError");
      var slugError = document.getElementById("slugError");
      var unique_idError = document.getElementById("unique_idError");
      var layoutError = document.getElementById("layoutError");

      // const formData = new FormData();
      const fileInputs = document.querySelectorAll('.product_image'); // Get all elements with class name "product_image"

      fileInputs.forEach((fileInput) => {
        const file = fileInput.files[0];
        // formData.append('file', file);
        this.formData.append('product_image[]', file); // Add each file separately
      });
      //
      let error = false;
      if (this.formData.title.length === 0) {
        titleError.classList.remove("d-none");
        error = true;
      } else {
        titleError.classList.add("d-none");
      }

      if (this.formData.short_description.length === 0) {
        short_descriptionError.classList.remove("d-none");
        error = true;
      } else {
        short_descriptionError.classList.add("d-none");
      }

      if (this.formData.category_id.length === 0) {
        category_idError.classList.remove("d-none");
        error = true;
      } else {
        category_idError.classList.add("d-none");
      }

      if (this.formData.slug.length === 0) {
        slugError.classList.remove("d-none");
        error = true;
      } else {
        slugError.classList.add("d-none");
      }

      if (this.formData.unique_id.length === 0) {
        unique_idError.classList.remove("d-none");
        error = true;
      } else {
        unique_idError.classList.add("d-none");
      }

      if (this.formData.layout.length === 0) {
        layoutError.classList.remove("d-none");
        error = true;
      } else {
        layoutError.classList.add("d-none");
      }

      if (this.formData.status.length === 0) {
        statusError.classList.remove("d-none");
        error = true;
      } else {
        statusError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'product/updateProductData', {
              method: 'POST',
              body: this.formData,
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/product';
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