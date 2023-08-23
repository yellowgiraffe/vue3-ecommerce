<template>
  <section class="text-white bg-lime-600 mb-20">
    <div class="product-story-bg container mx-auto flex justify-end py-14">
      <div class="w-1/2">
        <div class="uppercase font-medium tracking-widest">Product story</div>
        <h2 class="text-5xl font-medium mb-6">What is the juice?</h2>
        <p class="mb-4 max-w-md">
          100% juice are produced from concentrated process, some of the water from the crushed juice. This way all the minerals and vitamins are concealed in the juice box for your later consumption.
        </p>
        <div class="flex max-w-md">
          <div class="mr-8">
            <p class="text-md italic">
              “Taking reform juice has been very great for me and my family”.
            </p>
            <span class="text-sm">Joy Philp</span>
          </div>
          <div>
            <p class="text-md italic">
              “Taking reform juice has been very great for me and my family”.
            </p>
            <span class="text-sm">Joy Philp</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.product-story-bg {
  position: relative;
}

.product-story-bg::before {
  content: '';
  position: absolute;
  top: -35px;
  bottom: 0;
  width: 100%;
  height: calc(100% + 35px);
  background-image: url('../../assets/img/woman-drinking-juice.png');
  background-position: top left;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>