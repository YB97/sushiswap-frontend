let start = 0
const animChickens = (result, i) => () => {
  if (Date.now() - start < 1200) {
    requestAnimationFrame(animChickens(result, i))
    return
  }
  if (i > 7) {
    return
  }
  if (i - 1 >= 0) {
    result[i - 1].style.opacity = '0'
  }
  result[i].style.opacity = '1'
  i++
  start = Date.now()
  window.requestAnimationFrame(animChickens(result, i))
}

export default animChickens
