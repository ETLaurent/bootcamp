# Debug tips

## Console

### console.trace

```js
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
```

### console.time and console.timeEnd

```js
(async () => {
  const startServer = () => new Promise(resolve => setTimeout(resolve, 1000))

  console.time('starting server')
  await startServer()
  console.timeEnd('starting server')
})()
```

### console.table

```js
console.table([
  { a: 1, b: 2 },
  { a: 3, d: 4 }
])
```

### console.memory

```js
// browser
console.memory

// node
console.log(process.memoryUsage())
```

### console.count

```js
['apple', 'banana', 'orange', 'banana'].forEach(console.count)
```

### console.assert

```js
console.assert(1 + 1 === 3, 'false!')
```

### console.group (browser)

```js
console.log('root')
console.group('level 1')
console.log('hey')
console.group('level 2')
console.log('ho')
console.groupEnd('level 2')
console.groupEnd('level 1'
```

## Performance

### performance.now()

```js
const startServer = () => new Promise(resolve => setTimeout(resolve, 1000))

const t0 = performance.now()
startServer()
const t1 = performance.now()

console.log(`server took ${t1 - t0}ms to start`);
```

```js
console.log(performance.timeOrigin)
```

## Breakpoints

### Browser

- demo

### Node

- `node --inspect`
- `node --inspect-brk`

**Debug with Chrome**

- NiM extention

**Debug with VSCode**

```json
{
  "type": "node",
  "request": "attach",
  "name": "Debug",
  "protocol": "inspector",
  "port": 9229,
  "restart": true
}
```

or pick which process to listen to:

```json
{
  // ...
  "processId": "${command:PickProcess}"
}
```

## Resources

- https://developer.mozilla.org/en-US/docs/Web/API/console
- https://medium.com/appsflyer/10-tips-for-javascript-debugging-like-a-pro-with-console-7140027eb5f6
- https://www.youtube.com/watch?v=Xb_0awoShR8&ab_channel=PaulIrish
- https://punkave.com/window/live-blog-understanding-and-debugging-memory-leaks-in-your-node-js-applications-ali-sheikh-google
- https://chrome.google.com/webstore/detail/nodejs-v8-inspector-manag/gnhhdgbaldcilmgcpfddgdbkhjohddkj?hl=en
- https://code.visualstudio.com/docs/editor/debugging
- https://code.visualstudio.com/docs/nodejs/nodejs-debugging
