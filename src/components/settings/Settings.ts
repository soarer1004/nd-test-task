import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';
import { APP_STATE, IMAGES_DISPLAY_TYPE, IMAGES_LIST, IS_MOBILE_MENU_VISIBLE } from '@/store/root/getters';
import { SET_APP_STATE, SET_IMAGES_DISPLAY_TYPE, SET_IMAGES_LIST, SWITCH_MOBILE_MENU_VISIBILITY } from '@/store/root/mutations';


@Component
export default class Settings extends Vue {

    @Getter(IMAGES_DISPLAY_TYPE)
    public imagesDisplayType: DisplayType;

    @Getter(IMAGES_LIST)
    public imagesList: File[];

    @Getter(APP_STATE)
    public appState: AppState;

    @Getter(IS_MOBILE_MENU_VISIBLE)
    public isMobileMenuVisible: boolean;

    @Mutation(SET_IMAGES_DISPLAY_TYPE)
    public setImagesDisplayType: (type: DisplayType) => void;

    @Mutation(SET_APP_STATE)
    public setAppState: (state: AppState) => void;

    @Mutation(SET_IMAGES_LIST)
    public setImagesList: (images: File[]) => void;

    @Mutation(SWITCH_MOBILE_MENU_VISIBILITY)
    public switchMobileMenuVisibility: (isVisible?: boolean) => void;

    public displayType = DisplayType;

    public get isViewState(): boolean {
        return (this.appState === AppState.VIEW);
    }

    public get selectedDisplayType(): DisplayType {
        return this.imagesDisplayType;
    }

    public set selectedDisplayType(type: DisplayType) {
        this.setImagesDisplayType(type);
    }

    public handleFilesChange(event: any) {
        if (!event || !event.target || !event.target.files) {
            return;
        }
        this.setImagesList([...event.target.files].filter((file: File) => {
            return file.type && file.type.match(/image\/.*/);
        }));
    }

    public toViewState() {
        if (this.imagesList.length === 0) {
            return;
        }
        this.switchMobileMenuVisibility(false);
        this.setAppState(AppState.VIEW);
    }

    public switchState() {
        if (this.isViewState) {
            this.setAppState(AppState.SETTINGS);
        } else {
            this.toViewState();
        }
    }

}
