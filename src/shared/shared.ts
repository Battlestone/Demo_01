/**
 * 前后端统一数据格式
 * code :
 *    0 无错误
 *    1 无效参数
 *    2 业务错误
 *    3 认证错误
 *    5 服务器未知错误
 *    6 目标不存在
 * returnValue :
 *    code为 0 时有值, 保存后端传递的数据
 * errorReason :
 *    code不为 0 时有值, 保存错误信息
 */
export interface ResData {
  code: number,
  returnValue: any;
  errorReason: string
}
