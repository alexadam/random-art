#!/bin/sh
#find . -iname "*" -exec rename "s/ *//g" {} \; #remove white spaces

rootDir="../fonts/"
for fName in $(find . -type f -name '*.ttf' -or -name '*.otf' | sed s/^..//g)
do
    fNameTrans=$(echo "$fName" | tr "/" "_")

    echo "@font-face {"
    echo "\tfont-family: \"${fNameTrans%.*}\";"
    echo "\tsrc : url($rootDir$fName);"
    echo "}"
done

