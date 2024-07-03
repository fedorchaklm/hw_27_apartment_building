class Man {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Appartmnet {
  residents = [];

  addResident(man) {
    if(man instanceof Man) {
      this.residents.push(man);
    } else {
      console.error("You are not a Man");
    }
  }
}

class Bulding {
  constructor(maxNumberOfAppartments) {
    this.maxNumberOfAppartments = maxNumberOfAppartments;
  }

  appartments = [];

  addAppartmnet(appartment) {
    if(appartment instanceof Appartmnet && this.appartments.length < this.maxNumberOfAppartments) {
      this.appartments.push(appartment);
    } else {
      console.error("Building is full!");
    }
  }
}


 const person1 = new Man("Ann", "female");
 const person2 = new Man("Max", "male");
 const person3 = new Man("Kate", "female");
 const person4 = new Man("Alex", "male");
 const person5 = {name: "Bob", gender: "male"};
 
const appartment1= new Appartmnet();
const appartment2= new Appartmnet();
const appartment3= new Appartmnet();
const appartment4= new Appartmnet();
const appartment5= new Appartmnet();
const appartment6= new Appartmnet();


appartment1.addResident(person1);
appartment2.addResident(person2);
appartment3.addResident(person3);
appartment4.addResident(person4);
appartment5.addResident(person5);
appartment5.addResident(person4);

const bulding = new Bulding(5);
bulding.addAppartmnet(appartment1);
bulding.addAppartmnet(appartment2);
bulding.addAppartmnet(appartment3);
bulding.addAppartmnet(appartment4);
bulding.addAppartmnet(appartment5);
bulding.addAppartmnet(appartment6);
console.log(bulding.appartments);

