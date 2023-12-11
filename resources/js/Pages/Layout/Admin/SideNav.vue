<template>
<nav id="sidebarMenu" class="sidebar d-lg-block bg-gray-800 text-white collapse" data-simplebar>
<div class="sidebar-inner px-2 pt-3">
  <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
    <div class="d-flex align-items-center">
      <div class="avatar-lg me-4">
        <img src="/public/assets/img/team/profile-picture-3.jpg" class="card-img-top rounded-circle border-white"
             alt="Bonnie Green">
      </div>
      <div class="d-block">
        <h2 class="h5 mb-3">Hi, Jane</h2>
        <a href="/login" class="btn btn-secondary btn-sm d-inline-flex align-items-center">
          <svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          Sign Out
        </a>
      </div>
    </div>
    <div class="collapse-close d-md-none">
      <a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu"
         aria-expanded="true" aria-label="Toggle navigation">
        <svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
        </svg>
      </a>
    </div>
  </div>
  <ul class="nav flex-column pt-3 pt-md-0">
    <li class="nav-item">
      <a href="/page" class="nav-link d-flex align-items-center">
          <span class="sidebar-icon me-3">
            <img src="/public/assets/img/favicon/fav-icon.svg" height="20" width="20" alt="Volt Logo">
          </span>
        <span class="mt-1 ms-1 sidebar-text">
            Custom CMS Adorn
          </span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'page' }">
      <a href="/page" class="nav-link">
        <span class="fas fa fa-columns me-2"></span>
        <span class="sidebar-text">Page</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'slider' }">
      <a href="/slider" class="nav-link">
        <span class="fas fa fa-sliders me-2"></span>
        <span class="sidebar-text">Slider</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'form' }">
      <a href="/form" class="nav-link">
        <span class="fas fa-file-text me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Form</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'header' }">
      <a href="/header" class="nav-link">
        <span class="fa fa-header me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Header</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'footer' }">
      <a href="/footer" class="nav-link">
        <span class="fa fa-bars me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Footer</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'blog-category' }">
      <a href="/blog-category" class="nav-link">
        <span class="fa fa-th me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Blog Category</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'blog' }">
      <a href="/blog" class="nav-link">
        <span class="fa fa-square me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Blog</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'setting' }">
      <a href="/setting" class="nav-link">
        <span class="fa fa-wrench me-2" aria-hidden="true"></span>
        <span class="sidebar-text">General Settings</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'popup' }">
      <a href="/popup" class="nav-link">
        <span class="fa fa-commenting me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Popup</span>
      </a>
    </li>
    <li :class="{ 'active': currentModule === 'gallary' }">
      <a href="/gallary" class="nav-link">
        <span class="fa fa-picture-o me-2" aria-hidden="true"></span>
        <span class="sidebar-text">Gallary</span>
      </a>
    </li>
    <li class="nav-item">
        <span class="nav-link collapsed d-flex justify-content-between align-items-center" data-bs-toggle="collapse"
              data-bs-target="#submenu-laravel" aria-expanded="true">
          <span>
            <span ><i :style="{ 'color: #fb503b;': currentModule === 'category' || currentModule === 'product' }" class="fab fa-laravel me-2"></i></span>
            <span class="sidebar-text" :style="{ 'color: #fb503b;': currentModule === 'category' || currentModule === 'product' }">Services Management</span>
          </span>
          <span class="link-arrow">
            <svg class="icon icon-sm" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </span>
      <div v-bind:class="{ 'multi-level collapse show': currentModule === 'category' || currentModule === 'product','multi-level collapse': currentModule !== 'category' && currentModule !== 'product'}"  role="list" id="submenu-laravel" aria-expanded="false">
        <ul class="flex-column nav">
          <li :class="{ 'nav-item active': currentModule === 'category' }" >
            <a href="/category" class="nav-link">
              <span class="fa fa-th-large me-2" aria-hidden="true"></span>
              <span class="sidebar-text">Category</span>
            </a>
          </li>
          <li :class="{ 'nav-item active': currentModule === 'product' }">
            <a href="/product" class="nav-link">
              <span class="fa fa-sitemap me-2" aria-hidden="true"></span>
              <span class="sidebar-text">Products</span>
            </a>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</div>
</nav>
</template>
<script>
export default {
  data() {
    return {
      currentModule: '', // Initialize with the current module dynamically
    };
  },
  created() {
    const currentPath = window.location.pathname.split('/')[1];
    this.currentModule = currentPath;
  },
};
</script>