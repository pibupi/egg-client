export default {
  'post /api/commons/ciry': (req, res) => {
    res.json({
      status: 200,
      data: [
        [
          { label: '杭州', value: '10001' },
          { label: '苏州', value: '10002' }
        ]
      ]
    })
  },
  'post /api/house/hot': (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        }
      ]
    })
  }
}
