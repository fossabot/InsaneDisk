/**
 * The basic storage adapter
 *
 * @export
 * @interface IStorageAdapter
 */
export interface IStorageAdapter {
    /**
     * Returns the contents for the given key
     *
     * @param {string} name The name of the key
     * @returns {string} The contents
     * @memberof IStorageAdapter
     */
    get(name: string): string

    /**
     * Deletes the contents of the given entry
     *
     * @param {string} name The name of the key to delete
     * @returns {boolean} True when the key successfully removed
     * @memberof IStorageAdapter
     */
    delete(name: string): boolean

    /**
     * Returns true when the storage adapter
     * has an entry for the given key
     *
     * @param {string} name The name of the key
     * @returns {boolean} True when an entry exists for the given key
     * @memberof IStorageAdapter
     */
    has(name: string): boolean

    /**
     * Writes the given contents to the given key
     *
     * @param {string} name The name of the key
     * @param {string} contents The contents for the key
     * @returns {boolean} When the contents have been changed
     * @memberof IStorageAdapter
     */
    write(name: string, contents: string): boolean

    /**
     * Returns the last access date of the contents
     *
     * @param {string} name The name of the key
     * @returns {Date} The last access date
     * @throws When no entry exists for the given name
     * @memberof IStorageAdapter
     */
    getLastAccessDate(name: string): Date
}