<template>
    <div class="images-slider-container">
      <button class="image-change left" @click="showPreviousImage"> < </button>
      <transition :name="transitionName">
        <image-view :image="activeImage"
                    :key="activeImage.name"
                    :displayType="imagesDisplayType"/>
      </transition>
      <button class="image-change right" @click="showNextImage"> > </button>
    </div>
</template>

<script lang="ts" src="./ImagesSlider.ts"></script>

<style lang="stylus" src="./images-slider.styl" scoped></style>
