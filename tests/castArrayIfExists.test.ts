/**
 * lang: en
 * The castArrayIfExists function ensures that a non-nullish input value is always returned as an array.
 * If the input is already an array, it returns a shallow copy of the array.
 * If the input is not an array, it wraps the input in a new array. Nullish values (null or undefined) are passed through as is.
 *
 * lang: ko
 * castArrayIfExists 함수는 nullish가 아닌 입력 값이 항상 배열로 반환되도록 합니다.
 * 입력이 이미 배열인 경우 배열의 얕은 복사본을 반환합니다.
 * 입력이 배열이 아닌 경우 입력을 새 배열로 래핑합니다. Nullish 값(null 또는 undefined)은 있는 그대로 전달됩니다.
 *
 */

import * as _ from "radashi";

describe("Cast Array If Exists", () => {
	it("should return the input value as an array if it exists", () => {
		expect(_.castArrayIfExists(1)).toEqual([1]);
		expect(_.castArrayIfExists("hello")).toEqual(["hello"]);
		expect(_.castArrayIfExists([1, 2, 3])).toEqual([1, 2, 3]);
		expect(_.castArrayIfExists(null)).toBeNull();
		expect(_.castArrayIfExists(undefined)).toBeUndefined();
	});
});
