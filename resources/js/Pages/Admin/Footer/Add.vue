<template>
  <AdminLayout :page="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/footer" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Footer</h1>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="title">Footer title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" style="display: none" className="text-danger">Please Enter Header Title</div>
                </div>
                <div class="mb-4">
                  <label for="position">Footer status</label>
                  <div class="input-group">
                    <select id="footerStatus" name="footerStatus" class="form-control">
                      <option value="">Select footer status</option>
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                  </div>
                  <div id="footerStatusError" style="display: none" className="text-danger">Please Select Footer Status</div>
                </div>
                <div class="mb-4">
                  <div class="">
                    <div class="mb-4">
                      <label>Link Type</label>
                      <div class="input-group">
                        <select name="position" class="form-control linkType">
                          <option value="">Select Link Type</option>
                          <option value="predefined">Predefined</option>
                          <option value="custom">Custom</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                    <div class="mb-4 customLinkWrapper" style="display: none;">
                      <label>Custom link</label>
                      <div class="input-group">
                        <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
                      </div>
                      <div id="customLinkError" style="display: none" className="text-danger">Please Enter Custom Link</div>
                    </div>
                    <div class="mb-4 pageLinkWrapper" style="display: none;">
                      <label>Select page link</label>
                      <div class="input-group">
                        <select name="pageLink" class="form-control pageLink">
                          <option value="">Select Page Link</option>
                          <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                    <div class="mb-4">
                      <label>Content Text</label>
                      <editor id="content" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                          menubar: false,
                          plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                          ],
                          toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                      }"></editor>
                    </div>
                    <div class="mb-4">
                      <label for="position">Footer link status</label>
                      <div class="input-group">
                        <select name="footerLinkStatus" class="form-control footerLinkStatus">
                          <option value="">Select footer link status</option>
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                        </select>
                      </div>
                      <div id="footerLinkStatusError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                  </div>
                  <button type="button" id="addMoreFooters" class="btn btn-gray-800">Add</button>
                  <div class="moreSocialContents"></div>
                  <div id="hiddenPageLink">
                    <div class="mb-4 pageLinkWrapper" style="display: none;">
                      <label>Select page link</label>
                      <div class="input-group">
                        <select name="pageLink" class="form-control pageLink">
                          <option value="">Select Page Link</option>
                          <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
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
$(document).ready(function() {
  var count = 0;
  $(document).on("click","#addMoreFooters",function() {
    // var hiddenInputs = $('#socialGroup').html();
    var uniqueId = 'editor_'+count;
    var hiddenPageLink = $("#hiddenPageLink").html();
    var hiddenInputs = `<div class="">
      <div class="mb-4">
        <label>Link Type</label>
        <div class="input-group">
          <select name="position" class="form-control linkType">
            <option value="">Select Link Type</option>
            <option value="predefined">Predefined</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div id="positionError" class="text-danger d-none">Please Select header position type</div>
      </div>
      <div class="mb-4 customLinkWrapper" style="display: none;">
        <label>Custom link</label>
        <div class="input-group">
          <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
        </div>
        <div id="customLinkError" class="text-danger" style="display: none">Please Enter Custom Link</div>
      </div>`;
      hiddenInputs += hiddenPageLink;
      hiddenInputs += `<div class="mb-4">
        <label>Content Text</label>
        <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ menubar: false, plugins: [ 'advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount' ], toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help' }"></editor>
      </div>
      <div class="mb-4">
        <label for="position">Footer link status</label>
        <div class="input-group">
          <select name="footerLinkStatus" class="form-control footerLinkStatus">
            <option value="">Select footer link status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="text-danger footerLinkStatusError" style="display: none">Please Select header position type</div>
      </div>
      <button type="button" class="btn btn-danger removeMoreSocial">Remove</button>
    </div>`;
    $('.moreSocialContents').append(hiddenInputs);
    tinymce.init({
      selector: '#'+uniqueId,
      apiKey: '2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh',
      menubar: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
    });
    count++;
  });

  $(document).on("change",".linkType",function() {
    var linkType = $(this).val();
    if(linkType == 'predefined'){
      $(this).parent().parent().parent().find(".pageLinkWrapper").show();
      $(this).parent().parent().parent().find(".customLinkWrapper").hide();
    }
    else if(linkType == 'custom'){
      $(this).parent().parent().parent().find(".customLinkWrapper").show();
      $(this).parent().parent().parent().find(".pageLinkWrapper").hide();
    }
  });

  $(document).on('click', '.removeMoreSocial', function() {
    $(this).parent().remove();
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
    data: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
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
      var title = document.getElementById("title").value;
      var footerStatus = document.getElementById("footerStatus").value;
      const content = [];
      $('textarea.content').each(function () {
        // Get the TinyMCE instance for each element
        var editor = tinymce.get($(this).attr('id'));

        // Check if the editor instance exists
        if (editor) {
          // Get the content and log it to the console
          var contentWithClass = editor.getContent({ format: 'html' });
          content.push(contentWithClass);
        }
      });

      var footerLinkStatusArray = new Array();
      $(".footerLinkStatus").each(function(){
        var linkStatus = $(this).val();
        footerLinkStatusArray.push(linkStatus);
      });

      var pageLinkArray = new Array();
      var customLinkArray = new Array();

      $('editor.content').each(function () {
        // Get the TinyMCE instance for each element
        var editor = tinymce.get($(this).attr('id'));

        // Check if the editor instance exists
        if (editor) {
          // Get the content and log it to the console
          var contentWithClass = editor.getContent({ format: 'html' });
          content.push(contentWithClass);
        }
      });

      var transactionArray = [];
      $(".linkType").each(function(index, element){
        if (!transactionArray[index]) {
          // If the index doesn't exist, initialize it as an array
          transactionArray[index] = [];
        }
        var linkType = $(this).val();
        if(linkType == 'predefined'){
          var pLink = $(this).parent().parent().parent().find('.pageLink').val();
          pageLinkArray.push(pLink);
          transactionArray[index].push(["page_id" , pLink]);
          transactionArray[index].push(["custom_link", null]);
        }
        else if(linkType == 'custom'){
          var cLink = $(this).parent().parent().parent().find('.customLink').val();
          customLinkArray.push(cLink);
          transactionArray[index].push(["page_id", null]);
          transactionArray[index].push(["custom_link", cLink]);
        }
        const currentContent = content[index];
        const currentfooterLinkStatus = footerLinkStatusArray[index];

        transactionArray[index].push(["content", currentContent]);
        transactionArray[index].push(["status", currentfooterLinkStatus]);
      })

      let error = false;

      if (title.length == 0) {
        $("#titleError").show();
        error = true;
      } else {
        $("#titleError").hide();
      }

      if (footerStatus.length == 0) {
        $("#footerStatusError").show();
        error = true;
      } else {
        $("#footerStatusError").hide();
      }

      if (error == false) {
        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'footer/addFooterData', {
              method: 'POST',
              body: JSON.stringify({
                title:title,
                status:footerStatus,
                transactionArray:transactionArray
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/footer';
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