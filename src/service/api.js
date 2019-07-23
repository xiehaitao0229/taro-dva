import request from './request';

export const queryBanner = () => {
  return request.get({
    url: 'https://v2.jinrishici.com/token?client=mini-progrram-sdk/1.0',
  });

}

