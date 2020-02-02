import { MutationTree } from 'vuex';

import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';
import RootState from '@/store/root/state';


export const SET_APP_STATE = 'setAppState';

export const SET_IMAGES_DISPLAY_TYPE = 'setImagesDisplayType';

export const SET_IMAGES_LIST = 'setImagesList';

export function setAppState(state: RootState, appState: AppState) {
    state.appState = appState;
}

export function setImagesDisplayType(state: RootState, type: DisplayType) {
    state.imagesDisplayType = type;
}

export function setImagesList(state: RootState, images: File[]) {
    state.imagesList = images;
}

export default {
    setAppState,
    setImagesDisplayType,
    setImagesList,
} as MutationTree<RootState>;
