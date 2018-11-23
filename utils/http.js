import { BASE_DOMAIN, APPKEY } from '../config'

class HTTP {
  get(params) {
    return this._request(params, 'GET')
  }

  post(params) {
    return this._request(params, 'POST')
  }

  put() {
    return this._request(params, 'PUT')
  }

  // 初始化参数
  _params_fac(params, method) {
    return {
      url: `${BASE_DOMAIN}${params.url}`,
      data: params.data,
      header: {
        'content-type': 'application/json',
        appkey: APPKEY
      },
      method: method
    }
  }

  // 错误消息
  _show_error(msg) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2500
    })
  }

  // 请求
  _request(params, method) {
    params = this._params_fac(params)

    return new Promise((resolve, reject) => {
      wx.request({
        ...params,
        method,
        success: res => {
          const code = res.statusCode.toString()

          if (code.startsWith('2')) {
            resolve(res.data)
          } else {
            this._show_error(res.data.msg || res.errMsg)
          }
        },
        fail: err => {
          console.log(err)
          this._show_error(err.errMsg)
          reject(null)
        },
        complete: () => {}
      })
    })
  }
}

export default HTTP
