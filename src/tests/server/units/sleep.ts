import sleep from "@utils/sleep";

describe("delay", () => {

    it("returns after 2000ms", async () => {
   
      const delay = await sleep(2000);
    
      expect(delay).toBe(2000);
    });

});
