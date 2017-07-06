number=0
button=document.getElementById('button1')
div=document.getElementById('div1')
div.innerHTML=number
button.onclick=function() {
  number +=1
  div.innerHTML=number
  if(number>=20){
    audio=new Audio()
    audio.src='horse.wav'
    audio.play()
  }
}
div2=document.getElementById('div2')
setInterval(function(){
  div2.innerHTML+='l'
}, 2000)
class zargo{
  constructor() {
    this.size = 'big'
    this.orange = 'color'
    this.eyes = '5'
    this.tail = 'none'
  }
  drawzargo(){
    var div=document.createElement('div')
    div.className='zargofarmdiv'
    if (this.eyes!='none'){
      var eyes=parseFloat(this.eyes)
      for (var i = 0; i < Math.floor(eyes); i++) {
        div.innerHTML+='eye '
      }
      console.log(eyes-Math.floor(eyes))
      if (Math.round((eyes-Math.floor(eyes))*10)==3){
        div.innerHTML+='e'
      }
    }
    if (this.orange=='color'){
      div.style.backgroundColor='#ff7214'
    }
    else if (this.orange=='hue'){
      div.style.backgroundColor='#ff9d00'
    }
    else if (this.orange=='shade'){
      div.style.backgroundColor='#ff5d00'
    }
    else if (this.orange=='purple'){
      div.style.backgroundColor='#e100ff'
    }
    var sizes = {big: '5em', small: '2em', medium: '3em', gigantic: '10em'}
    div.style.height=sizes[this.size]
    var tails = {none:'', one:'tail', many:'tail '.repeat(10), cyborg: 'cyborg tail'}
    div.innerHTML+='<br>'+tails[this.tail]
    document.getElementById('zargofarm').appendChild(div)
  }
}
zargosize=['big', 'small', 'medium', 'gigantic']
zargoorange=['color', 'hue', 'shade', 'purple']
zargoeyes=['none', '1', '2', '3', '4', '5', '42.3']
zargotail=['none', 'one', 'many', 'cyborg']
zargofarm=[]
setInterval(function(){
  tempzargo=new zargo()
  tempzargo.size=zargosize[Math.floor(Math.random()*zargosize.length)]
  tempzargo.tail=zargotail[Math.floor(Math.random()*zargotail.length)]
  tempzargo.eyes=zargoeyes[Math.floor(Math.random()*zargoeyes.length)]
  tempzargo.orange=zargoorange[Math.floor(Math.random()*zargoorange.length)]
  zargofarm.push(tempzargo)
  tempzargo.drawzargo()
}, 5000)
