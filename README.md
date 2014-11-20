# koa-combo2

[![NPM version](https://img.shields.io/npm/v/koa-combo2.svg?style=flat)](https://npmjs.org/package/koa-combo2)
[![NPM downloads](http://img.shields.io/npm/dm/koa-combo2.svg?style=flat)](https://npmjs.org/package/koa-combo2)

Koa middleware for assets combo.

---

## Install

```bash
$ npm install koa-combo2
```

## Usage

```bash
var combo = require('koa-combo2');
var koa = require('koa');

var app = koa();
app.use(combo(options));
app.listen(3000);
```

## Options

See [connect-combo](https://github.com/popomore/connect-combo).

## LISENCE

Copyright (c) 2014 chencheng. Licensed under the MIT license.
