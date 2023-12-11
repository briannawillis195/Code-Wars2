//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.


function whatCentury(year) {
  let century = Math.floor((year -1) / 100) + 1
  let suffix = "th"

  if (century % 10 === 1 && century % 100 !== 11) {
    suffix = "st"
  } else if (century % 10 === 2 && century % 100 !== 12) {
    suffix = "nd"
  } else if (century % 10 === 3 && century % 100 !== 13) {
    suffix = "rd"
  }

  return `${century}${suffix}`
}