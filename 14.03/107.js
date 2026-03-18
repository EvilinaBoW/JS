const Custom = {};
Custom[Symbol.hasInstance] = inst => Array.isArray(inst);
console.log([] instanceof Custom);