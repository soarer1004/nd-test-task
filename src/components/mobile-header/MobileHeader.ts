import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';

import { IS_MOBILE_MENU_VISIBLE } from '@/store/root/getters';
import { SWITCH_MOBILE_MENU_VISIBILITY } from '@/store/root/mutations';


@Component
export default class MobileHeader extends Vue {

    @Getter(IS_MOBILE_MENU_VISIBLE)
    public isMobileMenuVisible: boolean;

    @Mutation(SWITCH_MOBILE_MENU_VISIBILITY)
    public switchMobileMenuVisibility: (isVisible?: boolean) => void;

}
