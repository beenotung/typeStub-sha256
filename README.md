# TypeStub for sha256
source: https://github.com/beenotung/typestub-sha256

## TL;DL
It is hard to use typings with Ionic2 (Angular2), this repo try to fix it (or workaround with it).

## Example
```typescript
import * as sha256Impl from "sha256";
import {sha256 as sha256Type} from "../../../lib/typeStub-sha256/index";
let sha256: sha256Type = sha256Impl;

console.log('test',sha256('test'));
```
