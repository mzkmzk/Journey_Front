export default class Environment {
    constructor(){
        const href = window.location.href
        if (href.indexOf('test.journey.404mzk.com') !== -1){
            this.environment = 'test'
             this.sinaAppKey = '1911849944'
        }
        else {
            this.environment = 'production'
            this.sinaAppKey = '3068502260'
        }
        console.log(30685022601)


        

    }

}