import numberHelper from './number'

export default {
    install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$helper =  {
            numberHelper: numberHelper
        }
    }
}