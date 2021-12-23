import css from './x.js'  //从x.js里引入x (就是xxx)
import png from './assets/1.png'
console.log(png)  //eed0045265236a6d7d28d08268c779c0.png 会自动加哈希

const div=document.getElementById('app')

div.innerHTML=`
<img src='${png}'>
`

const button=document.createElement('button')
button.innerText='懒加载'
button.onclick=()=>{
  const promise=import('./lazy')  //这是一个异步，需要定义promise
  promise.then((module)=>{        //导入这个模块
    const fn=module.default    //模块默认值是fn函数
    fn()  //调用这个函数
  },()=>{
    console.log('模块加载错误')
  })

}

div.appendChild(button)
