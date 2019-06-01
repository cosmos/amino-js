(function () {
    const go = new Go;
    WebAssembly.instantiateStreaming(fetch('Amino.wasm'), go.importObject)
        .then(function (result) {
            go.run(result.instance);
        });
})();
