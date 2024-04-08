import { Address } from "./address";
import { Customer } from "./customer";
import { Room } from "./room";
class Hotel {
    name: string;
    address: Address[] = [];
    customer: Customer[] = [];
    constructor(name: string) {
        this.name = name;
    }
    setAddress(address : Address){
        this.address.push(address);
    }
    setCustomer(customer: Customer){
        this.customer.push(customer);
    }
    registerCustomer(customer : Customer, room: Room){
        this.customer.push(customer);
    }
    customerIsInHotel (customer: Customer): boolean{
        this.customer.forEach(element => {
            if (customer.firstName == element.firstName && customer.lastName == element.lastName){
                return true
            }
        });
        return false
    }  
}

let myHotel = new Hotel("Yung Chal");
let address1 = new Address("PP", "2004", "cambodia")
let address2 = new Address("KPT", "06", "cambodia")

let customer1 = new Customer("Him", "Hey");
let customer2 = new Customer("Yon", "S");
let customer3 = new Customer("Nang", "ks");

let room1 = new Room(1, 2);
let room2 = new Room(2, 5);

customer1.setAddress(address1);
customer2.setAddress(address2);
customer3.setAddress(address1);

if (! myHotel.customerIsInHotel(customer1)){
    myHotel.registerCustomer(customer1, room1)
};
if (! myHotel.customerIsInHotel(customer2)){
    myHotel.registerCustomer(customer2, room1)
};
if (! myHotel.customerIsInHotel(customer3)){
    myHotel.registerCustomer(customer3, room1)
};

myHotel.setAddress(address1);
myHotel.customerIsInHotel(customer1);

console.log(myHotel)