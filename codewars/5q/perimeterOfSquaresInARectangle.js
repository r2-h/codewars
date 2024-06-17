function perimeter(n) {
  if (n === 0) return 4  
  const nums = [1, 1]
  for (let i = 0; i < n ; i += 1) {
    if (nums.length === n + 1) {
      console.log(nums)
      return 4 * nums.reduce((acc, n) => acc + n, 0)
    } else {
      nums.push(nums[nums.length - 1] + nums[nums.length - 2])
    }
  }
}
