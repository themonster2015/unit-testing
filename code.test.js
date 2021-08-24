const  exercise1  = require("./code") ;
const exercise2 = require("./reverseString")

test('should return the length of any string', () => {
    expect(exercise1("haha")).toBe(4)
})


test('should throw an error when string is too short or too long', () => {
    expect(() => exercise1("")).toThrow("string too short or too long")
})

test('should return the reverse of any string', () => {
    expect(exercise2("Yen")).toBe("neY")
})
