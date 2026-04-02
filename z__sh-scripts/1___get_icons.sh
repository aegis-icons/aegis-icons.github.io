#!/bin/bash

website_root=$(pwd)
cd ..
cd ..
cd aegis-icons
cd icons

rsync -av --delete "$PWD/1_Primary/" "$website_root/icons/primary/"
rsync -av --delete "$PWD/2_Variations/" "$website_root/icons/variations/"
rsync -av --delete "$PWD/3_Generic/" "$website_root/icons/generic/"
