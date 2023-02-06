#!/usr/bin/env bash
echo 'Replacing relative paths..'
LC_ALL=C find __generated_site__/ -type f -exec sed -i '' 's/\/1\//https:\/\/okochaviasperii.github.io\/aspr-lwc-utils\/1\//g' {} +