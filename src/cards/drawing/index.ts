const drawing = [
  {
    name: 'Favor',
    description: 'Buộc người chơi khác phải đưa cho bạn một lá bài trên tay của họ. Họ được chọn lá nào sẽ cho',
    code: 'FAVOR',
    type: 'DRAWING',
    method: 'favor',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Steal A Card',
    description: 'Đánh lá này xuống để cướp một lá ngẫu nhiên của người chơi khác',
    code: 'STEAL-A-CARD',
    type: 'DRAWING',
    method: 'steal-a-card',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Self Slap',
    description: 'Tự rút một lá bài',
    code: 'SELF-SLAP-DOUPLE',
    type: 'DRAWING',
    method: 'seft-slap',
    limitted: 5,
    times: 2,
    logo: null,
    image: null
  },
  {
    name: 'Self Slap',
    description: 'Tự rút ba lá bài',
    code: 'SELF-SLAP-TRIPLE',
    type: 'DRAWING',
    method: 'seft-slap',
    limitted: 5,
    times: 3,
    logo: null,
    image: null
  },
  {
    name: 'Draw From Anywhere',
    description: 'Kết thúc lượt của bạn bằng cách rút một lá bài ở bất cứ vị trí nào của bộ bài',
    code: 'DRAW-FROM-ANYWHERE',
    type: 'DRAWING',
    method: 'draw-from-anywhere',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Dumpster Dive',
    description: 'Xào chồng bài huỷ lên rồi bịt mắt bốc một lá kết thúc lượt của bạn',
    code: 'DUMPSTER-DIVE',
    type: 'DRAWING',
    method: 'dumpster-dive',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Return',
    description: 'Đánh lá này khi bạn bị cướp. Bạn có thể cướp lại hai lá',
    code: 'RETURN',
    type: 'DRAWING',
    method: 'return',
    limitted: 3,
    logo: null,
    image: null
  },
  {
    name: 'Swap Top To Bottom',
    description: 'Đổi vị trí lá đầu và lá cuối của chồng bài cho nhau',
    code: 'SWAP-TOP-TO-BOTTOM',
    type: 'DRAWING',
    method: 'swap-top-to-bottom',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Back From The Dead',
    description: 'Lấy hai lá bài từ người chơi vừa bị nổ',
    code: 'BACK-FROM-THE-DEAD',
    type: 'DRAWING',
    method: 'back-from-the-dead',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Draw From The Bottom',
    description: 'Kết thúc lượt của bạn bằng cách rút một lá ở dưới đáy của bộ bài',
    code: 'DRAW-FROM-THE-BOTTOM',
    type: 'DRAWING',
    method: 'draw-from-the-bottom',
    limitted: 5,
    logo: null,
    image: null
  }
]

export default drawing;