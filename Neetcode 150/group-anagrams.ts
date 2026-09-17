class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    const map: Map<string, string[]> = new Map();

    for (const str of strs) {
      const sorted = [...str].sort().join("");
      if (!map.has(sorted)) {
        map.set(sorted, [str]);
      } else {
        map.get(sorted)?.push(str);
      }
    }

    return Array.from(map.values());
  }
}
