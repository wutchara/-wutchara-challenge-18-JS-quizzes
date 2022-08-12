console.log('============================');
const fibonacci = (index) => {
    if (index < 1) {
        return -1;
    } else if (index === 1 || index === 2) {
        return 1;
    } else {
        return fibonacci(index - 1) + fibonacci(index - 2);
    }
};
console.log('fibonacci(1)', fibonacci(1));
console.log('fibonacci(2)', fibonacci(2));
console.log('fibonacci(3)', fibonacci(3));
console.log('fibonacci(4)', fibonacci(4));
console.log('fibonacci(5)', fibonacci(5));
console.log('fibonacci(12)', fibonacci(12));

const fibonacciSum = (last1, last2) => {
    return last1 + last2;
}

const getFirstDigits = (digits) => {
    let index = 0;
    let result = 0;
    const logDigits = {};
    if (digits < 1) {
        return -1;
    } else {
        let last1;
        let last2;
        do {
            index++;
            result = last1 && last2 ? fibonacciSum(last1, last2) : fibonacci(index);

            if (!isFinite(result)) {
                console.error('Number is Infinity: ', result);
                index = -1;
                result = -1;
                break;
            }

            if (index % 2 === 0) {
                last2 = result;
            } else {
                last1 = result;
            }

            const resultStr = result.toString().split('');
            const len = resultStr.length;
            console.log(index, ' => result => ', result, len);
            if (logDigits[len + '']) {
                logDigits[len + ''] = logDigits[len + ''] + 1;
            } else {
                logDigits[len + ''] = 1;
            }
            if (len >= digits) {
                break;
            }
        } while (true);
    }

    console.log('logDigits', logDigits);

    return {
        index,
        result,
    }
}
// console.log('getFirstDigits(1)', getFirstDigits(1));
// console.log('getFirstDigits(2)', getFirstDigits(2));
// console.log('getFirstDigits(3)', getFirstDigits(3));
// console.log('getFirstDigits(10)', getFirstDigits(10));
console.log('getFirstDigits(20)', getFirstDigits(20));
// console.log('getFirstDigits(100)', getFirstDigits(100));
// console.log('getFirstDigits(1000)', getFirstDigits(1000));


/**
 * 4, 5, 5, 4, 5, 5, 5, 4(8), 5(9), 5, 5, 5(12), 4, 5, 5, 5, 5, 4(18), 5
3  => result =>  2 1    
4  => result =>  3 1    
5  => result =>  5 1    
6  => result =>  8 1    
7  => result =>  13 2   
8  => result =>  21 2   
9  => result =>  34 2   
10  => result =>  55 2  
11  => result =>  89 2  
12  => result =>  144 3 
13  => result =>  233 3 
14  => result =>  377 3 
15  => result =>  610 3 
16  => result =>  987 3 
17  => result =>  1597 4
18  => result =>  2584 4
19  => result =>  4181 4
20  => result =>  6765 4
21  => result =>  10946 5
22  => result =>  17711 5
23  => result =>  28657 5
24  => result =>  46368 5
25  => result =>  75025 5
26  => result =>  121393 6
27  => result =>  196418 6
28  => result =>  317811 6
29  => result =>  514229 6
30  => result =>  832040 6
31  => result =>  1346269 7
32  => result =>  2178309 7
33  => result =>  3524578 7
34  => result =>  5702887 7
35  => result =>  9227465 7
36  => result =>  14930352 8
37  => result =>  24157817 8
38  => result =>  39088169 8
39  => result =>  63245986 8
40  => result =>  102334155 9
41  => result =>  165580141 9
42  => result =>  267914296 9
43  => result =>  433494437 9
44  => result =>  701408733 9
45  => result =>  1134903170 10
46  => result =>  1836311903 10
47  => result =>  2971215073 10
48  => result =>  4807526976 10
49  => result =>  7778742049 10
50  => result =>  12586269025 11
51  => result =>  20365011074 11
52  => result =>  32951280099 11
53  => result =>  53316291173 11
54  => result =>  86267571272 11
55  => result =>  139583862445 12
56  => result =>  225851433717 12
57  => result =>  365435296162 12
58  => result =>  591286729879 12
59  => result =>  956722026041 12
60  => result =>  1548008755920 13
61  => result =>  2504730781961 13
62  => result =>  4052739537881 13
63  => result =>  6557470319842 13
64  => result =>  10610209857723 14
65  => result =>  17167680177565 14
66  => result =>  27777890035288 14
67  => result =>  44945570212853 14
68  => result =>  72723460248141 14
69  => result =>  117669030460994 15
70  => result =>  190392490709135 15
71  => result =>  308061521170129 15
72  => result =>  498454011879264 15
73  => result =>  806515533049393 15
74  => result =>  1304969544928657 16
75  => result =>  2111485077978050 16
76  => result =>  3416454622906707 16
77  => result =>  5527939700884757 16
78  => result =>  8944394323791464 16
79  => result =>  14472334024676220 17
80  => result =>  23416728348467684 17
81  => result =>  37889062373143900 17
82  => result =>  61305790721611580 17
83  => result =>  99194853094755490 17
84  => result =>  160500643816367070 18
85  => result =>  259695496911122560 18
86  => result =>  420196140727489660 18
87  => result =>  679891637638612200 18
88  => result =>  1100087778366101900 19
89  => result =>  1779979416004714000 19
90  => result =>  2880067194370816000 19
91  => result =>  4660046610375530000 19
92  => result =>  7540113804746346000 19
 */

console.log('============================');