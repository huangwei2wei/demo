const fs = require('fs');
const ps = require('path');
const file = ps.join(__dirname, 'assets', 'script', 'protoMsg.js.d.ts');
const original = fs.readFileSync(file, { encoding: 'utf8' });

// const str = "import * as $protobuf from \"protobufjs\";\nimport Long = require(\"long\");";
// original = str + original;

fs.writeFileSync(file, 
`import * as $protobuf from "protobufjs";
import Long = require("long");
export namespace protoMsg {
    ${original}
}
export default protoMsg;
`);