<template>
  <AdminLayout :data="data" :slider="slider" :token="token" :form="form">
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
              <form class="row">
                <!-- Form -->
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        General Setting
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body row">
                        <div class="mb-4 col-3">
                          <label for="name">Name</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter page name" id="name" required>
                          </div>
                          <div id="nameError" className="text-danger d-none">Please Enter Page Name</div>
                        </div>
                        <div class="mb-4 col-3">
                          <label for="slug">Slug</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter page slug" id="slug" required>
                          </div>
                          <div id="slugError" className="text-danger d-none">Please Enter Page Slug</div>
                        </div>
                        <div class="mb-4 col-3">
                          <label for="title">Title</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter page title" id="title" required>
                          </div>
                          <div id="titleError" className="text-danger d-none">Please Enter Page Title</div>
                        </div>
                        <div class="mb-4 col-3">
                          <label for="meta_title">Meta title</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter meta title" id="meta_title" required>
                          </div>
                          <div id="meta_titleError" className="text-danger d-none">Please Enter Page Meta Title</div>
                        </div>
                        <div class="mb-4 col-6">
                          <label for="meta_data">Meta data</label>
                          <editor v-model="meta_data" id="meta_data" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    menubar: 'file edit view format tools',
                    plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                    toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                  }"></editor>
                          <div id="meta_dataError" className="text-danger d-none">Please Enter Page Meta Data</div>
                        </div>
                        <div class="mb-4 col-6">
                          <label for="meta_keyword">Meta keyword</label>
                          <editor v-model="meta_keyword" id="meta_keyword" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    menubar: 'file edit view format tools',
                    plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                    toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                  }"></editor>
                          <div id="meta_keywordError" className="text-danger d-none">Please Enter Page Meta Keyword</div>
                        </div>
                        <div class="mb-4 col-6">
                          <label for="meta_description">Meta description</label>
                          <editor v-model="meta_description" id="meta_description" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    menubar: 'file edit view format tools',
                    plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                    toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                  }"></editor>
                          <div id="meta_descriptionError" className="text-danger d-none">Please Enter Page Meta Description</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Section Management
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body row">
                        <div class="d-flex flex-wrap" id="appendHere">
                          <div class="col-12 d-flex flex-wrap addSectionWrapper" style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px;">
                            <div class="col-12 d-flex">
                                <div class="d-flex gap-3 col align-items-center">
                                  <label>Type</label>
                                  <div class="form-check" >
                                    <input class="form-check-input contentType" type="radio" name="contentType" id="contentMain" value="content">
                                    <label class="form-check-label" for="contentMain">
                                      Content
                                    </label>
                                  </div>
                                  <div class="form-check" >
                                    <input class="form-check-input contentType" type="radio" name="contentType" id="contentSlider" value="slider">
                                    <label class="form-check-label" for="contentSlider">
                                      Slider
                                    </label>
                                  </div>
                                  <div class="form-check" >
                                    <input class="form-check-input contentType" type="radio" name="contentType" id="contentForm" value="form">
                                    <label class="form-check-label" for="contentForm">
                                      Form
                                    </label>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="mb-4">
                                    <label for="name">Section Order</label>
                                    <div class="input-group">
                                      <input type="text" class="form-control section_order" placeholder="Enter section order" required>
                                    </div>
                                  </div>
                                </div>
                            </div>
                            <div class="col-12">
                              <div class="hiddenSectionToManage mt-3" style="display: none;">
                                <div class="mb-4 sliderWrapper" style="display: none;">
                                  <label>Select Slider</label>
                                  <div class="input-group">
                                    <select name="slider" class="form-control slider">
                                      <option value="">Select Slider</option>
                                      <option v-for="(arr, key) in slider" :value="arr.id">{{arr.title}}</option>
                                      <!-- Your slider options here -->
                                    </select>
                                  </div>
                                  <div style="display: none" class="text-danger sliderError">Please Select Slider</div>
                                </div>
                                <div class="mb-4 formWrapper" style="display: none;">
                                  <label>Select Form</label>
                                  <div class="input-group">
                                    <select name="form" class="form-control form">
                                      <option value="">Select Form</option>
                                      <option v-for="(arr, key) in form" :value="arr.id">{{arr.name}}</option>
                                    </select>
                                  </div>
                                  <div style="display: none" class="text-danger formError">Please Select Form</div>
                                </div>
                                <div class="mb-4 mainContent" style="display: none;">
                                  <label for="content_0">Body Text</label>
                                  <editor id="content_0" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                                      menubar: 'file edit view format tools',
                                      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                                      toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                                  }"></editor>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 text-end addMoreWrapper" data-counter="0">
                              <button class="btn btn-primary" type="button" id="addMorePageSections">Add more</button>
                            </div>
                          </div>
                        </div>
                        <div id="hiddenSliderForm">
                          <div class="mb-4 sliderWrapper" style="display: none;">
                            <label>Select Slider</label>
                            <div class="input-group">
                              <select name="slider" class="form-control slider">
                                <option value="">Select Slider</option>
                                <option v-for="(arr, key) in slider" :value="arr.id">{{arr.title}}</option>
                                <!-- Your slider options here -->
                              </select>
                            </div>
                            <div style="display: none" class="text-danger sliderError">Please Select Slider</div>
                          </div>
                          <div class="mb-4 formWrapper" style="display: none;">
                            <label>Select Form</label>
                            <div class="input-group">
                              <select name="form" class="form-control form">
                                <option value="">Select Form</option>
                                <option v-for="(arr, key) in form" :value="arr.id">{{arr.name}}</option>
                              </select>
                            </div>
                            <div style="display: none" class="text-danger formError">Please Select Form</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Custom Scripts
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body row">
                        <div class="mb-4 col-6">
                          <label for="custom_js">JS</label>
                          <textarea name="custom_js" id="custom_js" cols="50" rows="10"></textarea>
                        </div>
                        <div class="mb-4 col-6">
                          <label for="custom_css">CSS</label>
                          <textarea name="custom_css" id="custom_css" cols="50" rows="10"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Layout
                      </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div class="accordion-body row d-flex">
                        <label>Select Page Layout</label>
                        <div class="image-radio col-2">
                          <input type="radio" name="page_layout" id="layout3" value="layout3">
                          <label for="layout3">
                            <img src="/public/assets/img/layouts/img-5.png" alt="layout 3">
                          </label>
                        </div>
                        <div class="image-radio col-2">
                          <input type="radio" name="page_layout" id="layout2" value="layout2">
                          <label for="layout2">
                            <img src="/public/assets/img/layouts/img-3.png" alt="layout 2">
                          </label>
                        </div>
                        <div class="image-radio col-2">
                          <input type="radio" name="page_layout" id="layout1" value="layout1">
                          <label for="layout1">
                            <img src="/public/assets/img/layouts/img-2.png" alt="layout 1">
                          </label>
                        </div>
                        <div class="image-radio col-6">
                          <input type="radio" name="page_layout" id="layout4" value="layout4">
                          <label for="layout4">
                            <img src="/public/assets/img/layouts/img-6.png" alt="layout 4">
                          </label>
                        </div>
                        <div class="row d-flex" style="display: block">
                          <div class="col-6 leftContentLayout" style="display: none">
                            <label for="leftLayoutContent">Left content</label>
                            <editor id="leftLayoutContent" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                              menubar: 'file edit view format tools',
                              plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                              toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                            }"></editor>
                            <div id="leftLayoutContentError" className="text-danger d-none">Please Enter Left Layout Content</div>
                          </div>
                          <div class="col-6 rightContentLayout" style="display: none">
                            <label for="rightLayoutContent">Right content</label>
                            <editor id="rightLayoutContent" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                              menubar: 'file edit view format tools',
                              plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
                              toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
                            }"></editor>
                            <div id="rightLayoutContentError" className="text-danger d-none">Please Enter Right Layout Content</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center mt-3">
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
$(document).ready(function () {
  var counter = 1;
  $(document).on("click","#addMorePageSections",function(){
    $("#addMorePageSections").remove();
    $(".addMoreWrapper").each(function(){
      var count = $(this).data("counter");
      if((count) == (counter-1)){
        $(this).find("#addMorePageSections").remove();
      }
    })
    // $(".addMoreWrapper_"+(counter-1)).find("#addMorePageSections").remove();
    var uniqueId = 'content_'+counter;
    var uniqueRadio = 'contentType_'+counter;
    var contentMain = 'contentMain_'+counter;
    var contentSlider = 'contentSlider_'+counter;
    var contentForm = 'contentForm_'+counter;
    var hiddenSliderForm = $("#hiddenSliderForm").html();
    var myHiddenSection = `<div class="col-12 d-flex flex-wrap addSectionWrapper" style="border: 1px solid grey;border-radius: 10px;padding: 15px;margin-top: 5px;">
    <div class="d-flex col-12 removeSection_`+counter+`">
       <div class="d-flex gap-3 col align-items-center">
          <label >Type</label>
          <div class="form-check" >
            <input class="form-check-input contentType" type="radio" name="`+uniqueRadio+`" id="`+contentMain+`" value="content">
            <label class="form-check-label" for="`+contentMain+`">
              Content
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input contentType" type="radio" name="`+uniqueRadio+`" id="`+contentSlider+`" value="slider">
            <label class="form-check-label" for="`+contentSlider+`">
              Slider
            </label>
          </div>
          <div class="form-check" >
            <input class="form-check-input contentType" type="radio" name="`+uniqueRadio+`" id="`+contentForm+`" value="form">
            <label class="form-check-label" for="`+contentForm+`">
              Form
            </label>
          </div>
          </div>
          <div class="col-6">
            <div class="mb-4">
              <label for="name">Section Order</label>
              <div class="input-group">
                <input type="text" class="form-control section_order" placeholder="Enter section order" required>
              </div>
            </div>
          </div>
       </div>
       <div class="col-12 removeSection_`+counter+`">
       <div class="hiddenSectionToManage mt-3 pe-3" style="display: none;">`;
    myHiddenSection += hiddenSliderForm;
    myHiddenSection += `<div class="mb-4 mainContent" style="display: none;">
          <label for="body">Body Text</label>
          <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ plugins: 'code',toolbar: 'code',}"></editor>
        </div>
      </div>
      <div class="col-12 text-end addMoreWrapper" data-counter="`+counter+`">
        <button class="btn btn-danger me-3 removeHiddenSection" type="button">Remove</button>
        <button class="btn btn-primary" type="button" id="addMorePageSections">Add more</button>
      </div>
    </div></div>`;
    $("#appendHere").append(myHiddenSection);
    tinymce.init({
      selector: '#'+uniqueId,
      apiKey: '2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh',
      menubar: 'file edit view format tools',
      plugins: 'advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount',
      toolbar: 'undo redo | formatselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap | preview',
    });
    counter++;
  });

  $(document).on("click",".removeHiddenSection",function(){
    var countValues = [];
    var currentCount = $(this).parent().data('counter');
    $(".removeSection_"+currentCount).parent().remove();
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      countValues.push(count);
    });
    var maxCount = Math.max(...countValues);
    $(".addMoreWrapper").each(function(){
      const count = $(this).data('counter');
      const include = `<button class="btn btn-primary" type="button" id="addMorePageSections">Add more</button>`;
      if(maxCount == count){
        if ($(this).find("#addMorePageSections").length > 0) {
        }else{
          $(this).append(include);
        }
      }
    });
  });

  $(document).on("change",'.contentType',function () {
    var selectedValue = $(this).val();
    // console.log($(this).parent().parent().parent().parent().find('.hiddenSectionToManage').children('.sliderWrapper').html());
    // Hide all sections initially
    $(this).parent().parent().parent().parent().find('.hiddenSectionToManage').children('.sliderWrapper, .formWrapper, .mainContent').hide();
    $('.hiddenSectionToManage').show();
    if (selectedValue === 'slider') {
      $(this).parent().parent().parent().parent().find('.hiddenSectionToManage').children('.sliderWrapper').show();
    } else if (selectedValue === 'form') {
      $(this).parent().parent().parent().parent().find('.hiddenSectionToManage').children('.formWrapper').show();
    } else if (selectedValue === 'content') {
      $(this).parent().parent().parent().parent().find('.hiddenSectionToManage').children('.mainContent').show();
    }
  });

  $('input[name="page_layout"]').on('change', function() {
    var selectedValue = $('input[name="page_layout"]:checked').val();
    if (selectedValue == 'layout1'){
      $(".rightContentLayout").show();
      $(".leftContentLayout").hide();
    }else if (selectedValue == 'layout2'){
      $(".leftContentLayout").show();
      $(".rightContentLayout").hide();
    }else if (selectedValue == 'layout3'){
      $(".leftContentLayout").hide();
      $(".rightContentLayout").hide();
    }else if (selectedValue == 'layout4'){
      $(".leftContentLayout").show();
      $(".rightContentLayout").show();
    }
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
    page: Object,
    slider: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
    token: String,
    form: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      data: '',
      meta_data:'',
      meta_keyword:'',
      meta_description:'',
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
      var name = document.getElementById("name").value;
      var slug = document.getElementById("slug").value;
      var title = document.getElementById("title").value;
      var meta_title = document.getElementById("meta_title").value;
      var meta_data = tinymce.get('meta_data').getContent();
      var meta_keyword = tinymce.get('meta_keyword').getContent();
      var meta_description = tinymce.get('meta_description').getContent();
      var custom_js = document.getElementById("custom_js").value;
      var custom_css = document.getElementById("custom_css").value;

      var selectedValue = $('input[name="page_layout"]:checked').val();
      if (selectedValue == 'layout1'){
        var leftLayoutContent = null;
        var rightLayoutContent = tinymce.get('rightLayoutContent').getContent();
      }else if (selectedValue == 'layout2'){
        var leftLayoutContent = tinymce.get('leftLayoutContent').getContent();
        var rightLayoutContent = null;
      }else if (selectedValue == 'layout3'){
        var leftLayoutContent = null;
        var rightLayoutContent = null;
      }else if (selectedValue == 'layout4'){
        var leftLayoutContent = tinymce.get('leftLayoutContent').getContent();
        var rightLayoutContent = tinymce.get('rightLayoutContent').getContent();
      }

      var nameError = document.getElementById("nameError");
      var slugError = document.getElementById("slugError");
      var titleError = document.getElementById("titleError");
      var meta_titleError = document.getElementById("meta_titleError");
      var meta_dataError = document.getElementById("meta_dataError");
      var meta_keywordError = document.getElementById("meta_keywordError");
      var meta_descriptionError = document.getElementById("meta_descriptionError");

      var sectionArray = [];
      $(".addSectionWrapper").each(function(index, element){
        if (!sectionArray[index]) {
          // If the index doesn't exist, initialize it as an array
          sectionArray[index] = [];
        }
        var contentType = $(this).find('.contentType:checked').val();
        var order = $(this).find('.section_order').val();
        sectionArray[index].push(["order" , order]);
        sectionArray[index].push(["page_id" , null]);
        if(contentType == 'content'){
          const counterId = $(this).find('.addMoreWrapper').data('counter');
          var contentValue = tinymce.get('content_'+counterId).getContent();
          sectionArray[index].push(["content" , contentValue]);
          sectionArray[index].push(["slider_id" , null]);
          sectionArray[index].push(["form_id" , null]);
        }else if(contentType == 'slider'){
          var sliderValue = $(this).find('.sliderWrapper select').val();
          sectionArray[index].push(["content" , null]);
          sectionArray[index].push(["slider_id" , sliderValue]);
          sectionArray[index].push(["form_id" , null]);
        }else if(contentType == 'form'){
          var formValue = $(this).find('.formWrapper select').val();
          sectionArray[index].push(["content" , null]);
          sectionArray[index].push(["slider_id" , null]);
          sectionArray[index].push(["form_id" , formValue]);
        }
      })
      console.log(sectionArray);

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
            const response = await fetch(apiBaseUrl+'page/addPageData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                slug:slug,
                title:title,
                meta_title:meta_title,
                meta_data:meta_data,
                meta_keyword:meta_keyword,
                meta_description:meta_description,
                custom_js:custom_js,
                custom_css:custom_css,
                sectionArray:sectionArray,
                layout:selectedValue,
                left_layout_content:leftLayoutContent,
                right_layout_content:rightLayoutContent
              }),
              headers: {
                'Content-Type': 'application/json',
                'x-auth-token': this.token,
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