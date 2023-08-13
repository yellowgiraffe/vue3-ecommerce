<template>
  <section class="hero-bg h-3/4 container mx-auto flex items-center">
    <div>
      <div class="uppercase tracking-widest mb-2">Reform juice</div>
      <h1 class="font-medium text-5xl max-w-md mb-8">
        A Natural healthy way to support your immune system
      </h1>
      <router-link to="/shop" custom v-slot="{ navigate }" >
        <button
          role="link"
          class="rounded text-white bg-lime-600 px-8 py-1"
          @click="navigate"
        >
          Shop Now
        </button>
      </router-link>
    </div>
  </section>
</template>

<style>
.hero-bg {
  height: 90vh;
  background-image: url('../../assets/img/main-juice.png');
  background-position: top right;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>