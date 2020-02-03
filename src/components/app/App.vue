<template>
  <div id="app-container" :class="{ view: isImageViewVisible }">
    <mobile-header v-if="isImageViewVisible"/>
    <div class="content" :class="{ 'with-header': isImageViewVisible }">
      <settings/>
      <images-slider v-if="isImageViewVisible"/>
    </div>
  </div>
</template>

<script src="./App.ts" lang="ts"></script>

<style src="./app.styl" lang="stylus"></style>
