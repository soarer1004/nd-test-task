import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import getters from '@/store/root/getters';
import mutations from '@/store/root/mutations';
import RootState from '@/store/root/state';


Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    mutations,
    plugins: [
        createPersistedState({
            paths: [
                'imagesDisplayType',
            ],
        }),
    ],
    state: new RootState(),
});
