const uber = {
  user: "alrare",
  travel: "Oficina",
  origin: "Dirección origen",
  destination: "Dirección destino",
  driver: "Alonso",
  vehicle: "Jetta A4",
  license: "411UFA",

  getUser: function(){
    return this.user
  },

  getTravel: function(){
    return this.origin + ', ' + this.destination
   },

  getDriverData: function(){
   return this.driver + ', ' + this.vehicle + ', ' + this.license
  }
 }

console.log("Nombre del usuario: " + uber.user)
console.log("Datos del viaje: " + uber.getTravel())
console.log("Datos del conductor: " + uber.getDriverData())
