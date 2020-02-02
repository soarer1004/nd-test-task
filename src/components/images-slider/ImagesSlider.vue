<template>
  <div class="images-slider-container">
    <template v-if="imagesList.length > 1">
      <button class="image-change left"
              @click="showPreviousImage">
        <
      </button>
      <button class="image-change right"
              @click="showNextImage"> >
      </button>
    </template>

    <transition :name="transitionName">
      <image-view :image="activeImage"
                  :key="activeImage.name"
                  :displayType="imagesDisplayType"/>
    </transition>
  </div>
</template>

<script lang="ts" src="./ImagesSlider.ts"></script>

<style lang="stylus" src="./images-slider.styl" scoped></style>
