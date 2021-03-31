'use strict'

import { COLOR, compute } from './module'
compute(1, 2)
console.log(COLOR)

import myLog from './module'
myLog.log()

import * as Module from './module'
Module.COLOR
Module.compute(2, 3)
Module.default.log()