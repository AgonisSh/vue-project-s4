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
            let idx = [];
            for (let i = 0; i < state.parts.length; i++) {
                if (state.parts[i].name === part.name && state.parts[i].code === part.code && state.parts[i].mortalite === part.mortalite) {
                    idx.push(i);
                }
            }
            idx.forEach(e => {
                state.parts.splice(e, 1);
            })
        },
        removeSample(state, virus) {
            let idx = [];
            for (let i = 0; i < state.samples.length; i++) {
                if (state.samples[i].name === virus.name && state.samples[i].code === virus.code && state.samples[i].mortalite === virus.mortalite) {
                    idx.push(i);
                }
            }
            idx.forEach(e => {
                state.samples.splice(e, 1);
            })
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