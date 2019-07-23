import {queryBanner} from '../service/api';

export default {
  namespace: 'home',
  state: {
    banner:{}
  },
  effects: {
    * banner(_, { call, put }) {
      // const { banner } = yield select(state => state.home);
      const { code, banners } = yield call(queryBanner);
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            banner: banners,
          },
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
