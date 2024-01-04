<template>
  <AdminLayout :page="data" :token="token">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/blog-category" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-1">
              <form class="row">
                <!-- Form -->
                <div class="mb-4 col-4">
                  <label for="name">Category name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter category name" id="name" required>
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Category Name</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="slug">Page slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Category Slug</div>
                </div>
                <div class="mb-4 col-4">
                  <label>Select parent category</label>
                  <div class="input-group">
                    <select name="parent_id" id="parent_id" class="form-control pageLink">
                      <option value="0">Select Parent Category</option>
                      <option v-for="(item, index) in data" :value="item.id">{{ item.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="mb-4">
                  <label for="description">Description</label>
                  <editor v-model="description" id="description" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
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
    token: String,
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
      var name = document.getElementById("name").value;
      var slug = document.getElementById("slug").value;
      var parent_id = document.getElementById("parent_id").value;
      var description = tinymce.get('description').getContent();

      var nameError = document.getElementById("nameError");
      var slugError = document.getElementById("slugError");

      let error = false;

      if (name.length === 0) {
        nameError.classList.remove("d-none");
        error = true;
      } else {
        nameError.classList.add("d-none");
      }

      if (slug.length === 0) {
        slugError.classList.remove("d-none");
        error = true;
      } else {
        slugError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'blogCategory/addBlogCategoryData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                slug:slug,
                description:description,
                parent_id:parent_id
              }),
              headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.token,
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/blog-category';
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