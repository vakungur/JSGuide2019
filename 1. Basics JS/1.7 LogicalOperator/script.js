/* 
  &&  | true  | false
true  | true  | false
false | false | false

  ||  | true  | false
true  | true  | true
false | true  | false
 
    && (и) - true усли все значения true
    || (или) - true если хоть одно значение true
    ! (нет) - инвертирует true или false

*/

console.log(true && true)
console.log(true && false)

console.log(true || false)
console.log(false || false)

console.log(!false)
console.log(!true)

console.log((false && true) || (true || true) || !true)