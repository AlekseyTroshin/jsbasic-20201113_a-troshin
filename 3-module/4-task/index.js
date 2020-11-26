/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  	let result = '';
  	let firstUser = true;
  	let lengthArray = users.length - 1;

  	users.forEach((user, i) => {
  		if(age >= user.age && firstUser) {
  			result += `${user.name}, ${user.balance}`;
  			firstUser = false;
  		} else if(age >= user.age) {
  			result += `\n${user.name}, ${user.balance}`;
  		}
  	});

  	return result;
}
