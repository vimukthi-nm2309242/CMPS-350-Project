
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Instructor
 * 
 */
export type Instructor = $Result.DefaultSelection<Prisma.$InstructorPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model CompletedCourse
 * 
 */
export type CompletedCourse = $Result.DefaultSelection<Prisma.$CompletedCoursePayload>
/**
 * Model CurrentCourse
 * 
 */
export type CurrentCourse = $Result.DefaultSelection<Prisma.$CurrentCoursePayload>
/**
 * Model RegisteredCourse
 * 
 */
export type RegisteredCourse = $Result.DefaultSelection<Prisma.$RegisteredCoursePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  student: 'student',
  instructor: 'instructor',
  admin: 'admin'
};

export type UserType = (typeof UserType)[keyof typeof UserType]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructor`: Exposes CRUD operations for the **Instructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Instructors
    * const instructors = await prisma.instructor.findMany()
    * ```
    */
  get instructor(): Prisma.InstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.completedCourse`: Exposes CRUD operations for the **CompletedCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompletedCourses
    * const completedCourses = await prisma.completedCourse.findMany()
    * ```
    */
  get completedCourse(): Prisma.CompletedCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currentCourse`: Exposes CRUD operations for the **CurrentCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrentCourses
    * const currentCourses = await prisma.currentCourse.findMany()
    * ```
    */
  get currentCourse(): Prisma.CurrentCourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registeredCourse`: Exposes CRUD operations for the **RegisteredCourse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RegisteredCourses
    * const registeredCourses = await prisma.registeredCourse.findMany()
    * ```
    */
  get registeredCourse(): Prisma.RegisteredCourseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Student: 'Student',
    Instructor: 'Instructor',
    Admin: 'Admin',
    Course: 'Course',
    CompletedCourse: 'CompletedCourse',
    CurrentCourse: 'CurrentCourse',
    RegisteredCourse: 'RegisteredCourse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "student" | "instructor" | "admin" | "course" | "completedCourse" | "currentCourse" | "registeredCourse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Instructor: {
        payload: Prisma.$InstructorPayload<ExtArgs>
        fields: Prisma.InstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findFirst: {
            args: Prisma.InstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          findMany: {
            args: Prisma.InstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          create: {
            args: Prisma.InstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          createMany: {
            args: Prisma.InstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          delete: {
            args: Prisma.InstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          update: {
            args: Prisma.InstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          deleteMany: {
            args: Prisma.InstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>[]
          }
          upsert: {
            args: Prisma.InstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorPayload>
          }
          aggregate: {
            args: Prisma.InstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructor>
          }
          groupBy: {
            args: Prisma.InstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      CompletedCourse: {
        payload: Prisma.$CompletedCoursePayload<ExtArgs>
        fields: Prisma.CompletedCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompletedCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompletedCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findFirst: {
            args: Prisma.CompletedCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompletedCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          findMany: {
            args: Prisma.CompletedCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          create: {
            args: Prisma.CompletedCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          createMany: {
            args: Prisma.CompletedCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompletedCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          delete: {
            args: Prisma.CompletedCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          update: {
            args: Prisma.CompletedCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          deleteMany: {
            args: Prisma.CompletedCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompletedCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompletedCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>[]
          }
          upsert: {
            args: Prisma.CompletedCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompletedCoursePayload>
          }
          aggregate: {
            args: Prisma.CompletedCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompletedCourse>
          }
          groupBy: {
            args: Prisma.CompletedCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompletedCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CompletedCourseCountAggregateOutputType> | number
          }
        }
      }
      CurrentCourse: {
        payload: Prisma.$CurrentCoursePayload<ExtArgs>
        fields: Prisma.CurrentCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrentCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrentCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          findFirst: {
            args: Prisma.CurrentCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrentCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          findMany: {
            args: Prisma.CurrentCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>[]
          }
          create: {
            args: Prisma.CurrentCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          createMany: {
            args: Prisma.CurrentCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurrentCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>[]
          }
          delete: {
            args: Prisma.CurrentCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          update: {
            args: Prisma.CurrentCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          deleteMany: {
            args: Prisma.CurrentCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrentCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurrentCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>[]
          }
          upsert: {
            args: Prisma.CurrentCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrentCoursePayload>
          }
          aggregate: {
            args: Prisma.CurrentCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrentCourse>
          }
          groupBy: {
            args: Prisma.CurrentCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrentCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrentCourseCountArgs<ExtArgs>
            result: $Utils.Optional<CurrentCourseCountAggregateOutputType> | number
          }
        }
      }
      RegisteredCourse: {
        payload: Prisma.$RegisteredCoursePayload<ExtArgs>
        fields: Prisma.RegisteredCourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisteredCourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisteredCourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          findFirst: {
            args: Prisma.RegisteredCourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisteredCourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          findMany: {
            args: Prisma.RegisteredCourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>[]
          }
          create: {
            args: Prisma.RegisteredCourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          createMany: {
            args: Prisma.RegisteredCourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisteredCourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>[]
          }
          delete: {
            args: Prisma.RegisteredCourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          update: {
            args: Prisma.RegisteredCourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          deleteMany: {
            args: Prisma.RegisteredCourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisteredCourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisteredCourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>[]
          }
          upsert: {
            args: Prisma.RegisteredCourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredCoursePayload>
          }
          aggregate: {
            args: Prisma.RegisteredCourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegisteredCourse>
          }
          groupBy: {
            args: Prisma.RegisteredCourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisteredCourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisteredCourseCountArgs<ExtArgs>
            result: $Utils.Optional<RegisteredCourseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    student?: StudentOmit
    instructor?: InstructorOmit
    admin?: AdminOmit
    course?: CourseOmit
    completedCourse?: CompletedCourseOmit
    currentCourse?: CurrentCourseOmit
    registeredCourse?: RegisteredCourseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    completedCourses: number
    currentCourses: number
    registeredCourses: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | StudentCountOutputTypeCountCompletedCoursesArgs
    currentCourses?: boolean | StudentCountOutputTypeCountCurrentCoursesArgs
    registeredCourses?: boolean | StudentCountOutputTypeCountRegisteredCoursesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCompletedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountCurrentCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentCourseWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountRegisteredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredCourseWhereInput
  }


  /**
   * Count Type InstructorCountOutputType
   */

  export type InstructorCountOutputType = {
    courses: number
  }

  export type InstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | InstructorCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorCountOutputType
     */
    select?: InstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorCountOutputType without action
   */
  export type InstructorCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    completedCourses: number
    currentCourses: number
    registeredCourses: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    completedCourses?: boolean | CourseCountOutputTypeCountCompletedCoursesArgs
    currentCourses?: boolean | CourseCountOutputTypeCountCurrentCoursesArgs
    registeredCourses?: boolean | CourseCountOutputTypeCountRegisteredCoursesArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCompletedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountCurrentCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentCourseWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountRegisteredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredCourseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    type: $Enums.UserType | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    type: $Enums.UserType | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    type: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    type: $Enums.UserType
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
    student?: boolean | User$studentArgs<ExtArgs>
    instructor?: boolean | User$instructorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "type", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | User$studentArgs<ExtArgs>
    instructor?: boolean | User$instructorArgs<ExtArgs>
    admin?: boolean | User$adminArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      instructor: Prisma.$InstructorPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      type: $Enums.UserType
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends User$studentArgs<ExtArgs> = {}>(args?: Subset<T, User$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    instructor<T extends User$instructorArgs<ExtArgs> = {}>(args?: Subset<T, User$instructorArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends User$adminArgs<ExtArgs> = {}>(args?: Subset<T, User$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'UserType'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.student
   */
  export type User$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * User.instructor
   */
  export type User$instructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
  }

  /**
   * User.admin
   */
  export type User$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedCourses?: boolean | Student$completedCoursesArgs<ExtArgs>
    currentCourses?: boolean | Student$currentCoursesArgs<ExtArgs>
    registeredCourses?: boolean | Student$registeredCoursesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    completedCourses?: boolean | Student$completedCoursesArgs<ExtArgs>
    currentCourses?: boolean | Student$currentCoursesArgs<ExtArgs>
    registeredCourses?: boolean | Student$registeredCoursesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      completedCourses: Prisma.$CompletedCoursePayload<ExtArgs>[]
      currentCourses: Prisma.$CurrentCoursePayload<ExtArgs>[]
      registeredCourses: Prisma.$RegisteredCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    completedCourses<T extends Student$completedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$completedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentCourses<T extends Student$currentCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$currentCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registeredCourses<T extends Student$registeredCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Student$registeredCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.completedCourses
   */
  export type Student$completedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * Student.currentCourses
   */
  export type Student$currentCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    where?: CurrentCourseWhereInput
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    cursor?: CurrentCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurrentCourseScalarFieldEnum | CurrentCourseScalarFieldEnum[]
  }

  /**
   * Student.registeredCourses
   */
  export type Student$registeredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    where?: RegisteredCourseWhereInput
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    cursor?: RegisteredCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisteredCourseScalarFieldEnum | RegisteredCourseScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Instructor
   */

  export type AggregateInstructor = {
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  export type InstructorMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type InstructorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type InstructorCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type InstructorMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InstructorMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type InstructorCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type InstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructor to aggregate.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Instructors
    **/
    _count?: true | InstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorMaxAggregateInputType
  }

  export type GetInstructorAggregateType<T extends InstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructor[P]>
      : GetScalarType<T[P], AggregateInstructor[P]>
  }




  export type InstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorWhereInput
    orderBy?: InstructorOrderByWithAggregationInput | InstructorOrderByWithAggregationInput[]
    by: InstructorScalarFieldEnum[] | InstructorScalarFieldEnum
    having?: InstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorCountAggregateInputType | true
    _min?: InstructorMinAggregateInputType
    _max?: InstructorMaxAggregateInputType
  }

  export type InstructorGroupByOutputType = {
    id: string
    userId: string
    _count: InstructorCountAggregateOutputType | null
    _min: InstructorMinAggregateOutputType | null
    _max: InstructorMaxAggregateOutputType | null
  }

  type GetInstructorGroupByPayload<T extends InstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorGroupByOutputType[P]>
        }
      >
    >


  export type InstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | Instructor$coursesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructor"]>

  export type InstructorSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type InstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["instructor"]>
  export type InstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | Instructor$coursesArgs<ExtArgs>
    _count?: boolean | InstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Instructor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["instructor"]>
    composites: {}
  }

  type InstructorGetPayload<S extends boolean | null | undefined | InstructorDefaultArgs> = $Result.GetResult<Prisma.$InstructorPayload, S>

  type InstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorCountAggregateInputType | true
    }

  export interface InstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Instructor'], meta: { name: 'Instructor' } }
    /**
     * Find zero or one Instructor that matches the filter.
     * @param {InstructorFindUniqueArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorFindUniqueArgs>(args: SelectSubset<T, InstructorFindUniqueArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Instructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorFindUniqueOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorFindFirstArgs>(args?: SelectSubset<T, InstructorFindFirstArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Instructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindFirstOrThrowArgs} args - Arguments to find a Instructor
     * @example
     * // Get one Instructor
     * const instructor = await prisma.instructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Instructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instructors
     * const instructors = await prisma.instructor.findMany()
     * 
     * // Get first 10 Instructors
     * const instructors = await prisma.instructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorWithIdOnly = await prisma.instructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorFindManyArgs>(args?: SelectSubset<T, InstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Instructor.
     * @param {InstructorCreateArgs} args - Arguments to create a Instructor.
     * @example
     * // Create one Instructor
     * const Instructor = await prisma.instructor.create({
     *   data: {
     *     // ... data to create a Instructor
     *   }
     * })
     * 
     */
    create<T extends InstructorCreateArgs>(args: SelectSubset<T, InstructorCreateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Instructors.
     * @param {InstructorCreateManyArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorCreateManyArgs>(args?: SelectSubset<T, InstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Instructors and returns the data saved in the database.
     * @param {InstructorCreateManyAndReturnArgs} args - Arguments to create many Instructors.
     * @example
     * // Create many Instructors
     * const instructor = await prisma.instructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Instructor.
     * @param {InstructorDeleteArgs} args - Arguments to delete one Instructor.
     * @example
     * // Delete one Instructor
     * const Instructor = await prisma.instructor.delete({
     *   where: {
     *     // ... filter to delete one Instructor
     *   }
     * })
     * 
     */
    delete<T extends InstructorDeleteArgs>(args: SelectSubset<T, InstructorDeleteArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Instructor.
     * @param {InstructorUpdateArgs} args - Arguments to update one Instructor.
     * @example
     * // Update one Instructor
     * const instructor = await prisma.instructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorUpdateArgs>(args: SelectSubset<T, InstructorUpdateArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Instructors.
     * @param {InstructorDeleteManyArgs} args - Arguments to filter Instructors to delete.
     * @example
     * // Delete a few Instructors
     * const { count } = await prisma.instructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorDeleteManyArgs>(args?: SelectSubset<T, InstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorUpdateManyArgs>(args: SelectSubset<T, InstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Instructors and returns the data updated in the database.
     * @param {InstructorUpdateManyAndReturnArgs} args - Arguments to update many Instructors.
     * @example
     * // Update many Instructors
     * const instructor = await prisma.instructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Instructors and only return the `id`
     * const instructorWithIdOnly = await prisma.instructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Instructor.
     * @param {InstructorUpsertArgs} args - Arguments to update or create a Instructor.
     * @example
     * // Update or create a Instructor
     * const instructor = await prisma.instructor.upsert({
     *   create: {
     *     // ... data to create a Instructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instructor we want to update
     *   }
     * })
     */
    upsert<T extends InstructorUpsertArgs>(args: SelectSubset<T, InstructorUpsertArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Instructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorCountArgs} args - Arguments to filter Instructors to count.
     * @example
     * // Count the number of Instructors
     * const count = await prisma.instructor.count({
     *   where: {
     *     // ... the filter for the Instructors we want to count
     *   }
     * })
    **/
    count<T extends InstructorCountArgs>(
      args?: Subset<T, InstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InstructorAggregateArgs>(args: Subset<T, InstructorAggregateArgs>): Prisma.PrismaPromise<GetInstructorAggregateType<T>>

    /**
     * Group by Instructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorGroupByArgs['orderBy'] }
        : { orderBy?: InstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Instructor model
   */
  readonly fields: InstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Instructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends Instructor$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Instructor$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Instructor model
   */
  interface InstructorFieldRefs {
    readonly id: FieldRef<"Instructor", 'String'>
    readonly userId: FieldRef<"Instructor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Instructor findUnique
   */
  export type InstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findUniqueOrThrow
   */
  export type InstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor findFirst
   */
  export type InstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findFirstOrThrow
   */
  export type InstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructor to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Instructors.
     */
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor findMany
   */
  export type InstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter, which Instructors to fetch.
     */
    where?: InstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Instructors to fetch.
     */
    orderBy?: InstructorOrderByWithRelationInput | InstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Instructors.
     */
    cursor?: InstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Instructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Instructors.
     */
    skip?: number
    distinct?: InstructorScalarFieldEnum | InstructorScalarFieldEnum[]
  }

  /**
   * Instructor create
   */
  export type InstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Instructor.
     */
    data: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
  }

  /**
   * Instructor createMany
   */
  export type InstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
  }

  /**
   * Instructor createManyAndReturn
   */
  export type InstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Instructors.
     */
    data: InstructorCreateManyInput | InstructorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor update
   */
  export type InstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Instructor.
     */
    data: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
    /**
     * Choose, which Instructor to update.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor updateMany
   */
  export type InstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
  }

  /**
   * Instructor updateManyAndReturn
   */
  export type InstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * The data used to update Instructors.
     */
    data: XOR<InstructorUpdateManyMutationInput, InstructorUncheckedUpdateManyInput>
    /**
     * Filter which Instructors to update
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Instructor upsert
   */
  export type InstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Instructor to update in case it exists.
     */
    where: InstructorWhereUniqueInput
    /**
     * In case the Instructor found by the `where` argument doesn't exist, create a new Instructor with this data.
     */
    create: XOR<InstructorCreateInput, InstructorUncheckedCreateInput>
    /**
     * In case the Instructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorUpdateInput, InstructorUncheckedUpdateInput>
  }

  /**
   * Instructor delete
   */
  export type InstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    /**
     * Filter which Instructor to delete.
     */
    where: InstructorWhereUniqueInput
  }

  /**
   * Instructor deleteMany
   */
  export type InstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Instructors to delete
     */
    where?: InstructorWhereInput
    /**
     * Limit how many Instructors to delete.
     */
    limit?: number
  }

  /**
   * Instructor.courses
   */
  export type Instructor$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Instructor without action
   */
  export type InstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    userId: string
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly userId: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    availableSeats: number | null
  }

  export type CourseSumAggregateOutputType = {
    availableSeats: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    courseID: string | null
    courseName: string | null
    code: string | null
    category: string | null
    description: string | null
    instructor: string | null
    instructorId: string | null
    openForRegistration: boolean | null
    status: string | null
    availableSeats: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    courseID: string | null
    courseName: string | null
    code: string | null
    category: string | null
    description: string | null
    instructor: string | null
    instructorId: string | null
    openForRegistration: boolean | null
    status: string | null
    availableSeats: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    courseID: number
    courseName: number
    code: number
    category: number
    description: number
    instructor: number
    instructorId: number
    openForRegistration: number
    status: number
    availableSeats: number
    prerequisites: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    availableSeats?: true
  }

  export type CourseSumAggregateInputType = {
    availableSeats?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    courseID?: true
    courseName?: true
    code?: true
    category?: true
    description?: true
    instructor?: true
    instructorId?: true
    openForRegistration?: true
    status?: true
    availableSeats?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    courseID?: true
    courseName?: true
    code?: true
    category?: true
    description?: true
    instructor?: true
    instructorId?: true
    openForRegistration?: true
    status?: true
    availableSeats?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    courseID?: true
    courseName?: true
    code?: true
    category?: true
    description?: true
    instructor?: true
    instructorId?: true
    openForRegistration?: true
    status?: true
    availableSeats?: true
    prerequisites?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    courseID: string
    courseName: string
    code: string | null
    category: string | null
    description: string | null
    instructor: string | null
    instructorId: string | null
    openForRegistration: boolean
    status: string
    availableSeats: number
    prerequisites: JsonValue | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseID?: boolean
    courseName?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    instructorId?: boolean
    openForRegistration?: boolean
    status?: boolean
    availableSeats?: boolean
    prerequisites?: boolean
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
    completedCourses?: boolean | Course$completedCoursesArgs<ExtArgs>
    currentCourses?: boolean | Course$currentCoursesArgs<ExtArgs>
    registeredCourses?: boolean | Course$registeredCoursesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseID?: boolean
    courseName?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    instructorId?: boolean
    openForRegistration?: boolean
    status?: boolean
    availableSeats?: boolean
    prerequisites?: boolean
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    courseID?: boolean
    courseName?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    instructorId?: boolean
    openForRegistration?: boolean
    status?: boolean
    availableSeats?: boolean
    prerequisites?: boolean
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    courseID?: boolean
    courseName?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    instructor?: boolean
    instructorId?: boolean
    openForRegistration?: boolean
    status?: boolean
    availableSeats?: boolean
    prerequisites?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "courseID" | "courseName" | "code" | "category" | "description" | "instructor" | "instructorId" | "openForRegistration" | "status" | "availableSeats" | "prerequisites", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
    completedCourses?: boolean | Course$completedCoursesArgs<ExtArgs>
    currentCourses?: boolean | Course$currentCoursesArgs<ExtArgs>
    registeredCourses?: boolean | Course$registeredCoursesArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorRelation?: boolean | Course$instructorRelationArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructorRelation: Prisma.$InstructorPayload<ExtArgs> | null
      completedCourses: Prisma.$CompletedCoursePayload<ExtArgs>[]
      currentCourses: Prisma.$CurrentCoursePayload<ExtArgs>[]
      registeredCourses: Prisma.$RegisteredCoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      courseID: string
      courseName: string
      code: string | null
      category: string | null
      description: string | null
      instructor: string | null
      instructorId: string | null
      openForRegistration: boolean
      status: string
      availableSeats: number
      prerequisites: Prisma.JsonValue | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructorRelation<T extends Course$instructorRelationArgs<ExtArgs> = {}>(args?: Subset<T, Course$instructorRelationArgs<ExtArgs>>): Prisma__InstructorClient<$Result.GetResult<Prisma.$InstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    completedCourses<T extends Course$completedCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$completedCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    currentCourses<T extends Course$currentCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$currentCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    registeredCourses<T extends Course$registeredCoursesArgs<ExtArgs> = {}>(args?: Subset<T, Course$registeredCoursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly courseID: FieldRef<"Course", 'String'>
    readonly courseName: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly category: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly instructor: FieldRef<"Course", 'String'>
    readonly instructorId: FieldRef<"Course", 'String'>
    readonly openForRegistration: FieldRef<"Course", 'Boolean'>
    readonly status: FieldRef<"Course", 'String'>
    readonly availableSeats: FieldRef<"Course", 'Int'>
    readonly prerequisites: FieldRef<"Course", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.instructorRelation
   */
  export type Course$instructorRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Instructor
     */
    select?: InstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Instructor
     */
    omit?: InstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorInclude<ExtArgs> | null
    where?: InstructorWhereInput
  }

  /**
   * Course.completedCourses
   */
  export type Course$completedCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    cursor?: CompletedCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * Course.currentCourses
   */
  export type Course$currentCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    where?: CurrentCourseWhereInput
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    cursor?: CurrentCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CurrentCourseScalarFieldEnum | CurrentCourseScalarFieldEnum[]
  }

  /**
   * Course.registeredCourses
   */
  export type Course$registeredCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    where?: RegisteredCourseWhereInput
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    cursor?: RegisteredCourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegisteredCourseScalarFieldEnum | RegisteredCourseScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model CompletedCourse
   */

  export type AggregateCompletedCourse = {
    _count: CompletedCourseCountAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  export type CompletedCourseMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type CompletedCourseMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type CompletedCourseCountAggregateOutputType = {
    id: number
    studentId: number
    courseId: number
    grade: number
    _all: number
  }


  export type CompletedCourseMinAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type CompletedCourseMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type CompletedCourseCountAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
    _all?: true
  }

  export type CompletedCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourse to aggregate.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompletedCourses
    **/
    _count?: true | CompletedCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompletedCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type GetCompletedCourseAggregateType<T extends CompletedCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCompletedCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompletedCourse[P]>
      : GetScalarType<T[P], AggregateCompletedCourse[P]>
  }




  export type CompletedCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompletedCourseWhereInput
    orderBy?: CompletedCourseOrderByWithAggregationInput | CompletedCourseOrderByWithAggregationInput[]
    by: CompletedCourseScalarFieldEnum[] | CompletedCourseScalarFieldEnum
    having?: CompletedCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompletedCourseCountAggregateInputType | true
    _min?: CompletedCourseMinAggregateInputType
    _max?: CompletedCourseMaxAggregateInputType
  }

  export type CompletedCourseGroupByOutputType = {
    id: string
    studentId: string
    courseId: string
    grade: string
    _count: CompletedCourseCountAggregateOutputType | null
    _min: CompletedCourseMinAggregateOutputType | null
    _max: CompletedCourseMaxAggregateOutputType | null
  }

  type GetCompletedCourseGroupByPayload<T extends CompletedCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompletedCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompletedCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CompletedCourseGroupByOutputType[P]>
        }
      >
    >


  export type CompletedCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["completedCourse"]>

  export type CompletedCourseSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
  }

  export type CompletedCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseId" | "grade", ExtArgs["result"]["completedCourse"]>
  export type CompletedCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CompletedCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CompletedCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompletedCourse"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseId: string
      grade: string
    }, ExtArgs["result"]["completedCourse"]>
    composites: {}
  }

  type CompletedCourseGetPayload<S extends boolean | null | undefined | CompletedCourseDefaultArgs> = $Result.GetResult<Prisma.$CompletedCoursePayload, S>

  type CompletedCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompletedCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompletedCourseCountAggregateInputType | true
    }

  export interface CompletedCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompletedCourse'], meta: { name: 'CompletedCourse' } }
    /**
     * Find zero or one CompletedCourse that matches the filter.
     * @param {CompletedCourseFindUniqueArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompletedCourseFindUniqueArgs>(args: SelectSubset<T, CompletedCourseFindUniqueArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompletedCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompletedCourseFindUniqueOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompletedCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CompletedCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompletedCourseFindFirstArgs>(args?: SelectSubset<T, CompletedCourseFindFirstArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompletedCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindFirstOrThrowArgs} args - Arguments to find a CompletedCourse
     * @example
     * // Get one CompletedCourse
     * const completedCourse = await prisma.completedCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompletedCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CompletedCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompletedCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany()
     * 
     * // Get first 10 CompletedCourses
     * const completedCourses = await prisma.completedCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompletedCourseFindManyArgs>(args?: SelectSubset<T, CompletedCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompletedCourse.
     * @param {CompletedCourseCreateArgs} args - Arguments to create a CompletedCourse.
     * @example
     * // Create one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.create({
     *   data: {
     *     // ... data to create a CompletedCourse
     *   }
     * })
     * 
     */
    create<T extends CompletedCourseCreateArgs>(args: SelectSubset<T, CompletedCourseCreateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompletedCourses.
     * @param {CompletedCourseCreateManyArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompletedCourseCreateManyArgs>(args?: SelectSubset<T, CompletedCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompletedCourses and returns the data saved in the database.
     * @param {CompletedCourseCreateManyAndReturnArgs} args - Arguments to create many CompletedCourses.
     * @example
     * // Create many CompletedCourses
     * const completedCourse = await prisma.completedCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompletedCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CompletedCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompletedCourse.
     * @param {CompletedCourseDeleteArgs} args - Arguments to delete one CompletedCourse.
     * @example
     * // Delete one CompletedCourse
     * const CompletedCourse = await prisma.completedCourse.delete({
     *   where: {
     *     // ... filter to delete one CompletedCourse
     *   }
     * })
     * 
     */
    delete<T extends CompletedCourseDeleteArgs>(args: SelectSubset<T, CompletedCourseDeleteArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompletedCourse.
     * @param {CompletedCourseUpdateArgs} args - Arguments to update one CompletedCourse.
     * @example
     * // Update one CompletedCourse
     * const completedCourse = await prisma.completedCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompletedCourseUpdateArgs>(args: SelectSubset<T, CompletedCourseUpdateArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompletedCourses.
     * @param {CompletedCourseDeleteManyArgs} args - Arguments to filter CompletedCourses to delete.
     * @example
     * // Delete a few CompletedCourses
     * const { count } = await prisma.completedCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompletedCourseDeleteManyArgs>(args?: SelectSubset<T, CompletedCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompletedCourseUpdateManyArgs>(args: SelectSubset<T, CompletedCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompletedCourses and returns the data updated in the database.
     * @param {CompletedCourseUpdateManyAndReturnArgs} args - Arguments to update many CompletedCourses.
     * @example
     * // Update many CompletedCourses
     * const completedCourse = await prisma.completedCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompletedCourses and only return the `id`
     * const completedCourseWithIdOnly = await prisma.completedCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompletedCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CompletedCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompletedCourse.
     * @param {CompletedCourseUpsertArgs} args - Arguments to update or create a CompletedCourse.
     * @example
     * // Update or create a CompletedCourse
     * const completedCourse = await prisma.completedCourse.upsert({
     *   create: {
     *     // ... data to create a CompletedCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompletedCourse we want to update
     *   }
     * })
     */
    upsert<T extends CompletedCourseUpsertArgs>(args: SelectSubset<T, CompletedCourseUpsertArgs<ExtArgs>>): Prisma__CompletedCourseClient<$Result.GetResult<Prisma.$CompletedCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompletedCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseCountArgs} args - Arguments to filter CompletedCourses to count.
     * @example
     * // Count the number of CompletedCourses
     * const count = await prisma.completedCourse.count({
     *   where: {
     *     // ... the filter for the CompletedCourses we want to count
     *   }
     * })
    **/
    count<T extends CompletedCourseCountArgs>(
      args?: Subset<T, CompletedCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompletedCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompletedCourseAggregateArgs>(args: Subset<T, CompletedCourseAggregateArgs>): Prisma.PrismaPromise<GetCompletedCourseAggregateType<T>>

    /**
     * Group by CompletedCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompletedCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompletedCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompletedCourseGroupByArgs['orderBy'] }
        : { orderBy?: CompletedCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompletedCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompletedCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompletedCourse model
   */
  readonly fields: CompletedCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompletedCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompletedCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompletedCourse model
   */
  interface CompletedCourseFieldRefs {
    readonly id: FieldRef<"CompletedCourse", 'String'>
    readonly studentId: FieldRef<"CompletedCourse", 'String'>
    readonly courseId: FieldRef<"CompletedCourse", 'String'>
    readonly grade: FieldRef<"CompletedCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompletedCourse findUnique
   */
  export type CompletedCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findUniqueOrThrow
   */
  export type CompletedCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse findFirst
   */
  export type CompletedCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findFirstOrThrow
   */
  export type CompletedCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourse to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompletedCourses.
     */
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse findMany
   */
  export type CompletedCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter, which CompletedCourses to fetch.
     */
    where?: CompletedCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompletedCourses to fetch.
     */
    orderBy?: CompletedCourseOrderByWithRelationInput | CompletedCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompletedCourses.
     */
    cursor?: CompletedCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompletedCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompletedCourses.
     */
    skip?: number
    distinct?: CompletedCourseScalarFieldEnum | CompletedCourseScalarFieldEnum[]
  }

  /**
   * CompletedCourse create
   */
  export type CompletedCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CompletedCourse.
     */
    data: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
  }

  /**
   * CompletedCourse createMany
   */
  export type CompletedCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
  }

  /**
   * CompletedCourse createManyAndReturn
   */
  export type CompletedCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CompletedCourses.
     */
    data: CompletedCourseCreateManyInput | CompletedCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse update
   */
  export type CompletedCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CompletedCourse.
     */
    data: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
    /**
     * Choose, which CompletedCourse to update.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse updateMany
   */
  export type CompletedCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
  }

  /**
   * CompletedCourse updateManyAndReturn
   */
  export type CompletedCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * The data used to update CompletedCourses.
     */
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyInput>
    /**
     * Filter which CompletedCourses to update
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompletedCourse upsert
   */
  export type CompletedCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CompletedCourse to update in case it exists.
     */
    where: CompletedCourseWhereUniqueInput
    /**
     * In case the CompletedCourse found by the `where` argument doesn't exist, create a new CompletedCourse with this data.
     */
    create: XOR<CompletedCourseCreateInput, CompletedCourseUncheckedCreateInput>
    /**
     * In case the CompletedCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompletedCourseUpdateInput, CompletedCourseUncheckedUpdateInput>
  }

  /**
   * CompletedCourse delete
   */
  export type CompletedCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
    /**
     * Filter which CompletedCourse to delete.
     */
    where: CompletedCourseWhereUniqueInput
  }

  /**
   * CompletedCourse deleteMany
   */
  export type CompletedCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompletedCourses to delete
     */
    where?: CompletedCourseWhereInput
    /**
     * Limit how many CompletedCourses to delete.
     */
    limit?: number
  }

  /**
   * CompletedCourse without action
   */
  export type CompletedCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompletedCourse
     */
    select?: CompletedCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompletedCourse
     */
    omit?: CompletedCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompletedCourseInclude<ExtArgs> | null
  }


  /**
   * Model CurrentCourse
   */

  export type AggregateCurrentCourse = {
    _count: CurrentCourseCountAggregateOutputType | null
    _min: CurrentCourseMinAggregateOutputType | null
    _max: CurrentCourseMaxAggregateOutputType | null
  }

  export type CurrentCourseMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type CurrentCourseMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
    grade: string | null
  }

  export type CurrentCourseCountAggregateOutputType = {
    id: number
    studentId: number
    courseId: number
    grade: number
    _all: number
  }


  export type CurrentCourseMinAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type CurrentCourseMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
  }

  export type CurrentCourseCountAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    grade?: true
    _all?: true
  }

  export type CurrentCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentCourse to aggregate.
     */
    where?: CurrentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentCourses to fetch.
     */
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrentCourses
    **/
    _count?: true | CurrentCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrentCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrentCourseMaxAggregateInputType
  }

  export type GetCurrentCourseAggregateType<T extends CurrentCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrentCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrentCourse[P]>
      : GetScalarType<T[P], AggregateCurrentCourse[P]>
  }




  export type CurrentCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrentCourseWhereInput
    orderBy?: CurrentCourseOrderByWithAggregationInput | CurrentCourseOrderByWithAggregationInput[]
    by: CurrentCourseScalarFieldEnum[] | CurrentCourseScalarFieldEnum
    having?: CurrentCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrentCourseCountAggregateInputType | true
    _min?: CurrentCourseMinAggregateInputType
    _max?: CurrentCourseMaxAggregateInputType
  }

  export type CurrentCourseGroupByOutputType = {
    id: string
    studentId: string
    courseId: string
    grade: string | null
    _count: CurrentCourseCountAggregateOutputType | null
    _min: CurrentCourseMinAggregateOutputType | null
    _max: CurrentCourseMaxAggregateOutputType | null
  }

  type GetCurrentCourseGroupByPayload<T extends CurrentCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrentCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrentCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrentCourseGroupByOutputType[P]>
            : GetScalarType<T[P], CurrentCourseGroupByOutputType[P]>
        }
      >
    >


  export type CurrentCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentCourse"]>

  export type CurrentCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentCourse"]>

  export type CurrentCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["currentCourse"]>

  export type CurrentCourseSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    grade?: boolean
  }

  export type CurrentCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseId" | "grade", ExtArgs["result"]["currentCourse"]>
  export type CurrentCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CurrentCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type CurrentCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $CurrentCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrentCourse"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseId: string
      grade: string | null
    }, ExtArgs["result"]["currentCourse"]>
    composites: {}
  }

  type CurrentCourseGetPayload<S extends boolean | null | undefined | CurrentCourseDefaultArgs> = $Result.GetResult<Prisma.$CurrentCoursePayload, S>

  type CurrentCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrentCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrentCourseCountAggregateInputType | true
    }

  export interface CurrentCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrentCourse'], meta: { name: 'CurrentCourse' } }
    /**
     * Find zero or one CurrentCourse that matches the filter.
     * @param {CurrentCourseFindUniqueArgs} args - Arguments to find a CurrentCourse
     * @example
     * // Get one CurrentCourse
     * const currentCourse = await prisma.currentCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrentCourseFindUniqueArgs>(args: SelectSubset<T, CurrentCourseFindUniqueArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurrentCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrentCourseFindUniqueOrThrowArgs} args - Arguments to find a CurrentCourse
     * @example
     * // Get one CurrentCourse
     * const currentCourse = await prisma.currentCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrentCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrentCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrentCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseFindFirstArgs} args - Arguments to find a CurrentCourse
     * @example
     * // Get one CurrentCourse
     * const currentCourse = await prisma.currentCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrentCourseFindFirstArgs>(args?: SelectSubset<T, CurrentCourseFindFirstArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrentCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseFindFirstOrThrowArgs} args - Arguments to find a CurrentCourse
     * @example
     * // Get one CurrentCourse
     * const currentCourse = await prisma.currentCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrentCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrentCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrentCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrentCourses
     * const currentCourses = await prisma.currentCourse.findMany()
     * 
     * // Get first 10 CurrentCourses
     * const currentCourses = await prisma.currentCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currentCourseWithIdOnly = await prisma.currentCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrentCourseFindManyArgs>(args?: SelectSubset<T, CurrentCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurrentCourse.
     * @param {CurrentCourseCreateArgs} args - Arguments to create a CurrentCourse.
     * @example
     * // Create one CurrentCourse
     * const CurrentCourse = await prisma.currentCourse.create({
     *   data: {
     *     // ... data to create a CurrentCourse
     *   }
     * })
     * 
     */
    create<T extends CurrentCourseCreateArgs>(args: SelectSubset<T, CurrentCourseCreateArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurrentCourses.
     * @param {CurrentCourseCreateManyArgs} args - Arguments to create many CurrentCourses.
     * @example
     * // Create many CurrentCourses
     * const currentCourse = await prisma.currentCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrentCourseCreateManyArgs>(args?: SelectSubset<T, CurrentCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CurrentCourses and returns the data saved in the database.
     * @param {CurrentCourseCreateManyAndReturnArgs} args - Arguments to create many CurrentCourses.
     * @example
     * // Create many CurrentCourses
     * const currentCourse = await prisma.currentCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CurrentCourses and only return the `id`
     * const currentCourseWithIdOnly = await prisma.currentCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurrentCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CurrentCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CurrentCourse.
     * @param {CurrentCourseDeleteArgs} args - Arguments to delete one CurrentCourse.
     * @example
     * // Delete one CurrentCourse
     * const CurrentCourse = await prisma.currentCourse.delete({
     *   where: {
     *     // ... filter to delete one CurrentCourse
     *   }
     * })
     * 
     */
    delete<T extends CurrentCourseDeleteArgs>(args: SelectSubset<T, CurrentCourseDeleteArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurrentCourse.
     * @param {CurrentCourseUpdateArgs} args - Arguments to update one CurrentCourse.
     * @example
     * // Update one CurrentCourse
     * const currentCourse = await prisma.currentCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrentCourseUpdateArgs>(args: SelectSubset<T, CurrentCourseUpdateArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurrentCourses.
     * @param {CurrentCourseDeleteManyArgs} args - Arguments to filter CurrentCourses to delete.
     * @example
     * // Delete a few CurrentCourses
     * const { count } = await prisma.currentCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrentCourseDeleteManyArgs>(args?: SelectSubset<T, CurrentCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrentCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrentCourses
     * const currentCourse = await prisma.currentCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrentCourseUpdateManyArgs>(args: SelectSubset<T, CurrentCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrentCourses and returns the data updated in the database.
     * @param {CurrentCourseUpdateManyAndReturnArgs} args - Arguments to update many CurrentCourses.
     * @example
     * // Update many CurrentCourses
     * const currentCourse = await prisma.currentCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CurrentCourses and only return the `id`
     * const currentCourseWithIdOnly = await prisma.currentCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurrentCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CurrentCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CurrentCourse.
     * @param {CurrentCourseUpsertArgs} args - Arguments to update or create a CurrentCourse.
     * @example
     * // Update or create a CurrentCourse
     * const currentCourse = await prisma.currentCourse.upsert({
     *   create: {
     *     // ... data to create a CurrentCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrentCourse we want to update
     *   }
     * })
     */
    upsert<T extends CurrentCourseUpsertArgs>(args: SelectSubset<T, CurrentCourseUpsertArgs<ExtArgs>>): Prisma__CurrentCourseClient<$Result.GetResult<Prisma.$CurrentCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurrentCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseCountArgs} args - Arguments to filter CurrentCourses to count.
     * @example
     * // Count the number of CurrentCourses
     * const count = await prisma.currentCourse.count({
     *   where: {
     *     // ... the filter for the CurrentCourses we want to count
     *   }
     * })
    **/
    count<T extends CurrentCourseCountArgs>(
      args?: Subset<T, CurrentCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrentCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrentCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurrentCourseAggregateArgs>(args: Subset<T, CurrentCourseAggregateArgs>): Prisma.PrismaPromise<GetCurrentCourseAggregateType<T>>

    /**
     * Group by CurrentCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrentCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurrentCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrentCourseGroupByArgs['orderBy'] }
        : { orderBy?: CurrentCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurrentCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrentCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrentCourse model
   */
  readonly fields: CurrentCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrentCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrentCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurrentCourse model
   */
  interface CurrentCourseFieldRefs {
    readonly id: FieldRef<"CurrentCourse", 'String'>
    readonly studentId: FieldRef<"CurrentCourse", 'String'>
    readonly courseId: FieldRef<"CurrentCourse", 'String'>
    readonly grade: FieldRef<"CurrentCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CurrentCourse findUnique
   */
  export type CurrentCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter, which CurrentCourse to fetch.
     */
    where: CurrentCourseWhereUniqueInput
  }

  /**
   * CurrentCourse findUniqueOrThrow
   */
  export type CurrentCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter, which CurrentCourse to fetch.
     */
    where: CurrentCourseWhereUniqueInput
  }

  /**
   * CurrentCourse findFirst
   */
  export type CurrentCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter, which CurrentCourse to fetch.
     */
    where?: CurrentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentCourses to fetch.
     */
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentCourses.
     */
    cursor?: CurrentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentCourses.
     */
    distinct?: CurrentCourseScalarFieldEnum | CurrentCourseScalarFieldEnum[]
  }

  /**
   * CurrentCourse findFirstOrThrow
   */
  export type CurrentCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter, which CurrentCourse to fetch.
     */
    where?: CurrentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentCourses to fetch.
     */
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrentCourses.
     */
    cursor?: CurrentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrentCourses.
     */
    distinct?: CurrentCourseScalarFieldEnum | CurrentCourseScalarFieldEnum[]
  }

  /**
   * CurrentCourse findMany
   */
  export type CurrentCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter, which CurrentCourses to fetch.
     */
    where?: CurrentCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrentCourses to fetch.
     */
    orderBy?: CurrentCourseOrderByWithRelationInput | CurrentCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrentCourses.
     */
    cursor?: CurrentCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrentCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrentCourses.
     */
    skip?: number
    distinct?: CurrentCourseScalarFieldEnum | CurrentCourseScalarFieldEnum[]
  }

  /**
   * CurrentCourse create
   */
  export type CurrentCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a CurrentCourse.
     */
    data: XOR<CurrentCourseCreateInput, CurrentCourseUncheckedCreateInput>
  }

  /**
   * CurrentCourse createMany
   */
  export type CurrentCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrentCourses.
     */
    data: CurrentCourseCreateManyInput | CurrentCourseCreateManyInput[]
  }

  /**
   * CurrentCourse createManyAndReturn
   */
  export type CurrentCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * The data used to create many CurrentCourses.
     */
    data: CurrentCourseCreateManyInput | CurrentCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurrentCourse update
   */
  export type CurrentCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a CurrentCourse.
     */
    data: XOR<CurrentCourseUpdateInput, CurrentCourseUncheckedUpdateInput>
    /**
     * Choose, which CurrentCourse to update.
     */
    where: CurrentCourseWhereUniqueInput
  }

  /**
   * CurrentCourse updateMany
   */
  export type CurrentCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrentCourses.
     */
    data: XOR<CurrentCourseUpdateManyMutationInput, CurrentCourseUncheckedUpdateManyInput>
    /**
     * Filter which CurrentCourses to update
     */
    where?: CurrentCourseWhereInput
    /**
     * Limit how many CurrentCourses to update.
     */
    limit?: number
  }

  /**
   * CurrentCourse updateManyAndReturn
   */
  export type CurrentCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * The data used to update CurrentCourses.
     */
    data: XOR<CurrentCourseUpdateManyMutationInput, CurrentCourseUncheckedUpdateManyInput>
    /**
     * Filter which CurrentCourses to update
     */
    where?: CurrentCourseWhereInput
    /**
     * Limit how many CurrentCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CurrentCourse upsert
   */
  export type CurrentCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the CurrentCourse to update in case it exists.
     */
    where: CurrentCourseWhereUniqueInput
    /**
     * In case the CurrentCourse found by the `where` argument doesn't exist, create a new CurrentCourse with this data.
     */
    create: XOR<CurrentCourseCreateInput, CurrentCourseUncheckedCreateInput>
    /**
     * In case the CurrentCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrentCourseUpdateInput, CurrentCourseUncheckedUpdateInput>
  }

  /**
   * CurrentCourse delete
   */
  export type CurrentCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
    /**
     * Filter which CurrentCourse to delete.
     */
    where: CurrentCourseWhereUniqueInput
  }

  /**
   * CurrentCourse deleteMany
   */
  export type CurrentCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrentCourses to delete
     */
    where?: CurrentCourseWhereInput
    /**
     * Limit how many CurrentCourses to delete.
     */
    limit?: number
  }

  /**
   * CurrentCourse without action
   */
  export type CurrentCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrentCourse
     */
    select?: CurrentCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrentCourse
     */
    omit?: CurrentCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurrentCourseInclude<ExtArgs> | null
  }


  /**
   * Model RegisteredCourse
   */

  export type AggregateRegisteredCourse = {
    _count: RegisteredCourseCountAggregateOutputType | null
    _min: RegisteredCourseMinAggregateOutputType | null
    _max: RegisteredCourseMaxAggregateOutputType | null
  }

  export type RegisteredCourseMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
  }

  export type RegisteredCourseMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    courseId: string | null
  }

  export type RegisteredCourseCountAggregateOutputType = {
    id: number
    studentId: number
    courseId: number
    _all: number
  }


  export type RegisteredCourseMinAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
  }

  export type RegisteredCourseMaxAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
  }

  export type RegisteredCourseCountAggregateInputType = {
    id?: true
    studentId?: true
    courseId?: true
    _all?: true
  }

  export type RegisteredCourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredCourse to aggregate.
     */
    where?: RegisteredCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredCourses to fetch.
     */
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisteredCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RegisteredCourses
    **/
    _count?: true | RegisteredCourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisteredCourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisteredCourseMaxAggregateInputType
  }

  export type GetRegisteredCourseAggregateType<T extends RegisteredCourseAggregateArgs> = {
        [P in keyof T & keyof AggregateRegisteredCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegisteredCourse[P]>
      : GetScalarType<T[P], AggregateRegisteredCourse[P]>
  }




  export type RegisteredCourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredCourseWhereInput
    orderBy?: RegisteredCourseOrderByWithAggregationInput | RegisteredCourseOrderByWithAggregationInput[]
    by: RegisteredCourseScalarFieldEnum[] | RegisteredCourseScalarFieldEnum
    having?: RegisteredCourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisteredCourseCountAggregateInputType | true
    _min?: RegisteredCourseMinAggregateInputType
    _max?: RegisteredCourseMaxAggregateInputType
  }

  export type RegisteredCourseGroupByOutputType = {
    id: string
    studentId: string
    courseId: string
    _count: RegisteredCourseCountAggregateOutputType | null
    _min: RegisteredCourseMinAggregateOutputType | null
    _max: RegisteredCourseMaxAggregateOutputType | null
  }

  type GetRegisteredCourseGroupByPayload<T extends RegisteredCourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisteredCourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisteredCourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisteredCourseGroupByOutputType[P]>
            : GetScalarType<T[P], RegisteredCourseGroupByOutputType[P]>
        }
      >
    >


  export type RegisteredCourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registeredCourse"]>

  export type RegisteredCourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registeredCourse"]>

  export type RegisteredCourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    courseId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["registeredCourse"]>

  export type RegisteredCourseSelectScalar = {
    id?: boolean
    studentId?: boolean
    courseId?: boolean
  }

  export type RegisteredCourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "courseId", ExtArgs["result"]["registeredCourse"]>
  export type RegisteredCourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RegisteredCourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type RegisteredCourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $RegisteredCoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RegisteredCourse"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      courseId: string
    }, ExtArgs["result"]["registeredCourse"]>
    composites: {}
  }

  type RegisteredCourseGetPayload<S extends boolean | null | undefined | RegisteredCourseDefaultArgs> = $Result.GetResult<Prisma.$RegisteredCoursePayload, S>

  type RegisteredCourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisteredCourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisteredCourseCountAggregateInputType | true
    }

  export interface RegisteredCourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RegisteredCourse'], meta: { name: 'RegisteredCourse' } }
    /**
     * Find zero or one RegisteredCourse that matches the filter.
     * @param {RegisteredCourseFindUniqueArgs} args - Arguments to find a RegisteredCourse
     * @example
     * // Get one RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisteredCourseFindUniqueArgs>(args: SelectSubset<T, RegisteredCourseFindUniqueArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RegisteredCourse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisteredCourseFindUniqueOrThrowArgs} args - Arguments to find a RegisteredCourse
     * @example
     * // Get one RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisteredCourseFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisteredCourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredCourse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseFindFirstArgs} args - Arguments to find a RegisteredCourse
     * @example
     * // Get one RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisteredCourseFindFirstArgs>(args?: SelectSubset<T, RegisteredCourseFindFirstArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RegisteredCourse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseFindFirstOrThrowArgs} args - Arguments to find a RegisteredCourse
     * @example
     * // Get one RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisteredCourseFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisteredCourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RegisteredCourses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RegisteredCourses
     * const registeredCourses = await prisma.registeredCourse.findMany()
     * 
     * // Get first 10 RegisteredCourses
     * const registeredCourses = await prisma.registeredCourse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registeredCourseWithIdOnly = await prisma.registeredCourse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisteredCourseFindManyArgs>(args?: SelectSubset<T, RegisteredCourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RegisteredCourse.
     * @param {RegisteredCourseCreateArgs} args - Arguments to create a RegisteredCourse.
     * @example
     * // Create one RegisteredCourse
     * const RegisteredCourse = await prisma.registeredCourse.create({
     *   data: {
     *     // ... data to create a RegisteredCourse
     *   }
     * })
     * 
     */
    create<T extends RegisteredCourseCreateArgs>(args: SelectSubset<T, RegisteredCourseCreateArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RegisteredCourses.
     * @param {RegisteredCourseCreateManyArgs} args - Arguments to create many RegisteredCourses.
     * @example
     * // Create many RegisteredCourses
     * const registeredCourse = await prisma.registeredCourse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisteredCourseCreateManyArgs>(args?: SelectSubset<T, RegisteredCourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RegisteredCourses and returns the data saved in the database.
     * @param {RegisteredCourseCreateManyAndReturnArgs} args - Arguments to create many RegisteredCourses.
     * @example
     * // Create many RegisteredCourses
     * const registeredCourse = await prisma.registeredCourse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RegisteredCourses and only return the `id`
     * const registeredCourseWithIdOnly = await prisma.registeredCourse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisteredCourseCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisteredCourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RegisteredCourse.
     * @param {RegisteredCourseDeleteArgs} args - Arguments to delete one RegisteredCourse.
     * @example
     * // Delete one RegisteredCourse
     * const RegisteredCourse = await prisma.registeredCourse.delete({
     *   where: {
     *     // ... filter to delete one RegisteredCourse
     *   }
     * })
     * 
     */
    delete<T extends RegisteredCourseDeleteArgs>(args: SelectSubset<T, RegisteredCourseDeleteArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RegisteredCourse.
     * @param {RegisteredCourseUpdateArgs} args - Arguments to update one RegisteredCourse.
     * @example
     * // Update one RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisteredCourseUpdateArgs>(args: SelectSubset<T, RegisteredCourseUpdateArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RegisteredCourses.
     * @param {RegisteredCourseDeleteManyArgs} args - Arguments to filter RegisteredCourses to delete.
     * @example
     * // Delete a few RegisteredCourses
     * const { count } = await prisma.registeredCourse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisteredCourseDeleteManyArgs>(args?: SelectSubset<T, RegisteredCourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RegisteredCourses
     * const registeredCourse = await prisma.registeredCourse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisteredCourseUpdateManyArgs>(args: SelectSubset<T, RegisteredCourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RegisteredCourses and returns the data updated in the database.
     * @param {RegisteredCourseUpdateManyAndReturnArgs} args - Arguments to update many RegisteredCourses.
     * @example
     * // Update many RegisteredCourses
     * const registeredCourse = await prisma.registeredCourse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RegisteredCourses and only return the `id`
     * const registeredCourseWithIdOnly = await prisma.registeredCourse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegisteredCourseUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisteredCourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RegisteredCourse.
     * @param {RegisteredCourseUpsertArgs} args - Arguments to update or create a RegisteredCourse.
     * @example
     * // Update or create a RegisteredCourse
     * const registeredCourse = await prisma.registeredCourse.upsert({
     *   create: {
     *     // ... data to create a RegisteredCourse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RegisteredCourse we want to update
     *   }
     * })
     */
    upsert<T extends RegisteredCourseUpsertArgs>(args: SelectSubset<T, RegisteredCourseUpsertArgs<ExtArgs>>): Prisma__RegisteredCourseClient<$Result.GetResult<Prisma.$RegisteredCoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RegisteredCourses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseCountArgs} args - Arguments to filter RegisteredCourses to count.
     * @example
     * // Count the number of RegisteredCourses
     * const count = await prisma.registeredCourse.count({
     *   where: {
     *     // ... the filter for the RegisteredCourses we want to count
     *   }
     * })
    **/
    count<T extends RegisteredCourseCountArgs>(
      args?: Subset<T, RegisteredCourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisteredCourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RegisteredCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegisteredCourseAggregateArgs>(args: Subset<T, RegisteredCourseAggregateArgs>): Prisma.PrismaPromise<GetRegisteredCourseAggregateType<T>>

    /**
     * Group by RegisteredCourse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegisteredCourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisteredCourseGroupByArgs['orderBy'] }
        : { orderBy?: RegisteredCourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegisteredCourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisteredCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RegisteredCourse model
   */
  readonly fields: RegisteredCourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RegisteredCourse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisteredCourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RegisteredCourse model
   */
  interface RegisteredCourseFieldRefs {
    readonly id: FieldRef<"RegisteredCourse", 'String'>
    readonly studentId: FieldRef<"RegisteredCourse", 'String'>
    readonly courseId: FieldRef<"RegisteredCourse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RegisteredCourse findUnique
   */
  export type RegisteredCourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredCourse to fetch.
     */
    where: RegisteredCourseWhereUniqueInput
  }

  /**
   * RegisteredCourse findUniqueOrThrow
   */
  export type RegisteredCourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredCourse to fetch.
     */
    where: RegisteredCourseWhereUniqueInput
  }

  /**
   * RegisteredCourse findFirst
   */
  export type RegisteredCourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredCourse to fetch.
     */
    where?: RegisteredCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredCourses to fetch.
     */
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredCourses.
     */
    cursor?: RegisteredCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredCourses.
     */
    distinct?: RegisteredCourseScalarFieldEnum | RegisteredCourseScalarFieldEnum[]
  }

  /**
   * RegisteredCourse findFirstOrThrow
   */
  export type RegisteredCourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredCourse to fetch.
     */
    where?: RegisteredCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredCourses to fetch.
     */
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RegisteredCourses.
     */
    cursor?: RegisteredCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredCourses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RegisteredCourses.
     */
    distinct?: RegisteredCourseScalarFieldEnum | RegisteredCourseScalarFieldEnum[]
  }

  /**
   * RegisteredCourse findMany
   */
  export type RegisteredCourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter, which RegisteredCourses to fetch.
     */
    where?: RegisteredCourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RegisteredCourses to fetch.
     */
    orderBy?: RegisteredCourseOrderByWithRelationInput | RegisteredCourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RegisteredCourses.
     */
    cursor?: RegisteredCourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RegisteredCourses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RegisteredCourses.
     */
    skip?: number
    distinct?: RegisteredCourseScalarFieldEnum | RegisteredCourseScalarFieldEnum[]
  }

  /**
   * RegisteredCourse create
   */
  export type RegisteredCourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * The data needed to create a RegisteredCourse.
     */
    data: XOR<RegisteredCourseCreateInput, RegisteredCourseUncheckedCreateInput>
  }

  /**
   * RegisteredCourse createMany
   */
  export type RegisteredCourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RegisteredCourses.
     */
    data: RegisteredCourseCreateManyInput | RegisteredCourseCreateManyInput[]
  }

  /**
   * RegisteredCourse createManyAndReturn
   */
  export type RegisteredCourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * The data used to create many RegisteredCourses.
     */
    data: RegisteredCourseCreateManyInput | RegisteredCourseCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegisteredCourse update
   */
  export type RegisteredCourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * The data needed to update a RegisteredCourse.
     */
    data: XOR<RegisteredCourseUpdateInput, RegisteredCourseUncheckedUpdateInput>
    /**
     * Choose, which RegisteredCourse to update.
     */
    where: RegisteredCourseWhereUniqueInput
  }

  /**
   * RegisteredCourse updateMany
   */
  export type RegisteredCourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RegisteredCourses.
     */
    data: XOR<RegisteredCourseUpdateManyMutationInput, RegisteredCourseUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredCourses to update
     */
    where?: RegisteredCourseWhereInput
    /**
     * Limit how many RegisteredCourses to update.
     */
    limit?: number
  }

  /**
   * RegisteredCourse updateManyAndReturn
   */
  export type RegisteredCourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * The data used to update RegisteredCourses.
     */
    data: XOR<RegisteredCourseUpdateManyMutationInput, RegisteredCourseUncheckedUpdateManyInput>
    /**
     * Filter which RegisteredCourses to update
     */
    where?: RegisteredCourseWhereInput
    /**
     * Limit how many RegisteredCourses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RegisteredCourse upsert
   */
  export type RegisteredCourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * The filter to search for the RegisteredCourse to update in case it exists.
     */
    where: RegisteredCourseWhereUniqueInput
    /**
     * In case the RegisteredCourse found by the `where` argument doesn't exist, create a new RegisteredCourse with this data.
     */
    create: XOR<RegisteredCourseCreateInput, RegisteredCourseUncheckedCreateInput>
    /**
     * In case the RegisteredCourse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisteredCourseUpdateInput, RegisteredCourseUncheckedUpdateInput>
  }

  /**
   * RegisteredCourse delete
   */
  export type RegisteredCourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
    /**
     * Filter which RegisteredCourse to delete.
     */
    where: RegisteredCourseWhereUniqueInput
  }

  /**
   * RegisteredCourse deleteMany
   */
  export type RegisteredCourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RegisteredCourses to delete
     */
    where?: RegisteredCourseWhereInput
    /**
     * Limit how many RegisteredCourses to delete.
     */
    limit?: number
  }

  /**
   * RegisteredCourse without action
   */
  export type RegisteredCourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegisteredCourse
     */
    select?: RegisteredCourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RegisteredCourse
     */
    omit?: RegisteredCourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegisteredCourseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const InstructorScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type InstructorScalarFieldEnum = (typeof InstructorScalarFieldEnum)[keyof typeof InstructorScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    courseID: 'courseID',
    courseName: 'courseName',
    code: 'code',
    category: 'category',
    description: 'description',
    instructor: 'instructor',
    instructorId: 'instructorId',
    openForRegistration: 'openForRegistration',
    status: 'status',
    availableSeats: 'availableSeats',
    prerequisites: 'prerequisites'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const CompletedCourseScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId',
    grade: 'grade'
  };

  export type CompletedCourseScalarFieldEnum = (typeof CompletedCourseScalarFieldEnum)[keyof typeof CompletedCourseScalarFieldEnum]


  export const CurrentCourseScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId',
    grade: 'grade'
  };

  export type CurrentCourseScalarFieldEnum = (typeof CurrentCourseScalarFieldEnum)[keyof typeof CurrentCourseScalarFieldEnum]


  export const RegisteredCourseScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    courseId: 'courseId'
  };

  export type RegisteredCourseScalarFieldEnum = (typeof RegisteredCourseScalarFieldEnum)[keyof typeof RegisteredCourseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    student?: StudentOrderByWithRelationInput
    instructor?: InstructorOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    instructor?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedCourses?: CompletedCourseListRelationFilter
    currentCourses?: CurrentCourseListRelationFilter
    registeredCourses?: RegisteredCourseListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    completedCourses?: CompletedCourseOrderByRelationAggregateInput
    currentCourses?: CurrentCourseOrderByRelationAggregateInput
    registeredCourses?: RegisteredCourseOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    completedCourses?: CompletedCourseListRelationFilter
    currentCourses?: CurrentCourseListRelationFilter
    registeredCourses?: RegisteredCourseListRelationFilter
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type InstructorWhereInput = {
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    id?: StringFilter<"Instructor"> | string
    userId?: StringFilter<"Instructor"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }

  export type InstructorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type InstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InstructorWhereInput | InstructorWhereInput[]
    OR?: InstructorWhereInput[]
    NOT?: InstructorWhereInput | InstructorWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }, "id" | "userId">

  export type InstructorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: InstructorCountOrderByAggregateInput
    _max?: InstructorMaxOrderByAggregateInput
    _min?: InstructorMinOrderByAggregateInput
  }

  export type InstructorScalarWhereWithAggregatesInput = {
    AND?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    OR?: InstructorScalarWhereWithAggregatesInput[]
    NOT?: InstructorScalarWhereWithAggregatesInput | InstructorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Instructor"> | string
    userId?: StringWithAggregatesFilter<"Instructor"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    userId?: StringFilter<"Admin"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    userId?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    courseID?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    code?: StringNullableFilter<"Course"> | string | null
    category?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    instructor?: StringNullableFilter<"Course"> | string | null
    instructorId?: StringNullableFilter<"Course"> | string | null
    openForRegistration?: BoolFilter<"Course"> | boolean
    status?: StringFilter<"Course"> | string
    availableSeats?: IntFilter<"Course"> | number
    prerequisites?: JsonNullableFilter<"Course">
    instructorRelation?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    completedCourses?: CompletedCourseListRelationFilter
    currentCourses?: CurrentCourseListRelationFilter
    registeredCourses?: RegisteredCourseListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    courseID?: SortOrder
    courseName?: SortOrder
    code?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    instructorId?: SortOrderInput | SortOrder
    openForRegistration?: SortOrder
    status?: SortOrder
    availableSeats?: SortOrder
    prerequisites?: SortOrderInput | SortOrder
    instructorRelation?: InstructorOrderByWithRelationInput
    completedCourses?: CompletedCourseOrderByRelationAggregateInput
    currentCourses?: CurrentCourseOrderByRelationAggregateInput
    registeredCourses?: RegisteredCourseOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    courseID?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    courseName?: StringFilter<"Course"> | string
    code?: StringNullableFilter<"Course"> | string | null
    category?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    instructor?: StringNullableFilter<"Course"> | string | null
    instructorId?: StringNullableFilter<"Course"> | string | null
    openForRegistration?: BoolFilter<"Course"> | boolean
    status?: StringFilter<"Course"> | string
    availableSeats?: IntFilter<"Course"> | number
    prerequisites?: JsonNullableFilter<"Course">
    instructorRelation?: XOR<InstructorNullableScalarRelationFilter, InstructorWhereInput> | null
    completedCourses?: CompletedCourseListRelationFilter
    currentCourses?: CurrentCourseListRelationFilter
    registeredCourses?: RegisteredCourseListRelationFilter
  }, "id" | "courseID">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    courseID?: SortOrder
    courseName?: SortOrder
    code?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    instructor?: SortOrderInput | SortOrder
    instructorId?: SortOrderInput | SortOrder
    openForRegistration?: SortOrder
    status?: SortOrder
    availableSeats?: SortOrder
    prerequisites?: SortOrderInput | SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    courseID?: StringWithAggregatesFilter<"Course"> | string
    courseName?: StringWithAggregatesFilter<"Course"> | string
    code?: StringNullableWithAggregatesFilter<"Course"> | string | null
    category?: StringNullableWithAggregatesFilter<"Course"> | string | null
    description?: StringNullableWithAggregatesFilter<"Course"> | string | null
    instructor?: StringNullableWithAggregatesFilter<"Course"> | string | null
    instructorId?: StringNullableWithAggregatesFilter<"Course"> | string | null
    openForRegistration?: BoolWithAggregatesFilter<"Course"> | boolean
    status?: StringWithAggregatesFilter<"Course"> | string
    availableSeats?: IntWithAggregatesFilter<"Course"> | number
    prerequisites?: JsonNullableWithAggregatesFilter<"Course">
  }

  export type CompletedCourseWhereInput = {
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    id?: StringFilter<"CompletedCourse"> | string
    studentId?: StringFilter<"CompletedCourse"> | string
    courseId?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CompletedCourseOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CompletedCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseId?: CompletedCourseStudentIdCourseIdCompoundUniqueInput
    AND?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    OR?: CompletedCourseWhereInput[]
    NOT?: CompletedCourseWhereInput | CompletedCourseWhereInput[]
    studentId?: StringFilter<"CompletedCourse"> | string
    courseId?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "studentId_courseId">

  export type CompletedCourseOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
    _count?: CompletedCourseCountOrderByAggregateInput
    _max?: CompletedCourseMaxOrderByAggregateInput
    _min?: CompletedCourseMinOrderByAggregateInput
  }

  export type CompletedCourseScalarWhereWithAggregatesInput = {
    AND?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    OR?: CompletedCourseScalarWhereWithAggregatesInput[]
    NOT?: CompletedCourseScalarWhereWithAggregatesInput | CompletedCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompletedCourse"> | string
    studentId?: StringWithAggregatesFilter<"CompletedCourse"> | string
    courseId?: StringWithAggregatesFilter<"CompletedCourse"> | string
    grade?: StringWithAggregatesFilter<"CompletedCourse"> | string
  }

  export type CurrentCourseWhereInput = {
    AND?: CurrentCourseWhereInput | CurrentCourseWhereInput[]
    OR?: CurrentCourseWhereInput[]
    NOT?: CurrentCourseWhereInput | CurrentCourseWhereInput[]
    id?: StringFilter<"CurrentCourse"> | string
    studentId?: StringFilter<"CurrentCourse"> | string
    courseId?: StringFilter<"CurrentCourse"> | string
    grade?: StringNullableFilter<"CurrentCourse"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type CurrentCourseOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type CurrentCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseId?: CurrentCourseStudentIdCourseIdCompoundUniqueInput
    AND?: CurrentCourseWhereInput | CurrentCourseWhereInput[]
    OR?: CurrentCourseWhereInput[]
    NOT?: CurrentCourseWhereInput | CurrentCourseWhereInput[]
    studentId?: StringFilter<"CurrentCourse"> | string
    courseId?: StringFilter<"CurrentCourse"> | string
    grade?: StringNullableFilter<"CurrentCourse"> | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "studentId_courseId">

  export type CurrentCourseOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrderInput | SortOrder
    _count?: CurrentCourseCountOrderByAggregateInput
    _max?: CurrentCourseMaxOrderByAggregateInput
    _min?: CurrentCourseMinOrderByAggregateInput
  }

  export type CurrentCourseScalarWhereWithAggregatesInput = {
    AND?: CurrentCourseScalarWhereWithAggregatesInput | CurrentCourseScalarWhereWithAggregatesInput[]
    OR?: CurrentCourseScalarWhereWithAggregatesInput[]
    NOT?: CurrentCourseScalarWhereWithAggregatesInput | CurrentCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CurrentCourse"> | string
    studentId?: StringWithAggregatesFilter<"CurrentCourse"> | string
    courseId?: StringWithAggregatesFilter<"CurrentCourse"> | string
    grade?: StringNullableWithAggregatesFilter<"CurrentCourse"> | string | null
  }

  export type RegisteredCourseWhereInput = {
    AND?: RegisteredCourseWhereInput | RegisteredCourseWhereInput[]
    OR?: RegisteredCourseWhereInput[]
    NOT?: RegisteredCourseWhereInput | RegisteredCourseWhereInput[]
    id?: StringFilter<"RegisteredCourse"> | string
    studentId?: StringFilter<"RegisteredCourse"> | string
    courseId?: StringFilter<"RegisteredCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type RegisteredCourseOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    student?: StudentOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type RegisteredCourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_courseId?: RegisteredCourseStudentIdCourseIdCompoundUniqueInput
    AND?: RegisteredCourseWhereInput | RegisteredCourseWhereInput[]
    OR?: RegisteredCourseWhereInput[]
    NOT?: RegisteredCourseWhereInput | RegisteredCourseWhereInput[]
    studentId?: StringFilter<"RegisteredCourse"> | string
    courseId?: StringFilter<"RegisteredCourse"> | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "studentId_courseId">

  export type RegisteredCourseOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    _count?: RegisteredCourseCountOrderByAggregateInput
    _max?: RegisteredCourseMaxOrderByAggregateInput
    _min?: RegisteredCourseMinOrderByAggregateInput
  }

  export type RegisteredCourseScalarWhereWithAggregatesInput = {
    AND?: RegisteredCourseScalarWhereWithAggregatesInput | RegisteredCourseScalarWhereWithAggregatesInput[]
    OR?: RegisteredCourseScalarWhereWithAggregatesInput[]
    NOT?: RegisteredCourseScalarWhereWithAggregatesInput | RegisteredCourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RegisteredCourse"> | string
    studentId?: StringWithAggregatesFilter<"RegisteredCourse"> | string
    courseId?: StringWithAggregatesFilter<"RegisteredCourse"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentCreateNestedOneWithoutUserInput
    instructor?: InstructorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUpdateOneWithoutUserNestedInput
    instructor?: InstructorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
  }

  export type StudentCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutInstructorInput
    courses?: CourseCreateNestedManyWithoutInstructorRelationInput
  }

  export type InstructorUncheckedCreateInput = {
    id?: string
    userId: string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorRelationInput
  }

  export type InstructorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInstructorNestedInput
    courses?: CourseUpdateManyWithoutInstructorRelationNestedInput
  }

  export type InstructorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorRelationNestedInput
  }

  export type InstructorCreateManyInput = {
    id?: string
    userId: string
  }

  export type InstructorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type InstructorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    id?: string
    userId: string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorCreateNestedOneWithoutCoursesInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    instructorId?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorUpdateOneWithoutCoursesNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    instructorId?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CompletedCourseCreateInput = {
    id?: string
    grade: string
    student: StudentCreateNestedOneWithoutCompletedCoursesInput
    course: CourseCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateInput = {
    id?: string
    studentId: string
    courseId: string
    grade: string
  }

  export type CompletedCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutCompletedCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseCreateManyInput = {
    id?: string
    studentId: string
    courseId: string
    grade: string
  }

  export type CompletedCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CurrentCourseCreateInput = {
    id?: string
    grade?: string | null
    student: StudentCreateNestedOneWithoutCurrentCoursesInput
    course: CourseCreateNestedOneWithoutCurrentCoursesInput
  }

  export type CurrentCourseUncheckedCreateInput = {
    id?: string
    studentId: string
    courseId: string
    grade?: string | null
  }

  export type CurrentCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutCurrentCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutCurrentCoursesNestedInput
  }

  export type CurrentCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrentCourseCreateManyInput = {
    id?: string
    studentId: string
    courseId: string
    grade?: string | null
  }

  export type CurrentCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrentCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisteredCourseCreateInput = {
    id?: string
    student: StudentCreateNestedOneWithoutRegisteredCoursesInput
    course: CourseCreateNestedOneWithoutRegisteredCoursesInput
  }

  export type RegisteredCourseUncheckedCreateInput = {
    id?: string
    studentId: string
    courseId: string
  }

  export type RegisteredCourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutRegisteredCoursesNestedInput
    course?: CourseUpdateOneRequiredWithoutRegisteredCoursesNestedInput
  }

  export type RegisteredCourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredCourseCreateManyInput = {
    id?: string
    studentId: string
    courseId: string
  }

  export type RegisteredCourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredCourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type InstructorNullableScalarRelationFilter = {
    is?: InstructorWhereInput | null
    isNot?: InstructorWhereInput | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CompletedCourseListRelationFilter = {
    every?: CompletedCourseWhereInput
    some?: CompletedCourseWhereInput
    none?: CompletedCourseWhereInput
  }

  export type CurrentCourseListRelationFilter = {
    every?: CurrentCourseWhereInput
    some?: CurrentCourseWhereInput
    none?: CurrentCourseWhereInput
  }

  export type RegisteredCourseListRelationFilter = {
    every?: RegisteredCourseWhereInput
    some?: RegisteredCourseWhereInput
    none?: RegisteredCourseWhereInput
  }

  export type CompletedCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CurrentCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegisteredCourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type InstructorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    courseID?: SortOrder
    courseName?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    instructorId?: SortOrder
    openForRegistration?: SortOrder
    status?: SortOrder
    availableSeats?: SortOrder
    prerequisites?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    courseID?: SortOrder
    courseName?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    instructorId?: SortOrder
    openForRegistration?: SortOrder
    status?: SortOrder
    availableSeats?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    courseID?: SortOrder
    courseName?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
    instructor?: SortOrder
    instructorId?: SortOrder
    openForRegistration?: SortOrder
    status?: SortOrder
    availableSeats?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    availableSeats?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type CompletedCourseStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type CompletedCourseCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type CompletedCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type CompletedCourseMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type CurrentCourseStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type CurrentCourseCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type CurrentCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type CurrentCourseMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
    grade?: SortOrder
  }

  export type RegisteredCourseStudentIdCourseIdCompoundUniqueInput = {
    studentId: string
    courseId: string
  }

  export type RegisteredCourseCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
  }

  export type RegisteredCourseMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
  }

  export type RegisteredCourseMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    courseId?: SortOrder
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstructorCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    connect?: InstructorWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type InstructorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    connect?: InstructorWhereUniqueInput
  }

  export type AdminUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    connect?: AdminWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    upsert?: InstructorUpsertWithoutUserInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutUserInput, InstructorUpdateWithoutUserInput>, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutUserInput
    upsert?: InstructorUpsertWithoutUserInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutUserInput, InstructorUpdateWithoutUserInput>, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type AdminUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    connectOrCreate?: AdminCreateOrConnectWithoutUserInput
    upsert?: AdminUpsertWithoutUserInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutUserInput, AdminUpdateWithoutUserInput>, AdminUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type CompletedCourseCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CurrentCourseCreateNestedManyWithoutStudentInput = {
    create?: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput> | CurrentCourseCreateWithoutStudentInput[] | CurrentCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutStudentInput | CurrentCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CurrentCourseCreateManyStudentInputEnvelope
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
  }

  export type RegisteredCourseCreateNestedManyWithoutStudentInput = {
    create?: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput> | RegisteredCourseCreateWithoutStudentInput[] | RegisteredCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutStudentInput | RegisteredCourseCreateOrConnectWithoutStudentInput[]
    createMany?: RegisteredCourseCreateManyStudentInputEnvelope
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CurrentCourseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput> | CurrentCourseCreateWithoutStudentInput[] | CurrentCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutStudentInput | CurrentCourseCreateOrConnectWithoutStudentInput[]
    createMany?: CurrentCourseCreateManyStudentInputEnvelope
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
  }

  export type RegisteredCourseUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput> | RegisteredCourseCreateWithoutStudentInput[] | RegisteredCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutStudentInput | RegisteredCourseCreateOrConnectWithoutStudentInput[]
    createMany?: RegisteredCourseCreateManyStudentInputEnvelope
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type CompletedCourseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutStudentInput | CompletedCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutStudentInput | CompletedCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutStudentInput | CompletedCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CurrentCourseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput> | CurrentCourseCreateWithoutStudentInput[] | CurrentCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutStudentInput | CurrentCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CurrentCourseUpsertWithWhereUniqueWithoutStudentInput | CurrentCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CurrentCourseCreateManyStudentInputEnvelope
    set?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    disconnect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    delete?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    update?: CurrentCourseUpdateWithWhereUniqueWithoutStudentInput | CurrentCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CurrentCourseUpdateManyWithWhereWithoutStudentInput | CurrentCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
  }

  export type RegisteredCourseUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput> | RegisteredCourseCreateWithoutStudentInput[] | RegisteredCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutStudentInput | RegisteredCourseCreateOrConnectWithoutStudentInput[]
    upsert?: RegisteredCourseUpsertWithWhereUniqueWithoutStudentInput | RegisteredCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RegisteredCourseCreateManyStudentInputEnvelope
    set?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    disconnect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    delete?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    update?: RegisteredCourseUpdateWithWhereUniqueWithoutStudentInput | RegisteredCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RegisteredCourseUpdateManyWithWhereWithoutStudentInput | RegisteredCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput> | CompletedCourseCreateWithoutStudentInput[] | CompletedCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutStudentInput | CompletedCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutStudentInput | CompletedCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CompletedCourseCreateManyStudentInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutStudentInput | CompletedCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutStudentInput | CompletedCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CurrentCourseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput> | CurrentCourseCreateWithoutStudentInput[] | CurrentCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutStudentInput | CurrentCourseCreateOrConnectWithoutStudentInput[]
    upsert?: CurrentCourseUpsertWithWhereUniqueWithoutStudentInput | CurrentCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: CurrentCourseCreateManyStudentInputEnvelope
    set?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    disconnect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    delete?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    update?: CurrentCourseUpdateWithWhereUniqueWithoutStudentInput | CurrentCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: CurrentCourseUpdateManyWithWhereWithoutStudentInput | CurrentCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
  }

  export type RegisteredCourseUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput> | RegisteredCourseCreateWithoutStudentInput[] | RegisteredCourseUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutStudentInput | RegisteredCourseCreateOrConnectWithoutStudentInput[]
    upsert?: RegisteredCourseUpsertWithWhereUniqueWithoutStudentInput | RegisteredCourseUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: RegisteredCourseCreateManyStudentInputEnvelope
    set?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    disconnect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    delete?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    update?: RegisteredCourseUpdateWithWhereUniqueWithoutStudentInput | RegisteredCourseUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: RegisteredCourseUpdateManyWithWhereWithoutStudentInput | RegisteredCourseUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutInstructorInput = {
    create?: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutInstructorRelationInput = {
    create?: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput> | CourseCreateWithoutInstructorRelationInput[] | CourseUncheckedCreateWithoutInstructorRelationInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorRelationInput | CourseCreateOrConnectWithoutInstructorRelationInput[]
    createMany?: CourseCreateManyInstructorRelationInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorRelationInput = {
    create?: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput> | CourseCreateWithoutInstructorRelationInput[] | CourseUncheckedCreateWithoutInstructorRelationInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorRelationInput | CourseCreateOrConnectWithoutInstructorRelationInput[]
    createMany?: CourseCreateManyInstructorRelationInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutInstructorNestedInput = {
    create?: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorInput
    upsert?: UserUpsertWithoutInstructorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorInput, UserUpdateWithoutInstructorInput>, UserUncheckedUpdateWithoutInstructorInput>
  }

  export type CourseUpdateManyWithoutInstructorRelationNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput> | CourseCreateWithoutInstructorRelationInput[] | CourseUncheckedCreateWithoutInstructorRelationInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorRelationInput | CourseCreateOrConnectWithoutInstructorRelationInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorRelationInput | CourseUpsertWithWhereUniqueWithoutInstructorRelationInput[]
    createMany?: CourseCreateManyInstructorRelationInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorRelationInput | CourseUpdateWithWhereUniqueWithoutInstructorRelationInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorRelationInput | CourseUpdateManyWithWhereWithoutInstructorRelationInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorRelationNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput> | CourseCreateWithoutInstructorRelationInput[] | CourseUncheckedCreateWithoutInstructorRelationInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorRelationInput | CourseCreateOrConnectWithoutInstructorRelationInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorRelationInput | CourseUpsertWithWhereUniqueWithoutInstructorRelationInput[]
    createMany?: CourseCreateManyInstructorRelationInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorRelationInput | CourseUpdateWithWhereUniqueWithoutInstructorRelationInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorRelationInput | CourseUpdateManyWithWhereWithoutInstructorRelationInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAdminInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAdminNestedInput = {
    create?: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    connectOrCreate?: UserCreateOrConnectWithoutAdminInput
    upsert?: UserUpsertWithoutAdminInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAdminInput, UserUpdateWithoutAdminInput>, UserUncheckedUpdateWithoutAdminInput>
  }

  export type InstructorCreateNestedOneWithoutCoursesInput = {
    create?: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutCoursesInput
    connect?: InstructorWhereUniqueInput
  }

  export type CompletedCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput> | CompletedCourseCreateWithoutCourseInput[] | CompletedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutCourseInput | CompletedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CompletedCourseCreateManyCourseInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CurrentCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput> | CurrentCourseCreateWithoutCourseInput[] | CurrentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutCourseInput | CurrentCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CurrentCourseCreateManyCourseInputEnvelope
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
  }

  export type RegisteredCourseCreateNestedManyWithoutCourseInput = {
    create?: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput> | RegisteredCourseCreateWithoutCourseInput[] | RegisteredCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutCourseInput | RegisteredCourseCreateOrConnectWithoutCourseInput[]
    createMany?: RegisteredCourseCreateManyCourseInputEnvelope
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
  }

  export type CompletedCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput> | CompletedCourseCreateWithoutCourseInput[] | CompletedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutCourseInput | CompletedCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CompletedCourseCreateManyCourseInputEnvelope
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
  }

  export type CurrentCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput> | CurrentCourseCreateWithoutCourseInput[] | CurrentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutCourseInput | CurrentCourseCreateOrConnectWithoutCourseInput[]
    createMany?: CurrentCourseCreateManyCourseInputEnvelope
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
  }

  export type RegisteredCourseUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput> | RegisteredCourseCreateWithoutCourseInput[] | RegisteredCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutCourseInput | RegisteredCourseCreateOrConnectWithoutCourseInput[]
    createMany?: RegisteredCourseCreateManyCourseInputEnvelope
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type InstructorUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorCreateOrConnectWithoutCoursesInput
    upsert?: InstructorUpsertWithoutCoursesInput
    disconnect?: InstructorWhereInput | boolean
    delete?: InstructorWhereInput | boolean
    connect?: InstructorWhereUniqueInput
    update?: XOR<XOR<InstructorUpdateToOneWithWhereWithoutCoursesInput, InstructorUpdateWithoutCoursesInput>, InstructorUncheckedUpdateWithoutCoursesInput>
  }

  export type CompletedCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput> | CompletedCourseCreateWithoutCourseInput[] | CompletedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutCourseInput | CompletedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutCourseInput | CompletedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CompletedCourseCreateManyCourseInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutCourseInput | CompletedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutCourseInput | CompletedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CurrentCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput> | CurrentCourseCreateWithoutCourseInput[] | CurrentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutCourseInput | CurrentCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CurrentCourseUpsertWithWhereUniqueWithoutCourseInput | CurrentCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CurrentCourseCreateManyCourseInputEnvelope
    set?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    disconnect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    delete?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    update?: CurrentCourseUpdateWithWhereUniqueWithoutCourseInput | CurrentCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CurrentCourseUpdateManyWithWhereWithoutCourseInput | CurrentCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
  }

  export type RegisteredCourseUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput> | RegisteredCourseCreateWithoutCourseInput[] | RegisteredCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutCourseInput | RegisteredCourseCreateOrConnectWithoutCourseInput[]
    upsert?: RegisteredCourseUpsertWithWhereUniqueWithoutCourseInput | RegisteredCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RegisteredCourseCreateManyCourseInputEnvelope
    set?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    disconnect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    delete?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    update?: RegisteredCourseUpdateWithWhereUniqueWithoutCourseInput | RegisteredCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RegisteredCourseUpdateManyWithWhereWithoutCourseInput | RegisteredCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
  }

  export type CompletedCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput> | CompletedCourseCreateWithoutCourseInput[] | CompletedCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CompletedCourseCreateOrConnectWithoutCourseInput | CompletedCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CompletedCourseUpsertWithWhereUniqueWithoutCourseInput | CompletedCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CompletedCourseCreateManyCourseInputEnvelope
    set?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    disconnect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    delete?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    connect?: CompletedCourseWhereUniqueInput | CompletedCourseWhereUniqueInput[]
    update?: CompletedCourseUpdateWithWhereUniqueWithoutCourseInput | CompletedCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CompletedCourseUpdateManyWithWhereWithoutCourseInput | CompletedCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
  }

  export type CurrentCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput> | CurrentCourseCreateWithoutCourseInput[] | CurrentCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: CurrentCourseCreateOrConnectWithoutCourseInput | CurrentCourseCreateOrConnectWithoutCourseInput[]
    upsert?: CurrentCourseUpsertWithWhereUniqueWithoutCourseInput | CurrentCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: CurrentCourseCreateManyCourseInputEnvelope
    set?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    disconnect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    delete?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    connect?: CurrentCourseWhereUniqueInput | CurrentCourseWhereUniqueInput[]
    update?: CurrentCourseUpdateWithWhereUniqueWithoutCourseInput | CurrentCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: CurrentCourseUpdateManyWithWhereWithoutCourseInput | CurrentCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
  }

  export type RegisteredCourseUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput> | RegisteredCourseCreateWithoutCourseInput[] | RegisteredCourseUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: RegisteredCourseCreateOrConnectWithoutCourseInput | RegisteredCourseCreateOrConnectWithoutCourseInput[]
    upsert?: RegisteredCourseUpsertWithWhereUniqueWithoutCourseInput | RegisteredCourseUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: RegisteredCourseCreateManyCourseInputEnvelope
    set?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    disconnect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    delete?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    connect?: RegisteredCourseWhereUniqueInput | RegisteredCourseWhereUniqueInput[]
    update?: RegisteredCourseUpdateWithWhereUniqueWithoutCourseInput | RegisteredCourseUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: RegisteredCourseUpdateManyWithWhereWithoutCourseInput | RegisteredCourseUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutCompletedCoursesInput = {
    create?: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompletedCoursesInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCompletedCoursesInput = {
    create?: XOR<CourseCreateWithoutCompletedCoursesInput, CourseUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCompletedCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCompletedCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCompletedCoursesInput
    upsert?: StudentUpsertWithoutCompletedCoursesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCompletedCoursesInput, StudentUpdateWithoutCompletedCoursesInput>, StudentUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutCompletedCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutCompletedCoursesInput, CourseUncheckedCreateWithoutCompletedCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCompletedCoursesInput
    upsert?: CourseUpsertWithoutCompletedCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCompletedCoursesInput, CourseUpdateWithoutCompletedCoursesInput>, CourseUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type StudentCreateNestedOneWithoutCurrentCoursesInput = {
    create?: XOR<StudentCreateWithoutCurrentCoursesInput, StudentUncheckedCreateWithoutCurrentCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCurrentCoursesInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutCurrentCoursesInput = {
    create?: XOR<CourseCreateWithoutCurrentCoursesInput, CourseUncheckedCreateWithoutCurrentCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCurrentCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutCurrentCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutCurrentCoursesInput, StudentUncheckedCreateWithoutCurrentCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutCurrentCoursesInput
    upsert?: StudentUpsertWithoutCurrentCoursesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutCurrentCoursesInput, StudentUpdateWithoutCurrentCoursesInput>, StudentUncheckedUpdateWithoutCurrentCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutCurrentCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutCurrentCoursesInput, CourseUncheckedCreateWithoutCurrentCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutCurrentCoursesInput
    upsert?: CourseUpsertWithoutCurrentCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutCurrentCoursesInput, CourseUpdateWithoutCurrentCoursesInput>, CourseUncheckedUpdateWithoutCurrentCoursesInput>
  }

  export type StudentCreateNestedOneWithoutRegisteredCoursesInput = {
    create?: XOR<StudentCreateWithoutRegisteredCoursesInput, StudentUncheckedCreateWithoutRegisteredCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegisteredCoursesInput
    connect?: StudentWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutRegisteredCoursesInput = {
    create?: XOR<CourseCreateWithoutRegisteredCoursesInput, CourseUncheckedCreateWithoutRegisteredCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredCoursesInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutRegisteredCoursesNestedInput = {
    create?: XOR<StudentCreateWithoutRegisteredCoursesInput, StudentUncheckedCreateWithoutRegisteredCoursesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutRegisteredCoursesInput
    upsert?: StudentUpsertWithoutRegisteredCoursesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutRegisteredCoursesInput, StudentUpdateWithoutRegisteredCoursesInput>, StudentUncheckedUpdateWithoutRegisteredCoursesInput>
  }

  export type CourseUpdateOneRequiredWithoutRegisteredCoursesNestedInput = {
    create?: XOR<CourseCreateWithoutRegisteredCoursesInput, CourseUncheckedCreateWithoutRegisteredCoursesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutRegisteredCoursesInput
    upsert?: CourseUpsertWithoutRegisteredCoursesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutRegisteredCoursesInput, CourseUpdateWithoutRegisteredCoursesInput>, CourseUncheckedUpdateWithoutRegisteredCoursesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[]
    notIn?: $Enums.UserType[]
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type InstructorCreateWithoutUserInput = {
    id?: string
    courses?: CourseCreateNestedManyWithoutInstructorRelationInput
  }

  export type InstructorUncheckedCreateWithoutUserInput = {
    id?: string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorRelationInput
  }

  export type InstructorCreateOrConnectWithoutUserInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
  }

  export type AdminCreateWithoutUserInput = {
    id?: string
  }

  export type AdminUncheckedCreateWithoutUserInput = {
    id?: string
  }

  export type AdminCreateOrConnectWithoutUserInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type InstructorUpsertWithoutUserInput = {
    update: XOR<InstructorUpdateWithoutUserInput, InstructorUncheckedUpdateWithoutUserInput>
    create: XOR<InstructorCreateWithoutUserInput, InstructorUncheckedCreateWithoutUserInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutUserInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutUserInput, InstructorUncheckedUpdateWithoutUserInput>
  }

  export type InstructorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutInstructorRelationNestedInput
  }

  export type InstructorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorRelationNestedInput
  }

  export type AdminUpsertWithoutUserInput = {
    update: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
    create: XOR<AdminCreateWithoutUserInput, AdminUncheckedCreateWithoutUserInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutUserInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutUserInput, AdminUncheckedUpdateWithoutUserInput>
  }

  export type AdminUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    instructor?: InstructorCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type CompletedCourseCreateWithoutStudentInput = {
    id?: string
    grade: string
    course: CourseCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    grade: string
  }

  export type CompletedCourseCreateOrConnectWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput>
  }

  export type CompletedCourseCreateManyStudentInputEnvelope = {
    data: CompletedCourseCreateManyStudentInput | CompletedCourseCreateManyStudentInput[]
  }

  export type CurrentCourseCreateWithoutStudentInput = {
    id?: string
    grade?: string | null
    course: CourseCreateNestedOneWithoutCurrentCoursesInput
  }

  export type CurrentCourseUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
    grade?: string | null
  }

  export type CurrentCourseCreateOrConnectWithoutStudentInput = {
    where: CurrentCourseWhereUniqueInput
    create: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput>
  }

  export type CurrentCourseCreateManyStudentInputEnvelope = {
    data: CurrentCourseCreateManyStudentInput | CurrentCourseCreateManyStudentInput[]
  }

  export type RegisteredCourseCreateWithoutStudentInput = {
    id?: string
    course: CourseCreateNestedOneWithoutRegisteredCoursesInput
  }

  export type RegisteredCourseUncheckedCreateWithoutStudentInput = {
    id?: string
    courseId: string
  }

  export type RegisteredCourseCreateOrConnectWithoutStudentInput = {
    where: RegisteredCourseWhereUniqueInput
    create: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput>
  }

  export type RegisteredCourseCreateManyStudentInputEnvelope = {
    data: RegisteredCourseCreateManyStudentInput | RegisteredCourseCreateManyStudentInput[]
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    instructor?: InstructorUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutStudentInput, CompletedCourseUncheckedUpdateWithoutStudentInput>
    create: XOR<CompletedCourseCreateWithoutStudentInput, CompletedCourseUncheckedCreateWithoutStudentInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutStudentInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutStudentInput, CompletedCourseUncheckedUpdateWithoutStudentInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutStudentInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutStudentInput>
  }

  export type CompletedCourseScalarWhereInput = {
    AND?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    OR?: CompletedCourseScalarWhereInput[]
    NOT?: CompletedCourseScalarWhereInput | CompletedCourseScalarWhereInput[]
    id?: StringFilter<"CompletedCourse"> | string
    studentId?: StringFilter<"CompletedCourse"> | string
    courseId?: StringFilter<"CompletedCourse"> | string
    grade?: StringFilter<"CompletedCourse"> | string
  }

  export type CurrentCourseUpsertWithWhereUniqueWithoutStudentInput = {
    where: CurrentCourseWhereUniqueInput
    update: XOR<CurrentCourseUpdateWithoutStudentInput, CurrentCourseUncheckedUpdateWithoutStudentInput>
    create: XOR<CurrentCourseCreateWithoutStudentInput, CurrentCourseUncheckedCreateWithoutStudentInput>
  }

  export type CurrentCourseUpdateWithWhereUniqueWithoutStudentInput = {
    where: CurrentCourseWhereUniqueInput
    data: XOR<CurrentCourseUpdateWithoutStudentInput, CurrentCourseUncheckedUpdateWithoutStudentInput>
  }

  export type CurrentCourseUpdateManyWithWhereWithoutStudentInput = {
    where: CurrentCourseScalarWhereInput
    data: XOR<CurrentCourseUpdateManyMutationInput, CurrentCourseUncheckedUpdateManyWithoutStudentInput>
  }

  export type CurrentCourseScalarWhereInput = {
    AND?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
    OR?: CurrentCourseScalarWhereInput[]
    NOT?: CurrentCourseScalarWhereInput | CurrentCourseScalarWhereInput[]
    id?: StringFilter<"CurrentCourse"> | string
    studentId?: StringFilter<"CurrentCourse"> | string
    courseId?: StringFilter<"CurrentCourse"> | string
    grade?: StringNullableFilter<"CurrentCourse"> | string | null
  }

  export type RegisteredCourseUpsertWithWhereUniqueWithoutStudentInput = {
    where: RegisteredCourseWhereUniqueInput
    update: XOR<RegisteredCourseUpdateWithoutStudentInput, RegisteredCourseUncheckedUpdateWithoutStudentInput>
    create: XOR<RegisteredCourseCreateWithoutStudentInput, RegisteredCourseUncheckedCreateWithoutStudentInput>
  }

  export type RegisteredCourseUpdateWithWhereUniqueWithoutStudentInput = {
    where: RegisteredCourseWhereUniqueInput
    data: XOR<RegisteredCourseUpdateWithoutStudentInput, RegisteredCourseUncheckedUpdateWithoutStudentInput>
  }

  export type RegisteredCourseUpdateManyWithWhereWithoutStudentInput = {
    where: RegisteredCourseScalarWhereInput
    data: XOR<RegisteredCourseUpdateManyMutationInput, RegisteredCourseUncheckedUpdateManyWithoutStudentInput>
  }

  export type RegisteredCourseScalarWhereInput = {
    AND?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
    OR?: RegisteredCourseScalarWhereInput[]
    NOT?: RegisteredCourseScalarWhereInput | RegisteredCourseScalarWhereInput[]
    id?: StringFilter<"RegisteredCourse"> | string
    studentId?: StringFilter<"RegisteredCourse"> | string
    courseId?: StringFilter<"RegisteredCourse"> | string
  }

  export type UserCreateWithoutInstructorInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentCreateNestedOneWithoutUserInput
    admin?: AdminCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstructorInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    admin?: AdminUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstructorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
  }

  export type CourseCreateWithoutInstructorRelationInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorRelationInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorRelationInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput>
  }

  export type CourseCreateManyInstructorRelationInputEnvelope = {
    data: CourseCreateManyInstructorRelationInput | CourseCreateManyInstructorRelationInput[]
  }

  export type UserUpsertWithoutInstructorInput = {
    update: XOR<UserUpdateWithoutInstructorInput, UserUncheckedUpdateWithoutInstructorInput>
    create: XOR<UserCreateWithoutInstructorInput, UserUncheckedCreateWithoutInstructorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorInput, UserUncheckedUpdateWithoutInstructorInput>
  }

  export type UserUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUpdateOneWithoutUserNestedInput
    admin?: AdminUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    admin?: AdminUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorRelationInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorRelationInput, CourseUncheckedUpdateWithoutInstructorRelationInput>
    create: XOR<CourseCreateWithoutInstructorRelationInput, CourseUncheckedCreateWithoutInstructorRelationInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorRelationInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorRelationInput, CourseUncheckedUpdateWithoutInstructorRelationInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorRelationInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorRelationInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    courseID?: StringFilter<"Course"> | string
    courseName?: StringFilter<"Course"> | string
    code?: StringNullableFilter<"Course"> | string | null
    category?: StringNullableFilter<"Course"> | string | null
    description?: StringNullableFilter<"Course"> | string | null
    instructor?: StringNullableFilter<"Course"> | string | null
    instructorId?: StringNullableFilter<"Course"> | string | null
    openForRegistration?: BoolFilter<"Course"> | boolean
    status?: StringFilter<"Course"> | string
    availableSeats?: IntFilter<"Course"> | number
    prerequisites?: JsonNullableFilter<"Course">
  }

  export type UserCreateWithoutAdminInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentCreateNestedOneWithoutUserInput
    instructor?: InstructorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAdminInput = {
    id?: string
    username: string
    password: string
    type: $Enums.UserType
    student?: StudentUncheckedCreateNestedOneWithoutUserInput
    instructor?: InstructorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAdminInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
  }

  export type UserUpsertWithoutAdminInput = {
    update: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
    create: XOR<UserCreateWithoutAdminInput, UserUncheckedCreateWithoutAdminInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAdminInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAdminInput, UserUncheckedUpdateWithoutAdminInput>
  }

  export type UserUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUpdateOneWithoutUserNestedInput
    instructor?: InstructorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    student?: StudentUncheckedUpdateOneWithoutUserNestedInput
    instructor?: InstructorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type InstructorCreateWithoutCoursesInput = {
    id?: string
    user: UserCreateNestedOneWithoutInstructorInput
  }

  export type InstructorUncheckedCreateWithoutCoursesInput = {
    id?: string
    userId: string
  }

  export type InstructorCreateOrConnectWithoutCoursesInput = {
    where: InstructorWhereUniqueInput
    create: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
  }

  export type CompletedCourseCreateWithoutCourseInput = {
    id?: string
    grade: string
    student: StudentCreateNestedOneWithoutCompletedCoursesInput
  }

  export type CompletedCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    grade: string
  }

  export type CompletedCourseCreateOrConnectWithoutCourseInput = {
    where: CompletedCourseWhereUniqueInput
    create: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput>
  }

  export type CompletedCourseCreateManyCourseInputEnvelope = {
    data: CompletedCourseCreateManyCourseInput | CompletedCourseCreateManyCourseInput[]
  }

  export type CurrentCourseCreateWithoutCourseInput = {
    id?: string
    grade?: string | null
    student: StudentCreateNestedOneWithoutCurrentCoursesInput
  }

  export type CurrentCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
    grade?: string | null
  }

  export type CurrentCourseCreateOrConnectWithoutCourseInput = {
    where: CurrentCourseWhereUniqueInput
    create: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput>
  }

  export type CurrentCourseCreateManyCourseInputEnvelope = {
    data: CurrentCourseCreateManyCourseInput | CurrentCourseCreateManyCourseInput[]
  }

  export type RegisteredCourseCreateWithoutCourseInput = {
    id?: string
    student: StudentCreateNestedOneWithoutRegisteredCoursesInput
  }

  export type RegisteredCourseUncheckedCreateWithoutCourseInput = {
    id?: string
    studentId: string
  }

  export type RegisteredCourseCreateOrConnectWithoutCourseInput = {
    where: RegisteredCourseWhereUniqueInput
    create: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput>
  }

  export type RegisteredCourseCreateManyCourseInputEnvelope = {
    data: RegisteredCourseCreateManyCourseInput | RegisteredCourseCreateManyCourseInput[]
  }

  export type InstructorUpsertWithoutCoursesInput = {
    update: XOR<InstructorUpdateWithoutCoursesInput, InstructorUncheckedUpdateWithoutCoursesInput>
    create: XOR<InstructorCreateWithoutCoursesInput, InstructorUncheckedCreateWithoutCoursesInput>
    where?: InstructorWhereInput
  }

  export type InstructorUpdateToOneWithWhereWithoutCoursesInput = {
    where?: InstructorWhereInput
    data: XOR<InstructorUpdateWithoutCoursesInput, InstructorUncheckedUpdateWithoutCoursesInput>
  }

  export type InstructorUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutInstructorNestedInput
  }

  export type InstructorUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CompletedCourseWhereUniqueInput
    update: XOR<CompletedCourseUpdateWithoutCourseInput, CompletedCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<CompletedCourseCreateWithoutCourseInput, CompletedCourseUncheckedCreateWithoutCourseInput>
  }

  export type CompletedCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CompletedCourseWhereUniqueInput
    data: XOR<CompletedCourseUpdateWithoutCourseInput, CompletedCourseUncheckedUpdateWithoutCourseInput>
  }

  export type CompletedCourseUpdateManyWithWhereWithoutCourseInput = {
    where: CompletedCourseScalarWhereInput
    data: XOR<CompletedCourseUpdateManyMutationInput, CompletedCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type CurrentCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: CurrentCourseWhereUniqueInput
    update: XOR<CurrentCourseUpdateWithoutCourseInput, CurrentCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<CurrentCourseCreateWithoutCourseInput, CurrentCourseUncheckedCreateWithoutCourseInput>
  }

  export type CurrentCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: CurrentCourseWhereUniqueInput
    data: XOR<CurrentCourseUpdateWithoutCourseInput, CurrentCourseUncheckedUpdateWithoutCourseInput>
  }

  export type CurrentCourseUpdateManyWithWhereWithoutCourseInput = {
    where: CurrentCourseScalarWhereInput
    data: XOR<CurrentCourseUpdateManyMutationInput, CurrentCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type RegisteredCourseUpsertWithWhereUniqueWithoutCourseInput = {
    where: RegisteredCourseWhereUniqueInput
    update: XOR<RegisteredCourseUpdateWithoutCourseInput, RegisteredCourseUncheckedUpdateWithoutCourseInput>
    create: XOR<RegisteredCourseCreateWithoutCourseInput, RegisteredCourseUncheckedCreateWithoutCourseInput>
  }

  export type RegisteredCourseUpdateWithWhereUniqueWithoutCourseInput = {
    where: RegisteredCourseWhereUniqueInput
    data: XOR<RegisteredCourseUpdateWithoutCourseInput, RegisteredCourseUncheckedUpdateWithoutCourseInput>
  }

  export type RegisteredCourseUpdateManyWithWhereWithoutCourseInput = {
    where: RegisteredCourseScalarWhereInput
    data: XOR<RegisteredCourseUpdateManyMutationInput, RegisteredCourseUncheckedUpdateManyWithoutCourseInput>
  }

  export type StudentCreateWithoutCompletedCoursesInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCompletedCoursesInput = {
    id?: string
    userId: string
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCompletedCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
  }

  export type CourseCreateWithoutCompletedCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorCreateNestedOneWithoutCoursesInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCompletedCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    instructorId?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCompletedCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCompletedCoursesInput, CourseUncheckedCreateWithoutCompletedCoursesInput>
  }

  export type StudentUpsertWithoutCompletedCoursesInput = {
    update: XOR<StudentUpdateWithoutCompletedCoursesInput, StudentUncheckedUpdateWithoutCompletedCoursesInput>
    create: XOR<StudentCreateWithoutCompletedCoursesInput, StudentUncheckedCreateWithoutCompletedCoursesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCompletedCoursesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCompletedCoursesInput, StudentUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type StudentUpdateWithoutCompletedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCompletedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutCompletedCoursesInput = {
    update: XOR<CourseUpdateWithoutCompletedCoursesInput, CourseUncheckedUpdateWithoutCompletedCoursesInput>
    create: XOR<CourseCreateWithoutCompletedCoursesInput, CourseUncheckedCreateWithoutCompletedCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCompletedCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCompletedCoursesInput, CourseUncheckedUpdateWithoutCompletedCoursesInput>
  }

  export type CourseUpdateWithoutCompletedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorUpdateOneWithoutCoursesNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCompletedCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentCreateWithoutCurrentCoursesInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutCurrentCoursesInput = {
    id?: string
    userId: string
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutCurrentCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCurrentCoursesInput, StudentUncheckedCreateWithoutCurrentCoursesInput>
  }

  export type CourseCreateWithoutCurrentCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorCreateNestedOneWithoutCoursesInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutCurrentCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    instructorId?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutCourseInput
    registeredCourses?: RegisteredCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutCurrentCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutCurrentCoursesInput, CourseUncheckedCreateWithoutCurrentCoursesInput>
  }

  export type StudentUpsertWithoutCurrentCoursesInput = {
    update: XOR<StudentUpdateWithoutCurrentCoursesInput, StudentUncheckedUpdateWithoutCurrentCoursesInput>
    create: XOR<StudentCreateWithoutCurrentCoursesInput, StudentUncheckedCreateWithoutCurrentCoursesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutCurrentCoursesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutCurrentCoursesInput, StudentUncheckedUpdateWithoutCurrentCoursesInput>
  }

  export type StudentUpdateWithoutCurrentCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutCurrentCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutCurrentCoursesInput = {
    update: XOR<CourseUpdateWithoutCurrentCoursesInput, CourseUncheckedUpdateWithoutCurrentCoursesInput>
    create: XOR<CourseCreateWithoutCurrentCoursesInput, CourseUncheckedCreateWithoutCurrentCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutCurrentCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutCurrentCoursesInput, CourseUncheckedUpdateWithoutCurrentCoursesInput>
  }

  export type CourseUpdateWithoutCurrentCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorUpdateOneWithoutCoursesNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutCurrentCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type StudentCreateWithoutRegisteredCoursesInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRegisteredCoursesInput = {
    id?: string
    userId: string
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutStudentInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRegisteredCoursesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRegisteredCoursesInput, StudentUncheckedCreateWithoutRegisteredCoursesInput>
  }

  export type CourseCreateWithoutRegisteredCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorCreateNestedOneWithoutCoursesInput
    completedCourses?: CompletedCourseCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutRegisteredCoursesInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    instructorId?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedCreateNestedManyWithoutCourseInput
    currentCourses?: CurrentCourseUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutRegisteredCoursesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutRegisteredCoursesInput, CourseUncheckedCreateWithoutRegisteredCoursesInput>
  }

  export type StudentUpsertWithoutRegisteredCoursesInput = {
    update: XOR<StudentUpdateWithoutRegisteredCoursesInput, StudentUncheckedUpdateWithoutRegisteredCoursesInput>
    create: XOR<StudentCreateWithoutRegisteredCoursesInput, StudentUncheckedCreateWithoutRegisteredCoursesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutRegisteredCoursesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutRegisteredCoursesInput, StudentUncheckedUpdateWithoutRegisteredCoursesInput>
  }

  export type StudentUpdateWithoutRegisteredCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRegisteredCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutStudentNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CourseUpsertWithoutRegisteredCoursesInput = {
    update: XOR<CourseUpdateWithoutRegisteredCoursesInput, CourseUncheckedUpdateWithoutRegisteredCoursesInput>
    create: XOR<CourseCreateWithoutRegisteredCoursesInput, CourseUncheckedCreateWithoutRegisteredCoursesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutRegisteredCoursesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutRegisteredCoursesInput, CourseUncheckedUpdateWithoutRegisteredCoursesInput>
  }

  export type CourseUpdateWithoutRegisteredCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    instructorRelation?: InstructorUpdateOneWithoutCoursesNestedInput
    completedCourses?: CompletedCourseUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutRegisteredCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    instructorId?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CompletedCourseCreateManyStudentInput = {
    id?: string
    courseId: string
    grade: string
  }

  export type CurrentCourseCreateManyStudentInput = {
    id?: string
    courseId: string
    grade?: string | null
  }

  export type RegisteredCourseCreateManyStudentInput = {
    id?: string
    courseId: string
  }

  export type CompletedCourseUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CurrentCourseUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    course?: CourseUpdateOneRequiredWithoutCurrentCoursesNestedInput
  }

  export type CurrentCourseUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrentCourseUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisteredCourseUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    course?: CourseUpdateOneRequiredWithoutRegisteredCoursesNestedInput
  }

  export type RegisteredCourseUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredCourseUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateManyInstructorRelationInput = {
    id: string
    courseID: string
    courseName: string
    code?: string | null
    category?: string | null
    description?: string | null
    instructor?: string | null
    openForRegistration?: boolean
    status?: string
    availableSeats?: number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CourseUpdateWithoutInstructorRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
    completedCourses?: CompletedCourseUncheckedUpdateManyWithoutCourseNestedInput
    currentCourses?: CurrentCourseUncheckedUpdateManyWithoutCourseNestedInput
    registeredCourses?: RegisteredCourseUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    courseID?: StringFieldUpdateOperationsInput | string
    courseName?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    instructor?: NullableStringFieldUpdateOperationsInput | string | null
    openForRegistration?: BoolFieldUpdateOperationsInput | boolean
    status?: StringFieldUpdateOperationsInput | string
    availableSeats?: IntFieldUpdateOperationsInput | number
    prerequisites?: NullableJsonNullValueInput | InputJsonValue
  }

  export type CompletedCourseCreateManyCourseInput = {
    id?: string
    studentId: string
    grade: string
  }

  export type CurrentCourseCreateManyCourseInput = {
    id?: string
    studentId: string
    grade?: string | null
  }

  export type RegisteredCourseCreateManyCourseInput = {
    id?: string
    studentId: string
  }

  export type CompletedCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutCompletedCoursesNestedInput
  }

  export type CompletedCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CompletedCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type CurrentCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentUpdateOneRequiredWithoutCurrentCoursesNestedInput
  }

  export type CurrentCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CurrentCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    grade?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegisteredCourseUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutRegisteredCoursesNestedInput
  }

  export type RegisteredCourseUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredCourseUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}