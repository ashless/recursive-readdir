import * as fs from "fs-extra";
import type { Stats } from "fs-extra";

declare namespace RecursiveReaddir {
  type IgnoreFunction = (file: string, stats: fs.Stats) => boolean;
  type Ignores = ReadonlyArray<string | IgnoreFunction>;
  type Callback<T> = (err: Error | null, files: T) => void;
  type FileInfo<T extends boolean> = T extends true
    ? { path: string } & Stats
    : { path: string };

  interface readDir {
    <T extends boolean>(
      path: string,
      outputFileStats: T,
      ignores?: Ignores
    ): Promise<FileInfo<T>[]>;

    <T extends boolean>(
      path: string,
      outputFileStats: T,
      ignores: Ignores,
      callback: Callback<FileInfo<T>[]>
    ): void;
  }
}

declare var recursiveReadDir: RecursiveReaddir.readDir;
export = recursiveReadDir;
