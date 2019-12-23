#!/bin/sh
SCRIPT_PATH=`dirname $0`
cd $SCRIPT_PATH
pwd
python3 -m http.server 8080 --bind 127.0.0.1
