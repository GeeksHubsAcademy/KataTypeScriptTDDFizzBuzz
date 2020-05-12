import { IruleInterface} from './ruleInterface';

export class fizzRule implements IruleInterface
{
    static FIZZ_FACTOR = 3;

    public match(value:number):boolean{
         return 0 == value % fizzRule.FIZZ_FACTOR;
    }

    public getReplacement():string{
        return "Fizz";
    }


}