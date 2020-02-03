<template>
  <div class="images-slider-container" ref="sliderContainer">
    <template v-if="imagesList.length > 1">
      <button class="image-change left hidden-mobile"
              @click="showPreviousImage">
        <
      </button>
      <button class="image-change right hidden-mobile"
              @click="showNextImage"> >
      </button>
    </template>
    <div v-if="imagesList.length !== 0" class="images-counter">
      {{ currentImageIndex + 1 }} / {{ imagesList.length }}
    </div>
    <template v-if="imagesList.length !== 0">
      <transition :name="transitionName">
        <image-view :image="activeImage"
                    :key="activeImage.name"
                    :displayType="imagesDisplayType"/>
      </transition>
    </template>
    <template v-else>
      Не выбрано ни одного изображения
    </template>
  </div>
</template>

<script lang="ts" src="./ImagesSlider.ts"></script>

<style lang="stylus" src="./images-slider.styl" scoped></style>
