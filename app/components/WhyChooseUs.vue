<template>
  <section class="bg-primary-deep flex items-center">
    <div class="mx-4 md:mx-24 pt-20 pb-4 md:pt-30 md:pb-30">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Column - Content -->
        <div class="space-y-12">
          <!-- Section Title -->
          <h2 class="text-fourth mb-12">Why Choose QQFUN?</h2>

          <!-- Feature 1: Casual & Fun -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <img
                src="/images/QQ-Coins.png"
                alt="QQ Coins"
                class="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-semibold mb-3">
                Casual & Fun
              </h3>
              <p class=" text-base md:text-lg leading-relaxed">
                Our games are simple, quick and enjoyable – perfect for coffee
                breaks, winding down after work, or just when you want a spark
                of fun.
              </p>
            </div>
          </div>

          <!-- Feature 2: Rewarding -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <img
                src="/images/QQ-Coins.png"
                alt="QQ Coins"
                class="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-semibold mb-3">Rewarding</h3>
              <p class=" text-base md:text-lg leading-relaxed">
                We believe playtime should give something back. That's why QQFUN
                turns your spins and taps into real rewards.
              </p>
            </div>
          </div>

          <!-- Feature 3: Trusted -->
          <div class="flex items-start space-x-4">
            <div class="flex-shrink-0">
              <img
                src="/images/QQ-Coins.png"
                alt="QQ Coins"
                class="w-8 h-8 md:w-10 md:h-10"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-semibold text-white mb-3">
                Trusted
              </h3>
              <p class=" text-base md:text-lg leading-relaxed">
                Built with fairness and safety in mind. No tricks, no stress –
                just pure fun in a reliable environment.
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column - Mascot Image -->
        <div class="flex justify-center lg:justify-center">
          <div class="relative">
            <img
              src="/images/3D-Mascot.png"
              alt="QQFUN 3D Mascot"
              class="w-full h-auto -mt-20 md:mt-0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose-section {
  background-color: var(--primary-deep);
  display: flex;
  align-items: center;
}
</style>
