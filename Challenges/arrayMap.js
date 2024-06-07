function hasContiguousSubarrayWithTargetSum(arr, target) {
    let start = 0;
    let current_sum = 0;

    for (let end = 0; end < arr.length; end++) {
        current_sum += arr[end];  

       
        while (current_sum > target && start <= end) {
            current_sum -= arr[start];
            start++;
        }


        if (current_sum === target) {
            return true;
        }
    }

    start = 0;
    current_sum = 0;
    for (let end = 0; end < arr.length; end++) {
        current_sum += arr[end];
        if (current_sum === target) {
            return true;
        }
        while (current_sum > target && start <= end) {
            current_sum -= arr[start];
            start++;
        }
    }

   
    return false;
}


function runTestCase(arr, target, expected) {
    const result = hasContiguousSubarrayWithTargetSum(arr, target);
    console.log(`Input: arr = ${JSON.stringify(arr)}, target = ${target}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log(result === expected ? "✅ Test Passed" : "❌ Test Failed");
    console.log('');
}



const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 14, expected: true },    
    { arr: [1, 2, 3, 4, 5], target: 9, expected: true },         
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },        
    { arr: [1, 2, 3, 4, 5], target: 16, expected: false },       
    { arr: [0, 0, 0, 0], target: 0, expected: true },           
    { arr: [5], target: 10, expected: false },                  
    { arr: [5, -3, 2, 3, 1], target: 5, expected: true },        
    { arr: [1, -1, 1, -1, 1, -1], target: 0, expected: true },   


testCases.forEach((test, index) => {
    runTestCase(test.arr, test.target, test.expected);
});
