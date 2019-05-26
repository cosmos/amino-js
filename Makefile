clean:
	rm -rf ./dist/*

build: clean
	cp ./static/index.html ./dist/
	gopherjs build -v -o ./dist/main.js ./go/*.go

build_gz: build
	gzip -c ./dist/main.js > ./dist/main.js.gz

min: clean
	cp ./static/index.html ./dist/
	gopherjs build -v -m -o ./dist/main.min.js ./go/*.go

min_gz: min
	gzip -c ./dist/main.min.js > ./dist/main.min.js.gz

watch: clean
	cp ./static/index.html ./dist/
	gopherjs build -w -v -o ./dist/main.js ./go/*.go

# main: clean wasm_exec
# 	cp ./wasm/index.html ./dist/
# 	cp ./wasm/main.js ./dist/
# 	GOOS=js GOARCH=wasm go build -o ./dist/main.wasm ./wasm/main.go
#
# wasm_exec:
# 	cp "${GOROOT}/misc/wasm/wasm_exec.js" ./dist/
#
# wasm_gzip:
# 	gzip -c ./dist/main.wasm > ./dist/main.wasm.gz
