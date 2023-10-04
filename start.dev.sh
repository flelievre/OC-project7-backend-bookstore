#!/bin/sh
ENV_FILE=.env.development

echo "$(cat $ENV_FILE | tr '\n' ' ') $(which node) ./src/index.js" | /bin/bash
