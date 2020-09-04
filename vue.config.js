module.exports = {
  publicPath: '/js-training-week8/dist/',
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      const [obj] = args
      obj.title = 'DoSlowly'
      obj.meta = {
        keywords: '陶器, 陶杯, 咖啡杯, 木柄, 杯墊, 文創, 手作',
        description: '手作療癒魔力，打造生活幸福感'
      }
      return args
    })
  }
}
