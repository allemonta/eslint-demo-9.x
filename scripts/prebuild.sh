#/bin/sh

if [ "$SKIP_PRETTY" = false ]; then
  npm run pretty
else
  echo "Skipping pretty"
fi

if [ "$SKIP_LINT" = false ]; then
  npm run lint
else
  echo "Skipping lint"
fi

if [ "$SKIP_TYPECHECK" = false ]; then
  npm run typecheck
else
  echo "Skipping typecheck"
fi