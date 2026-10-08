function identityOne(val:number | boolean): number | boolean {
  return val
}

function identityTwo (val: any): any {
  return `${val}`
}

function identityThree<Type>(val: Type): Type {
  return val
}

console.log(typeof identityThree(true))