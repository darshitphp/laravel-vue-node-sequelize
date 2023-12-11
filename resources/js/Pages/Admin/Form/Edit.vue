<template>
  <AdminLayout :page="form">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/form" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Page</h1>
              <form>
                <div class="mb-4">
                  <label for="name">Form name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" v-model="form.name" @input="updatePage('name',$event)" id="name" required>
                    <input type="hidden" name="id" id="id" :value="form.id">
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label for="title">Form title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" v-model="form.title" @input="updatePage('title',$event)" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Page Title</div>
                </div>
                <div class="mb-4">
                  <label for="slug">Form slug</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter page name" v-model="form.slug" @input="updatePage('slug',$event)" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4">
                  <label for="action_url">Form action url</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter Form Action Url" v-model="form.action_url" @input="updatePage('action_url',$event)" id="action_url" required>
                  </div>
                  <div id="action_urlError" className="text-danger d-none">Please Enter Form Action Url</div>
                </div>
                <div class="mb-4">
                  <label for="submit_type">Select form submit type</label>
                  <div class="input-group">
                    <select id="submit_type" name="submit_type" class="form-control" v-model="form.submit_type">
                      <option value="">Select form submit type</option>
                      <option value="save_entry" :selected="form.submit_type === 'save_entry'">Save Entries</option>
                      <option value="send_email" :selected="form.submit_type === 'send_email'">Send Email</option>
                    </select>
                  </div>
                  <div id="submit_typeError" className="text-danger d-none">Please Select submit type</div>
                </div>
                <div class="mb-4 sendEmailWrapper" :style="(form.submit_type == 'send_email')?'display:block':'display:none'">
                  <label>Enter Email Addresses With Comma Separator</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="e.g test@gmail.com,test1@gmail.com" v-model="form.email_adds" @input="updatePage('email_adds',$event)" id="email_adds" required>
                  </div>
                  <div class="text-danger d-none" id="email_addsError" style="display:none;">Please Enter Input Email</div>
                </div>
                <div class="mb-4">
                  <label>Select form fields</label>
                  <div class="input-group">
                    <select id="" name="form_inputs" class="form-control form_inputs inputFormFields">
                      <option value="" selected>Select input form field</option>
                      <option value="text">Text Box</option>
                      <option value="select">Select Box</option>
                      <option value="checkbox">Check Box</option>
                      <option value="radio">Radio Button</option>
                      <option value="file">File</option>
                      <option value="number">Number</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <button type="button" id="addMoreInputs" class="btn btn-gray-800">Add</button>
                  <div class="displayInputContents"></div>
                </div>
                <div id="hiddenInputElements" style="display:none;">
                  <div class="mb-4 textboxElement">
                    <label>Enter Input Text Name</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter input text label name" required>
                      <input type="text" class="form-control" placeholder="Enter input text name" required>
                    </div>
                    <div class="text-danger textboxElementError" style="display:none;">Please Enter Input Text Name</div>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 selectElement">
                    <label>Enter Select Options Name</label>
                    <input type="text" class="form-control" placeholder="Enter select field name" required>
                    <div class="input-group addMoreOptions">
                      <input type="text" class="form-control" placeholder="Enter input options label name" required>
                      <input type="text" class="form-control" placeholder="Enter input options value" required>
                    </div>
                    <div class="text-danger selectElementError" style="display:none;">Please Enter select field name</div>
                    <button type="button" class="btn btn-primary addInputOptions">Add</button>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 checkboxElement">
                    <label>Enter Input Checkbox Name</label>
                    <input type="text" class="form-control" placeholder="Enter checkbox field name" required>
                    <div class="input-group addMoreOptions">
                      <input type="text" class="form-control" placeholder="Enter checkbox field label name" required>
                      <input type="text" class="form-control" placeholder="Enter checkbox field value" required>
                    </div>
                    <div class="text-danger checkboxElementError" style="display:none;">Please Enter Input Checkbox Name</div>
                    <button type="button" class="btn btn-primary addCheckboxOptions">Add</button>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 radioElement">
                    <label>Enter Input Radio Name</label>
                    <input type="text" class="form-control" placeholder="Enter radio field name" required>
                    <div class="input-group addMoreOptions">
                      <input type="text" class="form-control" placeholder="Enter radio field label name" required>
                      <input type="text" class="form-control" placeholder="Enter radio field value" required>
                    </div>
                    <div class="text-danger radioElementError" style="display:none;">Please Enter Input Radio Name</div>
                    <button type="button" class="btn btn-primary addRadioOptions">Add</button>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 fileElement">
                    <label>Enter Input File Name</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter file field label name" required>
                      <input type="text" class="form-control" placeholder="Enter file field name" required>
                    </div>
                    <div class="text-danger fileElementError" style="display:none;">Please Enter Input File Name</div>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 numberElement">
                    <label>Enter Input Number</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter number field label name" required>
                      <input type="text" class="form-control" placeholder="Enter number field name" required>
                    </div>
                    <div class="text-danger numberElementError" style="display:none;">Please Enter Input Number</div>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                  <div class="mb-4 emailElement">
                    <label>Enter Input Email</label>
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Enter Email field label name" required>
                      <input type="text" class="form-control" placeholder="Enter Email field name" required>
                    </div>
                    <div class="text-danger emailElementError" style="display:none;">Please Enter Input Email</div>
                    <button type="button" class="btn btn-danger removeInputs">Remove</button>
                  </div>
                </div>
                <div class="mb-4">
                  <label for="content">Body Text</label>
                  <editor v-model="form.content" @input="updatePage('content',$event)" id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_js">Custom JS Text</label>
                  <editor v-model="form.custom_js" @input="updatePage('custom_js',$event)" id="custom_js" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_css">Custom CSS Text</label>
                  <editor v-model="form.custom_css" @input="updatePage('custom_css',$event)" id="custom_css" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Submit</button>
                </div>
              </form>
              <button type="button" id="generateForm" class="btn btn-gray-800">Generate Form</button>
              <button type="button" id="closeGeneratedForm" class="btn btn-gray-800">Close Generate Form</button>
              <div class="displayGeneratedForm" v-html="form.fields">
              </div>
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
    form: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      form: this.form,
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
      if (event.target) {
        this.form[propertyName] = event.target.value;
      }
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      var name = document.getElementById("name").value;
      var title = document.getElementById("title").value;
      var slug = document.getElementById("slug").value;
      var action_url = document.getElementById("action_url").value;
      var submit_type = document.getElementById("submit_type").value;
      if(submit_type == 'send_email'){
        var email_adds = document.getElementById("email_adds").value;
      }else{
        var email_adds = null;
      }
      var content = tinymce.get('content').getContent();
      var custom_js = tinymce.get('custom_js').getContent();
      var custom_css = tinymce.get('custom_css').getContent();
      var fields = $(".displayGeneratedForm").html();

      var nameError = document.getElementById("nameError");
      var titleError = document.getElementById("titleError");
      var slugError = document.getElementById("slugError");
      var action_urlError = document.getElementById("action_urlError");
      var submit_typeError = document.getElementById("submit_typeError");
      var email_addsError = document.getElementById("email_addsError");

      let error = false;

      if (name.length === 0) {
        nameError.classList.remove("d-none");
        error = true;
      } else {
        nameError.classList.add("d-none");
      }

      if (title.length === 0) {
        titleError.classList.remove("d-none");
        error = true;
      } else {
        titleError.classList.add("d-none");
      }

      if (slug.length === 0) {
        slugError.classList.remove("d-none");
        error = true;
      } else {
        slugError.classList.add("d-none");
      }

      if (action_url.length === 0) {
        action_urlError.classList.remove("d-none");
        error = true;
      } else {
        action_urlError.classList.add("d-none");
      }

      if (submit_type.length === 0) {
        submit_typeError.classList.remove("d-none");
        error = true;
      } else {
        submit_typeError.classList.add("d-none");
      }

      if(submit_type == 'send_email'){
        if (email_adds.length === 0) {
          email_addsError.classList.remove("d-none");
          error = true;
        } else {
          email_addsError.classList.add("d-none");
        }
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'form/updateFormData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                slug:slug,
                title:title,
                action_url:action_url,
                submit_type:submit_type,
                content:content,
                fields:fields,
                email_adds:email_adds,
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
              window.location.href = '/form';
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