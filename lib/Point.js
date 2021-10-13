class Point {
  constructor(x,y){
    this.x = x
    this.y = y
    }

  distTo(otherPoint){
    const dx = this.x-otherPoint.x
    const dy = this.y-otgherPoint.y
    return Math.sqrt(dx*dx + dy*dy)
  }

  equals(otherPoint){
    return this.x==otherPoint.x && this.y==otherPoint.y
  }

  move(dx,dy){
    this.x += dx
    this.y += dy
  }

  closest(points){
    if (points.length==0){
      return []
    } else {
      let p1 = points[0]
      let d1 = this.distTo(p1)
      for(let i=1; i<points.length; i++){
        let p = points[i]
        let d = this.distTo(p)
        if (d<d1){
          p1=p
          d1=d
        }
      }
      return [p1,d1]
    }
  }


  toString(){
    return `(${this.x},${this.y})`
  }

}

const adder = (p1,p2) => {
  return new Point(p1.x+p2.x, p1.y+p2.y)
}

const dist = (p1,p2) => {
  const dx = p1.x-p2.x
  const dy = p1.y-p2.y
  return Math.sqrt(dx*dx + dy*dy)
}

const newPoint = (x,y) => new Point(x,y)

const origin = new Point(0,0)

export {adder, newPoint as thePoint, origin, dist}
export default Point

/*
To import you can do
import Zpoint from "../lib/Point"
import {adder as pointAdder, thePoint, origin} from "../lib/Point"
*/
