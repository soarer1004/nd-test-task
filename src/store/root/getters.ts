import { GetterTree } from 'vuex';

import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';
import RootState from '@/store/root/state';


export const APP_STATE = 'getAppState';

export const IMAGES_DISPLAY_TYPE = 'getImagesDisplayType';

export const IMAGES_LIST = 'getImagesList';

export function getAppState(state: RootState): AppState {
    return state.appState;
}

export function getImagesDisplayType(state: RootState): DisplayType {
    return state.imagesDisplayType;
}

export function getImagesList(state: RootState): File[] {
    return state.imagesList;
}

export default {
    getAppState,
    getImagesDisplayType,
    getImagesList,
} as GetterTree<RootState, any>;
