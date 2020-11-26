/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
	if(!str.trim().length) return str;


	return str.split('-').map( (item, i) => 
		item.length && i > 0 ? item[0].toUpperCase() + item.slice(1) : item).join("");
}

