const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let chars = {};
  for (let s of str1) chars[s] = ++chars[s] || 1;

  for (let s of str2) {
    if (!chars[s]) return false;
    chars[s] -= 1;
  }

  return true;
};

module.exports = validAnagram;
