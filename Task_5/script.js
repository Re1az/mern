const users = [
  { id: 1, name: "Rabin", age: 25, role: "admin", active: true },
  { id: 2, name: "Sita", age: 22, role: "user", active: false },
  { id: 3, name: "Hari", age: 30, role: "user", active: true },
  { id: 4, name: "Gita", age: 28, role: "moderator", active: true },
  { id: 5, name: "Ram", age: 20, role: "user", active: false },
  { id: 6, name: "Ram", age: 10, role: "user", active: false },
];
// Get all user names as an array.
const names = users.map(userNames); //using callback function
console.log(names);

function userNames(user) {
  return user.name;
}

// Find the user whose id is 3.
const userid = (id) => {
  return id.id === 3;
};
const id = users.find(userid);
console.log(id);

// Get all users with role "user".

const role = users.filter((roleUser) => {
  let store = roleUser.role === "user";
  return store;
});
console.log(role);

// Check if at least one user is inactive.
const inactive = users.some((user) => {
  return user.active === false;
});
console.log(inactive);

// Count how many users are active.
const count = users.reduce((count, user) => {
  return user.active === true ? count + 1 : count;
}, 0);
console.log(count);

// Get an array of users older than 25.
const older = users.filter((user) => {
  return user.age > 25;
});
console.log(older);

// Create a new array where each user has an extra field isAdult (true if age ≥ 18).
const extra = users.map((user) => {
  return { ...user, iaAdult: user.age > 18 };
});
console.log(extra);

// Sort users by age in ascending order.

// Remove the user whose id is 2.
const remove = users.filter((user) => {
  return user.id !== 2;
});
console.log(remove);

// Get only the names of active users.
const active = users.filter((user) => {
  return user.active === true;
});
const get = active.map((user) => user.name);
console.log(get);

// Group users by their role.

const groupedByRole = Object.groupBy(users, (u) => u.role);

console.log(groupedByRole);

// Find the average age of all users.
const average = users.reduce((sum, user) => {
  return (sum = sum + user.age) / users.length;
}, 0);
console.log(average);

// Get the first inactive user.
const first = users.find((user) => {
  return user.active === false;
});
console.log(first);

// Convert the array into an object where keys are id and values are user objects.

// Check if all admins are active.
const allActive = users.filter((user) => {
  return user.role === "admin";
});
console.log(allActive);
