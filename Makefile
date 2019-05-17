clean:
	rm -rf ./dist/*

build: clean
	gopherjs build -v -o ./dist/main.js ./go/*.go
	cp ./static/index.html ./dist/

build_gz: build
	gzip -c ./dist/main.js > ./dist/main.js.gz

min: clean
	gopherjs build -v -m -o ./dist/main.min.js ./go/*.go
	cp ./static/index.html ./dist/

min_gz: min
	gzip -c ./dist/main.min.js > ./dist/main.min.js.gz

# main: clean wasm_exec
# 	GOOS=js GOARCH=wasm go build -o ./dist/main.wasm ./wasm/main.go
# 	cp ./wasm/index.html ./dist/
# 	cp ./wasm/main.js ./dist/
#
# wasm_exec:
# 	cp "${GOROOT}/misc/wasm/wasm_exec.js" ./dist/
#
# wasm_gzip:
# 	gzip -c ./dist/main.wasm > ./dist/main.wasm.gz
