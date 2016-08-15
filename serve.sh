#!/bin/bash
set -e # exit with nonzero exit code if anything fails

chmod +x hooks/after_prepare/010_add_platform_class.js

# run our compile script, discussed above
ionic platform add browser

ionic build browser --release

npm run surge
