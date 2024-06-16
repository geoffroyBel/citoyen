#!/bin/sh

echo "le docker-entrypoint.prod s'execute"

npx prisma migrate deploy

exec "$@"
