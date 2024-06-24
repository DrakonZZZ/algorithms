const myImages = {
  data: ['Image1.jpg', 'Image2.jpg', 'Image4.jpg', 'Image4.jpg'],
  [Symbol.iterator]: function () {
    let index = 0
    const data = this.data

    return {
      next: function () {
        return {
          value: data[index++],
          done: index > data.length,
        }
      },
    }
  },
}

for (let item of myIterable) {
  console.log(item)
}
