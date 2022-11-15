import vue from "vue";
import vuex from "vuex";
vue.use (vuex);
export const store = new vuex.Store({
    state:{
        numero:0,
        nombre:"breyner serna"
    }
})