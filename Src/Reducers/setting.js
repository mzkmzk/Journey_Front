let setting = function(state = initial_state, action = null) {
    //产品失误: 没做好主要功能
    //
    switch (action.type) {//这里需要考虑应该把全部状态都放在index里,决策失误,偷看是个小功能,应该先把大功能做起来,浪费了不少时间,
        case 'save_setting':
            return Object.assign({}, state)
        default :
            return state
    }
}