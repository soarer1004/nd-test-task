<template>
    <div class="settings-container">
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
          <input id="display-full" type="radio">
          Отобразить целиком
        </label>
        <label for="display-square">
          <input id="display-square" type="radio">
          Отобразить в режиме 1:1
        </label>
        <label for="display-vertical">
          <input id="display-vertical" type="radio">
          Вписать по вертикали
        </label>
        <label for="display-horizontal">
          <input id="display-horizontal" type="radio">
          Вписать по горизонтали
        </label>
      </div>
      <button type="button" class="default-button settings-block">
        Просмотр
      </button>
    </div>
</template>

<script lang="ts" src="./Settings.ts"></script>

<style lang="stylus" src="./settings.styl" scoped></style>
