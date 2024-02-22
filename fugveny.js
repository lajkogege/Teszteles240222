export function parose(szam){
    let psE=false;
    /* Akkor fusson le, ha a szám érétke egész  szám */
    if(!Number.isNaN(szam)){  //Megvizsgálja hogy szám vagy szöveg e
        return "nem szám "
    }
    if (Number.isInteger(szam)){
        if(szam%2===0){
            psE=true
        }
    }
    return psE;
}