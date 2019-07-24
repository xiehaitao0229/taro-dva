import { queryBanner } from '../service/api';

export default {
  namespace: 'home',
  state: {
    banner: {}
  },
  effects: {
    * banner(_, { call, put }) {
      // const { banner } = yield select(state => state.home);
      try {
        const response = yield call(queryBanner);
        yield put({
          type: 'save',
          payload: {
            banner: response,
          },
        });
      } catch (e) {
        throw new Error(e)
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
