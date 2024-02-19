class A{

   readonly num1:number;
    public static readonly country:string="India";



   constructor(){
       this.num1=45;
       
   }

    test():void{
       // this.num1=56; onyl incilise once  so not allowed
       //A.country="usa"; not allowed
        console.log("in A");
    }
    test1():string{
        return "in a";
    }

    test2():A{
        return null;
    }
}

class b extends A{
    test():string{
        return "in B";
    }

   /* test1():number{
        return " in B"  // not allowed
     }  */ // commnert buc error method remove error show code

     test2():A{
         return null; // covariant are allowed
     }
}

// id super class fucntion void the subclass overding function can return anything
//convariant are allowed