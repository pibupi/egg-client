export default {
  'post /api/order/lists': (req, res) => {
    let data = []
    if (req.body.pageNum < 4) {
      data = [
        {
          id: 1,
          img: 'http://img3.mukewang.com/sizmg/5d1032ab08719e0906',
          title: '东城民宿',
          info: '东城区交通',
          price: '100'
        }
      ]
    } else {
      data = []
    }
    res.json({
      status: 200,
      data
    })
  }
}
