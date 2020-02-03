import { GetterTree } from 'vuex';

import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';
import RootState from '@/store/root/state';


export const APP_STATE = 'getAppState';

export const IMAGES_DISPLAY_TYPE = 'getImagesDisplayType';

export const IMAGES_LIST = 'getImagesList';

export const IS_MOBILE_MENU_VISIBLE = 'getIsMobileMenuVisible';

export function getAppState(state: RootState): AppState {
    return state.appState;
}

export function getImagesDisplayType(state: RootState): DisplayType {
    return state.imagesDisplayType;
}

export function getImagesList(state: RootState): File[] {
    return state.imagesList;
}

export function getIsMobileMenuVisible(state: RootState): boolean {
    return state.isMobileMenuVisible;
}

export default {
    getAppState,
    getImagesDisplayType,
    getImagesList,
    getIsMobileMenuVisible,
} as GetterTree<RootState, any>;
