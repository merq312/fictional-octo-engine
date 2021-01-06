const filterFunc = (str, hardFilter, softFilter) => {
  hardFilter.forEach((ea) => {
    const expr = new RegExp(ea, 'gi')
    const matchArr = str.match(expr)

    if (matchArr) {
      matchArr.forEach((ea) => {
        let fill = ''
        ea.split('').forEach(() => (fill += '*'))
        str = str.replace(ea, fill)
      })
    }
  })

  let filteredStr = ''
  softFilter.forEach((ea) => {
    filteredStr = ''
    const expr = new RegExp(`(^|\\b)${ea}($|\\b)`, 'gi')
    let matches = str.matchAll(expr)

    let index = 0
    let match = ''
    for (match of matches) {
      filteredStr += str.slice(index, match.index)

      let fill = ''
      ea.split('').forEach((ea) => (ea === ' ' ? (fill += ' ') : (fill += '*')))
      filteredStr += fill

      index = match.index + ea.length
    }
    filteredStr += str.slice(index, str.length)
    str = filteredStr
  })

  return filteredStr
}

export default filterFunc
