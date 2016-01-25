describe("Todo", function() {
  it("adds an item from a form to a list", function() {
    var testItem = new Todo("wash dishes");
    expect(testItem.itemName).to.equal("wash dishes");
  });
});
