class Trojuhelnik{
    constructor(a,b,c){
      this.a = a
      this.b = b
      this.c = c


    }
    obvodTrojuhelniku(){    //o = a+b+c

     return this.a+this.b+this.c
 }



    phytagorasTheorem(a,b){   //c^2 = a^2 + b^2

     let triangle = a*a + b*b  
     return triangle
     }


}


const trojuhelnik = new Trojuhelnik()
console.log(trojuhelnik.phytagorasTheorem(5,7))
const trojuhelnik2 = new Trojuhelnik(3,4,9)
console.log(trojuhelnik2.obvodTrojuhelniku())
