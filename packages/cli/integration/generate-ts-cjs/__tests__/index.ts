import execa from "execa";
import { dirname } from "path";
import { runCLI, installPackage } from "@kosko/test-utils";

const testDir = dirname(__dirname);
let result: execa.ExecaReturnValue;

beforeAll(async () => {
  await installPackage(testDir, "env");
});

beforeEach(async () => {
  result = await runCLI(["generate"], {
    cwd: testDir
  });
});

test("should return status code 0", () => {
  expect(result.exitCode).toEqual(0);
});

test("should import ts files", () => {
  expect(result.stdout).toMatchSnapshot();
});
