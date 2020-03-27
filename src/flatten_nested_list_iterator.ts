type NestedInteger = number | NestedInteger[];

function flatAll(arr: NestedInteger[], res?: number[]) {
  const result: number[] = res ?? [];
  arr.forEach(x => {
    if (Array.isArray(x)) {
      flatAll(x, result);
    } else {
      result.push(x);
    }
  });
  return result;
}

class NestedIterator implements IterableIterator<number | undefined> {
  private list: number[];
  [Symbol.iterator]() {
    return this;
  }

  constructor(nestedList: NestedInteger[]) {
    this.list = flatAll([...nestedList]);
  }

  next() {
    return { value: this.list.shift(), done: this.list.length === 0 };
  }
}

const i = new NestedIterator([[1, 1], 2, [1, 1]]);
for (let o = i.next(); o.done === false; o = i.next()) {
  console.log(o, i);
}

console.log(i.next(), i);
