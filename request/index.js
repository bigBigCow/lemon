export const request = (parms) => {
  return new Promise((resolve, reject) => {
    wx.request({
      ...parms,
      success: (res) => {
        resolve(res);
      },
      fail:(res)=>{
        reject(res);
      }
    })
  })
}