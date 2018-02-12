import * as sha256 from "sha256";

console.log('start');
const hash = sha256('123');
console.log('hash', hash);
if (hash !== 'a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3') {
    throw new Error('wrong hash');
}
console.log('correct hash');