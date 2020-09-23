// Add your Circle class here

class Circle{
  constructor(radius){
    this.radius = radius
  }
  
  set diameter(diameter){
    this._diameter = diameter
  }
  
  set circumference(circumference){
    this._circumference = circumference
  }
  
  set area(area){
    this._area = area
  }
  
  get diameter(){
    return this.radius * 2
    
  }
  
  get circumference(){
   return Math.PI * this.diameter
    
  }
  
  get area(){
    return Math.PI * Math.pow(this.radius, 2)
    
  }
  
}