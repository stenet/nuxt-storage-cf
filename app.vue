<script setup lang="ts">
const r: string[] = await $fetch("/api/test");
const keys = ref(r);
</script>

<template>
  <div>
    <ul>
      <li v-for="key in keys" :key="key">
        {{ key }}
      </li>
    </ul>
  </div>
</template>
