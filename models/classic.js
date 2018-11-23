import HTTP from '../utils/http'

class ClassicModel extends HTTP {

  // 获取最后一期
  getLastest (cb) {
    this.get({
      url: '/classic/latest'
    }).then(res => {
      cb(res)
    })
  }

}

export default ClassicModel
