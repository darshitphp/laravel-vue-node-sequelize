<template>
  <AdminLayout :page="page">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/page" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Page</h1>
              <form>
                <!-- Form -->
<!--                <div class="mb-4">-->
<!--                  <label for="email">Page name</label>-->
<!--                  <div class="input-group">-->
<!--                    <input type="text" id="name" class="form-control" placeholder="Enter page name" v-model="page.name" @input="updatePage" required>-->
<!--                    <input type="hidden" name="id" id="id" :value="page.id">-->
<!--                  </div>-->
<!--                  <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>-->
<!--                </div>-->
                <div class="mb-4">
                  <label for="name">Page name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" v-model="page.name" @input="updatePage('name')" id="name" required>
                    <input type="hidden" name="id" id="id" :value="page.id">
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label for="slug">Page slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" v-model="page.slug" @input="updatePage('slug')" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label for="title">Page title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" v-model="page.title" @input="updatePage('title')" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Page Title</div>
                </div>
                <div class="mb-4">
                  <label for="meta_title">Page meta title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter meta title" v-model="page.meta_title" @input="updatePage('meta_title')" id="meta_title" required>
                  </div>
                  <div id="meta_titleError" className="text-danger d-none">Please Enter Page Meta Title</div>
                </div>
                <div class="mb-4">
                  <label for="meta_data">Page meta data</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter meta data" v-model="page.meta_data" @input="updatePage('meta_data')" id="meta_data" required>
                  </div>
                  <div id="meta_dataError" className="text-danger d-none">Please Enter Page Meta Data</div>
                </div>
                <div class="mb-4">
                  <label for="meta_keyword">Page meta keyword</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter meta keyword" v-model="page.meta_keyword" @input="updatePage('meta_keyword')" id="meta_keyword" required>
                  </div>
                  <div id="meta_keywordError" className="text-danger d-none">Please Enter Page Meta Keyword</div>
                </div>
                <div class="mb-4">
                  <label for="meta_description">Page meta description</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter meta description" v-model="page.meta_description" @input="updatePage('meta_description')" id="meta_description" required>
                  </div>
                  <div id="meta_descriptionError" className="text-danger d-none">Please Enter Page Meta Description</div>
                </div>
                <div class="mb-4">
                  <label for="body">Body Text</label>
                  <editor v-model="page.body" @input="updatePage('body')" id="body" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_js">Custom JS Text</label>
                  <editor v-model="page.custom_js" @input="updatePage('custom_js')" id="custom_js" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_css">Custom CSS Text</label>
                  <editor v-model="page.custom_css" @input="updatePage('custom_css')" id="custom_css" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
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
    page: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      page: this.page,
      data: '',
      body: '',
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
    updatePage(propertyName, event) {
      this.page[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      var name = document.getElementById("name").value;
      var slug = document.getElementById("slug").value;
      var title = document.getElementById("title").value;
      var meta_title = document.getElementById("meta_title").value;
      var meta_data = document.getElementById("meta_data").value;
      var meta_keyword = document.getElementById("meta_keyword").value;
      var meta_description = document.getElementById("meta_description").value;
      var body = tinymce.get('body').getContent();
      var custom_js = tinymce.get('custom_js').getContent();
      var custom_css = tinymce.get('custom_css').getContent();

      var nameError = document.getElementById("nameError");
      var slugError = document.getElementById("slugError");
      var titleError = document.getElementById("titleError");
      var meta_titleError = document.getElementById("meta_titleError");
      var meta_dataError = document.getElementById("meta_dataError");
      var meta_keywordError = document.getElementById("meta_keywordError");
      var meta_descriptionError = document.getElementById("meta_descriptionError");

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

      if (title.length === 0) {
        titleError.classList.remove("d-none");
        error = true;
      } else {
        titleError.classList.add("d-none");
      }

      if (meta_title.length === 0) {
        meta_titleError.classList.remove("d-none");
        error = true;
      } else {
        meta_titleError.classList.add("d-none");
      }

      if (meta_data.length === 0) {
        meta_dataError.classList.remove("d-none");
        error = true;
      } else {
        meta_dataError.classList.add("d-none");
      }

      if (meta_keyword.length === 0) {
        meta_keywordError.classList.remove("d-none");
        error = true;
      } else {
        meta_keywordError.classList.add("d-none");
      }

      if (meta_description.length === 0) {
        meta_descriptionError.classList.remove("d-none");
        error = true;
      } else {
        meta_descriptionError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch('http://customweb.adorncommerce.com:7000/api/page/updatePageData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                slug:slug,
                title:title,
                meta_title:meta_title,
                meta_data:meta_data,
                meta_keyword:meta_keyword,
                meta_description:meta_description,
                body:body,
                custom_js:custom_js,
                custom_css:custom_css,
                id:id
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/page';
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