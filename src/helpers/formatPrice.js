function formatPrice (price) {
  const stringPrice = String(price)
  let formatedPrice = ''
  for (let i = 0; i < stringPrice.length; i++) {
    if (stringPrice.length < 3) {
      if (i === 0) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    } else if (stringPrice.length === 5) {
      if (i === 1) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    } else if (stringPrice.length === 6) {
      if (i === 2) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    } else if (stringPrice.length === 7) {
      if (i === 0 || i === 3) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    } else if (stringPrice.length === 8) {
      if (i === 1 || i === 4) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    } else if (stringPrice.length === 8) {
      if (i === 2 || i === 5) {
        formatedPrice += stringPrice[i] + '.'
      } else {
        formatedPrice += stringPrice[i]
      }
    }
  }
  return 'Rp. ' + formatedPrice
}

module.exports = formatPrice
