import * as fs from "fs";

declare namespace RecursiveReaddir {
  type IgnoreFunction = (file: string, stats: fs.Stats) => boolean;
  type Ignores = ReadonlyArray<string | IgnoreFunction>;
  type Callback = (error: Error, files: string[]) => void;
  interface readDir {
    (path: string, outputFileStats: boolean, ignores?: Ignores): Promise<
      string[]
    >;
    (path: string, outputFileStats: boolean, callback: Callback): void;
    (
      path: string,
      outputFileStats: boolean,
      ignores: Ignores,
      callback: Callback
    ): void;
  }
}

declare var recursiveReadDir: RecursiveReaddir.readDir;
export = recursiveReadDir;
