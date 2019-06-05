
const Mock = require('mockjs')

// 正则匹配接口后面的参数
// Mock.mock(RegExp('url' + '.*'), 'get', require('./json/userInfo'))

//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user/userInfo', 'get', require('./json/userInfo'))
