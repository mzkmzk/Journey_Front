export default {
    getUrlParam: (url) => {
        var result = {},
            tmp = [];
        if ( url === '') return result

        var items = url.substr(1).split('&')
        if (items && items.length !==0) result = {}
        for (var i = items.length - 1; i >= 0; i--) {
            tmp = items[i].split('=')
            result[ tmp[0] ] = decodeURIComponent(tmp[1])
        }
        
        return result
    }
}