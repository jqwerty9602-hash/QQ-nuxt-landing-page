<template>
  <div class="banner-section">
    <div class="banner-content">
      <!-- Logo -->
      <div class="mb-0 mt-12 md:mt-10 md:-mb-14">
        <img
          src="/svg/QQF-logo-03.svg"
          alt="QQFun Logo"
          class="h-auto w-100 md:w-150 md:h-auto"
          loading="eager"
        />
      </div>

      <!-- Description Text -->
      <div class="mx-lg mb-8">
        <p class="text-sm md:text-2xl text-white leading-relaxed">
          QQFUN is a vibrant game platform that turns playtime into real
          rewards.
        </p>
        <p class="text-sm md:text-2xl text-white leading-relaxed">
          It blends casual gaming with the thrill of earning, all in a fun,
          trustworthy environment.
        </p>
      </div>

      <!-- Play Now Button -->
      <NuxtLink to="#games-hub" class="btn-main"> Play Now </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.banner-section {
  width: 100%;
  height: 100vh;
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
</style>
