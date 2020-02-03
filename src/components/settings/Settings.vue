<template>
    <div class="settings-container"
         :class="{ 'hidden-mobile': isViewState && !isMobileMenuVisible,
          'mobile-menu': isViewState && isMobileMenuVisible }">
      <label for="select-files" class="files-selector settings-block">
        Выберите папку с изображениями
        <input id="select-files"
               type="file"
               accept="image/*"
               webkitdirectory directory multiple
               @change="handleFilesChange">
      </label>
      <div class="selected-images-counter settings-block">
        Выбрано изображений: {{ imagesList.length }}
      </div>
      <div class="display-options-container settings-block">
        <h3 class="block-header">
          Режим отображения
        </h3>
        <label for="display-full">
          <input id="display-full"
                 type="radio"
                 :value="displayType.FULL"
                 v-model="selectedDisplayType">
          Отобразить целиком
        </label>
        <label for="display-square">
          <input id="display-square"
                 type="radio"
                 :value="displayType.NATURAL"
                 v-model="selectedDisplayType">
          Отобразить в режиме 1:1
        </label>
        <label for="display-vertical">
          <input id="display-vertical"
                 type="radio"
                 :value="displayType.FIT_VERTICALLY"
                 v-model="selectedDisplayType">
          Вписать по вертикали
        </label>
        <label for="display-horizontal">
          <input id="display-horizontal"
                 type="radio"
                 :value="displayType.FIT_HORIZONTALLY"
                 v-model="selectedDisplayType">
          Вписать по горизонтали
        </label>
      </div>
        <button type="button"
                class="default-button settings-block"
                :disabled="(imagesList.length === 0) && !isViewState"
                @click="switchState">
          {{ isViewState ? 'Назад' : 'Просмотр' }}
        </button>
      </div>
</template>

<script lang="ts" src="./Settings.ts"></script>

<style lang="stylus" src="./settings.styl" scoped></style>
