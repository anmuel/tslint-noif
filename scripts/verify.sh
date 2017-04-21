#!/usr/bin/env bash

ret=0;
for path in `find test -name tslint.json`; do
    echo "testing $path ..."
    tslint -r ./build/rules --test $path/..
    val=$?
    if [ "$val" -ne "0" ]; then
        ret=$val
    fi
done
exit $ret
