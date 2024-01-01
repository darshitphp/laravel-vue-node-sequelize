<template>
  <AdminLayout :page="form" :token="token">
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
              <h1 class="h3 mb-4">Edit Form</h1>
              <form class="row">
                <div class="mb-4 col-4">
                  <label for="name">Name</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter page name" v-model="form.name" @input="updatePage('name',$event)" id="name" required>
                    <input type="hidden" name="id" id="id" :value="form.id">
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="title">Title</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter title name" v-model="form.title" @input="updatePage('title',$event)" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Page Title</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="slug">Slug</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter page name" v-model="form.slug" @input="updatePage('slug',$event)" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Page Name</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="action_url">Action url</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter Form Action Url" v-model="form.action_url" @input="updatePage('action_url',$event)" id="action_url" required>
                  </div>
                  <div id="action_urlError" className="text-danger d-none">Please Enter Form Action Url</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="submit_type">Select Submit Type</label>
                  <div class="input-group gap-3">
                    <select id="submit_type" name="submit_type" class="form-control rounded-1" v-model="form.submit_type">
                      <option value="">Select form submit type</option>
                      <option value="save_entry" :selected="form.submit_type === 'save_entry'">Save Entries</option>
                      <option value="send_email" :selected="form.submit_type === 'send_email'">Send Email</option>
                    </select>
                  </div>
                  <div id="submit_typeError" className="text-danger d-none">Please Select submit type</div>
                </div>
                <div class="mb-4 col-4 sendEmailWrapper" :style="(form.submit_type == 'send_email')?'display:block':'display:none'">
                  <label>Enter Email Addresses With Comma Separator</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="e.g test@gmail.com,test1@gmail.com" v-model="form.email_adds" @input="updatePage('email_adds',$event)" id="email_adds" required>
                  </div>
                  <div class="text-danger d-none" id="email_addsError" style="display:none;">Please Enter Input Email</div>
                </div>
                <div class="mb-4 col-12">
                  <div class="displayInputContents"></div>
                  <label>Select form fields</label>
                  <div class="input-group gap-3">
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
                  <div class="text-end">
                    <button type="button" id="addMoreInputs" class="btn btn-gray-800 mt-2">Add</button>
                  </div>
                </div>
                <div id="hiddenInputElements" style="display:none;">
                  <div class="mb-4 textboxElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input Text Name</label>
                    <div class="input-group gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter input text label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter input text name" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputs">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger textboxElementError" style="display:none;">Please Enter Input Text Name</div>
                  </div>
                  <div class="mb-4 selectElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Select Options Name</label>
                    <input type="text" class="form-control rounded-1" placeholder="Enter select field name" required>
                    <div class="input-group addMoreOptions my-2 gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter input options label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter input options value" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputElement">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger selectElementError" style="display:none;">Please Enter select field name</div>
                    <div class="input-group-append text-end">
                      <button type="button" class="btn btn-primary addInputOptions mt-2 me-2">Add</button>
                      <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
                    </div>
                  </div>
                  <div class="mb-4 checkboxElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input Checkbox Name</label>
                    <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field name" required>
                    <div class="input-group addMoreOptions my-2 gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field value" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputElement">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger checkboxElementError" style="display:none;">Please Enter Input Checkbox Name</div>
                    <div class="input-group-append text-end">
                      <button type="button" class="btn btn-primary addCheckboxOptions mt-2 me-2">Add</button>
                      <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
                    </div>
                  </div>
                  <div class="mb-4 radioElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input Radio Name</label>
                    <input type="text" class="form-control rounded-1" placeholder="Enter radio field name" required>
                    <div class="input-group addMoreOptions my-2 gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter radio field label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter radio field value" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputElement">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger radioElementError" style="display:none;">Please Enter Input Radio Name</div>
                    <div class="input-group-append text-end">
                      <button type="button" class="btn btn-primary addRadioOptions mt-2 me-2">Add</button>
                      <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
                    </div>
                  </div>
                  <div class="mb-4 fileElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input File Name</label>
                    <div class="input-group gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter file field label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter file field name" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputs">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger fileElementError" style="display:none;">Please Enter Input File Name</div>
                  </div>
                  <div class="mb-4 numberElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input Number</label>
                    <div class="input-group gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter number field label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter number field name" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputs">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger numberElementError" style="display:none;">Please Enter Input Number</div>
                  </div>
                  <div class="mb-4 emailElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
                    <label>Enter Input Email</label>
                    <div class="input-group gap-3">
                      <input type="text" class="form-control rounded-1" placeholder="Enter Email field label name" required>
                      <input type="text" class="form-control rounded-1" placeholder="Enter Email field name" required>
                      <div class="input-group-append">
                        <button type="button" class="btn btn-danger removeInputs">Remove</button>
                      </div>
                    </div>
                    <div class="text-danger emailElementError" style="display:none;">Please Enter Input Email</div>
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
                <div class="offset-4 col-3">
                  <button type="button" id="generateForm" class="btn btn-gray-800 me-2">Preview Form</button>
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Update</button>
                </div>
              </form>
              <div class="displayGeneratedForm mt-4" v-html="form.fields" style="display: none">
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
$(document).ready(function() {
  $(document).on('click','.removeInputElement',function(){
    $(this).parent().parent().remove();
  })
  var inputArray = [];

  // Iterate through each form element
  $('.displayGeneratedForm').find(':input').each(function(index, element) {
    var label = $(element).prev('label').text().trim();
    var inputType = $(element).attr('type');
    var inputName = $(element).attr('name');

    if (!inputArray[index]){
      inputArray[index] = [];
    }
    if (inputType === 'checkbox' || inputType === 'radio') {
      var inputGroupName = $(element).attr('name');
      // Push the name of the group (checkbox or radio button) to myInputNameArray
      inputArray[index].push(inputType);
      inputArray[index].push(inputGroupName);

      // Extract options for checkboxes and radio buttons
      var options = [];
      $(':input[name="' + inputGroupName + '"]').each(function(key, element) {
        if (!options[key]){
          options[key] = [];
        }
        options[key].push($(this).parent().find('label').text().trim());
        options[key].push($(this).val());
      });
      inputArray[index].push(options);
    }else if(inputType == undefined && element.tagName === 'SELECT'){
      inputType = 'select';
      var selectName = $(element).attr('name');
      inputArray[index].push(inputType);
      inputArray[index].push(selectName);
    }else{
      inputArray[index].push(inputType);
      inputArray[index].push(label);
      inputArray[index].push(inputName);
    }


    // Check for checkboxes, radio buttons, and select elements
    if (element.tagName === 'SELECT') {
      var options = [];
      // Iterate through options
      $(element).find('option').each(function(key, element) {
        // options.push($(this).text().trim());
        if (!options[key]){
          options[key] = [];
        }
        options[key].push($(this).text().trim());
        options[key].push($(this).val());
      });
      inputArray[index].push(options);
    }else if(inputType === 'checkbox' && element.tagName === 'checkbox'){
      var options = [];

      // Iterate through options
      $(element).find('checkbox').each(function() {
        options.push($(this).val().trim());
      });
      inputArray[index].push(options);
    }else if(inputType === 'radio' && element.tagName === 'radio'){
      var options = [];

      // Iterate through options
      $(element).find('radio').each(function() {
        options.push($(this).val().trim());
      });
      inputArray[index].push(options);
    }
  });

  var newArray = [];

  // Remove Duplicates From An Array
  inputArray.forEach(function(item) {
    // Check if the item is not already in the new array
    if (!newArray.some(existingItem => JSON.stringify(existingItem) === JSON.stringify(item))) {
      // Push the item to the new array
      newArray.push(item);
    }
  });
  newArray.pop();
  var formHTML = '';
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i][0] == 'text'){
      formHTML += `<div class="mb-4 textboxElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input Text Name</label>
        <div class="input-group gap-3">
          <input type="text" class="form-control rounded-1" placeholder="Enter input text label name" value="`+newArray[i][1]+`" required>
          <input type="text" class="form-control rounded-1" placeholder="Enter input text name" value="`+newArray[i][2]+`" required>
          <div class="input-group-append">
            <button type="button" class="btn btn-danger removeInputs">Remove</button>
          </div>
        </div>
        <div class="text-danger textboxElementError" style="display:none;">Please Enter Input Text Name</div>
      </div>`;
    }else if(newArray[i][0] == 'select'){
      formHTML += `<div class="mb-4 selectElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Select Options Name</label>
        <input type="text" class="form-control rounded-1" placeholder="Enter select field name" value="`+newArray[i][1]+`" required>`;
          for (let j = 1; j < newArray[i][2].length; j++) {
            formHTML += `<div class="input-group addMoreOptions my-2 gap-3">
              <input type="text" class="form-control rounded-1" placeholder="Enter input options label name" value="`+newArray[i][2][j][0]+`" required>
              <input type="text" class="form-control rounded-1" placeholder="Enter input options value" value="`+newArray[i][2][j][1]+`" required>
              <div class="input-group-append">
                <button type="button" class="btn btn-danger removeInputElement">Remove</button>
              </div>
            </div>`;
          }
    formHTML += `<div class="text-danger selectElementError" style="display:none;">Please Enter select field name</div>
        <div class="input-group-append text-end">
          <button type="button" class="btn btn-primary addInputOptions mt-2">Add</button>
          <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
        </div>
      </div>`;
    }else if(newArray[i][0] == 'checkbox'){
      var words = newArray[i][1].split('_');
      // Capitalize the first letter of each word
      newArray[i][1] = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
      formHTML += `<div class="mb-4 checkboxElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input Checkbox Name</label>
        <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field name" value="`+newArray[i][1]+`" required>`;
          for (let j = 0; j < newArray[i][2].length; j++) {
            formHTML += `<div class="input-group addMoreOptions my-2 gap-3">
              <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field label name" value="`+newArray[i][2][j][0]+`" required>
              <input type="text" class="form-control rounded-1" placeholder="Enter checkbox field value" value="`+newArray[i][2][j][1]+`" required>
              <div class="input-group-append">
                <button type="button" class="btn btn-danger removeInputElement">Remove</button>
              </div>
            </div>`;
          }
      formHTML += `<div class="text-danger checkboxElementError" style="display:none;">Please Enter Input Checkbox Name</div>
            <div class="input-group-append text-end">
              <button type="button" class="btn btn-primary addCheckboxOptions mt-2">Add</button>
              <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
            </div>
      </div>`;
    }else if(newArray[i][0] == 'radio'){
      var words = newArray[i][1].split('_');

      // Capitalize the first letter of each word
      newArray[i][1] = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
      formHTML += `<div class="mb-4 radioElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input Radio Name</label>
        <input type="text" class="form-control rounded-1" placeholder="Enter radio field name" value="`+newArray[i][1]+`" required>`;
          for (let j = 0; j < newArray[i][2].length; j++) {
            formHTML += `<div class="input-group addMoreOptions my-2 gap-3">
                <input type="text" class="form-control rounded-1" placeholder="Enter radio field label name" value="`+newArray[i][2][j][0]+`" required>
                <input type="text" class="form-control rounded-1" placeholder="Enter radio field value" value="`+newArray[i][2][j][1]+`" required>
                <div class="input-group-append">
                  <button type="button" class="btn btn-danger removeInputElement">Remove</button>
                </div>
            </div>`;
          }
      formHTML += `<div class="text-danger radioElementError" style="display:none;">Please Enter Input Radio Name</div>
          <div class="input-group-append text-end">
            <button type="button" class="btn btn-primary addRadioOptions mt-2">Add</button>
            <button type="button" class="btn btn-danger removeInputs mt-2">Remove</button>
          </div>
      </div>`;
    }else if(newArray[i][0] == 'file'){
      formHTML += `<div class="mb-4 fileElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input File Name</label>
        <div class="input-group gap-3">
          <input type="text" class="form-control rounded-1" placeholder="Enter file field label name" value="`+newArray[i][1]+`" required>
          <input type="text" class="form-control rounded-1" placeholder="Enter file field name" value="`+newArray[i][2]+`" required>
          <div class="input-group-append">
            <button type="button" class="btn btn-danger removeInputs">Remove</button>
          </div>
        </div>
        <div class="text-danger fileElementError" style="display:none;">Please Enter Input File Name</div>
      </div>`;
    }else if(newArray[i][0] == 'number'){
      formHTML += `<div class="mb-4 numberElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input Number</label>
        <div class="input-group gap-3">
          <input type="text" class="form-control rounded-1" placeholder="Enter number field label name" value="`+newArray[i][1]+`" required>
          <input type="text" class="form-control rounded-1" placeholder="Enter number field name" value="`+newArray[i][2]+`" required>
          <div class="input-group-append">
            <button type="button" class="btn btn-danger removeInputs">Remove</button>
          </div>
        </div>
        <div class="text-danger numberElementError" style="display:none;">Please Enter Input Number</div>
      </div>`;
    }else if(newArray[i][0] == 'email'){
      formHTML += `<div class="mb-4 emailElement" style="border: 1px solid grey; border-radius: 10px; padding: 15px; margin-top: 5px;">
        <label>Enter Input Email</label>
        <div class="input-group gap-3">
          <input type="text" class="form-control rounded-1" placeholder="Enter Email field label name" value="`+newArray[i][1]+`" required>
          <input type="text" class="form-control rounded-1" placeholder="Enter Email field name" value="`+newArray[i][2]+`" required>
          <div class="input-group-append">
            <button type="button" class="btn btn-danger removeInputs">Remove</button>
          </div>
        </div>
        <div class="text-danger emailElementError" style="display:none;">Please Enter Input Email</div>
      </div>`;
    }
  }
  $(".displayInputContents").html(formHTML);
});

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
    token: String,
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
      //form creating dynamically and apply inner HTML to hidden field .displayGeneratedForm
      var html = "";
      var err = false;
      var action_url = document.getElementById("action_url").value;
      var formName = document.getElementById("name").value;
      var formDescription = tinymce.get('content').getContent();
      var form_custom_js = tinymce.get('custom_js').getContent();
      var form_custom_css = $(tinymce.get('custom_css').getContent()).text();
      console.log(form_custom_css);
      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.innerHTML = form_custom_css;
      html += '<div class="card"><div class="card-body"><style>'+form_custom_css+'</style><h2 class="text-center">'+formName+'</h2><p class="text-muted">'+formDescription+'</p><form action="'+action_url+'" method="post" enctype="multipart/form-data" id="dynamicForm">';
      $('.displayInputContents').find(".mb-4").each(function(){
        if($(this).hasClass('textboxElement')){
          var textName = $(this).find('input[type="text"]').val();
          var textVal = $(this).find('input[type="text"]').last().val();

          if(textVal.length == 0){
            $(this).find(".textboxElementError").show();
            err = true;
          }else{
            $(this).find(".textboxElementError").hide();
            html += '<label>'+textName+'</label>';
            html += '<input type="text" class="form-control rounded-1" name="'+textVal+'" placeholder="Enter input '+textName+' name" required="">';
          }
        }
        if($(this).hasClass('selectElement')){
          var textVal = $(this).find('input[type="text"]').val();
          if(textVal.length == 0){
            $(this).find(".selectElementError").show();
            err = true;
          }else {
            $(this).find(".selectElementError").hide();
            html += '<select class="form-select" name="' + textVal + '">';
            html += '<option value="">Select ' + textVal + '</option>';
            $(this).find('.addMoreOptions').each(function () {
              var tName = $(this).find('input[type="text"]').val();
              var tVal = $(this).find('input[type="text"]').last().val();
              html += '<option value="' + tVal + '">' + tName + '</option>';
            })
            html += '</select>';
          }
        }
        if($(this).hasClass('checkboxElement')){
          var textVal = $(this).find('input[type="text"]').val();
          var convertedText = textVal.toLowerCase().replace(/\s+/g, '_');

          if(textVal.length == 0){
            $(this).find(".checkboxElementError").show();
            err = true;
          }else {
            $(this).find(".checkboxElementError").hide();
            html += '<label>' + textVal + '</label>';
            $(this).find('.addMoreOptions').each(function () {
              var tName = $(this).find('input[type="text"]').val();
              var tVal = $(this).find('input[type="text"]').last().val();
              html += '<div className="form-check"><input className="form-check-input" type="checkbox" name="'+convertedText+'" value="' + tVal + '" id="'+tName+'_"><label className="form-check-label" for="'+tName+'_">';
              html += tName + '</label></div>';
            })
          }
        }
        if($(this).hasClass('radioElement')){
          var textVal = $(this).find('input[type="text"]').val();
          var convertedText = textVal.toLowerCase().replace(/\s+/g, '_');
          if(textVal.length == 0){
            $(this).find(".radioElementError").show();
            err = true;
          }else {
            $(this).find(".radioElementError").hide();
            html += '<label>' + textVal + '</label>';
            $(this).find('.addMoreOptions').each(function () {
              var tName = $(this).find('input[type="text"]').val();
              var tVal = $(this).find('input[type="text"]').last().val();
              html += '<div class="form-check"><input class="form-check-input" type="radio" name="'+convertedText+'" id="'+tName+'_" value="' + tVal + '"><label for="'+tName+'_" class="form-check-label">';
              html += tName + '</label></div>';
            })
          }
        }
        if($(this).hasClass('fileElement')){
          var textName = $(this).find('input[type="text"]').val();
          var textVal = $(this).find('input[type="text"]').last().val();
          if(textVal.length == 0){
            $(this).find(".fileElementError").show();
            err = true;
          }else {
            $(this).find(".fileElementError").hide();
            html += '<label>' + textName + '</label>';
            html += '<input type="file" class="form-control rounded-1" name="' + textVal + '" required="">';
          }
        }
        if($(this).hasClass('numberElement')){
          var textName = $(this).find('input[type="text"]').val();
          var textVal = $(this).find('input[type="text"]').last().val();
          if(textVal.length == 0){
            $(this).find(".numberElementError").show();
            err = true;
          }else {
            $(this).find(".numberElementError").hide();
            html += '<label>' + textName + '</label>';
            html += '<input type="number" class="form-control rounded-1" name="' + textVal + '" placeholder="Enter input ' + textVal + '" required="">';
          }
        }
        if($(this).hasClass('emailElement')){
          var textName = $(this).find('input[type="text"]').val();
          var textVal = $(this).find('input[type="text"]').last().val();
          if(textVal.length == 0){
            $(this).find(".emailElementError").show();
            err = true;
          }else {
            $(this).find(".emailElementError").hide();
            html += '<label>' + textName + '</label>';
            html += '<input type="email" class="form-control rounded-1" name="' + textVal + '" placeholder="Enter input ' + textVal + '" required="">';
          }
        }
      })
      html += '<input type="submit" name="submit" class="btn btn-primary" value="submit"></form></div></div>';
      $(".displayGeneratedForm").html(html);

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
                'x-auth-token': this.token,
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