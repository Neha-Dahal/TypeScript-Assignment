type Gender = "male" | "female" | "non-binary";

interface User {
  id: number;
  name: string;
  gender: Gender;
  age: number;
  email: string;
  isRetired: boolean;
}

function filterUsersByGender(
  users: User[],
  targetGender: "male" | "female" | "non-binary"
) {
  return users.filter((user) => user.gender === targetGender);
}

const users: User[] = [
  {
    id: 1,
    name: "Neha",
    gender: "female",
    age: 22,
    email: "neha@gmail.com",
    isRetired: false,
  },
  {
    id: 2,
    name: "Josh",
    gender: "non-binary",
    age: 70,
    email: "josh@gmail.com",
    isRetired: true,
  },
  {
    id: 3,
    name: "Ram",
    gender: "male",
    age: 30,
    email: "ram@gmail.com",
    isRetired: false,
  },
];

console.log(filterUsersByGender(users, "female"));

console.log(filterUsersByGender(users, "male"));

console.log(filterUsersByGender(users, "non-binary"));
