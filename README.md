# TypeStub for sha256
source: https://github.com/beenotung/typestub-sha256

## TL;DL
sha256, the npm package, is not typed, this package is to give type to that.
This repo try to fix it (or workaround with it).

## Example
```typescript
import * as sha256Impl from "sha256";
import {sha256 as sha256Type} from "../../../lib/typeStub-sha256/index";
let sha256: sha256Type = sha256Impl;

console.log('test',sha256('test'));
```

or import this package directly.

```javascript
var sha256 = require("typestub-sha256");
```
