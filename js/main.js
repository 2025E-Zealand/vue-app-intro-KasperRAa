const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            navn: 'David',
            efternavn: 'Smith',
            vis_navn: false
        }
    },
    methods: {
        myMethod(){

        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
