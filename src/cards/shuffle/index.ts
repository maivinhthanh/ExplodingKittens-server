const shuffle = [
  {
    name: 'Shuffle',
    description: 'Xào trộn bộ bài thật kỹ nhé',
    code: 'SHUFFLE',
    type: 'SHUFFLE',
    method: 'shuffle',
    limitted: 5,
    logo: null,
    image: null
  },
  {
    name: 'Anti Shuffle Next',
    description: 'Tìm tất cả lá bài mèo nổ còn lại và đặt chúng lên đầu bộ bài. Người chơi tiếp theo sẽ không được dùng lá xào bài',
    code: 'ANTI-SHUFFLE-NEXT',
    type: 'SHUFFLE',
    method: 'anti-shuffle-next',
    limitted: 3,
    logo: null,
    image: null
  },
  {
    name: 'Anti Shuffle',
    description: 'Vô hiệu hoá hành động xào bài của người chơi khác. Có thế đánh lá này bất kyd lúc nào',
    code: 'ANTI-SHUFFLE',
    type: 'SHUFFLE',
    method: 'anti-shuffle',
    limitted: 3,
    logo: null,
    image: null
  },
  {
    name: 'Search',
    description: 'Lén nhìn năm lá bài trên cùng, chọn một lá rồi bỏ các lá còn lại vào chồng bài rồi xào lại bài',
    code: 'Search',
    type: 'SHUFFLE',
    method: 'search',
    limitted: 3,
    logo: null,
    image: null
  },
]

export default shuffle;