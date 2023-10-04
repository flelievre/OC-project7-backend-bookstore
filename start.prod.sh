#!/bin/sh
ENV_FILE=.env.production

echo "$(cat $ENV_FILE | tr '\n' ' ') $(which node) ./src/index.js" | /bin/bash
