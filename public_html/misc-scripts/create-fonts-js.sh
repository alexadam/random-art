#!/bin/sh
#find . -iname "*" -exec rename "s/ *//g" {} \; #remove white spaces

fontList="var allFonts=[ "
rootDir="../fonts/"

for fName in $(find . -type f -name '*.ttf' -or -name '*.otf' | sed s/^..//g)
do
    fNameTrans=$(echo "$fName" | tr "/" "_")
    fontList=$fontList"\""${fNameTrans%.*}"\" ,"
done

fontList=$fontList"];"
echo $fontList

