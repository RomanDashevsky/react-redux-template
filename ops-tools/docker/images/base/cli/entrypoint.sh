#!/bin/bash

echo ***** Start app  *****

if [ $ENV == "local" ]
then
  echo ***** Install dependencies  *****
  npm i

  echo ***** In dev mod  *****
  npm run start
else
  echo ***** In prod mod  *****
  npm run build
fi
