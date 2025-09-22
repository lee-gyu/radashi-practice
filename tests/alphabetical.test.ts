import * as _ from "radashi";

/**
 * language: en
 * Given an array of objects and a callback function used to determine the property to use for sorting,
 * return a new array with the objects sorted alphabetically. A third, and optional,
 * argument allows you to sort in descending order instead of the default ascending order.
 * For numerical sorting, see the sort function.
 * @link https://radashi.js.org/reference/array/alphabetical/
 *
 * language: ko
 * 객체 배열과 정렬에 사용할 속성을 결정하는 데 사용되는 콜백 함수가 주어지면 객체가 알파벳순으로 정렬된 새 배열을 반환합니다.
 * 세 번째 선택적 인수는 기본 오름차순 대신 내림차순으로 정렬할 수 있습니다.
 * 숫자 정렬의 경우 sort 함수를 참조하세요.
 */

describe("Alphabetical Order", () => {
	it("should sort an array of strings in alphabetical order", () => {
		const gods = [
			{
				name: "Ra",
				power: 100,
			},
			{
				name: "Zeus",
				power: 98,
			},
			{
				name: "Loki",
				power: 72,
			},
			{
				name: "Vishnu",
				power: 100,
			},
		] as const;

		expect(_.alphabetical(gods, (g) => g.name).map((g) => g.name)).toEqual([
			"Loki",
			"Ra",
			"Vishnu",
			"Zeus",
		]);

		expect(
			_.alphabetical(gods, (g) => g.name, "desc").map((g) => g.name),
		).toEqual(["Zeus", "Vishnu", "Ra", "Loki"]);
	});
});
