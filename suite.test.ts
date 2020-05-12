import { FizzBuzz } from "./fizzBuzz";

describe('FizzBuzz Testing', function (){
    /*test('First  Test', function () {
        var expected =  true;
        var result = false;
        expect(result).toBe(expected);
    })*/

    test (' it Should Return Fizz If equals to Three',function (){
       
        //Arrange
        let _fizzBuzz = new FizzBuzz();
        const value= 3;

        //Act
        let result  = _fizzBuzz.isFizz(value);
        
        //Assertion
        expect(result).toBeTruthy();
    
        })

    test (' it Should Return Fizz If Divisible to Three',function(){
    
        //Arrange
        let _fizzBuzz = new FizzBuzz();
        const value= 6;

        //Act
        let result1  = _fizzBuzz.isFizz(value);
        
        //Assertion
        expect(result1).toBeTruthy();
    
        })

        test (' it Should Return Buzz If Divisible to Five',function(){
    
            //Arrange
            let _fizzBuzz = new FizzBuzz();
            const value= 5;
    
            //Act
            let result  = _fizzBuzz.isBuzz(value);
            
            //Assertion
            expect(result).toBeTruthy();
        
            })
   
});
