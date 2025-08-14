<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<script>
import loader from '@ibsheet/loader';

const ibsheetLib = {
  name: 'ibsheet',
  baseUrl: 'https://demo.ibsheet.com/ibsheet/v8/samples/customer-sample/assets/ibsheet/',
  locales: ['en', 'ko'],
  plugins: ['excel', 'common', 'dialog']
}

// 로더 config
loader.config({
  registry: [ibsheetLib]
});

loader.load();

const loaderVersion = loader.version;
</script>

<template>
  <header>
    <p>@ibsheet/loader v {{ loaderVersion }}</p>
    <div class="header-inner">
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/page1">Page1</RouterLink>
          <RouterLink to="/page2">Page2</RouterLink>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* 전체 레이아웃 구성 */
:global(body) {
  margin: 0;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header {
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  z-index: 1000;
  position: sticky; /* or fixed if you want it always visible */
  top: 0;
}

.logo {
  margin-right: 1rem;
  flex-shrink: 0;
}

.wrapper {
  flex-grow: 1;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

/* RouterView 아래 메인 콘텐츠가 전체 너비 사용하도록 */
:deep(main), :deep(.router-view), :deep(.view-container) {
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    flex-direction: row;
    align-items: center;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
