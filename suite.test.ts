import { FizzBuzz } from "./fizzBuzz";

describe('FizzBuzz Testing', function (){
    /*test('First  Test', function () {
        var expected =  true;
        var result = false;
        expect(result).toBe(expected);
    })*/

    test (' it Should Return Fizz If equals to Three',function (){
       
        //Arrange
      
        const value= 3;

        //Act
        let result  = FizzBuzz.isFizz(value);
        
        //Assertion
        expect(result).toBeTruthy();
    
        })

    test (' it Should Return Fizz If Divisible to Three',function(){
    
        //Arrange
        const value= 6;

        //Act
        let result1  = FizzBuzz.isFizz(value);
        
        //Assertion
        expect(result1).toBeTruthy();
    
        })

        test (' it Should Return Buzz If Divisible to Five',function(){
    
            //Arrange
            const value= 5;
    
            //Act
            let result  = FizzBuzz.isBuzz(value);
            
            //Assertion
            expect(result).toBeTruthy();
        
            })


        test (' it Should Return FizzBuzz If Divisible to 3 and 5',function(){
    
            //Arrange
            
            const value= 15;
    
            //Act
            let result  = FizzBuzz.isFizzBuzz(value);
            
            //Assertion
            expect(result).toBeTruthy();
        
            })
   
});
