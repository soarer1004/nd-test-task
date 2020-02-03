import Hammer from 'hammerjs';
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
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

    public readonly $refs: {
        sliderContainer: HTMLElement;
    };

    @Getter(IMAGES_LIST)
    public imagesList: File[];

    @Getter(IMAGES_DISPLAY_TYPE)
    public imagesDisplayType: DisplayType;

    public activeImage: File | null = null;

    public transitionName: 'slide-right' | 'slide-left' = 'slide-right';

    public hammerManager: HammerManager | null = null;

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

    public created() {
        this.activeImage = this.imagesList[0];
    }

    public mounted() {
        this.hammerManager = new Hammer.Manager(this.$refs.sliderContainer, {
            recognizers: [
                [
                    Hammer.Swipe,
                    { direction: Hammer.DIRECTION_HORIZONTAL },
                ],
            ],
        });
        this.hammerManager.on('swipeleft', this.showNextImage);
        this.hammerManager.on('swiperight', this.showPreviousImage);
    }

    public beforeDestroy() {
        if (this.hammerManager) {
            this.hammerManager.off('swipeleft swiperight');
            this.hammerManager.destroy();
        }
    }

    @Watch('imagesList')
    public onImagesListChange() {
        if (this.imagesList.length === 0) {
            this.activeImage = null;
            return;
        }
        if (!this.activeImage || !this.imagesList.includes(this.activeImage)) {
            this.activeImage = this.imagesList[0];
        }
    }

}
