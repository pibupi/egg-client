import { getLists } from '@/services/search'
export default {
  namespace: 'search', // 这个是非必须项，如果有值就读取这个，没有就默认取文件名
  state: {
    text: 'dva',
    lists: []
  },
  // 同步
  reducers: {
    getLists(state, action) {
      return {
        ...state,
        lists: action.payload
      }
    }
  },
  //异步
  effects: {
    *getListsAsync({ payload }, { call, put }) {
      const res = yield call(getLists, payload)
      yield put({
        type: 'getLists',
        payload: res.lists
      })
    }
  }
}
