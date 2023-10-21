const attack = [
  {
    name: 'Attack',
    description: 'Kết thúc lượt của bạn và buộc người chơi kế tiếp phải bốc thêm 2 lượt nữa',
    code: 'ATTACK',
    type: 'ATTACK',
    method: 'attack',
    limitted: 6,
    logo: null,
    image: null
  },
  {
    name: 'Targeted Attack',
    description: 'Kết thúc lượt của bạn và chọn một người chơi tiếp theo phải bốc 2 lá bài',
    code: 'TARGETED-ATTACK',
    type: 'ATTACK',
    method: 'targeted-attack',
    limitted: 3,
    logo: null,
    image: null
  },
  {
    name: 'Slap',
    description: 'Kết thúc lượt của bạn và ép người chơi kế tiếp phải bốc tất cả những lượt còn lại của bạn và thêm một lượt nữa',
    code: 'SLAP-SINGLE',
    type: 'ATTACK',
    method: 'slap',
    times: 1,
    limitted: 4,
    logo: null,
    image: null
  },
  {
    name: 'Slap',
    description: 'Kết thúc lượt của bạn và ép người chơi kế tiếp phải bốc tất cả những lượt còn lại của bạn và thêm hai lượt nữa',
    code: 'SLAP-DOUBLE',
    type: 'ATTACK',
    method: 'slap',
    times: 2,
    limitted: 2,
    logo: null,
    image: null
  },
  {
    name: 'Slap',
    description: 'Kết thúc lượt của bạn và ép người chơi kế tiếp phải bốc tất cả những lượt còn lại của bạn và thêm ba lượt nữa',
    code: 'SLAP-TRIPPLE',
    type: 'ATTACK',
    method: 'slap',
    times: 3,
    limitted: 2,
    logo: null,
    image: null
  },
  {
    name: 'You Have Take That',
    description: 'Chọn một người chơi phải rút một lá bài. Khi họ rút xong thì kết thúc lượt của ban',
    code: 'YOU-HAVE-TAKE-THAT',
    type: 'ATTACK',
    method: 'you-have-take-that',
    limitted: 2,
    logo: null,
    image: null
  },
  {
    name: 'Last Resort',
    description: 'Kết thúc lượt của bạn và yêu cầu một người chơi khác bốc 2 lượt. Không bị huỷ bởi nope hay tấn công',
    code: 'LAST-RESORT',
    type: 'ATTACK',
    method: 'last-resort',
    limitted: 1,
    logo: null,
    image: null
  },
  {
    name: 'Annoy',
    description: 'Chọn hai lá bất kỳ của người khác để vô hiệu hoá lá đó trong 1 lượt chơi. Kể cả lá gỡ bom',
    code: 'ANNOY',
    type: 'ATTACK',
    method: 'annoy',
    limitted: 3,
    logo: null,
    image: null
  },
]

export default attack;