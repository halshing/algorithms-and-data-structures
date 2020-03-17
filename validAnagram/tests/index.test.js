const validAnagram = require("../");

const TESTS = {
  test1: {
    name: "'' is an anagram of ''",
    params: ["", ""],
    output: true
  },
  test2: {
    name: "'bear' is an anagram of 'arbe'",
    params: ["bear", "arbe"],
    output: true
  },
  test3: {
    name: "'art' is an anagram of 'rat'",
    params: ["rat", "art"],
    output: true
  },
  test4: {
    name: "'awesom' is not an anagram of 'awesome'",
    params: ["awesome", "awesom"],
    output: false
  },
  test5: {
    name: "'lwerjkwj' is an anagram of 'wwjlrjek'",
    params: ["wwjlrjek", "lwerjkwj"],
    output: true
  },
  test6: {
    name: "'' is not an anagram of 'helloworld'",
    params: ["helloworld", ""],
    output: false
  }
};

for (let key in TESTS) {
  let unitTest = TESTS[key];
  test(unitTest.name, () => {
    expect(validAnagram(...unitTest.params)).toBe(unitTest.output);
  });
}
