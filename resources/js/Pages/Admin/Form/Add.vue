<template>
  <AdminLayout :data="data" :token="token">
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
              <h1 class="h3 mb-4">Add Form</h1>
              <form class="row">
                <!-- Form -->
                <div class="mb-4 col-4">
                  <label for="name">Name</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter page name" id="name" required>
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Form Name</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="title">Title</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" className="text-danger d-none">Please Enter Form Title</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="slug">Slug</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter form slug" id="slug" required>
                  </div>
                  <div id="slugError" className="text-danger d-none">Please Enter Form Slug</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="action_url">Action url</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="Enter form action url" id="action_url" required>
                  </div>
                  <div id="action_urlError" className="text-danger d-none">Please Enter Form Action Url</div>
                </div>
                <div class="mb-4 col-4">
                  <label for="submit_type">Select Submit Type</label>
                  <div class="input-group gap-3">
                    <select id="submit_type" name="submit_type" class="form-control rounded-1">
                      <option value="">Select form submit type</option>
                      <option value="save_entry">Save Entries</option>
                      <option value="send_email">Send Email</option>
                    </select>
                  </div>
                  <div id="submit_typeError" className="text-danger d-none">Please Select submit type</div>
                </div>
                <div class="mb-4 col-4 sendEmailWrapper" style="display: none;">
                  <label>Enter Email Addresses With Comma Separator</label>
                  <div class="input-group gap-3">
                    <input type="text" class="form-control rounded-1" placeholder="e.g test@gmail.com,test1@gmail.com" id="email_adds" required>
                  </div>
                  <div class="text-danger d-none" id="email_addsError" style="display:none;">Please Enter Input Emails</div>
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
                  <editor v-model="content" id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_js">Custom JS Text</label>
                  <editor v-model="custom_js" id="custom_js" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label for="custom_css">Custom CSS Text</label>
                  <editor v-model="custom_css" id="custom_css" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="offset-4 col-3">
                  <button type="button" id="generateForm" class="btn btn-gray-800 me-2">Preview Form</button>
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Submit</button>
                </div>
              </form>
              <div class="displayGeneratedForm mt-4" style="display: none"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
$(document).ready(function() {
  $(document).on("change","#submit_type",function(){
    if($(this).val() == 'send_email'){
      $(".sendEmailWrapper").show();
    }else{
      $(".sendEmailWrapper").hide();
    }
  })

  $(document).on('click', '#generateForm', function() {
    var html = "";
    var err = false;
    var action_url = document.getElementById("action_url").value;
    var formName = document.getElementById("name").value;
    var formDescription = tinymce.get('content').getContent();
    var form_custom_js = tinymce.get('custom_js').getContent();
    var form_custom_css = $(tinymce.get('custom_css').getContent()).text();
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.innerHTML = form_custom_css;
    console.log(form_custom_css);
    html += '<div class="card"><div class="card-body"><style>'+form_custom_css+'</style><h2 class="text-center">'+formName+'</h2><p class="text-muted text-center">'+formDescription+'</p><form action="'+action_url+'" method="post" enctype="multipart/form-data" id="dynamicForm">';
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
    const notyf = new Notyf({
      position: {
        x: 'right',
        y: 'top',
      },
      types: [
        {
          type: 'error',
          background: '#FA5252',
          icon: {
            className: 'fas fa-times',
            tagName: 'span',
            color: '#fff'
          },
          dismissible: false
        }
      ]
    });
    notyf.open({
      type: 'success',
      message: 'Form Generated Successfully.'
    });
    $(".displayGeneratedForm").html(html);
    $(".displayGeneratedForm").show();
  });

  $(document).on('click', '#addMoreInputs', function() {
    var selectedField = $(".inputFormFields").val();
    var displayInputContents = $(this).closest('.mb-4').find('.displayInputContents');

    if(selectedField.length == 0){
      alert("Please select any input field first");
    }
    // displayInputContents.empty();
    if (selectedField === 'text') {
      var textboxElement = $('#hiddenInputElements').find('.textboxElement').clone();
      displayInputContents.append(textboxElement);
    } else if (selectedField === 'select') {
      var selectElement = $('#hiddenInputElements').find('.selectElement').clone();
      displayInputContents.append(selectElement);
    } else if (selectedField === 'checkbox') {
      var checkboxElement = $('#hiddenInputElements').find('.checkboxElement').clone();
      displayInputContents.append(checkboxElement);
    } else if (selectedField === 'radio') {
      var radioElement = $('#hiddenInputElements').find('.radioElement').clone();
      displayInputContents.append(radioElement);
    } else if (selectedField === 'file') {
      var fileElement = $('#hiddenInputElements').find('.fileElement').clone();
      displayInputContents.append(fileElement);
    } else if (selectedField === 'number') {
      var numberElement = $('#hiddenInputElements').find('.numberElement').clone();
      displayInputContents.append(numberElement);
    } else if (selectedField === 'email') {
      var emailElement = $('#hiddenInputElements').find('.emailElement').clone();
      displayInputContents.append(emailElement);
    }
  });

  $(document).on('click', '.addInputOptions', function() {
    var selectField = $("#hiddenInputElements").find('.selectElement').find('.addMoreOptions').clone();
    $(this).before(selectField);
  });

  $(document).on('click', '.addCheckboxOptions', function() {
    var checkboxField = $("#hiddenInputElements").find('.checkboxElement').find('.addMoreOptions').clone();
    $(this).before(checkboxField);
  });

  $(document).on('click', '.addRadioOptions', function() {
    var radioField = $("#hiddenInputElements").find('.radioElement').find('.addMoreOptions').clone();
    $(this).before(radioField);
  });

  // $('#addMoreInputs').click(function() {
  //   var hiddenInputs = $('#hiddenInputs').clone();
  //   $('#hiddenMoreInputs').append(hiddenInputs);
  // });

  $(document).on('click', '.removeInputs', function() {
    $(this).closest('.mb-4').remove();
  });

  $(document).on('click','.removeInputElement',function(){
    $(this).parent().parent().remove();
  })
});

import AdminLayout from "@/Pages/AdminLayout.vue";
import Editor from '@tinymce/tinymce-vue';

export default {
  components: {
    AdminLayout,
    'editor': Editor
  },
  props:{
    token: String,
  },
  data() {
    return {
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
    handleSubmit(){
      //form creating dynamically and apply inner HTML to hidden field .displayGeneratedForm
      var html = "";
      var err = false;
      var action_url = document.getElementById("action_url").value;
      var formName = document.getElementById("name").value;
      var formDescription = tinymce.get('content').getContent();
      var form_custom_js = tinymce.get('custom_js').getContent();
      var form_custom_css = $(tinymce.get('custom_css').getContent()).text();
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
            const response = await fetch(apiBaseUrl+'form/addFormData', {
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
                custom_css:custom_css
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