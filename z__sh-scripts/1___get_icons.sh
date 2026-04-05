#!/bin/bash -i

cd ..

website_root=$(pwd)

cd ..
cd aegis-icons
cd icons

mkdir -p "$website_root/icons"/{p,v,g}

rsync -av --delete "$PWD/1_Primary/" "$website_root/icons/p/"
rsync -av --delete "$PWD/2_Variations/" "$website_root/icons/v/"
rsync -av --delete "$PWD/3_Generic/" "$website_root/icons/g/"
