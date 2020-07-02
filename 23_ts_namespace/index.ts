namespace Util {
    export function isEmpty(d: any): boolean {
        return !d;
    }
    console.log(isEmpty(''));
    console.log(isEmpty('text'));
    
    
    export function isUndefined(d: any): boolean {
        return typeof d === 'undefined';
    }
    
    console.log(isUndefined(23));
    console.log(isUndefined(undefined));
    console.log(isUndefined(null));
    
    export const PI = Math.PI;
    export const EXP = Math.E;
}

const EXP = 'text Math.E';
console.log(Util.isEmpty(''));
console.log(Util.isUndefined('text'));
console.log(Util.PI);
console.log(EXP);
console.log(Util.EXP);