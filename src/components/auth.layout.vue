<template>
  <!-- Container for demo purpose -->
  <div>

    <!-- Section: Design Block -->
    <section class="mb-40">
      <NavBar />

      <div class="grid- grid-rows-1- border-b border-gray-100">
        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-700">{{ 'router.currentRoute.value.meta.title' }}</h1>
          </div>
        </header>
      </div>
      <!--Old belo-->
      <div class="bg-slate-100   text-gray-800 py-6 px-6 grid lg:grid-cols-6 md:grid-cols-3 gap-10 md:gap-26">
        <div class="">
          <div class="w-60 h-full shadow-md bg-white absolute" id="sidenavSecExample">
            <div class="pt-4 pb-2 px-6">
              <a href="#!">
                <div class="flex items-center">
                  <!-- <div class="shrink-0">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" class="rounded-full w-10" alt="Avatar">
                  </div> -->
                  <div i-carbon-settings />
                  <div class="grow ml-3">
                    <p class="text-sm font-semibold text-gray-600">Settings</p>
                  </div>
                </div>
              </a>
            </div>
            <ul class="relative px-1">
              <li class="relative">
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">

                  <span>Non-collapsible link</span>
                </a>
              </li>
              <li class="relative" id="sidenavSecEx2">
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
                  data-mdb-ripple="true" data-mdb-ripple-color="primary" data-bs-toggle="collapse"
                  data-bs-target="#collapseSidenavSecEx2" aria-expanded="false" aria-controls="collapseSidenavSecEx2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path fill="currentColor"
                      d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z">
                    </path>
                  </svg>
                  <span>Collapsible item 1</span>
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 ml-auto" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                    </path>
                  </svg>
                </a>
                <ul class="relative accordion-collapse collapse" id="collapseSidenavSecEx2"
                  aria-labelledby="sidenavSecEx2" data-bs-parent="#sidenavSecExample">
                  <li class="relative">
                    <a href="#!"
                      class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 1</a>
                  </li>
                  <li class="relative">
                    <a href="#!"
                      class="flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                      data-mdb-ripple="true" data-mdb-ripple-color="primary">Link 2</a>
                  </li>
                </ul>
              </li>
            </ul>
            <hr class="my-2">
            <ul class="relative px-1">
              <li class="relative">
                <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                  href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">

                  <span>Non-collapsible link</span>
                </a>
              </li>
            </ul>
            <div class="text-center bottom-0 absolute w-full">
              <hr class="m-0">
              <p class="py-2 text-sm text-gray-700">tailwind-elements.com</p>
            </div>
          </div>
        </div>
        <div class="shadow-md bg-white px-1 lg:col-span-5 md:grid-col-span-2 px-4 py-4">
          <RouterView />
        </div>
        <!-- <div class="bg-yellow">
          right
        </div> -->

      </div>
    </section>
    <!-- Section: Design Block -->

  </div>
  <!-- Container for demo purpose -->
  <Footer />
  <footer class="bg-black mt-auto">
    <div class="p-5 text-white mx-auto">
      <h1 class="text-2xl">Footer</h1>
      <div class="flex">
        <div class="flex-grow flex flex-col">
          <a href="/#home">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
        </div>
        <div class="flex-grow flex flex-col">
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
        </div>
        <div class="flex-grow flex flex-col">
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
        </div>
        <div class="flex-grow flex flex-col">
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
          <a href="#">Boom</a>
        </div>
      </div>
      <div class="text-right text-xs py-4">
        <a href="">&copy;2021 Someco Inc.</a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import NavBar from "./NavBar.vue"
// const router = useRouter()
</script>