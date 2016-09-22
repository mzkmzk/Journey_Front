exports.add_temp_picture = function(qiniu_key){
    return {
        type: 'ADD_TEMP_PICTURE',
        'temp_picture': [qiniu_key]
    }
}