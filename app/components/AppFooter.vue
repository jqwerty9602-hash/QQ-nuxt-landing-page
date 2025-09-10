<template>
  <footer class="w-full bg-black border-t border-primary-light/20">
    <div class="mx-4 py-8">
      <!-- Follow Us Section -->
      <div class="text-center mt-8">
        <p class="font-bold mb-2">Follow Us</p>

        <!-- Social Media Icons -->
        <div class="flex flex-wrap justify-center items-center gap-2">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            class="social-icon"
            :aria-label="social.name"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              :src="social.icon"
              :alt="social.name"
              class="w-8 h-8 object-contain transition-all duration-300"
              width="32"
              height="32"
              loading="lazy"
            />
          </a>
        </div>
      </div>

      <!-- Disclaimer Text -->
      <p class="mt-6 md:mt-4 text-center font-light text-white/90 text-[12px] md:text-base">
        This game belongs to board & card entertainment. Some in-game content or
        services may require additional payment.
      </p>
      <p class="text-center font-light text-white/90  text-[10px] md:text-base">
        Please play responsibly, avoid addiction, and refrain from using the
        game for gambling or any illegal activities.
      </p>

      <!-- Copyright Section -->
      <div class="text-center mt-6 pt-6 border-t border-white/10">
        <p class="text-white/60 text-[10px] md:text-base">
          Copyright © {{ new Date().getFullYear() }}
          <a
            href="/"
            class="text-fourth hover:text-fourth-hover underline transition-colors"
          >
            Astral Gaming Limited.
          </a>
          All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  { name: "Facebook", url: "#", icon: "/social-icons/facebook-icon.png" },
  { name: "Instagram", url: "#", icon: "/social-icons/instagram-icon.png" },
  { name: "WhatsApp", url: "#", icon: "/social-icons/whatsapp-icon.png" },
  { name: "Telegram", url: "#", icon: "/social-icons/telegram-icon.png" },
  { name: "TikTok", url: "#", icon: "/social-icons/tiktok-icon.png" },
  { name: "YouTube", url: "#", icon: "/social-icons/youtube-icon.png" },
  { name: "Twitter", url: "#", icon: "/social-icons/twitter-icon.png" },
  { name: "RedNote XHS", url: "#", icon: "/social-icons/rednote-xhs-icon.png" },
  { name: "Lemon8", url: "#", icon: "/social-icons/lemon8-icon.png" },
];
</script>

<style scoped>
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  min-width: 3rem;
  min-height: 3rem;
  background: var(--overlay-white-10);
}

.social-icon:hover {
  background: var(--overlay-white-20);
  transform: translateY(-2px) scale(1.1);
}

.social-icon:hover img {
  filter: brightness(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .social-icon {
    padding: 0.375rem;
    min-width: 2.5rem;
    min-height: 2.5rem;
  }

  .social-icon img {
    width: 1.75rem;
    height: 1.75rem;
  }
}

@media (max-width: 640px) {
  .social-icon {
    padding: 0.25rem;
    min-width: 2rem;
    min-height: 2rem;
  }

  .social-icon img {
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>
