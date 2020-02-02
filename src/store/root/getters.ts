import { GetterTree } from 'vuex';

import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';
import RootState from '@/store/root/state';


export const APP_STATE = 'getAppState';

export const IMAGES_DISPLAY_TYPE = 'getImagesDisplayType';

export function getAppState(state: RootState): AppState {
    return state.appState;
}

export function getImagesDisplayType(state: RootState): DisplayType {
    return state.imagesDisplayType;
}

export default {
    getAppState,
    getImagesDisplayType,
} as GetterTree<RootState, any>;
