// 事件发布订阅
export class Event{

  constructor(){
    this.task = {}
  }

  on(name, cb) {
    if(!this.task[name]){
      this.task[name] = []
    }
    this.task[name] = [...this.task[name], cb]
  }

  emit(name,...args) {
    let tasks = this.task[name]
    if(tasks){
      for (const item of tasks) {
        item(...args)
      }
    }
  }

  off(name, fn) {
    let tasks = this.task[name] || []
    if(tasks.length==0) return
    if(fn){
      tasks = tasks.filter(i=>i!==fn)
    }else{
      tasks = []
    }
  }

  once(name, fn) {
    const cb = () => {
      this.off(name, cb)
      fn()
    }
    this.on(name, cb)
  }
}