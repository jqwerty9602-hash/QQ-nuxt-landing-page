<template>
  <div class="banner-section">
    <div class="banner-content">
      <!-- Logo -->
      <div class="mb-6 mt-12 md:mt-0">
        <img
          src="/logo.png"
          alt="QQFun Logo"
          class="h-20 w-auto md:h-24 lg:h-28"
          loading="eager"
        />
      </div>

      <!-- Description Text -->
      <div class="mx-lg mb-8">
        <p class="md:text-2xl text-white leading-relaxed">
          QQFUN is a vibrant game platform that turns playtime into real
          rewards.
        </p>
        <p class="md:text-2xl text-white leading-relaxed">
          It blends casual gaming with the thrill of earning, all in a fun,
          trustworthy environment.
        </p>
      </div>

      <!-- Play Now Button -->
      <NuxtLink to="#games-hub" class="btn-main">
        Play Now
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  width: 100%;
  height: 80vh;
  position: relative;
  background-image: url("/images/home-banner-bg.png");
  background-color: var(--primary-deep);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.banner-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1rem;
}

/* Preload the background image */
.banner-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/images/home-banner-bg.png");
  background-size: cover;
  background-position: center;
  z-index: -1;
  opacity: 0;
}
</style>
