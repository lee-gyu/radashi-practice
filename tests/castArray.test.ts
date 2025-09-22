import * as _ from "radashi";

/**
 * lang: en
 * The castArray function ensures that the input value is always returned as an array.
 * If the input is already an array, it returns a shallow copy of the array. If the input is not an array, it wraps the input in a new array.
 *
 * lang: ko
 * castArray 함수는 입력 값이 항상 배열로 반환되도록 합니다.
 * 입력이 이미 배열인 경우 배열의 얕은 복사본을 반환합니다. 입력이 배열이 아닌 경우 입력을 새 배열로 래핑합니다.
 *
 * @link https://radashi.js.org/reference/array/castArray/
 */

describe("Cast Array", () => {
	it("should return the input value as an array", () => {
		expect(_.castArray(1)).toEqual([1]);
		expect(_.castArray("hello")).toEqual(["hello"]);
		expect(_.castArray([1, 2, 3])).toEqual([1, 2, 3]);
		expect(_.castArray(null)).toEqual([null]);
	});
});
