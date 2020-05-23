## vue-template-compiler-on-browser

### Outline

make `vue-template-compiler` library  run on browser

### API

#### commonjs
```Javascript
const vtc = require("vue-template-compiler-on-browser");
vtc.parseComponent(`your vue sfc file content string`);
```

#### ESM
```Javascript
import { parseComponent } from "vue-template-compiler-on-browser";
vtc.parseComponent(`your vue sfc file content string`);
```


#### browser
```Javascript
window.vtc.parseComponent(`your vue sfc file content string`);
```
