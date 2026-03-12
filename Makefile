TURBO = TURBO_TELEMETRY_DISABLED=1 turbo --dangerously-disable-package-manager-check

.PHONY: build-packages clean-packages clean dev-packages

build-packages:
	$(TURBO) run build

clean-packages:
	$(TURBO) run clean

dev-packages:
	$(TURBO) run watch:build dev:site

clean:
	rm -rf dist
