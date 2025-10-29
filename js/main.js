const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            fornavn: 'David',
            efternavn: 'Smith',
            vis_navn: false,
            nytNavn: '',
            nyAlder: 0,
            navne: [
                { navn: 'Jack', alder: 12 },
                { navn: 'Jake', alder: 13 },
                { navn: 'John', alder: 14 },
                { navn: 'Jonkler', alder: 156 },
            ],
        }
    },
    methods: {
        myMethod(){

        },
        addName(){
            let newPerson = { navn:'', alder:0 }
            newPerson.navn = this.nytNavn;
            newPerson.alder = this.nyAlder;
            this.navne.push(newPerson);
            this.nytNavn = '';
            this.nyAlder = 0;
        },
        emptyNames(){
            this.navne = [];
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
