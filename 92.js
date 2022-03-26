// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {        //MÉTODO FULLNAME
      return this.firstName + " " + this.lastName;
    },
    age: function(params) {
        return "My age is: " + params;
    }
  };
  
  // Display data from the object:
  document.getElementById("demo1").innerHTML = person.firstName;
  document.getElementById("demo2").innerHTML = person.lastName;
  document.getElementById("demo3").innerHTML = person.id;
  document.getElementById("demo4").innerHTML = person.fullName(35);
  document.getElementById("demo5").innerHTML = person.age(35);

  person.firstName="Pepe";
  person.lastName="Rubianes";
  person.id="10",
 
  // Display data from the object:
  document.getElementById("demo10").innerHTML = person.firstName;
  document.getElementById("demo20").innerHTML = person.lastName;
  document.getElementById("demo30").innerHTML = person.id;
  document.getElementById("demo40").innerHTML = person.fullName(35);
  document.getElementById("demo50").innerHTML = person.age(35);

   // Display data from the object:
   document.getElementById("demo11").innerHTML = person.cambiarNom("Pablo")