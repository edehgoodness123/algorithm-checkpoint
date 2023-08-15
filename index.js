function analyzeSentence(sentence) {
    let wordCount = 0;
    let vowelCount = 0;
    
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase();
  
      // Count vowels (assuming a, e, i, o, u as vowels)
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        vowelCount++;
      }
  
      // Count words based on spaces
      if (char === ' ' && i !== 0 && i !== sentence.length - 1 && sentence[i - 1] !== ' ') {
        wordCount++;
      }
    }
    
    // Adding 1 to wordCount to account for the last word after the period
    wordCount++;
    
    return {
      numberOfWords: wordCount,
      numberOfVowels: vowelCount
    };
  }
  
  // Example usage
  const sentence = "This is sentence.";
  const analysis = analyzeSentence(sentence);
  console.log("Number of words:", analysis.numberOfWords);   
  console.log("Number of vowels:", analysis.numberOfVowels); 


  function findDistinctSum(set1, set2) {
    let sum = 0;
  
    for (const num1 of set1) {
      if (!set2.includes(num1)) {
        sum += num1;
      }
    }
  
    for (const num2 of set2) {
      if (!set1.includes(num2)) {
        sum += num2;
      }
    }
  
    return sum;
  }
  const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];

const distinctSum = findDistinctSum(set1, set2);
console.log("Distinct Sum:", distinctSum);
  
  