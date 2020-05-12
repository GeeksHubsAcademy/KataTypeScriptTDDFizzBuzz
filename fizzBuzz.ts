export class FizzBuzz{

    public isFizz(value:number):boolean {
        return (value % 3 === 0) ? true: false;
    };

    public isBuzz(value:number):boolean {
        return (value % 5 ===0) ? true: false;
    }

}