export class FizzBuzz{
 
    static FIZZ_FACTOR = 3;
    static BUZZ_FACTOR = 5;
    
    public  static isFizz(value:number):boolean {
        return (value % FizzBuzz.FIZZ_FACTOR === 0) ? true: false;
    };

    public static isBuzz(value:number):boolean {
        return (value % FizzBuzz.BUZZ_FACTOR === 0 ) ? true: false;
    }

    public static isFizzBuzz(value:number):boolean{
        return this.isFizz(value) && this.isBuzz(value);
    }

}