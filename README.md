# request-f

Fantasy Land Future compatible request library based on [request](https://github.com/request/request), [fluture](https://github.com/fluture-js/Fluture) and [sancturay](https://github.com/sanctuary-js/sanctuary).


## Methods

Every methods have next signature.
```javasctipt
<methodName> :: String s -> Future a s
<methodName> :: RequestOptions o -> Future a o
```
List of RequestOptions see [here](https://github.com/request/request#requestoptions-callback)

## Examples
### Simple example
```javascript
const requestF = require('request-f');

requestF
  .get('http://site.com')
  .fork(console.error, console.log);
  // -> Right({ body: '...', statusCode: '...', headers: { ... } })
```

### Using with Sanctuary

```javascript
const { create, env } = require('sanctuary');
const { env: flutureEnv } = require('fluture-sanctuary-types');

const S = create({
  checkTypes: true,
  env: env.concat(flutureEnv),
});

const getBody = S.map(S.prop('body'));

requestF
  .get('http://site.com')
  .map(getBody)
  .fork(console.error, console.log);
  // -> Right('<body value>')
```

Learn more about  [integration fluture with sanctuary](https://github.com/fluture-js/Fluture#sanctuary)

---
MIT License
