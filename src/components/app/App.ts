import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import Settings from '@/components/settings/Settings.vue';


@Component({
    components: {
        Settings,
    },
})
export default class App extends Vue {

}
