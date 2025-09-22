import * as _ from "radashi";

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
