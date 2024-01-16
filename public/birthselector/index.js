const year = document.getElementById('year')
const month = document.getElementById('month')
const date = document.getElementById('date')
const form = document.getElementById('form')

year.innerHTML += getOptions(1950, 2024)
month.innerHTML += getOptions(1, 12)

function getOptions(min, max) {
  let html = ``
  for (let i = min; i < max + 1; i++) {
    html += `<option value=${i}>${i}</option>`
  }
  return html
}

form.addEventListener('change', function () {
  if (year.value !== '0' && month.value !== '0') {
    date.disabled = false
  } else {
    date.disabled = true
  }
  let dateLength = new Date(year.value, month.value, 0).getDate()
  date.innerHTML =
    `<option value="0">請選擇</option>` + getOptions(1, dateLength)
})
