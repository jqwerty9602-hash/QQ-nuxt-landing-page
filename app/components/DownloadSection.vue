<template>
  <div class="w-full bg-gradient-primary py-20 md:py-26 justify-items-center">
    <div class="ml-4 mr-4 md:mr-14">
      <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-16">
        <!-- Left Side: QQFun Logo -->
        <div>
          <img
            src="/images/QQFun-logo.png"
            alt="QQFun Logo"
            class="w-74 h-auto md:w-100"
            loading="lazy"
          />
        </div>

        <!-- Right Side: Download Content -->
        <div
          class="flex-1 flex flex-col justify-center items-center lg:items-center"
        >
          <!-- Download Title -->
          <h2 class="mb-8 !text-white text-center h2-montserrat">
            Download QQFUN Now
          </h2>

          <!-- Download Buttons -->
          <div class="flex flex-row gap-4 justify-center mt-5">
            <!-- App Store Button -->
            <a href="#" class="download-button">
              <img
                src="/images/Download-AppStore.png"
                alt="Download on App Store"
                class="h-auto w-70 lg:w-82 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>

            <!-- Google Play Button -->
            <a href="#" class="download-button">
              <img
                src="/images/Download-GooglePlay.png"
                alt="Download on Google Play"
                class="h-auto w-70 lg:w-82 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.download-button {
  display: inline-block;
  transition: transform 0.3s ease;
}

.download-button:hover {
  transform: translateY(-2px);
}

/* Montserrat heading utility */
.h2-montserrat {
  font-family: var(--font-montserrat) !important;
  font-weight: 800 !important;
}
</style>
