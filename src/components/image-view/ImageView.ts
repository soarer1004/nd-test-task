import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import DisplayType from '@/models/DisplayType';
import { IMAGES_DISPLAY_TYPE, IMAGES_LIST } from '@/store/root/getters';


@Component
export default class ImageView extends Vue {

    @Getter(IMAGES_LIST)
    public imagesList: File[];

    @Getter(IMAGES_DISPLAY_TYPE)
    public imagesDisplayType: DisplayType;

    public readonly $refs: {
        canvas: HTMLCanvasElement;
        imageContainer: HTMLElement;
    };

    public canvasContext: CanvasRenderingContext2D | null = null;

    public canvasWidth: number = 0;

    public canvasHeight: number = 0;

    public mounted() {
        this.canvasContext = this.$refs.canvas.getContext('2d');
        this.loadImage();
    }

    public loadImage() {
        if (this.canvasContext) {
            const image = new Image();
            image.onload = () => {
                this.drawImageOnCanvas(image);
            };
            image.src = URL.createObjectURL(this.imagesList[0]);
        }
    }

    public drawImageOnCanvas(image: HTMLImageElement) {
        const imageRatio = image.naturalWidth / image.naturalHeight;
        if (this.imagesDisplayType === DisplayType.NATURAL) {
            this.canvasWidth = image.naturalWidth;
            this.canvasHeight = image.naturalHeight;
        }
        if (this.imagesDisplayType === DisplayType.FIT_VERTICALLY) {
            this.canvasHeight = this.$refs.imageContainer.clientHeight;
            this.canvasWidth = this.canvasHeight * imageRatio;
        }
        if (this.imagesDisplayType === DisplayType.FIT_HORIZONTALLY) {
            this.canvasWidth = this.$refs.imageContainer.clientWidth;
            this.canvasHeight = this.canvasWidth * imageRatio;
        }
        if (this.imagesDisplayType === DisplayType.FULL) {
            // TODO improve
        }
        this.$refs.canvas.width = this.canvasWidth;
        this.$refs.canvas.height = this.canvasHeight;
        this.canvasContext!.drawImage(
            image,
            0,
            0,
            this.canvasWidth,
            this.canvasHeight,
        );
    }

    @Watch('imagesDisplayType')
    public onImagesDisplayTypeChange() {
        this.loadImage();
    }

}
