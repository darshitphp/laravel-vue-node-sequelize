<template>
  <AdminLayout :data="data" :token="token">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/gallary/add" class="btn btn-gray-800 me-2 my-2">Add Image</a>
            </div>
          </div>

          <div class="table-responsive">
            <div v-if="data" class="row">
              <div class="col-md-3" v-for="(arr, key) in data" :key="key">
                <div class="card mb-3" style="height: 300px; overflow: hidden;">
                  <a :href="arr.custom_link">
                    <img :src="'/assets/img/gallary/' + arr.image" class="card-img-top" :alt="arr.alter" style="object-fit: cover; height: 100%;">
                  </a>
                  <div class="card-body">
                    <!-- Add any additional information or features you want here -->
                  </div>
                  <i class="fa fa-close gallaryRemove" :data-id="arr.id" style="font-size: 14px; color: darkgrey; cursor: pointer; position: absolute; top: 10px; right: 10px;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AdminLayout>
</template>
<script>
$(document).on("click",".gallaryRemove",function(){
  var id = $(this).data('id');
  const removeItems = async () => {
    const response = await fetch(apiBaseUrl+'gallary/deleteGallaryData', {
      method: 'POST',
      body: JSON.stringify({
        id:id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if(data.status == 'success'){
      $(this).parent().remove();
    }
  };
  removeItems();
})

import AdminLayout from "@/Pages/AdminLayout.vue";
import axios from 'axios';

export default {
  components: {
    AdminLayout
  },
  props:{
    token: String,
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
        const response = await axios.post(
            apiBaseUrl+'gallary/gallaryData',
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