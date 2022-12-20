"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("../lib");
var yiddish = 'אלבערט אײנשטײן';
var german = (0, lib_1.transliterateYiddishToGerman)(yiddish);
console.log(german);
//  Output: "a briyng"
