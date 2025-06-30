const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight


class CircularMotion{
  constructor(position,radius,center,color,dist)
  {
    this.position = position
    this.velocity  = {
      x:0.05,
      y:0
    }
    this.radius = radius
    //this.color = color
    this.radian = 0
    this.center = center
    this.color = color
    this.distance = dist
  }
  draw(lastPoint)
  {
    c.beginPath()
    c.strokeStyle = this.color
    c.lineWidth = this.radius
    c.moveTo(lastPoint.x,lastPoint.y)
    c.lineTo(this.position.x,this.position.y)
    c.stroke()
    c.closePath()

      //c.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2)
    //c.fillStyle = this.color
    //c.fill()
  }

  update()
  {
    const lastPoint = {x:this.position.x,y:this.position.y}

    this.position.x = this.center.x+ Math.cos(this.radian)*this.distance.x
    this.position.y = this.center.y + Math.sin(this.radian)*this.distance.y
    this.radian+=this.velocity.x
    if(this.position.x > this.center.x)
    {
      this.color = 'green'
    }
    else if(this.position.x < this.center.x){
      this.color = 'blue'
    }
    if(this.position.y > this.center.y)
    {
      this.color = 'orange'
    }
    else if(this.position.y < this.center.y){
      this.color = 'red'
    }
    this.draw(lastPoint)
  }

}

const circle = new CircularMotion({x:canvas.width/2,y:canvas.height/2},5,{x:canvas.width/2,y:canvas.height/2},'blue',{x:100,y:100})
const circle2 = new CircularMotion({x:canvas.width/2,y:canvas.height/2},5,{x:canvas.width/2,y:canvas.height/2},'orange',{x:0,y:100})
function animate()
{
  window.requestAnimationFrame(animate)
  // filling the canvas with color
  c.fillStyle = 'rgba(255,255,255,0.05)'
  c.fillRect(0,0,canvas.width,canvas.height)

  // drawing a rect
  //c.fillStyle = 'rgba(0,255,0,0.9)' // a is for transparency
  //c.fillRect(0,0,200,200)

// drawing a circle
/*  c.beginPath()
  c.arc(canvas.width/2,canvas.height/2,20,0,Math.PI*2)
  c.fillStyle = 'blue'
  c.fill()*/

  // drawing a line
/*  c.beginPath()
  c.strokeStyle = 'red'
  c.lineWidth = 10
  c.moveTo(100,100)
  c.lineTo(200,100)
  c.stroke()
  c.closePath() */



  circle.update()
  circle2.update()

}
animate()
