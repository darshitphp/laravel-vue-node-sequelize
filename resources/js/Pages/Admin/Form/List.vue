<template>
  <AdminLayout :data="data" :token="token">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body table-wrapper table-responsive">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/form/add" class="btn btn-gray-800 me-2 my-2">Add Form</a>
            </div>
          </div>

          <div>
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
              <tr>
                <th class="border-0 rounded-start">#</th>
                <th class="border-0">Form Name</th>
                <th class="border-0 rounded-end">Action</th>
              </tr>
              </thead>
              <tbody v-if="data && data.length > 0">
              <!-- Item -->
                <tr v-for="(arr, key) in data">
                <td>{{ key+1 }}</td>
                <td>
                  {{ arr.name }}
                </td>
                <td>
                  <div class="btn-group">
                    <button class="btn btn-link text-dark dropdown-toggle dropdown-toggle-split m-0 p-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                        </path>
                      </svg>
                      <span class="visually-hidden">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu dashboard-dropdown dropdown-menu-start mt-2 py-1">
                      <a class="dropdown-item d-flex align-items-center" :href="'/form/edit/'+arr.id">
                        <span class="fas fa-eye me-2"></span>
                        View
                      </a>
                      <a class="dropdown-item text-danger d-flex align-items-center" :href="'/form/delete/'+arr.id">
                        <span class="fas fa-trash me-2"></span>
                        Delete
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <!-- End of Item -->
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4" class="text-center">No record found</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
import AdminLayout from "@/Pages/AdminLayout.vue";
import axios from 'axios';

export default {
  components: {
    AdminLayout
  },
  data() {
    return {
      data: ''
    };
  },
  props:{
    token: String,
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.post(
            apiBaseUrl+'form/formData',
            {
              // Your request payload goes here
            },
            {
              headers: {
                'x-auth-token': this.token,
              },
            }
      );
        this.data = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>