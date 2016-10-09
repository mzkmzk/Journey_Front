export default class Environment {
    constructor(){
        const href = window.location.href
        this.innerURL = 'inner.journey.404mzk.com'
        if (href.indexOf('test.journey.404mzk.com') !== -1){
            this.environment = 'test'
            this.sinaAppKey = '1911849944'
        }else {
            this.environment = 'production'
            this.sinaAppKey = '2854977325'
        }
    }

}