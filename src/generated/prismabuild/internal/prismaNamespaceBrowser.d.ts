import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Product: "Product";
    readonly farminginformation: "farminginformation";
    readonly training: "training";
    readonly trainingregisteruser: "trainingregisteruser";
    readonly user: "user";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProductScalarFieldEnum: {
    readonly productId: "productId";
    readonly userId: "userId";
    readonly price: "price";
    readonly quantity: "quantity";
    readonly farmersName: "farmersName";
    readonly productName: "productName";
    readonly phoneNumber: "phoneNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly pronductImage: "pronductImage";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const FarminginformationScalarFieldEnum: {
    readonly farmingId: "farmingId";
    readonly authorId: "authorId";
    readonly status: "status";
    readonly title: "title";
    readonly article: "article";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly farmingInfoImage: "farmingInfoImage";
};
export type FarminginformationScalarFieldEnum = (typeof FarminginformationScalarFieldEnum)[keyof typeof FarminginformationScalarFieldEnum];
export declare const TrainingScalarFieldEnum: {
    readonly trainingId: "trainingId";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly city: "city";
    readonly place: "place";
    readonly description: "description";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly country: "country";
    readonly state: "state";
    readonly trainingDate: "trainingDate";
    readonly trainingImage: "trainingImage";
};
export type TrainingScalarFieldEnum = (typeof TrainingScalarFieldEnum)[keyof typeof TrainingScalarFieldEnum];
export declare const TrainingregisteruserScalarFieldEnum: {
    readonly registryId: "registryId";
    readonly userId: "userId";
    readonly trainingEventId: "trainingEventId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TrainingregisteruserScalarFieldEnum = (typeof TrainingregisteruserScalarFieldEnum)[keyof typeof TrainingregisteruserScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly userId: "userId";
    readonly email: "email";
    readonly password: "password";
    readonly role: "role";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly bio: "bio";
    readonly city: "city";
    readonly country: "country";
    readonly farming: "farming";
    readonly scale: "scale";
    readonly state: "state";
    readonly profileImage: "profileImage";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const ProductOrderByRelevanceFieldEnum: {
    readonly productId: "productId";
    readonly userId: "userId";
    readonly farmersName: "farmersName";
    readonly productName: "productName";
    readonly phoneNumber: "phoneNumber";
    readonly pronductImage: "pronductImage";
};
export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];
export declare const farminginformationOrderByRelevanceFieldEnum: {
    readonly farmingId: "farmingId";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly article: "article";
    readonly farmingInfoImage: "farmingInfoImage";
};
export type farminginformationOrderByRelevanceFieldEnum = (typeof farminginformationOrderByRelevanceFieldEnum)[keyof typeof farminginformationOrderByRelevanceFieldEnum];
export declare const trainingOrderByRelevanceFieldEnum: {
    readonly trainingId: "trainingId";
    readonly authorId: "authorId";
    readonly title: "title";
    readonly city: "city";
    readonly place: "place";
    readonly description: "description";
    readonly country: "country";
    readonly state: "state";
    readonly trainingImage: "trainingImage";
};
export type trainingOrderByRelevanceFieldEnum = (typeof trainingOrderByRelevanceFieldEnum)[keyof typeof trainingOrderByRelevanceFieldEnum];
export declare const trainingregisteruserOrderByRelevanceFieldEnum: {
    readonly registryId: "registryId";
    readonly userId: "userId";
    readonly trainingEventId: "trainingEventId";
};
export type trainingregisteruserOrderByRelevanceFieldEnum = (typeof trainingregisteruserOrderByRelevanceFieldEnum)[keyof typeof trainingregisteruserOrderByRelevanceFieldEnum];
export declare const userOrderByRelevanceFieldEnum: {
    readonly userId: "userId";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly bio: "bio";
    readonly city: "city";
    readonly country: "country";
    readonly state: "state";
    readonly profileImage: "profileImage";
};
export type userOrderByRelevanceFieldEnum = (typeof userOrderByRelevanceFieldEnum)[keyof typeof userOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map