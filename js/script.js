// console.log('VUE OK', Vue);
// console.log('AXIO OK', axios);

// https://flynn.boolean.careers/exercises/api/random/mail
// Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        mails: [],
    },
    methods: {
        getRandomMails() {
            for (let i = 0; i < 1; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                    console.log(res.data);
                })
            }
        }
    },
});