function greet(person: string, date: Date) {
  document.write(`Hello ${person}, today is ${date.toDateString()}!`)
}
greet("Viktor", new Date())