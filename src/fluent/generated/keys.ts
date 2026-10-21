import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "29c6e62c58984be3a8f4676d33dd621b"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "c9a9144fa2cf4c639bcb704712d8b1ec"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "325014666cee4ed9b60ee0fd9eded8fe"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "96b3b1ba63bb4e1ab1081a666ee493d3"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "0678b7708f544aa0bb2443826272f2b6",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "96dc33d4d7204ac8a98fe469bfbd1ae3",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "302324e1e228461aa2f0e524f394f2a5",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
