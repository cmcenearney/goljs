/*
  ======= Jasmine crib sheet ========

  matchers:
    not
    toBe
    toEqual
    toMatch
    toBeDefined
    toBeUndefined
    toBeNull
    toBeTruthy
    toBeFalsy
    toContain
    toBeLessThan
    toBeGreaterThan
    toBeCloseTo
    toThrow
    toThrowError
    toHaveBeenCalled
    toHaveBeenCalledWith

*/

describe("Cell", function() {

  beforeEach(function() {
    cell1 = new Cell(1,1);
    cell2 = new Cell(2,2);
  });

  it("should be able to instantiate", function() {
    expect(cell1.isAlive).toEqual(false);
  });
  
  it("should have a toString method", function() {
    expect(cell1.toString()).toBeDefined();
  });

  it("toString should join x + ',' + y", function() {
    expect(cell1.toString()).toEqual("1,1");
    expect(cell2.toString()).toEqual("2,2");
  });

});

describe("Set", function() {

  describe("error throwing", function() {

    it("should throw an error when asked to add an item with generic toString", function() {
      a = {};   
      expect( function(){set.add(a)} ).toThrow();  
    });

    it("should throw an error when asked to perform union with a non-Set", function() {
      a = {};   
      expect( function(){set.union(a)} ).toThrow();  
    });

  });

  describe("simple operations", function() {

    beforeEach(function() {
      set = new Set();
      cell = new Cell(2,2);
      set.add(cell);
    });

    it("should tell you if it contains an item", function() {
      expect(set.contains(cell)).toBe(true);
    });

    it("should be able to add an item", function() {
      expect(set.items[cell.toString()]).toBe(cell);
    });

    it("should be able to remove an item", function() {
      s = cell.toString();
      expect(set.remove(s)).toBe(true);
      expect(set.contains(s)).toBe(false);
    });

    it("should count it's items with size()", function() {
      expect(set.size()).toBe(1);
      cell2 = new Cell(2,3);
      set.add(cell2);
      expect(set.size()).toBe(2);
    });

  });

  describe("set operations", function() {

    beforeEach(function() {
      set = new Set();
      cell = new Cell(2,2);
      set.add(cell);
    });

    it("should perform set union", function() {
      cell2 = new Cell(2,3); cell3 = new Cell(3,3); cell4 = new Cell(4,3); cell5 = new Cell(5,3); cell6 = new Cell(6,3);
      set.add(cell2); set.add(cell3);
      set2 = new Set(); set2.add(cell4); set2.add(cell5); set2.add(cell6);
      set.union(set2);
      expect(set.size()).toBe(6);
      expect(set.contains(cell)).toBe(true);
      expect(set.contains(cell2)).toBe(true);
      expect(set.contains(cell3)).toBe(true);
      expect(set.contains(cell4)).toBe(true);
      expect(set.contains(cell5)).toBe(true);
      expect(set.contains(cell6)).toBe(true);
    });

    it("should perform set intersection", function() {
      pending();
    });

    it("should perform set substraction", function() {
      pending();
    });


  });

});








