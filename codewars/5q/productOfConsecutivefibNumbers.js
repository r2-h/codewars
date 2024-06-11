function productFib(prod){
  let nums = [0, 1]
  while (nums[0] * nums[1] < prod) {
    let temp = nums[1]
    nums[1] = nums[1] + nums[0]
    nums[0] = temp
  } 
  return nums.concat(nums[0] * nums[1] <= prod)
}
