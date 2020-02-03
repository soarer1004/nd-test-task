import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import { SWITCH_MOBILE_MENU_VISIBILITY } from '@/store/root/mutations';


@Component
export default class MobileHeader extends Vue {

    @Mutation(SWITCH_MOBILE_MENU_VISIBILITY)
    public switchMobileMenuVisibility: () => void;

}
