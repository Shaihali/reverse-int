module.exports = function reverse (n) {
  return String(n).split('').filter((f) => {return f !== '-'}).reverse().join('')
}
