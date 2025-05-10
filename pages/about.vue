<template>
  <h1>About</h1>

  <img :src="page?.picture.link" :alt="page?.picture.name" />

  <h2>{{ page?.fullname }}</h2>

  <p>Short bio: {{ page?.shortBio }}</p>
  <p v-html="page?.extendedBio"></p>
</template>

<script setup lang="ts">
import type { About } from '~/types';
import { transpileMarkdown } from '~/utils/markdown';

const { $contentIsland } = useNuxtApp();

const { data: page } = await useAsyncData<About>('about', async () => {
  const page = await $contentIsland.getById<About>(
    '6803929dce4621f0d82cb265',
    'About'
  );

  return { ...page, extendedBio: transpileMarkdown(page.extendedBio) } as About;
});
</script>
