import { LocalFileSystemStorageAdapter } from "../LocalFileSystemStorageAdapter";

describe("LocalFileSystemStorageAdapter", () => {
    let localFileSystemStorageAdapter: LocalFileSystemStorageAdapter;

    beforeEach(() => {
        localFileSystemStorageAdapter = new LocalFileSystemStorageAdapter();
    });

    it("should be instantiatable", () => {
        expect(localFileSystemStorageAdapter).toBeInstanceOf(LocalFileSystemStorageAdapter);
    });

    it("should have the directory defined", () => {
        expect(localFileSystemStorageAdapter.directory).toBeDefined();
        expect(localFileSystemStorageAdapter.directory).not.toHaveLength(0);
    });
});
