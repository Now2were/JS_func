const users = [
  { id: 1, name: "Anna", age: 22, city: "Moscow", isActive: true },
  { id: 2, name: "Oleg", age: 17, city: "Kazan", isActive: false },
  { id: 3, name: "Ivan", age: 30, city: "Moscow", isActive: true },
  { id: 4, name: "Maria", age: 25, city: "Sochi", isActive: false }
];

// 1
function getActiveUsers(usersArray) {
    return usersArray.filter(user => user.isActive === true);
}

// 2
const getUserNames = (usersArray) => usersArray.map(user => user.name);

// 3
function findUserById(usersArray, id) {
    const foundUser = usersArray.find(user => user.id === id);
    return foundUser !== undefined ? foundUser : null;
}

// 4
function getUsersStatistics(usersArray) {
    const activeUsers = usersArray.filter(user => user.isActive === true);
    
    return {
        total: usersArray.length,
        active: activeUsers.length,
        inactive: usersArray.length - activeUsers.length
    };
}

// 5
function getAverageAge(usersArray) {
    if (usersArray.length === 0) return 0;
    
    const totalAge = usersArray.reduce((sum, user) => sum + user.age, 0);
    return totalAge / usersArray.length;
}

// 6
function groupUsersByCity(usersArray) {
    return usersArray.reduce((result, user) => {
        if (!result[user.city]) {
            result[user.city] = [];
        }
        result[user.city].push(user);
        return result;
    }, {});
}

console.log("1. Активные пользователи:");
console.log(getActiveUsers(users));

console.log("\n2. Имена пользователей:");
console.log(getUserNames(users));

console.log("\n3. Поиск пользователя по ID (ID=3):");
console.log(findUserById(users, 3));
console.log("Поиск пользователя по ID (ID=999):");
console.log(findUserById(users, 999));

console.log("\n4. Статистика пользователей:");
console.log(getUsersStatistics(users));

console.log("\n5. Средний возраст пользователей:");
console.log(getAverageAge(users));

console.log("\n6. Группировка пользователей по городам:");
console.log(groupUsersByCity(users));
