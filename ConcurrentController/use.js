import Pool from './index';

const pool = new Pool(5)

let a = pool.add(()=>{
  return new Promise(res=>{
    setTimeout(()=>{
      console.log(1000)
      res('a')
    },1000)
  })
})
let b = pool.add(()=>{
  return new Promise(res=>{
    setTimeout(()=>{
      console.log(1000)
      res('b')
    },1000)
  })
})
let c = pool.add(()=>{
  return new Promise(res=>{
    setTimeout(()=>{
      console.log(1000)
      res('c')
    },1000)
  })
})
let d = pool.add(()=>{
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log(1000)
      rej('d')
    },1000)
  })
})
let e = pool.add(()=>{
  return new Promise(res=>{
    setTimeout(()=>{
      console.log(1000)
      res('e')
    },1000)
  })
})

let f = pool.add(()=>{
  return new Promise(res=>{
    setTimeout(()=>{
      console.log(1000)
      res('f')
    },1000)
  })
})
let g = pool.add(()=>{
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log(1000)
      rej('g')
    },1000)
  })
})

setTimeout(()=>{
  console.log(a,b,c,d,e,f,g)
},5000)