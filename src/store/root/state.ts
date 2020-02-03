import AppState from '@/models/AppState';
import DisplayType from '@/models/DisplayType';


/**
 * Root Vuex state.
 */
export default class RootState {

    public imagesDisplayType: DisplayType = DisplayType.FULL;

    public appState: AppState = AppState.SETTINGS;

    public imagesList: File[] = [];

    public isMobileMenuVisible: boolean = false;

}
