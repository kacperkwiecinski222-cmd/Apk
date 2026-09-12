// Generates PESEL number based on birth date
export function generatePESEL(birthDate: string): string {
  const date = new Date(birthDate)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  // PESEL format: YYMMDDXXXSC
  // YY - last 2 digits of birth year
  // MM - month (with adjustments for century)
  // DD - day
  // XXX - serial number (we'll use random)
  // S - sex digit (even for female, odd for male)
  // C - control digit

  let yy = (year % 100).toString().padStart(2, '0')
  
  // Month encoding depends on century
  let mm: string
  if (year >= 1900 && year < 2000) {
    mm = month.toString().padStart(2, '0')
  } else if (year >= 2000) {
    mm = (month + 20).toString().padStart(2, '0')
  } else {
    mm = (month + 80).toString().padStart(2, '0')
  }

  const dd = day.toString().padStart(2, '0')
  const serial = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  const sexDigit = Math.floor(Math.random() * 2) === 0 ? '0' : '1'

  const peselBase = yy + mm + dd + serial + sexDigit

  // Calculate control digit
  const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3]
  let sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(peselBase[i]) * weights[i]
  }
  const controlDigit = (10 - (sum % 10)) % 10

  return peselBase + controlDigit
}

// Generates document number
export function generateDocumentNumber(): string {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomLetter1 = letters[Math.floor(Math.random() * letters.length)]
  const randomLetter2 = letters[Math.floor(Math.random() * letters.length)]
  const numbers = Math.floor(Math.random() * 1000000)
    .toString()
    .padStart(6, '0')
  return `${randomLetter1}${randomLetter2}${numbers}`
}

// Calculates document expiry date (10 years from issue date)
export function calculateValidity(issueDate: string): string {
  const date = new Date(issueDate)
  date.setFullYear(date.getFullYear() + 10)
  return date.toISOString().split('T')[0]
}
