<template>
  <div class="games-hub-section">
    <div class="relative z-10 py-20 md:py-26 rounded-lg mx-4 md:mx-30 lg:mx-30 xl:mx-80">
      <h2 class="text-center mb-4 text-2xl sm:text-6xl md:text-6xl">Games Hub</h2>
      <p class="text-center text-sm md:text-2xl mb-12">
        Discover all your favorite games in one fun spot!
      </p>

      <div class="relative mt-12">
        <!-- Games Grid -->
        <div
          class="games-grid"
          @mouseenter="pauseOnHover"
          @mouseleave="resumeOnLeave"
        >
          <div
            v-for="(game, index) in currentPageGames"
            :key="index"
            class="game-card group cursor-pointer"
          >
            <div class="game-image group-hover:scale-105">
              <NuxtImg
                :src="`/games/${game.image}`"
                :alt="game.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p class="game-title group-hover:text-white">{{ game.name }}</p>
          </div>
        </div>

        <!-- Navigation Controls Container -->
        <div
          class="navigation-controls flex items-center justify-center mt-8"
          @mouseenter="pauseOnNavigation"
          @mouseleave="resumeOnNavigation"
        >
          <!-- Left Arrow -->
          <button
            v-if="currentPage > 0"
            @click="prevPage"
            class="nav-arrow-inline"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <div v-else class="nav-arrow-placeholder"></div>

          <!-- Page Indicators -->
          <div class="flex justify-center space-x-2 mx-4 md:mx-6">
            <button
              v-for="page in totalPages"
              :key="page - 1"
              @click="goToPage(page - 1)"
              class="page-indicator"
              :class="currentPage === page - 1 ? 'page-active' : 'page-inactive'"
            />
          </div>

          <!-- Right Arrow -->
          <button
            v-if="currentPage < totalPages - 1"
            @click="nextPage"
            class="nav-arrow-inline"
          >
            <svg class="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          <div v-else class="nav-arrow-placeholder"></div>
        </div>

        <!-- Page Counter -->
        <div class="text-center mt-4">
          <span class="text-white/70 text-sm">
            Page {{ currentPage + 1 }} of {{ totalPages }}
          </span>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <NuxtLink to="#games-hub" class="btn-main">
          More Games
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Game {
  name: string;
  image: string;
}

const games = ref<Game[]>([
  { name: "almighty zeus", image: "almighty-zeus.png" },
  { name: "thor vs loki", image: "thor-vs-loki.png" },
  { name: "Scarab Remains", image: "scarab-remains-game.png" },
  { name: "fortune lions 2", image: "fortune-lions-2.png" },
  { name: "warlord lu bu", image: "warlord-lubu-game.png" },
  { name: "jalapeno", image: "jalapeno.png" },
  { name: "mahjong gold 3", image: "mahjong-gold3.png" },
  { name: "arctic clash", image: "arctic-clash.png" },
  { name: "goldmine blast", image: "goldmine-blast.png" },
  { name: "wilderness lion", image: "wilderness-lion.png" },
  { name: "cleopatra treasures", image: "cleopatra-treasures.png" },
  { name: "diamond buffalo", image: "diamond-buffalo.png" },
  { name: "the age of navigation", image: "the-age-of-navigation.png" },
  { name: "gods treasures", image: "gods-treasures.png" },
  { name: "fanatic stone age", image: "fanatic-stone-age.png" },
  { name: "mahjong gold 2", image: "mahjong-gold2.png" },
  { name: "ninja duel", image: "ninja-duel.png" },
  { name: "wealthy waterfall", image: "wealthy-waterfall.png" },
  { name: "attack on toys", image: "attack-on-toys.png" },
  { name: "fortune dragon", image: "fortune-dragon.png" },
  { name: "war of asgard", image: "war-of-asgard.png" },
  { name: "penguin expedition", image: "penguin-expedition.png" },
  { name: "fishing bonanza", image: "fishing-bonanza-game.png" },
  { name: "auspicious dragon", image: "auspicious-dragon.png" },
  { name: "pirate bar", image: "pirate-bar.png" },
  { name: "mahjong infinity", image: "mahjong-infinity.png" },
  { name: "prosperity 168", image: "prosperity-168.png" },
  { name: "chocolate burst", image: "chocolate-burst.png" },
  { name: "seraph", image: "seraph.png" },
  { name: "glagness ganesh", image: "glagness-ganesh.png" },
]);

const currentPage = ref(0);
const gamesPerPage = 10;
const isPausedByImages = ref(false);
const isPausedByNavigation = ref(false);

