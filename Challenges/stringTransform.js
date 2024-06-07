function transformString(s) {
    const n = s.length;

    const divisibleBy3 = (n % 3 === 0);
    const divisibleBy5 = (n % 5 === 0);

    let transformedString = s;
    if (divisibleBy3) {
        transformedString = reverseString(transformedString);
    }


    if (divisibleBy5) {
        transformedString = convertToAscii(transformedString);
    }
    
    return transformedString;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}


function convertToAscii(str) {
    return str.split('').map(char => char.charCodeAt(0)).join(' ');
}



const testCases = [
    { input: "abcabcabc", expected: "cbacbacba" },
    { input: "hello", expected: "104 101 108 108 111" },
    { input: "abcdef", expected: "fedcba" },
    { input: "Hello World!!!!", expected: "33 33 33 33 100 108 114 111 87 32 111 108 108 101 72" }
];


testCases.forEach((test, index) => {
    const output = transformString(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Length of input ${test.input.length}`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected Output: "${test.expected}"`);
    console.log(`Actual Output: "${output}"`);
    console.log(output === test.expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
});