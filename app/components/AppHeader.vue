<template>
  <header class="header-container">
    <div class="mx-4 md:mx-10">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <NuxtLink
            to="/"
            class="flex items-center text-white text-xl font-bold hover:text-blue-100 transition-colors"
          >
            <img
              src="/svg/QQF-logo-03.svg"
              alt="QQFun Logo"
              class="h-18 w-auto"
              width="36"
              height="36"
              loading="eager"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="menu-link" @click="scrollToTop">Home</button>
          <button class="menu-link" @click="scrollToSection('why-us')">
            Why Us
          </button>
          <button class="menu-link" @click="scrollToSection('games-hub')">
            Games Hub
          </button>
          <button class="menu-link" @click="scrollToSection('download')">
            Download
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <rect width="24" height="24" fill="none" />
            <path fill="white" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <div v-show="mobileMenuOpen" class="mobile-menu-overlay md:hidden">
      <div class="mobile-menu-content">
        <button class="menu-link-mobile" @click="scrollToTop">Home</button>
        <button class="menu-link-mobile" @click="scrollToSection('why-us')">
          Why Us
        </button>
        <button class="menu-link-mobile" @click="scrollToSection('games-hub')">
          Games Hub
        </button>
        <button class="menu-link-mobile" @click="scrollToSection('download')">
          Download
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Menu Backdrop -->
  <div
    v-show="mobileMenuOpen"
    class="mobile-menu-backdrop md:hidden"
    @click="closeMobileMenu"
  ></div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileMenuOpen = ref<boolean>(false);

const toggleMobileMenu = (): void => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const closeMobileMenu = (): void => {
  mobileMenuOpen.value = false;
};

// Smooth scroll to section
const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 64;
    const elementPosition = element.offsetTop - headerHeight;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  }
  closeMobileMenu();
};

// Scroll to top (Home)
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  closeMobileMenu();
};

// Close mobile menu when clicking outside or on escape key
onMounted(() => {
  const handleEscape = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  };
  document.addEventListener("keydown", handleEscape, { passive: true });

  onUnmounted(() => {
    document.removeEventListener("keydown", handleEscape);
  });
});
</script>

<style scoped>
/* Header container */
.header-container {
  width: 100%;
  position: fixed;
  z-index: 50;
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--primary-light);
  box-shadow: var(--shadow-header);
}

/* Mobile menu button */
.mobile-menu-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--white-overlay-20);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  position: relative;
  z-index: 50;
}

.mobile-menu-btn:hover {
  background: var(--white-overlay);
}

@media (min-width: 768px) {
  .mobile-menu-btn {
    display: none;
  }
}

/* Desktop menu links */
.menu-link {
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  background: none;
  border: none;
}

.menu-link:hover {
  background-color: var(--primary-light);
  transform: translateY(-1px);
  box-shadow: var(--shadow-menu-hover);
}

.menu-link.router-link-active {
  background-color: var(--primary-active);
  box-shadow: var(--shadow-menu-active);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: absolute;
  left: 0;
  right: 0;
  z-index: 40;
  background: var(--gradient-mobile-menu);
  border-top: 1px solid var(--primary-light);
  box-shadow: var(--shadow-mobile-menu);
  animation: slideDown 0.3s ease-out;
}

.mobile-menu-content {
  padding: 16px 44px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-height: 70vh;
  overflow-y: auto;
}

.menu-link-mobile {
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  padding: 14px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  display: block;
  text-align: center;
  background: none;
  border: none;
  width: 100%;
}

.menu-link-mobile:hover {
  background-color: var(--primary-light);
  transform: translateX(4px);
}

.menu-link-mobile.router-link-active {
  background-color: var(--primary-active);
}

/* Mobile Menu Backdrop */
.mobile-menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--black-overlay);
  z-index: 30;
  animation: fadeIn 0.3s ease-out;
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mobile-menu-overlay {
    margin: 0 -24px;
    border-radius: 0;
  }
}

@media (max-width: 480px) {
  .menu-link {
    padding: 6px 12px;
    font-size: 14px;
  }

  .mobile-menu-content {
    padding: 12px 16px;
  }

  .menu-link-mobile {
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>
