import { existsSync, lstatSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "fs";
import { resolve } from "path";
import { IStorageAdapter } from "../IStorageAdapter";

export class LocalFileSystemStorageAdapter implements IStorageAdapter {

    public directory: string;

    constructor(directory: string = ".") {
        this.directory = resolve(
            process.cwd(), directory,
        );
    }

    public get(name: string): string {
        return readFileSync(resolve(
            this.directory,
            name,
        )).toString();
    }

    public delete(name: string): boolean {
        const resolvedFile = resolve(
            this.directory,
            name,
        );

        unlinkSync(resolvedFile);

        return !this.exists(resolvedFile);
    }
    public exists(name: string): boolean {
        return existsSync(resolve(
            this.directory,
            name,
        ));
    }
    public write(name: string, contents: string) {
        writeFileSync(resolve(
            this.directory,
            name,
        ), contents);
    }

    public rename(oldName: string, newName: string): boolean {
        const resolvedOldFile = resolve(
            this.directory,
            oldName,
        );

        const resolvedNewFile = resolve(
            this.directory,
            newName,
        );

        renameSync(resolvedOldFile, resolvedNewFile);

        return !this.exists(resolvedOldFile) && this.exists(resolvedNewFile);
    }

    public getLastAccessDate(name: string): Date {
        const resolvedFile = resolve(
            this.directory,
            name,
        );

        if (!this.exists(resolvedFile)) {
            throw new Error(`The given file does not exists: ${resolvedFile}`);

        }

        return lstatSync(resolvedFile).atime;
    }
}
