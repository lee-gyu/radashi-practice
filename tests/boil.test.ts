import * as _ from "radashi";

/**
 * lang: en
 * Given an array of items return the final item that wins the comparison condition.
 * Useful for more complicated min/max.
 * @link https://radashi.js.org/reference/array/boil/
 *
 * lang: ko
 * 항목 배열이 주어지면 비교 조건에서 이기는 마지막 항목을 반환합니다.
 * 더 복잡한 최소/최대에 유용합니다.
 */
describe("Boil", () => {
	it("should return the item that wins the comparison condition", () => {
		const numbers = [1, 2, 3, 4, 5];
		const result = _.boil(numbers, (a, b) => (a > b ? a : b));

		expect(result).toBe(5);
	});
});
