<template>
    <div class="settings-container"
         :class="{ 'hidden-mobile': (appState === appStates.VIEW) && !isMobileMenuVisible,
          'mobile-menu': (appState === appStates.VIEW) && isMobileMenuVisible }">
      <label for="select-files" class="files-selector settings-block">
        Выберите директорию
        <input id="select-files"
               type="file"
               accept="image/*"
               webkitdirectory directory multiple
               @change="handleFilesChange">
      </label>
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
      <div class="buttons-container settings-block">
        <button v-show="(appState === appStates.VIEW)"
                type="button"
                class="default-button"
                @click="() => setAppState(appStates.SETTINGS)">
          Назад
        </button>
        <button type="button"
                class="default-button"
                :disabled="(imagesList.length === 0)"
                @click="toViewState">
          Просмотр
        </button>
      </div>
    </div>
</template>

<script lang="ts" src="./Settings.ts"></script>

<style lang="stylus" src="./settings.styl" scoped></style>
