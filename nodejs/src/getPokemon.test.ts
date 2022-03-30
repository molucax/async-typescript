import { getPokemonList } from "../src/getPokemon";

describe("getPokemon", () => {
  it("should get list", async () => {
    const list = await getPokemonList()
    console.log("Running test...")
    expect(list.results[0].name).toBe("bulbasaur")
  })
})