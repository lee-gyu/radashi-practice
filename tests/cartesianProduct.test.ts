/**
 * lang: en
 * Create an n-ary Cartesian product from the given arrays.
 * The inputs are arrays, and the output is an array of arrays representing all possible combinations where the first element is from the first array,
 * the second element is from the second array, and so on.
 *
 * lang: ko
 * 주어진 배열에서 n-진 카르테시안 곱을 만듭니다.
 * 입력은 배열이고 출력은 첫 번째 배열의 첫 번째 요소, 두 번째 배열의 두 번째 요소 등 모든 가능한 조합을 나타내는 배열의 배열입니다.
 *
 * @link https://en.wikipedia.org/wiki/Cartesian_product#n-ary_Cartesian_product
 */

import * as _ from "radashi";

describe("Cartesian Product", () => {
	it("should return the Cartesian product of the given arrays", () => {
		const array1 = [1, 2];
		const array2 = ["a", "b"];
		const array3 = [true, false];
		const result = _.cartesianProduct(array1, array2, array3);
		expect(result).toEqual([
			[1, "a", true],
			[1, "a", false],
			[1, "b", true],
			[1, "b", false],
			[2, "a", true],
			[2, "a", false],
			[2, "b", true],
			[2, "b", false],
		]);
	});
});
