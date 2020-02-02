import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import AppState from '@/models/AppState';
import { APP_STATE } from '@/store/root/getters';

import ImagesSlider from '@/components/images-slider/ImagesSlider.vue';
import Settings from '@/components/settings/Settings.vue';


@Component({
    components: {
        Settings,
        ImagesSlider,
    },
})
export default class App extends Vue {

    @Getter(APP_STATE)
    public appState: AppState;

    public get isImageViewVisible() {
        return this.appState === AppState.VIEW;
    }
}
