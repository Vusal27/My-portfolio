// Слайдер
import Vue from 'vue';
function sliderfunc() {
    const info = {
        template: "#slider-info",
        props: {
            work: Object
        }
    }
    const display = {
        template: "#slider-display",
        props: {
            work: Object
        }
    }
    const btns = {
        template: "#slider-btns"
    }

    new Vue({
        el: "#slider-component",
        components: {
            info, display, btns
        },
        data() {
            return {
                works: [],
                currentWork: {}
            }
        },
        created() {
            const data = require("../../styles/works.json");
            this.works = data;
            this.currentWork = data[]
        },
        template: "#slider-root"
    })
};
module.exports={ sliderfunc };