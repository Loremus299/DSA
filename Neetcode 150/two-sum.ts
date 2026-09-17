class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      const dif = target - nums[i]!;

      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === dif) {
          return [i, j];
        }
      }
    }

    return [];
  }
}
