const isPalindrome = (word: string) => {
  if (!word.length) return;
  if (typeof word !== 'string') return;

  const reversed = word.split('').reverse().join('');
  console.log(reversed);
  return word.toLowerCase() == reversed.toLowerCase();
};

// console.log(isPalindrome('Kayak'));

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (!nums1.length || !m || !nums2.length || !n) return;

  let i = m - 1;        // last real element in nums1
  let j = n - 1;        // last element in nums2
  let k = m + n - 1;    // last position in nums1


  while (j >= 0) {
    if (i >= 0 && (nums1[i]!) > (nums2[j]!)) {
      nums1[k] = nums1[i];
      k--;
      i--;
    } else {
      nums1[k] = nums2[j];
      k--;
      j--;
    }
  }



  //   nums1.splice(m + n);
  // nums2.splice(n);
  // nums1.push(...nums2);
  // nums1.sort((accu, b) => a - b);
  // nums1 = nums1.filter(Boolean);
  // console.log(nums1);
}
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


async function sleep(millis: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, millis));
}

// let t = Date.now()
// sleep(200).then(() => console.log(Date.now() - t))

// interface Array<T> {
//   last(): T | -1;
// }

// Array.prototype.last = function () {
//   return this.length ? this[this.length - 1] : -1;
// };


// const arr = [];
// console.log('arr.last(): ', arr.last());


function isPalindromeInt(x: number) {
  const reversedInt = x.toString().split('').reverse().join('');
  return x.toString() === reversedInt;
};

// console.log(isPalindromeInt(112));

function romanToInt(s = 'LVIII') { // smaller value negate bigger value
  const romanvals = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
  type RomanKey = keyof typeof romanvals

  const pairs = s.split('') as RomanKey[];
  const nArr: number[] = [];

  for (let i = 0; i < pairs.length; i++) {
    // const prevSymVal = i - 1 < 1 ? 0 : romanvals[pairs[i - 1]!];
    // console.log('prevSymVal: ', prevSymVal);

    // const currentSymVal = romanvals[pairs[i]!];

    // const calculatedV = ((currentSymVal < prevSymVal && prevSymVal > 0)
    //   ? currentSymVal - prevSymVal
    //   : currentSymVal + prevSymVal)

    // nArr.push(calculatedV)
    // nArr.push(100)/

    nArr.push(romanvals[pairs[i]!]);
  }
  console.log("result: ", nArr.reduce((accu, curr) =>
    (accu < curr) ?
      curr - accu : accu + curr
    , 0))




  // first of all we will check which numericals does "s" has.
  // check if any of the given value makes negative pair in roman.
  // if it contains any negative pair, add it into an array



};
romanToInt("III")
romanToInt("LVIII")
romanToInt("MCMXCIV")


