#!/usr/bin/env bash
echo 'Replacing relative paths..'
if [[ "$OSTYPE" == "darwin"* ]]; then
    LC_ALL=C find __generated_site__/ -type f -exec sed -i '' 's/\/1\//https:\/\/okochaviasperii.github.io\/aspr-lwc-utils\/1\//g' {} +
else
    LC_ALL=C find __generated_site__/ -type f -exec sed -i 's/\/1\//https:\/\/okochaviasperii.github.io\/aspr-lwc-utils\/1\//g' {} +
fi