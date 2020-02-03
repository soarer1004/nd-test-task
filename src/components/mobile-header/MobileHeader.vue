<template>
  <div class="mobile-header-container hidden-desktop"
       @click="switchMobileMenuVisibility">
    {{ isMobileMenuVisible ? 'Закрыть настройки' : 'Настройки' }}
  </div>
</template>

<script lang="ts" src="./MobileHeader.ts"></script>

<style lang="stylus" src="./mobile-header.styl" scoped></style>