const totalPages = computed(() => Math.ceil(games.value.length / gamesPerPage));
const currentPageGames = computed(() => {
  const start = currentPage.value * gamesPerPage;
  return games.value.slice(start, start + gamesPerPage);
});

let autoAdvanceInterval: NodeJS.Timeout | null = null;

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    stopAutoAdvance();
    currentPage.value++;
    resumeAfterDelay();
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    stopAutoAdvance();
    currentPage.value--;
    resumeAfterDelay();
  }
};

const goToPage = (page: number) => {
  stopAutoAdvance();
  currentPage.value = page;
  resumeAfterDelay();
};

const resumeAfterDelay = () => {
  setTimeout(() => {
    if (!isPausedByImages.value && !isPausedByNavigation.value) {
      startAutoAdvance();
    }
  }, 3000);
};

const startAutoAdvance = () => {
  if (autoAdvanceInterval) return;
  autoAdvanceInterval = setInterval(() => {
    if (isPausedByImages.value || isPausedByNavigation.value) return;
    currentPage.value = currentPage.value < totalPages.value - 1 ? currentPage.value + 1 : 0;
  }, 5000);
};

const stopAutoAdvance = () => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = null;
  }
};

const pauseOnHover = () => {
  isPausedByImages.value = true;
  stopAutoAdvance();
};

const resumeOnLeave = () => {
  isPausedByImages.value = false;
  if (!isPausedByNavigation.value) {
    setTimeout(startAutoAdvance, 500);
  }
};

const pauseOnNavigation = () => {
  isPausedByNavigation.value = true;
  stopAutoAdvance();
};

const resumeOnNavigation = () => {
  isPausedByNavigation.value = false;
  if (!isPausedByImages.value) {
    setTimeout(startAutoAdvance, 500);
  }
};

onMounted(() => startAutoAdvance());
onUnmounted(() => stopAutoAdvance());
</script>

<style scoped>
.games-hub-section {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: var(--primary) url("/images/games-hub-bg.png") center/cover no-repeat;
  overflow: hidden;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: clamp(12px, 1vw, 1rem);
  transition: all 0.5s ease;
  touch-action: pan-y; /* Allow vertical scrolling but enable horizontal swipe detection */
  user-select: none; /* Prevent text selection during swipe */
  -webkit-user-select: none; /* Safari */
  -webkit-touch-callout: none; /* iOS Safari */
}

.game-card {
  will-change: transform;
  animation: fadeInUp 0.6s ease-out forwards;
}

.game-image {
  aspect-ratio: 4/5;
  overflow: hidden;
  border-radius: 0.5rem;
  background: var(--overlay-white-10);
  transition: all 0.3s ease;
}

.game-card:hover .game-image {
  background: var(--overlay-white-20);
  box-shadow: var(--shadow-primary), var(--shadow-md);
  border: 2px solid var(--primary-light);
}

.game-title {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--overlay-white-90);
  text-transform: capitalize;
  transition: color 0.3s ease;
}

.navigation-controls {
  align-items: center;
  justify-content: center;
}

.nav-arrow-inline {
  background: var(--gradient-black-light);
  backdrop-filter: blur(4px);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-sm);
  width: 2rem;
  height: 2rem;
}

.nav-arrow-inline:hover {
  background: var(--gradient-black-dark);
  transform: scale(1.1);
  box-shadow: var(--shadow-lg);
}

.nav-arrow-placeholder {
  width: 2rem;
  height: 2rem;
  /* Invisible placeholder to maintain spacing */
}

.page-indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

.page-active {
  background: var(--primary-100-bg);
  transform: scale(1.4);
}

.page-inactive {
  background: var(--gray);
  transition: all 0.3s ease;
}

.page-inactive:hover {
  background: var(--overlay-white-60);
  transform: scale(1.1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 1024px) {
  .games-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .games-grid { grid-template-columns: repeat(3, 1fr); }
  .nav-arrow-inline { 
    padding: 0.6rem; 
    width: 2.5rem; 
    height: 2.5rem; 
  }
  .nav-arrow-placeholder {
    width: 2.5rem;
    height: 2.5rem;
  }
}

@media (max-width: 480px) {
  .games-grid { grid-template-columns: repeat(2, 1fr); }
  .nav-arrow-inline { 
    padding: 0.5rem; 
    width: 2.25rem; 
    height: 2.25rem; 
  }
  .nav-arrow-placeholder {
    width: 2.25rem;
    height: 2.25rem;
  }
  .navigation-controls .mx-4 {
    margin-left: 0.75rem;
    margin-right: 0.75rem;
  }
}
</style>