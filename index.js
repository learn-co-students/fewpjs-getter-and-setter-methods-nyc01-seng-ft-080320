// Add your Circle class here

class Circle{
  
  constructor(radius){
    this.radius = radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  set diameter(diameter){
    this._diameter = diameter
  }
  
  set circumference(circumference){
    this._circumference = circumference
  }
  
  get circumference(){
   return Math.PI * this.diameter
  }
  
  set area(area){
    this._area = area
  }
  
  get area(){
    return Math.PI * Math.pow(this.radius, 2 )
  }
}