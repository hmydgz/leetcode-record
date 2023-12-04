/**
 * @see https://leetcode.cn/problems/html-entity-parser/?envType=daily-question&envId=2023-12-04
 */

const map = {
  '&quot;': '"',
  '&apos;': '\'',
  '&amp;': '&',
  '&gt;': '>',
  '&lt;': '<',
  '&frasl;': '/',
}

/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
  return text.replace(/&([^;])+;/g, (match) => map[match] || match)
};

// console.log(entityParser("&amp; is an HTML entity but &ambassador; is not."));
console.log(entityParser("&amp;gt;"));