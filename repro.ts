import typia from "typia";

// ✅ 올바른 Discriminated Union
type UnionBug = 
  | { kind: "A"; value: string }
  | { kind: "B"; value: number };

const badInput = { 
  kind: "A", 
  value: 123  // ❌ kind="A"인데 number! string이어야 함
};

const result = typia.validate<UnionBug>(badInput);
console.log("Validation result:", result.success);  // 기대: false
