<template>
  <section class="bg-primary-deep flex items-center">
    <div class="mx-4 md:mx-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Content -->
        <div
          class="mt-20 -mb-20 md:mt-24 md:-mb-24 lg:mt-24 lg:mb-24 space-y-12"
        >
          <!-- Content Container with Absolute Background -->
          <div class="content-container">
            <!-- Background Image (Mobile Only) -->
            <div class="background-image"></div>

            <!-- Content (Above Background) -->
            <div class="content-wrapper">
              <!-- Section Title -->
              <h2 class="text-2xl sm:text-5xl text-fourth mb-12 text-center lg:text-left">
                Why Choose QQFUN?
              </h2>

              <!-- Feature 1: Casual & Fun -->
              <div
                class="flex items-start text-center sm:text-left mb-8 sm:mb-10"
              >
                <div class="flex-shrink-0 mx-auto sm:mx-0 mb-3 sm:mb-0 md:pt-1.5">
                  <img
                    src="/images/QQ-Coins.png"
                    alt="QQ Coins"
                    class="w-8 h-8 sm:w-8 sm:h-8 md:h-8 md:w-8"
                  />
                </div>
                <div class="flex-1 sm:ml-3">
                  <h3
                    class="!text-[15px] sm:!text-2xl font-semibold mb-1 sm:mb-0 sm:mt-3"
                  >
                    Casual & Fun
                  </h3>
                  <p class="!text-[15px] sm:!text-2xl leading-relaxed sm:mt-3 md:-ml-12">
                    Our games are simple, quick and enjoyable – perfect for
                    coffee breaks, winding down after work, or just when you
                    want a spark of fun.
                  </p>
                </div>
              </div>

              <!-- Feature 2: Rewarding -->
              <div
                class="flex items-start text-center sm:text-left mb-8 sm:mb-10"
              >
                  <div class="flex-shrink-0 mx-auto sm:mx-0 mb-3 sm:mb-0 md:pt-1.5">
                  <img
                    src="/images/QQ-Coins.png"
                    alt="QQ Coins"
                    class="w-8 h-8 sm:w-8 sm:h-8 md:h-8 md:w-8"
                  />
                </div>
                <div class="flex-1 sm:ml-3">
                  <h3
                   class="!text-[15px] sm:!text-2xl font-semibold mb-1 sm:mb-0 sm:mt-3"
                  >
                    Rewarding
                  </h3>
                  <p
                    class="!text-[15px] sm:!text-2xl md:text-lg leading-relaxed sm:mt-3 md:-ml-12"
                  >
                    We believe playtime should give something back. That's why
                    QQFUN turns your spins and taps into real rewards.
                  </p>
                </div>
              </div>

              <!-- Feature 3: Trusted -->
              <div
                class="flex items-start text-center sm:text-left mb-8 sm:mb-10"
              >
                <div class="flex-shrink-0 mx-auto sm:mx-0 mb-3 sm:mb-0 md:pt-1.5">
                  <img
                    src="/images/QQ-Coins.png"
                    alt="QQ Coins"
                    class="w-8 h-8 sm:w-8 sm:h-8 md:h-8 md:w-8"
                  />
                </div>
                <div class="flex-1 sm:ml-3">
                  <h3
                    class="!text-[15px] sm:!text-2xl font-semibold mb-1 sm:mb-0 sm:mt-3"
                  >
                    Trusted
                  </h3>
                  <p
                    class="!text-[15px] sm:!text-2xl leading-relaxed sm:mt-3 md:-ml-12"
                  >
                    Built with fairness and safety in mind. No tricks, no stress
                    – just pure fun in a reliable environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column - Mascot Image -->
        <div class="flex justify-center">
          <div class="relative">
            <img
              src="/images/3D-Mascot.png"
              alt="QQFUN 3D Mascot"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.content-container {
  position: relative;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  position: relative;
  z-index: 2;
}

.background-image {
  display: none;
}

/* Mobile background - main breakpoint */
@media (max-width: 767px) {
  .content-container {
    min-height: 85vh;
    padding: 1rem 1.5rem;
  }

  .background-image {
    display: block;
    position: absolute;
    top: -2rem;
    left: 0.5rem;
    right: 0.5rem;
    bottom: -2rem;
    background-image: url("/images/why-choose-us-bg.png");
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 1rem;
    z-index: 1;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    height: 100%;
  }

  .content-wrapper .flex {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .content-wrapper .space-x-4 {
    gap: 1rem;
  }
}

/* Medium small devices */
@media (max-width: 600px) {
  .content-container {
    min-height: 80vh;
    padding: 0.875rem 1.25rem;
  }
}

/* Medium small devices */
@media (max-width: 500px) {
  .content-container {
    min-height: 85vh;
    padding: 0.875rem 1.25rem;
  }
}

/* Very small devices */
@media (max-width: 450px) {
  .content-container {
    min-height: 90vh;
    padding: 0.75rem 1rem;
  }
}

/* Very small devices */
@media (max-width: 400px) {
  .content-container {
    min-height: 95vh;
    padding: 0.75rem 1.2rem;
  }
}
</style>
