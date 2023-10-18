<template>
  <AdminLayout :tag="tag">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/tag" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-6">
              <h1 class="h3 mb-4">Add Tag</h1>
              <form>
                <!-- Form -->
                <div class="mb-4">
                  <label for="email">Tag name</label>
                  <div class="input-group">
                    <input type="text" id="vName" class="form-control" placeholder="Enter tag name" v-model="tag[0].vName" @input="updateTag" required>
                    <input type="hidden" name="iTagId" id="iTagId" :value="tag[0].iTagId">
                  </div>
                  <div id="vNameError" className="text-danger d-none">Please Enter Tag Name</div>
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

export default {
  components: {
    AdminLayout
  },
  props: {
    tag: {
      type: Array, // Adjust the type based on your data type
      required: true,
    },
  },
  data() {
    return {
      tag: this.tag,
    };
  },
  methods: {
    updateTag(event) {
      this.tag[0].vName = event.target.value;
    },
    handleSubmit(){
      var vName = document.getElementById("vName").value;
      var iTagId = document.getElementById("iTagId").value;
      var vNameError = document.getElementById("vNameError");
      let error = false;

      if (vName.length === 0) {
        vNameError.classList.remove("d-none");
        error = true;
      } else {
        vNameError.classList.add("d-none");
      }

      if (error === false) {
        const fetchItems = async () => {
          try {
            const response = await fetch('http://localhost:7000/api/tags/updateTagData', {
              method: 'POST',
              body: JSON.stringify({
                vName: vName,
                iTagId:iTagId
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if(data.status == 'success'){
              window.location.href = '/tag';
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