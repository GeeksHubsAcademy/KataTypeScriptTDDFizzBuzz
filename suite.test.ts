import { FizzBuzz } from "./fizzBuzz";

describe('FizzBuzz Testing', ()=>{
    test('First  Test', function () {
        var expected =  true;
        var result = false;
        expect(result).toBe(expected);
    })

    test (' it Should Return Fizz If Divisible By Three',()=>{
       
        //Arrange
        let _fizzBuzz = new FizzBuzz();
        let value= 3;

        //Act
        var result  = _fizzBuzz.isFizz(value);
        
        //Assertion
        expect(result).toBeTruthy;
    
        })
});
