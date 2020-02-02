import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import DisplayType from '@/models/DisplayType';


@Component
export default class ImageView extends Vue {

    @Prop()
    public displayType: DisplayType;

    @Prop()
    public image: File;

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
            image.src = URL.createObjectURL(this.image);
        }
    }

    public drawImageOnCanvas(image: HTMLImageElement) {
        const imageRatio = image.naturalWidth / image.naturalHeight;
        if (this.displayType === DisplayType.NATURAL) {
            this.canvasWidth = image.naturalWidth;
            this.canvasHeight = image.naturalHeight;
        }
        if (this.displayType === DisplayType.FIT_VERTICALLY) {
            this.canvasHeight = this.$refs.imageContainer.clientHeight;
            this.canvasWidth = this.canvasHeight * imageRatio;
        }
        if (this.displayType === DisplayType.FIT_HORIZONTALLY) {
            this.canvasWidth = this.$refs.imageContainer.clientWidth;
            this.canvasHeight = this.canvasWidth * imageRatio;
        }
        if (this.displayType === DisplayType.FULL) {
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

    @Watch('displayType')
    public onImagesDisplayTypeChange() {
        this.loadImage();
    }

}
