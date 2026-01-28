import typia from "typia";

interface BadUnion {
  oneOf: { type: "string" } | { type: "null" };
}

const input = { oneOf: { type: "null" } };
const result = typia.validate<BadUnion>(input);

console.log("BUG REPRO:", result);
// 예상 출력: { success: true, data: { oneOf: undefined } }
