export default {
  after: (field, [target]) => `${field} 须位于 ${target}之后`,
  alpha_dash: (field) => `${field} 需要包含字符、数字、破折号或下划线`,
  alpha_num: (field) => `${field} 只能包含字符或数字`,
  alpha: (field) => `${field} 只能包含字符`,
  before: (field, [target]) => `${field} 须位于 ${target}之前`,
  between: (field, [min, max]) => `${field} 须介于 ${min} 和 ${max} 之间`,
  confirmed: (field, [confirmedField]) => `${field} 和 ${confirmedField} 两次输入不一致`,
  date_between: (field, [min, max]) => `${field} 须在 ${min} 和 ${max} 之间`,
  date_format: (field, [format]) => `${field} 的格式为： ${format}`,
  decimal: (field, [decimals] = ['*']) => `${field} 须为数字且包含 ${decimals === '*' ? '' : decimals} 小数点`,
  digits: (field, [length]) => `${field} 须为数字并且为 ${length} 位`,
  dimensions: (field, [width, height]) => `${field} 宽度应为 ${width} 像素, 高度为 ${height} 像素`,
  email: (field) => `${field} 邮箱格式不正确`,
  ext: (field) => `${field} 文件格式不正确`,
  image: (field) => `${field} 图片格式不正确`,
  in: (field) => `${field} 数值不正确`,
  ip: (field) => `${field} ip地址格式不正确`,
  max: (field, [length]) => `${field} 长度不能多于 ${length} 个字符`,
  mimes: (field) => `${field} 文件类型不正确`,
  min: (field, [length]) => `${field} 长度至少需要 ${length} 个字符`,
  not_in: (field) => `${field} 数值不正确`,
  numeric: (field) => `${field} 只能包含数字`,
  regex: (field) => `${field} 格式不正确`,
  required: (field) => `${field} 需要填写`,
  size: (field, [size]) => `${field} 不能大于 ${size} KB.`,
  url: (field) => `${field} URL格式不正确`
}
