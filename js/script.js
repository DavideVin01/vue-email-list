// console.log('VUE OK', Vue);
// console.log('AXIO OK', axios);

// https://flynn.boolean.careers/exercises/api/random/mail
// Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        mails: [],
        totalMails: 10,
    },
    methods: {
        getRandomMails(totalMails) {
            for (let i = 0; i < totalMails; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                    if (!this.mails.includes(res.data.response)) {
                        this.mails.push(res.data.response);
                    };
                });
            };
        },
        play() {
            this.getRandomMails(this.totalMails);
        },
    },
    mounted() {
        this.play();
    }
});