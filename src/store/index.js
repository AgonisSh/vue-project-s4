import Vue from 'vue'
import Vuex from 'vuex'
import {viruses} from '@/model'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collec: viruses,
        samples: [],
        parts: [],
        basket: []
    },
    mutations: {
        addPart(state, part) {
            state.parts.push(part);
        },
        pushVirusCollec(state, virus) {
            state.collec.push(virus);
        },
        pushVirusBasket(state, virus) {
            state.basket.push(virus);
        },
        removePart(state, part) {
            state.parts.splice(part, 1)
        },
        removeSample(state, virus) {
            state.samples.splice(virus, 1);
        },
        transferBasketToSample(state) {
            for (let i = 0; i < state.basket.length; i++) {
                state.samples.push(state.basket[i]);
            }
        }
    },
    actions: {},
    modules: {}
});