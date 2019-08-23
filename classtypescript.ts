export default class Greetings
{
    public strProp:string;
    private numProp:number;
    protected safeProp:any="locker";
    anonProp:any;
}

export class SpecialGreetings extends Greetings
{
    constructor()
    {
        super();
    }
    public getSafeProp()
    {
        return this.safeProp;
    }

}

var objGreetings=new SpecialGreetings();
console.log(objGreetings.getSafeProp());