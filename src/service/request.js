import Taro from '@tarojs/taro'
import qs from 'qs'
import {BASE_URL, HTTP_ERROR} from "./config.default";

export default {
  request(options, method) {
    const {url:{url}, data} = options;
    let contentType = "application/json";
    contentType = options.contentType || contentType;
    //基于Promise二次封装，方便使用
    return new Promise((resolve, reject) => {
      let params = {
        url: `${BASE_URL}${url}`,
        data: data,
        method: method || 'GET',
        header: {
          'content-type': contentType,
          'token': Taro.getStorageSync("token"),
        }
      };

      Taro.request(params).then((res) => {
        let {statusCode, data} = res;
        if (statusCode >= 200 && statusCode < 300) {
          return resolve(data);
        }/*  else {
          if (statusCode === 401) {
            Taro.setStorageSync("Authorization", "");
            let path = getCurrentPageUrl();
            if (path !== "pages/login/login") {
              Taro.navigateTo({
                url: "/pages/login/login"
              });
            }
          }  */
/*           else {
            throw new Error(HTTP_ERROR[statusCode]);
        } */
      }).catch(err => {
        reject('服务器正在维护中!');
        if (err.msg) throw new Error('服务器正在维护中!')
      })
    })
  },
  get(url, data) {
    const params = {url, data};
    return this.request(params)
  },
  post(url, data) {
    data = qs.stringify(data);
    const params = {url, data};
    return this.request(params, 'POST');
  },
  put(url, data) {
    const params = {url, data};
    return this.request(params, 'PUT')
  },
  delete(url, data) {
    const params = {url, data};
    return this.request(params, 'DELETE')
  }
}
