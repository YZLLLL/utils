import Event from './Event/index.js'

const Events = new Event();

export class Pool{
  constructor(max){
    this.max = max;
    this.doing = 0
    this.taskList = []
    Events.on('done',()=>{
      this.doing--
      if(this.taskList.length){
        let task = this.taskList.shift()
        task.do()
      }
    })
    Events.on('error',(e)=>{
      this.doing--
      console.log('error', e)
    })
  }

  add(fn){
    let task = new Task(fn)
    if(this.doing<this.max){
      this.doing++
      return task.do()
    }else{
      this.taskList.push(task)
      return Promise.resolve()
      .then(_=>{
        return task.waitPromise()
      })
    }
  }


}

class Task{
  constructor(fn){
    this.fn = fn
  }

  do(){
    return Promise.resolve()
    .then(_=>{
      return this.fn()
    }).then(res=>{
      Events.emit('done');
      this.res&&this.res(res);
      return res
    }).catch(e=>{
      Events.emit('error',e);
      this.rej&&this.rej(e);
      return Promise.reject(e)
    })
  }

  waitPromise(){
    return new Promise((res, rej)=>{
      this.res = res
      this.rej = rej
    })
  }
}