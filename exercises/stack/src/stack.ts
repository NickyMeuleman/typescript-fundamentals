interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {
  private stack: T[];
  constructor() {
    this.stack = [];
  }
  length() {
    return this.stack.length;
  }
  print() {
    console.log(this.stack);
  }
  push(itemOrArray: T | T[]): IStack<T> {
    if (itemOrArray instanceof Array) {
      this.stack = this.stack.concat(itemOrArray);
    } else {
      this.stack.push(itemOrArray);
    }
    return this;
  }
  pop() {
    return this.stack.pop();
  }
}
