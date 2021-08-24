const { expect } = require("@jest/globals")

describe('it should capitalize a string', () => {
    test('should return the string capitalized', () => {
        expect(capitalize("yen")).toBe('Yen')
    })
    test('should correctly capitalize an uppercase input', () => {
        expect(capitalize("YEN")).toBe('Yen')
    })
})

const capitalize = (str) => {
    str = str.toLowerCase()
    return str.substr(0,1).toUpperCase().concat(str.substr(1))
}