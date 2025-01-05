Page({
  data: {
    seats: [
      { id: 1, number: 'A1', status: '空闲' },
      { id: 2, number: 'A2', status: '已预订' },
      // 添加更多座位数据
    ]
  },
  reserveSeat(e) {
    const seatId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/reservation/reservation?id=${seatId}`
    });
  }
});
