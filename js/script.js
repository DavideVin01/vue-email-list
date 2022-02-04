// console.log('VUE OK', Vue);
// console.log('AXIO OK', axios);

// https://flynn.boolean.careers/exercises/api/random/mail
// Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        mails: ['1', '2', '3'],
    },
    methods: {

    },
});