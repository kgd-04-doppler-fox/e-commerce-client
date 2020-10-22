function statusCart (status) {
  if (status === true) {
    return 'PAID'
  } else {
    return 'UNPAID'
  }
}

module.exports = statusCart
