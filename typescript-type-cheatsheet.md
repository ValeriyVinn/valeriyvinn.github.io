# 📘 TypeScript Шпаргалка по Типах

Швидкий довідник для основних типів у TypeScript з прикладами.

---

## 🟦 Примітивні типи

```ts
let color: string = "blue";
let age: number = 25;
let isHappy: boolean = true;
let empty: null = null;
let nothing: undefined = undefined;
```

---

## 🟨 Масиви

```ts
let colors: string[] = ["red", "green", "blue"];
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ["hello", 42];
```

---

## 🟩 Кортежі (tuple)

```ts
let person: [string, number] = ["Alice", 30];
```

---

## 🟥 Об'єкти

```ts
let user: { name: string; age: number } = {
  name: "Bob",
  age: 40,
};
```

---

## 🟪 Any та Unknown

```ts
let something: any = "text";
something = 123;

let input: unknown = "data";
// input.toUpperCase(); ❌ потребує перевірки типу
```

---

## 🧭 Union та Literal Types

```ts
let status: "loading" | "success" | "error" = "loading";
let id: number | string = 123;

let direction: "left" | "right" = "left";
```

---

## 🔢 Enum

```ts
enum Size {
  Small,
  Medium,
  Large,
}
let tshirt: Size = Size.Medium;
```

---

## 🛠️ Функції

```ts
function add(a: number, b: number): number {
  return a + b;
}

let logMessage: () => void = () => {
  console.log("Hello");
};
```

---

## 🧵 Типи через `type` та `interface`

```ts
type Point = { x: number; y: number };
let p1: Point = { x: 10, y: 20 };

interface Person {
  name: string;
  age?: number; // необов'язковий
}
let user1: Person = { name: "Anna" };
```

---

## 🌀 Класи

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}
```

---

## 🧰 Узагальнення (Generics)

```ts
function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Hello");
```

---

## 📌 Тип `never` та `void`

```ts
function error(msg: string): never {
  throw new Error(msg);
}

function log(msg: string): void {
  console.log(msg);
}
```
