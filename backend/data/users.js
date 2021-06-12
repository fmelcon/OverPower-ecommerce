import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "flor",
    email: "flor@example",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "franko",
    email: "franko@example",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
