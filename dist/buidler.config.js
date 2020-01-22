"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nomiclabs/buidler/config");
config_1.usePlugin("@nomiclabs/buidler-truffle5");
config_1.task("testme", "", async (taskArgs, bre) => {
    const Greeter = bre.artifacts.require('Greeter');
    const greeter = await Greeter.new('Hello!');
    const greeting = await greeter.greet();
    console.log(`Greeter says: ${greeting}`);
    // Here's the problem.
    // If you want to use Truffle types at a lower level
    // than those generated by Typechain, you need to install
    // truffle-typings, since that seems to be what is exended in
    // typechain/index.d.ts.
    const anotherGreeter = await Greeter.new('Howdy ;D');
    console.log(`Another greeter deployed at ${anotherGreeter.address}`);
});
exports.default = {};
//# sourceMappingURL=buidler.config.js.map