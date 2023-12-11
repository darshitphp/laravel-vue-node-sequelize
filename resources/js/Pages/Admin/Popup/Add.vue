<template>
  <AdminLayout :data="data">
    <!-- Your middle popup content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/popup" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">Add Popup</h1>
              <div id="forCustomStyle"></div>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="name">Popup name</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter popup name" id="name" required>
                  </div>
                  <div id="nameError" className="text-danger d-none">Please Enter Popup Name</div>
                </div>
                <div class="mb-4">
                  <label for="status">Select status</label>
                  <div class="input-group">
                    <select id="status" name="status" class="form-control">
                      <option value="">Select popup status</option>
                      <option value="enable">Enable</option>
                      <option value="disable">Disable</option>
                    </select>
                  </div>
                  <div id="statusError" className="text-danger d-none">Please Select Popup Status</div>
                </div>
                <div class="mb-4">
                  <label for="start_date">Start Date</label>
                  <div class="input-group">
                    <input type="date" class="form-control" placeholder="Enter start date name" id="start_date" required>
                  </div>
                  <div id="start_dateError" className="text-danger d-none">Please select start date</div>
                </div>
                <div class="mb-4">
                  <label for="end_date">End Date</label>
                  <div class="input-group">
                    <input type="date" class="form-control" placeholder="Enter end date name" id="end_date" required>
                  </div>
                  <div id="end_dateError" className="text-danger d-none">Please select end date</div>
                </div>
                <div class="mb-4">
                  <label for="timer">Timer for popup</label>
                  <div class="input-group">
                    <input type="number" class="form-control" placeholder="Enter timer for popup (in sec)" id="timer" required>
                  </div>
                  <div id="timerError" className="text-danger d-none">Please Enter timer for popup</div>
                </div>
                <div class="mb-4">
                  <label for="rules">Rules for popup</label>
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter rules for popup" id="rules" required>
                  </div>
                  <div id="rulesError" className="text-danger d-none">Please Enter rules for popup</div>
                </div>
                <div class="mb-4">
                  <label for="content">Content</label>
                  <editor v-model="content" id="content" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
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
                <div class="mb-4">
                  <label for="custom_js">Custom JS Text</label>
                  <editor v-model="custom_js" id="custom_js" api-key="2dc2orzzlfcteo55ky2mz5t7mmvm805jpqrihwr7nn1qa3hh" :init="{
                    plugins: 'code',
                    toolbar: 'code',
                  }"></editor>
                </div>
                <div class="mb-4">
                  <label>Select page link</label>
                  <div class="input-group">
                    <select name="pageLink" class="form-control pageLink" multiple>
                      <option value="">Select Page Link</option>
                      <option v-for="(item, index) in data" id="pageLink" :value="item.id">{{ item.name }}</option>
                    </select>
                  </div>
                  <div id="positionError" style="display: none" className="text-danger">Please Select header position type</div>
                </div>
                <div class="d-grid offset-4 col-3 align-items-center justify-content-center">
                  <button type="button" @click="handleSubmit"  class="btn btn-gray-800">Submit</button>
                  <button @click="openSwal">Open SweetAlert</button>

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
  },
  data() {
    return {
      content: '',
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
    openSwal() {
      const custom_css = tinymce.get('custom_css').getContent({ format: 'text' });

      const customStyles = `
        .swal2-styled.swal2-confirm {
          border: 0;
          border-radius: 0.25em;
          background: initial;
          background-color: #303030 !important;
          color: #fff;
          font-size: 1.0625em;
        }

        .swal2-popup.custom-swal-popup {
          background: #000000 !important;
        }

        .swal2-icon.swal2-success .swal2-success-circular-line-left,
        .swal2-icon.swal2-success .swal2-success-circular-line-right,
        .swal2-icon.swal2-success .swal2-success-fix {
          background: #000000 !important;
        }
      `;

      const styleTag = document.createElement('style');
      styleTag.type = 'text/css';
      styleTag.innerHTML = custom_css;

      console.log('Generated Style Tag:', styleTag);
      console.log('Custom CSS:', custom_css);
      // $("#forCustomStyle").html('');
      $("#forCustomStyle").append(styleTag);

      // Force a re-render
      this.$forceUpdate();
      // document.body.appendChild(styleTag);

      this.$swal({
        title: 'Hello Vue and Laravel123!',
        text: 'This is a SweetAlert popup.',
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'custom-swal-popup',
        },
        onOpen: (modalElement) => {
          // Add your custom JS logic here
          console.log('SweetAlert opened!', modalElement);
          modalElement.classList.add('custom-swal-popup');
        },
      });
    },
    handleSubmit(){
      var name = document.getElementById("name").value;
      var status = document.getElementById("status").value;
      var start_date = document.getElementById("start_date").value;
      var end_date = document.getElementById("end_date").value;
      var rules = document.getElementById("rules").value;
      var timer = document.getElementById("timer").value;
      var content = tinymce.get('content').getContent();
      var custom_css = tinymce.get('custom_css').getContent();
      var custom_js = tinymce.get('custom_js').getContent();
      var pageLink = $(".pageLink").val();
      var pages = pageLink.toString();

      var nameError = document.getElementById("nameError");
      var statusError = document.getElementById("statusError");
      var start_dateError = document.getElementById("start_dateError");
      var end_dateError = document.getElementById("end_dateError");
      var rulesError = document.getElementById("rulesError");
      var timerError = document.getElementById("timerError");
      let error = false;

      if (name.length === 0) {
        nameError.classList.remove("d-none");
        error = true;
      } else {
        nameError.classList.add("d-none");
      }

      if (status.length === 0) {
        statusError.classList.remove("d-none");
        error = true;
      } else {
        statusError.classList.add("d-none");
      }

      if (start_date.length === 0) {
        start_dateError.classList.remove("d-none");
        error = true;
      } else {
        start_dateError.classList.add("d-none");
      }

      if (end_date.length === 0) {
        end_dateError.classList.remove("d-none");
        error = true;
      } else {
        end_dateError.classList.add("d-none");
      }

      if (rules.length === 0) {
        rulesError.classList.remove("d-none");
        error = true;
      } else {
        rulesError.classList.add("d-none");
      }

      if (timer.length === 0) {
        timerError.classList.remove("d-none");
        error = true;
      } else {
        timerError.classList.add("d-none");
      }

      if (error === false) {

        const fetchItems = async () => {
          try {
            const response = await fetch(apiBaseUrl+'popup/addPopupData', {
              method: 'POST',
              body: JSON.stringify({
                name: name,
                status:status,
                start_date:start_date,
                end_date:end_date,
                rules:rules,
                content:content,
                custom_js:custom_js,
                custom_css:custom_css,
                pages:pages,
                timer:timer
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/popup';
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