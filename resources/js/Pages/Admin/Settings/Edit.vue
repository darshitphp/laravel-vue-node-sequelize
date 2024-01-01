<template>
  <AdminLayout :data="data" :token="token">
    <!-- Your middle page content goes here -->
    <template v-slot:middleContent>
      <div class="card border-0 shadow mb-4">
        <div class="card-body">
          <div class="row justify-content-end">
            <div class="col-auto">
              <a href="/setting" class="btn btn-gray-800 me-2 my-2">Back</a>
            </div>
          </div>

          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="p-4 p-lg-5 col-12">
              <h1 class="h3 mb-4">General Settings</h1>
              <form>
                <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Store Configuration
                      </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="mb-4">
                          <label for="title">Project Title</label>
                          <div class="input-group">
                            <input type="hidden" name="id" id="id" :value="data.id">
                            <input type="text" class="form-control" placeholder="Enter project title" v-model="data.title" @input="updatePage('title')" id="title" required>
                          </div>
                          <div id="titleError" className="text-danger d-none">Please project title</div>
                        </div>
                        <div class="mb-4">
                          <label for="name">Project Title</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter project name" v-model="data.name" @input="updatePage('name')" id="name" required>
                          </div>
                          <div id="nameError" className="text-danger d-none">Please project name</div>
                        </div>
                        <div class="mb-4">
                          <label for="url">Project Url</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter project url" v-model="data.url" @input="updatePage('url')" id="url" required>
                          </div>
                          <div id="urlError" className="text-danger d-none">Please project url</div>
                        </div>
                        <div class="mb-4">
                          <label for="contact_info">Project Contact Information</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter project contact info" v-model="data.contact_info" @input="updatePage('contact_info')" id="contact_info" required>
                          </div>
                          <div id="contact_infoError" className="text-danger d-none">Please contact info</div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter Country Name</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter country name" v-model="data.country" @input="updatePage('country')" id="country" required>
                          </div>
                          <div id="countryError" className="text-danger d-none">Please enter country name</div>
                        </div>
                        <div class="mb-4">
                          <label for="state">Enter State Name</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter state name" v-model="data.state" @input="updatePage('state')" id="state" required>
                          </div>
                          <div id="stateError" className="text-danger d-none">Please enter state name</div>
                        </div>
                        <div class="mb-4">
                          <label for="">Select Timezone</label>
                          <div class="input-group">
                            <select class="form-control" name="timezone" id="timezone">
                              <option data-time-zone-id="1" data-gmt-adjustment="GMT-12:00" data-use-daylight="0" value="-12">(GMT-12:00) International Date Line West</option>
                              <option data-time-zone-id="2" data-gmt-adjustment="GMT-11:00" data-use-daylight="0" value="-11">(GMT-11:00) Midway Island, Samoa</option>
                              <option data-time-zone-id="3" data-gmt-adjustment="GMT-10:00" data-use-daylight="0" value="-10">(GMT-10:00) Hawaii</option>
                              <option data-time-zone-id="4" data-gmt-adjustment="GMT-09:00" data-use-daylight="1" value="-9">(GMT-09:00) Alaska</option>
                              <option data-time-zone-id="5" data-gmt-adjustment="GMT-08:00" data-use-daylight="1" value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                              <option data-time-zone-id="6" data-gmt-adjustment="GMT-08:00" data-use-daylight="1" value="-8">(GMT-08:00) Tijuana, Baja California</option>
                              <option data-time-zone-id="7" data-gmt-adjustment="GMT-07:00" data-use-daylight="0" value="-7">(GMT-07:00) Arizona</option>
                              <option data-time-zone-id="8" data-gmt-adjustment="GMT-07:00" data-use-daylight="1" value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                              <option data-time-zone-id="9" data-gmt-adjustment="GMT-07:00" data-use-daylight="1" value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                              <option data-time-zone-id="10" data-gmt-adjustment="GMT-06:00" data-use-daylight="0" value="-6">(GMT-06:00) Central America</option>
                              <option data-time-zone-id="11" data-gmt-adjustment="GMT-06:00" data-use-daylight="1" value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                              <option data-time-zone-id="12" data-gmt-adjustment="GMT-06:00" data-use-daylight="1" value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                              <option data-time-zone-id="13" data-gmt-adjustment="GMT-06:00" data-use-daylight="0" value="-6">(GMT-06:00) Saskatchewan</option>
                              <option data-time-zone-id="14" data-gmt-adjustment="GMT-05:00" data-use-daylight="0" value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                              <option data-time-zone-id="15" data-gmt-adjustment="GMT-05:00" data-use-daylight="1" value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                              <option data-time-zone-id="16" data-gmt-adjustment="GMT-05:00" data-use-daylight="1" value="-5">(GMT-05:00) Indiana (East)</option>
                              <option data-time-zone-id="17" data-gmt-adjustment="GMT-04:00" data-use-daylight="1" value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                              <option data-time-zone-id="18" data-gmt-adjustment="GMT-04:00" data-use-daylight="0" value="-4">(GMT-04:00) Caracas, La Paz</option>
                              <option data-time-zone-id="19" data-gmt-adjustment="GMT-04:00" data-use-daylight="0" value="-4">(GMT-04:00) Manaus</option>
                              <option data-time-zone-id="20" data-gmt-adjustment="GMT-04:00" data-use-daylight="1" value="-4">(GMT-04:00) Santiago</option>
                              <option data-time-zone-id="21" data-gmt-adjustment="GMT-03:30" data-use-daylight="1" value="-3.5">(GMT-03:30) Newfoundland</option>
                              <option data-time-zone-id="22" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="-3">(GMT-03:00) Brasilia</option>
                              <option data-time-zone-id="23" data-gmt-adjustment="GMT-03:00" data-use-daylight="0" value="-3">(GMT-03:00) Buenos Aires, Georgetown</option>
                              <option data-time-zone-id="24" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="-3">(GMT-03:00) Greenland</option>
                              <option data-time-zone-id="25" data-gmt-adjustment="GMT-03:00" data-use-daylight="1" value="-3">(GMT-03:00) Montevideo</option>
                              <option data-time-zone-id="26" data-gmt-adjustment="GMT-02:00" data-use-daylight="1" value="-2">(GMT-02:00) Mid-Atlantic</option>
                              <option data-time-zone-id="27" data-gmt-adjustment="GMT-01:00" data-use-daylight="0" value="-1">(GMT-01:00) Cape Verde Is.</option>
                              <option data-time-zone-id="28" data-gmt-adjustment="GMT-01:00" data-use-daylight="1" value="-1">(GMT-01:00) Azores</option>
                              <option data-time-zone-id="29" data-gmt-adjustment="GMT+00:00" data-use-daylight="0" value="0">(GMT+00:00) Casablanca, Monrovia, Reykjavik</option>
                              <option data-time-zone-id="30" data-gmt-adjustment="GMT+00:00" data-use-daylight="1" value="0">(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London</option>
                              <option data-time-zone-id="31" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="1">(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna</option>
                              <option data-time-zone-id="32" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="1">(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague</option>
                              <option data-time-zone-id="33" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="1">(GMT+01:00) Brussels, Copenhagen, Madrid, Paris</option>
                              <option data-time-zone-id="34" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="1">(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb</option>
                              <option data-time-zone-id="35" data-gmt-adjustment="GMT+01:00" data-use-daylight="1" value="1">(GMT+01:00) West Central Africa</option>
                              <option data-time-zone-id="36" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Amman</option>
                              <option data-time-zone-id="37" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Athens, Bucharest, Istanbul</option>
                              <option data-time-zone-id="38" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Beirut</option>
                              <option data-time-zone-id="39" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Cairo</option>
                              <option data-time-zone-id="40" data-gmt-adjustment="GMT+02:00" data-use-daylight="0" value="2">(GMT+02:00) Harare, Pretoria</option>
                              <option data-time-zone-id="41" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius</option>
                              <option data-time-zone-id="42" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Jerusalem</option>
                              <option data-time-zone-id="43" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Minsk</option>
                              <option data-time-zone-id="44" data-gmt-adjustment="GMT+02:00" data-use-daylight="1" value="2">(GMT+02:00) Windhoek</option>
                              <option data-time-zone-id="45" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="3">(GMT+03:00) Kuwait, Riyadh, Baghdad</option>
                              <option data-time-zone-id="46" data-gmt-adjustment="GMT+03:00" data-use-daylight="1" value="3">(GMT+03:00) Moscow, St. Petersburg, Volgograd</option>
                              <option data-time-zone-id="47" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="3">(GMT+03:00) Nairobi</option>
                              <option data-time-zone-id="48" data-gmt-adjustment="GMT+03:00" data-use-daylight="0" value="3">(GMT+03:00) Tbilisi</option>
                              <option data-time-zone-id="49" data-gmt-adjustment="GMT+03:30" data-use-daylight="1" value="3.5">(GMT+03:30) Tehran</option>
                              <option data-time-zone-id="50" data-gmt-adjustment="GMT+04:00" data-use-daylight="0" value="4">(GMT+04:00) Abu Dhabi, Muscat</option>
                              <option data-time-zone-id="51" data-gmt-adjustment="GMT+04:00" data-use-daylight="1" value="4">(GMT+04:00) Baku</option>
                              <option data-time-zone-id="52" data-gmt-adjustment="GMT+04:00" data-use-daylight="1" value="4">(GMT+04:00) Yerevan</option>
                              <option data-time-zone-id="53" data-gmt-adjustment="GMT+04:30" data-use-daylight="0" value="4.5">(GMT+04:30) Kabul</option>
                              <option data-time-zone-id="54" data-gmt-adjustment="GMT+05:00" data-use-daylight="1" value="5">(GMT+05:00) Yekaterinburg</option>
                              <option data-time-zone-id="55" data-gmt-adjustment="GMT+05:00" data-use-daylight="0" value="5">(GMT+05:00) Islamabad, Karachi, Tashkent</option>
                              <option data-time-zone-id="56" data-gmt-adjustment="GMT+05:30" data-use-daylight="0" value="5.5">(GMT+05:30) Sri Jayawardenapura</option>
                              <option data-time-zone-id="57" data-gmt-adjustment="GMT+05:30" data-use-daylight="0" value="5.5">(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi</option>
                              <option data-time-zone-id="58" data-gmt-adjustment="GMT+05:45" data-use-daylight="0" value="5.75">(GMT+05:45) Kathmandu</option>
                              <option data-time-zone-id="59" data-gmt-adjustment="GMT+06:00" data-use-daylight="1" value="6">(GMT+06:00) Almaty, Novosibirsk</option>
                              <option data-time-zone-id="60" data-gmt-adjustment="GMT+06:00" data-use-daylight="0" value="6">(GMT+06:00) Astana, Dhaka</option>
                              <option data-time-zone-id="61" data-gmt-adjustment="GMT+06:30" data-use-daylight="0" value="6.5">(GMT+06:30) Yangon (Rangoon)</option>
                              <option data-time-zone-id="62" data-gmt-adjustment="GMT+07:00" data-use-daylight="0" value="7">(GMT+07:00) Bangkok, Hanoi, Jakarta</option>
                              <option data-time-zone-id="63" data-gmt-adjustment="GMT+07:00" data-use-daylight="1" value="7">(GMT+07:00) Krasnoyarsk</option>
                              <option data-time-zone-id="64" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="8">(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi</option>
                              <option data-time-zone-id="65" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="8">(GMT+08:00) Kuala Lumpur, Singapore</option>
                              <option data-time-zone-id="66" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="8">(GMT+08:00) Irkutsk, Ulaan Bataar</option>
                              <option data-time-zone-id="67" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="8">(GMT+08:00) Perth</option>
                              <option data-time-zone-id="68" data-gmt-adjustment="GMT+08:00" data-use-daylight="0" value="8">(GMT+08:00) Taipei</option>
                              <option data-time-zone-id="69" data-gmt-adjustment="GMT+09:00" data-use-daylight="0" value="9">(GMT+09:00) Osaka, Sapporo, Tokyo</option>
                              <option data-time-zone-id="70" data-gmt-adjustment="GMT+09:00" data-use-daylight="0" value="9">(GMT+09:00) Seoul</option>
                              <option data-time-zone-id="71" data-gmt-adjustment="GMT+09:00" data-use-daylight="1" value="9">(GMT+09:00) Yakutsk</option>
                              <option data-time-zone-id="72" data-gmt-adjustment="GMT+09:30" data-use-daylight="0" value="9.5">(GMT+09:30) Adelaide</option>
                              <option data-time-zone-id="73" data-gmt-adjustment="GMT+09:30" data-use-daylight="0" value="9.5">(GMT+09:30) Darwin</option>
                              <option data-time-zone-id="74" data-gmt-adjustment="GMT+10:00" data-use-daylight="0" value="10">(GMT+10:00) Brisbane</option>
                              <option data-time-zone-id="75" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="10">(GMT+10:00) Canberra, Melbourne, Sydney</option>
                              <option data-time-zone-id="76" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="10">(GMT+10:00) Hobart</option>
                              <option data-time-zone-id="77" data-gmt-adjustment="GMT+10:00" data-use-daylight="0" value="10">(GMT+10:00) Guam, Port Moresby</option>
                              <option data-time-zone-id="78" data-gmt-adjustment="GMT+10:00" data-use-daylight="1" value="10">(GMT+10:00) Vladivostok</option>
                              <option data-time-zone-id="79" data-gmt-adjustment="GMT+11:00" data-use-daylight="1" value="11">(GMT+11:00) Magadan, Solomon Is., New Caledonia</option>
                              <option data-time-zone-id="80" data-gmt-adjustment="GMT+12:00" data-use-daylight="1" value="12">(GMT+12:00) Auckland, Wellington</option>
                              <option data-time-zone-id="81" data-gmt-adjustment="GMT+12:00" data-use-daylight="0" value="12">(GMT+12:00) Fiji, Kamchatka, Marshall Is.</option>
                              <option data-time-zone-id="82" data-gmt-adjustment="GMT+13:00" data-use-daylight="0" value="13">(GMT+13:00) Nuku'alofa</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Security
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="mb-4">
                          <label for="state">Select Recaptcha Status</label>
                            <div class="form-check">
                              <input class="form-check-input" :checked="data.recpatcha_status == 'enable'" type="radio" name="recpatcha_status" id="flexRadioDefault1" value="enable">
                              <label class="form-check-label" for="flexRadioDefault1">
                                Enable
                              </label>
                            </div>
                            <div class="form-check">
                              <input class="form-check-input" :checked="data.recpatcha_status == 'disable'" type="radio" name="recpatcha_status" id="flexRadioDefault2" value="disable">
                              <label class="form-check-label" for="flexRadioDefault2">
                                Disable
                              </label>
                            </div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter Recaptcha Secret Key</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter Recaptcha Secret Key" v-model="data.recpatcha_private" @input="updatePage('recpatcha_private')" id="recpatcha_private" required>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter Recaptcha Public Key</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter Recaptcha Public Key" v-model="data.recpatcha_public" @input="updatePage('recpatcha_public')" id="recpatcha_public" required>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label>Select Recaptcha Type</label>
                          <div class="input-group">
                            <select name="recpatcha_type" id="recpatcha_type" class="form-control">
                              <option selected value="">Select Recaptcha Type</option>
                              <option :selected="data.recpatcha_type == 'v2_robot_checkbox'" value="v2_robot_checkbox">reCAPTCHA v2 ("I am not a robot")</option>
                              <option :selected="data.recpatcha_type == 'v2_invisible'" value="v2_invisible">reCAPTCHA v2 Invisible</option>
                              <option :selected="data.recpatcha_type == 'v3_invisible'" value="v3_invisible">reCAPTCHA v3 Invisible</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Email Configuration
                      </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                        <div class="mb-4">
                          <label for="country">Enter SMTP Host Name</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter SMTP host name" v-model="data.smtp_host" @input="updatePage('smtp_host')" id="smtp_host" required>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter SMTP Port</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter SMTP port" v-model="data.smtp_port" @input="updatePage('smtp_port')" id="smtp_port" required>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label>Select SMTP Secure Type</label>
                          <div class="form-check">
                            <input class="form-check-input" :checked="data.smtp_secure_type == 'SSL'" type="radio" name="smtp_secure_type" id="secure_type_ssl" checked value="SSL">
                            <label class="form-check-label" for="secure_type_ssl">
                              SSL
                            </label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" :checked="data.smtp_secure_type == 'TLS'" type="radio" name="smtp_secure_type" id="secure_type_tls" value="TLS">
                            <label class="form-check-label" for="secure_type_tls">
                              TLS
                            </label>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter SMTP Username</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter SMTP username" v-model="data.username" @input="updatePage('username')" id="username" required>
                          </div>
                        </div>
                        <div class="mb-4">
                          <label for="country">Enter SMTP Password</label>
                          <div class="input-group">
                            <input type="text" class="form-control" placeholder="Enter SMTP Password" v-model="data.password" @input="updatePage('password')" id="password" required>
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
import AdminLayout from "@/Pages/AdminLayout.vue";
import editor from "@tinymce/tinymce-vue";

export default {
  components: {
    editor,
    AdminLayout
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
      data: this.data,
      description: '',
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
    updatePage(propertyName, event) {
      this.page[propertyName] = event.target.value;
    },
    handleSubmit(){
      var id = document.getElementById("id").value;
      var title = document.getElementById("title").value;
      var name = document.getElementById("name").value;
      var url = document.getElementById("url").value;
      var contact_info = document.getElementById("contact_info").value;
      var country = document.getElementById("country").value;
      var state = document.getElementById("state").value;
      var recpatcha_private = document.getElementById("recpatcha_private").value;
      var recpatcha_public = document.getElementById("recpatcha_public").value;
      var recpatcha_type = document.getElementById("recpatcha_type").value;
      var smtp_host = document.getElementById("smtp_host").value;
      var smtp_port = document.getElementById("smtp_port").value;
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var timezone = document.getElementById("timezone").value;
      var recpatcha_status = $('input[name="recpatcha_status"]:checked').val();
      var smtp_secure_type = $('input[name="smtp_secure_type"]:checked').val();

      const fetchItems = async () => {
        try {
          const response = await fetch(apiBaseUrl+'setting/updateSettingData', {
            method: 'POST',
            body: JSON.stringify({
              id:id,
              title:title,
              name:name,
              url:url,
              contact_info:contact_info,
              country:country,
              state:state,
              timezone:timezone,
              recpatcha_status:recpatcha_status,
              recpatcha_private:recpatcha_private,
              recpatcha_public:recpatcha_public,
              recpatcha_type:recpatcha_type,
              smtp_host:smtp_host,
              smtp_port:smtp_port,
              smtp_secure_type:smtp_secure_type,
              username:username,
              password:password,
            }),
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': this.token,
            },
          });
          const data = await response.json();
          if(data.status == 'success'){
            window.location.href = '/setting';
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
</script>