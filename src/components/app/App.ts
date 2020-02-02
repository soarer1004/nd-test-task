import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import ImageView from '@/components/image-view/ImageView.vue';
import Settings from '@/components/settings/Settings.vue';
import AppState from '@/models/AppState';
import { APP_STATE } from '@/store/root/getters';


@Component({
    components: {
        Settings,
        ImageView,
    },
})
export default class App extends Vue {

    @Getter(APP_STATE)
    public appState: AppState;

    public get isImageViewVisible() {
        return this.appState === AppState.VIEW;
    }
}
