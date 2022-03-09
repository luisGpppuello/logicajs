/* caso 1: los cuatro atletas.
De cuatro corredores de atletismo se sabe que c a llegado imediatamente detras de b, y d a llegado en medio de a y c, podria calcular usted el orden de llegada.

B
C
D
A
=============================*/

var a = {
    A:0,
    B:0,
    C:0,
    D:0,
    resultado: function(){
        if (a.C > a.B &&
            a.D > a.B &&
            a.D > a.C &&
            a.D < a.A){
                
                return true;

            }

        return false;

    },
    intervalo: setInterval(function(){

        a.A = Math.ceil(Math.random()*4)
        a.B = Math.ceil(Math.random()*4)
        a.C = Math.ceil(Math.random()*4)
        a.D = Math.ceil(Math.random()*4)

        if (a.resultado()){
            clearInterval(a.intervalo);
            console.log("alerta A", a.A)
            console.log("alerta B", a.B)
            console.log("alerta C", a.C)
            console.log("alerta D", a.D)
        }
    },10)
}