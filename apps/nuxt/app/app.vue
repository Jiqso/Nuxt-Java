
<script setup lang="ts">
</script>

<template>
  <main>
    <div class="layout">
        <header class="layout-header">
          <NuxtLink to="/"> Home </NuxtLink>
          <NuxtLink to="/about"> About </NuxtLink>
        </header>
        
        <main class="layout-main">
          <nuxt-page />
        </main>
        
        <footer class="layout-footer">
            <p>&copy; 2024 My App</p>
        </footer>
    </div>
  </main>
</template>

<style scoped>
    .layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100vw;
    }

    .layout-header {
        background-color: #333;
        color: white;
        display:flex;
        justify-content:center;
        align-items: center;
        gap:2rem;
        height:50px;
        
    }

    .layout-main {
        flex: 1;
        padding: 2rem;
    }

    .layout-footer {
        background-color: #f0f0f0;
        height:50px;
        display:flex;
        justify-content:center;
        align-items: center;
        border-top: 1px solid #ddd;
    }
</style>