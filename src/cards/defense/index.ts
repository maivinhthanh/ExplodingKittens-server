const defense = [
  {
    name: 'Skip',
    description: 'Kết thúc lượt của bạn mà không cần phải bốc bài',
    code: 'SKIP',
    type: 'DEFENSE',
    method: 'skip',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Super Skip',
    description: 'Kết thúc tất cả lượt của bạn mà không cần phải bốc bài',
    code: 'SUPER-SKIP',
    type: 'DEFENSE',
    method: 'super-skip',
    limitted: 3,
    logo: null,
    image: null
  },
  {
    name: 'Exchange',
    description: 'Kết thúc lượt của bạn và đổi chiều bốc các lá bài',
    code: 'EXCHANGE',
    type: 'DEFENSE',
    method: 'exchange',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Peek',
    description: 'Chọn một người chơi và yêu cầu cho bạn xem tất cả bài của họ',
    code: 'PEEK',
    type: 'DEFENSE',
    method: 'peek',
    limitted: 4,
    logo: null,
    image: null
  },
  {
    name: 'Sneak Peek',
    description: 'Chọn một người chơi và yêu cầu cho bạn xem ba lá bài ngẫu nhiên của họ',
    code: 'SNEAK-PEEK',
    type: 'DEFENSE',
    method: 'sneak-peek',
    limitted: 4,
    logo: null,
    image: null
  },
  {
    name: 'Copy',
    description: 'Sao chép lá bài cuối cùng mà người chơi gần nhất đã đánh',
    code: 'COPY',
    type: 'DEFENSE',
    method: 'copy',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Discard',
    description: 'Chọn một người chơi và huỷ hai lá ngẫu nhiên của người đó',
    code: 'DISCARD',
    type: 'DEFENSE',
    method: 'discard',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Mark',
    description: 'Chọn một người chơi và bốc một lá bất kỳ. Họ phải lật ngửa lá đó lên và để vậy cho đến khi đánh lá đó ra hoặc bị cướp đi',
    code: 'MARK',
    type: 'DEFENSE',
    method: 'mark',
    limitted: 5,
    logo: null,
    image: null
  },
]

export default defense;