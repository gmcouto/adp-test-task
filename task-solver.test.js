const solver = require('./task-solver')
test('Can solve addition problems', () => {
    const operation = 'addition'
    const left = -5
    const right = 10
    const result = 5
    expect(solver[operation](left,right)).toBe(result)
});