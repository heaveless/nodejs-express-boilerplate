import { HttpContext, METADATA_KEY } from 'inversify-express-utils';

export const auth =
  (permissions: string[]): Function =>
  (
    target: Object,
    propertyKey: string,
    descriptor: TypedPropertyDescriptor<() => void>
  ) => {
    // const httpContext: HttpContext = Reflect.getMetadata;
    // console.log(target);
    // console.log(propertyKey);
    // console.log(
    //   Reflect.hasOwnMetadata(METADATA_KEY.controllerMethod, target.constructor)
    // );
    // console.log(Reflect.getMetadata(METADATA_KEY.httpContext));
    // console.log(Reflect);
    return target;
  };
