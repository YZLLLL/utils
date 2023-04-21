const options = [
  {
    img: '1',
    url: '1',
    name: '1'
  },
  {
    img: '1',
    url: '1',
    name: '1'
  },
  {
    img: '1',
    url: '1',
    name: '1'
  }
]
init(options)
function init(options){
  return new Promise(res=>{

      let div = document.createElement('div');

      options.map(item=>{
        let img = document.createElement('img');
        img.src = item.img;
        img.addEventListener('click',()=>{
          res(item)
          document.body.removeChild(div)
        })
        div.appendChild(img)
      })

      document.body.appendChild(div)
      

  })
}