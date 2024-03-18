function lengthOfLongestSubstring(s) {
  let charIndex = {};
  let maxLength = 0;
  let startIndex = 0;

  for (let endIndex = 0; endIndex < s.length; endIndex++) {
    const char = s[endIndex];

    if (charIndex[char] !== undefined && charIndex[char] >= startIndex) {
      startIndex = charIndex[char] + 1;
    }
    // Update the most recent index of the character
    charIndex[char] = endIndex;
    // Update maxLength if needed
    maxLength = Math.max(maxLength, endIndex - startIndex + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));
