import { parose} from "./fugveny.js";

console.log(parose(4));

/*tesztelési esetek*/
/*1.teszteset szam=0 */
console.log(`1.tesztest: szam=0 várt eredmény:true`);
console.log(`1.tesztest: szam=0 kapott eredmény:${parose(0)}`);
console.log(` `);
/*2.teszetet szam=4 */ /*equivalencia osztály azok értékek halmaza, amely azonos tesut esetett jelntek, 
mert várhatóan a fügvényen ugyan ugy fog viselkedni az összes elemére.*/
console.log(`2.tesztest: szam=4 várt eredmény:true`);
console.log(`2.tesztest: szam=4 kapott eredmény:${parose(4)}`);
console.log(` `);
/*3. teszteset szam=5 */
console.log(`3.tesztest: szam=5 várt eredmény:false`);
console.log(`3.tesztest: szam=5 kapott eredmény:${parose(5)}`);
console.log(` `);
/*4. teszteset szam=-4 */
console.log(`4.tesztest: szam=-4 várt eredmény:true`);
console.log(`4.tesztest: szam=*4 kapott eredmény:${parose(-4)}`);
console.log(` `);
/*5.teszteset szam=-5*/
console.log(`5.tesztest: szam=-5 várt eredmény:false`);
console.log(`5.tesztest: szam=-5 kapott eredmény:${parose(-5)}`);
console.log(` `);
/*6. teszteset szam=2.5 vagy pi -->1/3*/
console.log(`6.tesztest: szam=2,5 várt eredmény:true`);
console.log(`6.tesztest: szam=2,5 kapott eredmény:${parose(2,5)}`);
console.log(` `);
/*7.a. teszetset szam=4000000000000000 */
console.log(`7.a.tesztest: szam=4000000000000000 várt eredmény:true`);
console.log(`7.a.tesztest: szam=4000000000000000 kapott eredmény:${parose(4000000000000000)}`);
console.log(` `);

/*7.b. teszetset szam=4000000000000001 */
console.log(`7.b.tesztest: szam=4000000000000000 várt eredmény:false`);
console.log(`7.b.tesztest: szam=4000000000000000 kapott eredmény:${parose(4000000000000000)}`);
console.log(` `);

/*8. teszteset szam= -4000000000000000 */
console.log(`8.tesztest: szam=-4000000000000000 várt eredmény:true`);
console.log(`8.tesztest: szam=-4000000000000000 kapott eredmény:${parose(-4000000000000000)}`);
console.log(` `);

/*9. teszetset szam="valami" */
console.log(`7.tesztest: szam=4000000000000000 várt eredmény:true`);
console.log(`7.tesztest: szam=4000000000000000 kapott eredmény:${parose(4000000000000000)}`);
console.log(` `);