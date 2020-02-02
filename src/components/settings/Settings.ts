import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

import DisplayType from '@/models/DisplayType';
import { IMAGES_DISPLAY_TYPE } from '@/store/root/getters';
import { SET_IMAGES_DISPLAY_TYPE } from '@/store/root/mutations';


@Component
export default class Settings extends Vue {

    @Getter(IMAGES_DISPLAY_TYPE)
    public imagesDisplayType: DisplayType;

    @Mutation(SET_IMAGES_DISPLAY_TYPE)
    public setImagesDisplayType: (type: DisplayType) => void;

    public displayType = DisplayType;

    public get selectedDisplayType(): DisplayType {
        return this.imagesDisplayType;
    }

    public set selectedDisplayType(type: DisplayType) {
        this.setImagesDisplayType(type);
    }

    public handleFilesChange(event: any) {

    }

}
