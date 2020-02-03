import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import DisplayType from '@/models/DisplayType';
import { IMAGES_DISPLAY_TYPE, IMAGES_LIST } from '@/store/root/getters';

import ImageView from '@/components/image-view/ImageView.vue';


@Component({
    components: {
        ImageView,
    },
})
export default class ImagesSlider extends Vue {

    @Getter(IMAGES_LIST)
    public imagesList: File[];

    @Getter(IMAGES_DISPLAY_TYPE)
    public imagesDisplayType: DisplayType;

    public activeImage: File | null = null;

    public transitionName: 'slide-right' | 'slide-left' = 'slide-right';

    public created() {
        this.activeImage = this.imagesList[0];
    }

    public get currentImageIndex() {
        return this.imagesList.findIndex(
            ({ name }) => name === this.activeImage!.name,
        );
    }

    public showNextImage() {
        if (!this.activeImage || this.imagesList.length <= 1) {
            return;
        }
        this.transitionName = 'slide-right';
        let nextImage = this.imagesList[this.currentImageIndex + 1];
        if (!nextImage) {
            nextImage = this.imagesList[0];
        }
        this.activeImage = nextImage;
    }

    public showPreviousImage() {
        if (!this.activeImage || this.imagesList.length <= 1) {
            return;
        }
        this.transitionName = 'slide-left';
        let previousImage = this.imagesList[this.currentImageIndex - 1];
        if (!previousImage) {
            previousImage = this.imagesList[this.imagesList.length - 1];
        }
        this.activeImage = previousImage;
    }

}
