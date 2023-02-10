<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products">Nuxt Lesson Merch</NuxtLink>
      </nav>
    </header>
    <!-- output content -->
    <div class="container mx-auto p-4 shadow-sm">
      <slot />
    </div>
    <footer class="container mx-auto p-4 ">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
    <style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>