# tslint-if [![Build Status](https://travis-ci.org/anmuel/tslint-noif.svg?branch=master)](https://travis-ci.org/anmuel/tslint-noif)

A tslint rule extension to prohibit the usage of `if`-statements.
It's a bit radical I guess :)

## Usage

`npm install tslint-noif`

Apply the rules directory for tslint for example via the command line:
`tslint --rule-dir node_modules/tslint-noif`

## Test

Run `npm test`

## Todos

* Add options such as the amount of allowed else-cases
* Disallow switch
* Add options to switch based on the amount of cases

## References

* https://github.com/palantir/tslint
* https://palantir.github.io/tslint/develop/custom-rules/
* https://palantir.github.io/tslint/develop/testing-rules/
