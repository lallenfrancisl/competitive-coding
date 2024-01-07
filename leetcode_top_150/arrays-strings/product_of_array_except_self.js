/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const products = [...nums]

    let prefixProd = 1
    for (let i = 0; i < nums.length; i += 1) {
        products[i] = prefixProd
        prefixProd *= nums[i]
    }

    let postProd = 1
    for (let i = nums.length - 1; i >= 0; i -= 1) {
        products[i] *= postProd
        postProd *= nums[i]
    }

    return products
}
