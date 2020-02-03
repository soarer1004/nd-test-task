<template>
  <div id="app-container" :class="{ view: isImageViewVisible }">
    <mobile-header/>
    <div class="content">
      <settings/>
      <images-slider v-if="isImageViewVisible"/>
    </div>
  </div>
</template>

<script src="./App.ts" lang="ts"></script>

<style src="./app.styl" lang="stylus"></style>
