/**
 * Example usage:
 *
 * // default depth of 3: (fastest)
 * type keys = Paths<SomeNestedObject> // returns "property" | "nested.property" | "nested.nested.property"
 *
 * // depth of 10: (can be slow)
 * type keys = Paths<SomeNestedObject, 10>
 *
 * // depth of 10 with keys of type string and number: (slowest)
 * type keys = Paths<SomeNestedObject, 10, string | number>
 */

type Join<
  Key,
  Previous,
  TKey extends number | string = string
> = Key extends TKey
  ? Previous extends TKey
    ? `${Key}${'' extends Previous ? '' : '.'}${Previous}`
    : never
  : never;

type Previous = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

export type Paths<
  TEntity,
  TDepth extends number = 3,
  TKey extends number | string = string
> = [TDepth] extends [never]
  ? never
  : TEntity extends object
  ? {
      [Key in keyof TEntity]-?: Key extends TKey
        ? `${Key}` | Join<Key, Paths<TEntity[Key], Previous[TDepth]>>
        : never;
    }[keyof TEntity]
  : '';