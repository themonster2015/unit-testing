
const Calculator = require("./exercise3")

describe('calculator class', () => {
    let calculator = new Calculator()
        test('should sum 2 numers correctly', () => {
            expect(()=>calculator.add(1,2).toBe(3))
        });
        test('should substract 2 numers correctly', () => {
            expect(()=>calculator.substract(1,2).toBe(-1))
        });
    
        test('should multiply 2 numers correctly', () => {
            expect(()=>calculator.multiply(2,2).toBe(4))
        });

        test('should divide 2 numers correctly', () => {
            expect(()=>calculator.divide(4,2).toBe(2))
        });
        test('should not divide by 0', () => {
            expect(()=>calculator.divide(4,0).toThrow(Error))
        });
   
    


   
    
}
)


