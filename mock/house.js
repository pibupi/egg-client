export default {
  'post /api/house/search': (req, res) => {
    let data
    if (req.body.pageNum < 4) {
      data = [
        {
          id: 1,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 2,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 3,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 4,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 5,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 6,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 7,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 8,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        },
        {
          id: 9,
          img: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          title: '西城民宿',
          info: '西城区山水怡情',
          price: 20
        }
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data
    })
  },
  'post /api/house/detail': (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        banner: [
          'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          'http://img1.mukewang.com/szimg/5dc9047a09bae31',
          'http://img3.mukewang.com/szimg/5dc9047a09bae31'
        ],
        info: {
          title: '西城民宿',
          msg: '老城区风景秀美',
          price: '220',
          publishTime: '1592548338888',
          startTime: '1592548338883',
          entTime: '15925483333883'
        }
      }
    })
  },
  'post /api/comments/lists': (req, res) => {
    let data
    if (req.body.pageNum < 4) {
      data = [
        {
          id: 1,
          avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          username: 'user',
          createTime: 1592548338883,
          info: '态度温和'
        },
        {
          id: 2,
          avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          username: 'user',
          createTime: 1592548338883,
          info: '态度温和'
        },
        {
          id: 3,
          avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          username: 'user',
          createTime: 1592548338883,
          info: '态度温和'
        },
        {
          id: 4,
          avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31',
          username: 'user',
          createTime: 1592548338883,
          info: '态度温和'
        }
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data
    })
  },
  'post /api/comments/add': (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    })
  }
}
