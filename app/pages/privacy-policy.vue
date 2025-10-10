<template>
  <div class="privacy-policy-container">
    <div class="privacy-content">
      <ContentRenderer v-if="page" :value="page" />
      <div v-else class="error-message">
        <p>Privacy Policy not found</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('privacy-policy', () => 
  queryCollection('content').path('/privacy-policy').first()
)

const title = page.value?.title
const description = page.value?.description

useSeoMeta({
  title: title,
  description: description,
})
</script>

<style scoped>
.privacy-policy-container {
  min-height: 100vh;
  padding: 7rem 1rem;
}

.privacy-content {
  max-width: 900px;
  margin: 0 auto;
  background: var(--overlay-white-90);
  padding: 3rem;
  border-radius: 8px;
  box-shadow: var(--shadow-lg);
  line-height: 1.6;
}

.error-message {
  text-align: center;
  padding: 2rem;
  color: var(--neutral-100);
}

/* markdown content */
:deep(h1) {
  font-family: var(--font-display);
  font-size: 2.5rem;
  color: var(--fourth);
  margin-bottom: 0.5rem;
}

:deep(h2) {
  font-family: var(--font-primary);
  font-weight: 800;
  font-size: 1.5rem;
  color: var(--fourth);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid var(--fourth-50);
  padding-bottom: 0.5rem;
}

:deep(h3) {
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 1.2rem;
  color: var(--primary-title);
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(p) {
  margin-bottom: 1rem;
  color: var(--neutral-100);
}

:deep(ul) {
  margin-left: 2rem;
  margin-bottom: 1rem;
  list-style-type: disc;
  padding-left: 1rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
  color: var(--neutral-100);
  display: list-item;
}

:deep(strong) {
  font-weight: 600;
  color: var(--neutral-100);
}

:deep(.important-notice) {
  background-color: var(--fourth-150);
  border-left: 4px solid var(--fourth);
  padding: 1rem;
  margin: 1.5rem 0;
  border-radius: 4px;
  color: var(--neutral-100);
}

:deep(a) {
  color: var(--primary-light);
  text-decoration: none;
  font-weight: 600;
}

:deep(a:hover) {
  text-decoration: underline;
  color: var(--primary-title);
}

@media (max-width: 768px) {
  .privacy-content {
    padding: 1.5rem;
  }

  :deep(h1) {
    font-size: 2rem;
  }

  :deep(h2) {
    font-size: 1.3rem;
  }
}
</style>