class Dollar {
  constructor(amount) {
    this.amount = amount
  }
  // 2. Define times method
  times(multiplier) {
    // 3. Implement times method
    return new Dollar(
      // 4. Improving the logic, use multiplier
      this.amount * multiplier
    )
  }
}

module.exports = Dollar
