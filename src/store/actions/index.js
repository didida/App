import 'whatwg-fetch'
import * as types from '../mutation-types'

/**
 * demo测试
 * @method getHomePic
 * @param  {Function}  commit     [Vuex解构出来的方法]
 * @param  {Boolean}   bl         [判断是否为true]
 * @return {Promise}              [返回的数据]
 */
export const getHomePic = ({ commit }, bl) => {
  commit(types.FETCH_PICTURE, bl)
}
