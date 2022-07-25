module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init',
       'build', // 主要目的是修改项目构建系统
       'ci', // 持续集成修改
       'chore', // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
       'docs', // 文档修改
       'feat', // 新特性、新功能
       'fix', // 修改bug
       'perf', // 优化相关，比如提升性能、体验
       'refactor', // 代码重构
       'revert', // 回滚到上一个版本
       'style', // 代码格式修改, 注意不是 css 修改
       'test' // 测试用例修改
      ],
    ],
  },
};
