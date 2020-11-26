/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let arr = str.split(',').join(' ').split(' ')
		.map( item => parseFloat(item) ? parseFloat(item) : '');

  	let min = Math.min.apply(null, arr);
  	let max = Math.max.apply(null, arr); 
  	
  	return {
	    min,
	    max
	}
}
