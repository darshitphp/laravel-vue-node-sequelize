  <template>
  <AdminLayout :page="data" :token="token">
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
            <div class="p-1 col-12">
              <form class="row">
                <!-- Form -->
                <div class="mb-4 col-6 m-0 p-1">
                  <label for="title">Title</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter title name" id="title" required>
                  </div>
                  <div id="titleError" style="display: none" className="text-danger">Please Enter Header Title</div>
                </div>
                <div class="mb-4 col-6">
                  <div class="form-check form-switch">
                    <input class="form-check-input status" name="footerStatus" type="checkbox" id="footerStatus" >
                    <label class="form-check-label" for="footerStatus">Status</label>
                  </div>
                  <div class="text-danger" id="footerStatusError" style="display: none">Please Select Footer Status</div>
                </div>
                <div class="mb-4">
                  <div class="row" style="border: 1px solid grey; border-radius: 10px; padding: 10px;margin-bottom: 20px;">
                    <div class="mb-4 col-3">
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
                    <div class="mb-4 col-3">
                      <div class="form-check form-switch">
                        <input class="form-check-input status footerLinkStatus" name="footerLinkStatus" type="checkbox" id="footerLinkStatus" >
                        <label class="form-check-label" for="footerLinkStatus">Status</label>
                      </div>
                      <div class="text-danger" style="display: none" id="footerLinkStatusError">Please Check Footer Link Status</div>
                    </div>
                    <div class="mb-4 col-6 customLinkWrapper" style="display: none;">
                      <label>Custom link</label>
                      <div class="input-group">
                        <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
                      </div>
                      <div id="customLinkError" style="display: none" className="text-danger">Please Enter Custom Link</div>
                    </div>
                    <div class="mb-4 col-6 pageLinkWrapper" style="display: none;">
                      <label>Select page link</label>
                      <div class="input-group">
                        <select name="pageLink" class="form-control pageLink">
                          <option value="">Select Page Link</option>
                          <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
                        </select>
                      </div>
                      <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                    </div>
                    <div class="mb-4 col-6">
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
                    <div class="col-12 text-end mt-2 addMoreWrapper" data-counter="0">
                      <button type="button" id="addMoreFooters" class="btn btn-gray-800">Add</button>
                    </div>
                  </div>
                  <div class="moreSocialContents"></div>
                  <div id="hiddenPageLink">
                    <div class="mb-4 pageLinkWrapper col-6" style="display: none;">
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
    $("#addMoreFooters").remove();
    $(".addMoreWrapper").each(function(){
      var currentCount = $(this).data("counter");
      if((currentCount) == (count-1)){
        $(this).find("#addMoreFooters").remove();
      }
    })
    var uniqueId = 'editor_'+count;
    var uniqueStatus = 'footerLinkStatus_'+count;
    var hiddenPageLink = $("#hiddenPageLink").html();
    var hiddenInputs = `<div class="row" style="border: 1px solid grey; border-radius: 10px; padding: 10px;margin-bottom: 20px;">
      <div class="mb-4 col-3">
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
      <div class="mb-4 col-3">
        <div class="form-check form-switch">
          <input class="form-check-input status footerLinkStatus" name="footerLinkStatus" type="checkbox" id="`+uniqueStatus+`" >
          <label class="form-check-label" for="`+uniqueStatus+`">Status</label>
        </div>
        <div class="text-danger" style="display: none" id="footerLinkStatusError">Please Check Footer Link Status</div>
      </div>
      <div class="mb-4 customLinkWrapper col-6" style="display: none;">
        <label>Custom link</label>
        <div class="input-group">
          <input type="text" class="form-control customLink" placeholder="Enter custom link" required>
        </div>
        <div id="customLinkError" class="text-danger" style="display: none">Please Enter Custom Link</div>
      </div>`;
      hiddenInputs += hiddenPageLink;
      hiddenInputs += `<div class="mb-4 col-6">
        <label>Content Text</label>
        <editor id="`+uniqueId+`" class="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{ menubar: false, plugins: [ 'advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount' ], toolbar: 'undo redo | formatselect | bold italic backcolor | \ alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help' }"></editor>
      </div>
      <div class="col-12 text-end addMoreWrapper" data-counter="`+count+`">
        <button type="button" class="btn btn-danger removeMoreSocial">Remove</button>
        <button type="button" class="btn btn-primary" id="addMoreFooters">Add</button>
      </div>
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
    $(this).parent().parent().remove();
    var countValues = [];
    $(this).parent().parent().remove();
    $(".addMoreWrapper").each(function(){
      const currentCount = $(this).data('counter');
      countValues.push(currentCount);
      $(this).find("#addMoreFooters").remove();
    });
    var maxCount = Math.max(...countValues);
    $(".addMoreWrapper").each(function(){
      const currentCount = $(this).data('counter');
      const include = `<button class="btn btn-primary" type="button" id="addMoreFooters">Add</button>`;
      if(maxCount == currentCount){
        $(this).append(include);
      }
    });
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
                'x-auth-token': this.token,
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