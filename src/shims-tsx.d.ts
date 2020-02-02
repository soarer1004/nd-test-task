// eslint-disable-next-line no-unused-vars
import Vue, { VNode } from 'vue';

declare global {
    namespace JSX {
        type Element = VNode;
        type ElementClass = Vue;
        interface IntrinsicElements {
            [elem: string]: any;
        }
    }
}
