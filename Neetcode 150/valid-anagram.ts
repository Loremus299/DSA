class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    const sSize = s.length;
    if (sSize !== t.length) {
      return false;
    }

    const map: Map<string, number> = new Map();
    for (let i = 0; i < sSize; i++) {
      const sChar = s.charAt(i);
      const tChar = t.charAt(i);

      map.has(sChar) ? map.set(sChar, map.get(sChar)! + 1) : map.set(sChar, 1);
      map.has(tChar) ? map.set(tChar, map.get(tChar)! - 1) : map.set(tChar, -1);
    }

    return Array.from(map.values()).every((item) => item === 0);
  }
}
