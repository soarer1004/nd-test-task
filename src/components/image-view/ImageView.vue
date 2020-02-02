<template>
  <div class="image-view-container">
    <div class="image-container" ref="imageContainer">
      <canvas ref="canvas"
              :style
                ="{ height: `${canvasHeight}px`, width: `${canvasWidth}px` }">
      </canvas>
    </div>
  </div>
</template>

<script lang="ts" src="./ImageView.ts"></script>

<style lang="stylus" src="./image-view.styl" scoped></style>
