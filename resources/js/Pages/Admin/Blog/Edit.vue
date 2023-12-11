<template>
  <AdminLayout :category="category" :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/blog" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Category</h1>
              <form>
                <div class="mb-4">
                  <label for="name">Category name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter category name" v-model="data.name" @input="updatePage('name')" id="name" required>
                    <input type="hidden" name="id" id="id" :value="data.id">
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label for="slug">Page slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter data name" v-model="data.slug" @input="updatePage('slug')" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label>Select blog category</label>
                  <div class="input-group">
                    <select name="category_id" id="category_id" class="form-control">
                      <option value="">Select Blog Category</option>
                      <option :selected="data.category_id == item.id" v-for="(item, index) in category" :value="item.id">{{ item.name }}</option>
                    </select>
                  </div>
                  <div id="category_idError" className="text-danger d-none">Please Select Blog Category</div>
                </div>
                <div class="mb-4">
                  <label for="tags">Tags</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="data.tags" @input="updatePage('tags')" placeholder="Enter Tags" id="tags" required>
                  </div>
                  <div id="tagsError" className="text-danger d-none">Please Enter Tags</div>
                </div>
                <div class="mb-4">
                  <label for="comments">Comments</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="data.comments" @input="updatePage('comments')" placeholder="Enter Comments" id="comments" required>
                  </div>
                  <div id="commentsError" className="text-danger d-none">Please Enter Comments</div>
                </div>
                <div class="mb-4">
                  <label>Select blog status</label>
                  <div class="input-group">
                    <select name="blog_status" id="blog_status" class="form-control">
                      <option value="">Select Blog Status</option>
                      <option :selected="data.blog_status == 'publish'" value="publish">Publish</option>
                      <option :selected="data.blog_status == 'draft'" value="draft">Draft</option>
                    </select>
                  </div>
                  <div id="blog_statusError" className="text-danger d-none">Please Select Blog Status</div>
                </div>
                <div class="mb-4">
                  <label for="author">Author (Optional)</label>
                  <div class="input-group">
                    <input type="text" class="form-control" v-model="data.author" @input="updatePage('author')" placeholder="Enter Author Name" id="author" required>
                  </div>
                  <div id="authorError" className="text-danger d-none">Please Enter Author Name</div>
                </div>
                <div class="mb-4">
                  <label for="content">Description</label>
                  <editor v-model="data.content" id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="d-grid">
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
    data: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      data: this.data,
      content: '',
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
    updatePage(propertyName, event) {
      this.page[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      var name = document.getElementById("name").value;
      var slug = document.getElementById("slug").value;
      var category_id = document.getElementById("category_id").value;
      var content = tinymce.get('content').getContent();
      var tags = document.getElementById("tags").value;
      var comments = document.getElementById("comments").value;
      var blog_status = document.getElementById("blog_status").value;
      var author = document.getElementById("author").value;


      var nameError = document.getElementById("nameError");
      var slugError = document.getElementById("slugError");
      var category_idError = document.getElementById("category_idError");
      var tagsError = document.getElementById("tagsError");
      var commentsError = document.getElementById("commentsError");
      var blog_statusError = document.getElementById("blog_statusError");


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

      if (category_id.length === 0) {
        category_idError.classList.remove("d-none");
        error = true;
      } else {
        category_idError.classList.add("d-none");
      }

      if (tags.length === 0) {
        tagsError.classList.remove("d-none");
        error = true;
      } else {
        tagsError.classList.add("d-none");
      }

      if (comments.length === 0) {
        commentsError.classList.remove("d-none");
        error = true;
      } else {
        commentsError.classList.add("d-none");
      }

      if (blog_status.length === 0) {
        blog_statusError.classList.remove("d-none");
        error = true;
      } else {
        blog_statusError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'blog/updateBlogData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                slug:slug,
                content:content,
                category_id:category_id,
                tags:tags,
                comments:comments,
                blog_status:blog_status,
                author:author,
                id:id
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/blog';
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