
//Creating user models

interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: number;
  birthDate: string;
  username: string;
  image: string;
  phone: string;
  address: Address;
  company: Company;
}

export interface UserLisResponseData {
  users: User[];
}


//Add User Model

export interface UserFormData {
  name: string;
  email: string;
  phone: string;

}