<template>
  <AdminLayout :data="data">
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
                    <input type="text" class="form-control" placeholder="Enter tag name" id="vName" required>
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
  data() {
    return {
      data: ''
    };
  },
  methods: {
    handleSubmit(){
      var vName = document.getElementById("vName").value;
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
            const response = await fetch('http://customweb.adorncommerce.com:7000/api/tags/addTagData', {
              method: 'POST',
              body: JSON.stringify({ vName: vName }),
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