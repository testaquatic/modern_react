import { beforeEach, describe, expect, test } from "vitest";
import { getTriangleArea } from "./MyUtil";

describe("getTriangleArea 함수", () => {
    beforeEach(() => {
        console.log(new Date().toLocaleString());
    });

    test("정상 패턴", () => {
        expect(getTriangleArea(10, 2)).toBe(10);
    });
});
