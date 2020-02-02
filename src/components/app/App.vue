<template>
  <div id="app-container" :class="{ view: isImageViewVisible }">
    <settings/>
    <images-slider v-if="isImageViewVisible"/>
  </div>
</template>

<script src="./App.ts" lang="ts"></script>

<style src="./app.styl" lang="stylus"></style>
