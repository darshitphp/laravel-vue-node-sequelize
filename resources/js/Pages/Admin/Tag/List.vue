<template>
  <AdminLayout :data="data">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/tag/add" class="btn btn-gray-800 me-2 my-2">Add Tag</a>
            </div>
          </div>

          <div class="table-responsive">
            <table class="table table-centered table-nowrap mb-0 rounded">
              <thead class="thead-light">
              <tr>
                <th class="border-0 rounded-start">#</th>
                <th class="border-0">Tag Name</th>
                <th class="border-0 rounded-end">Action</th>
              </tr>
              </thead>
              <tbody v-if="data">
              <!-- Item -->
              <tr v-for="(arr, key) in data">
                <td>{{ key+1 }}</td>
                <td>
                  {{ arr.vName }}
                </td>
                <td>
                  <div class="gap-3">
                    <a :href="'/tag/edit/'+arr.iTagId" class="btn btn-primary">Edit</a>
                    <a :href="'/tag/delete/'+arr.iTagId" class="btn btn-danger">Delete</a>
                  </div>
                </td>
              </tr>
              <!-- End of Item -->
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
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.post(apiBaseUrl+'tags/tagData');
        this.data = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>