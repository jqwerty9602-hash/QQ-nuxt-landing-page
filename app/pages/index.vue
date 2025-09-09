<template>
    <div class=" text-white overflow-x-hidden">

        <AppHeader />
        <main>
            <Banner />
            <WhyChooseUs id="why-us" />
            <GamesHub id="games-hub" />
            <DownloadSection id="download" />
        </main>
        <AppFooter />
    </div>
</template>

<script setup>
// Fix scroll restoration flicker
onMounted(() => {
  if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  // Always start at top on refresh
  window.scrollTo(0, 0)
})
</script>