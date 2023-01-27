$(function () {
  var btns = $('.category li')
  // console.log(btns)
  var item = $('.gallery li')
  // console.log(item)

  btns.on('click', function (e) {
    // console.log(e)
    // console.log(e.currentTarget.dataset.id)
    var category = e.currentTarget.dataset.id

    if (category == 'all') {
      item.show()
    } else {
      item.hide().filter(`[data-item = ${category}]`).show()
      // item.hide().filter(`[data-item = ${category}]`).fadeIn()
    }
  })
})
