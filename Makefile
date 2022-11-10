MAKE_DIR := $(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

.DEFAULT_GOAL := dev

.PHONY : install dev serve build clean

install:
	yarn install

dev: install build
	yarn start

serve: install build
	yarn serve

build: install
	yarn build

clean:
	rm -rf ./node_modules
	rm -rf ./build
	rm -rf ./*lock*