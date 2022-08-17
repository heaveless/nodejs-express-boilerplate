export const redisCaching =
  (expiration: number, keyPrefix: string): Function =>
  (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<() => void>
  ) => {
    return target;
  };
