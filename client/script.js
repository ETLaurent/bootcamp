function log () {
  arguments.forEach(arg => {
    console.log(arg)
  })
}

const init = () => {
  const object = {
    a: 'hey',
    getElapsedTime: () => performance.now()
  }
  const elapsedTime = object.getElapsedTime()

  log(elapsedTime)
}

init()
