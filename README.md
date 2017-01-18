# tslint-noif [![Build Status](https://travis-ci.org/anmuel/tslint-noif.svg?branch=master)](https://travis-ci.org/anmuel/tslint-noif)

 [![NPM](https://nodei.co/npm/tslint-noif.png?compact=true)](https://npmjs.com/package/tslint-noif)

A tslint rule extension to prohibit the usage of conditional statements such as `if` or `switch`.
It's a bit radical I guess :)

## Usage

`npm install tslint-noif`

Apply the rules directory for tslint for example via the command line:
`tslint --rule-dir node_modules/tslint-noif`

Use the desired rules in your *tslint.json*:

```json
{
  "rules": {
    "no-if": true,
    "no-switch": true
  }
}
```

## Test

Run `npm test`

## Todos

See [Issues](https://github.com/anmuel/tslint-noif/issues)

## References

* https://github.com/palantir/tslint
* https://palantir.github.io/tslint/develop/custom-rules/
* https://palantir.github.io/tslint/develop/testing-rules/
