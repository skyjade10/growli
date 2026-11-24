import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model user
 *
 */
export type userModel = runtime.Types.Result.DefaultSelection<Prisma.$userPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    userId: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.user_role | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    bio: string | null;
    city: string | null;
    country: string | null;
    farming: $Enums.user_farming | null;
    scale: $Enums.user_scale | null;
    state: string | null;
    profileImage: string | null;
};
export type UserMaxAggregateOutputType = {
    userId: string | null;
    email: string | null;
    password: string | null;
    role: $Enums.user_role | null;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    bio: string | null;
    city: string | null;
    country: string | null;
    farming: $Enums.user_farming | null;
    scale: $Enums.user_scale | null;
    state: string | null;
    profileImage: string | null;
};
export type UserCountAggregateOutputType = {
    userId: number;
    email: number;
    password: number;
    role: number;
    firstName: number;
    lastName: number;
    createdAt: number;
    updatedAt: number;
    bio: number;
    city: number;
    country: number;
    farming: number;
    scale: number;
    state: number;
    profileImage: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    userId?: true;
    email?: true;
    password?: true;
    role?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    city?: true;
    country?: true;
    farming?: true;
    scale?: true;
    state?: true;
    profileImage?: true;
};
export type UserMaxAggregateInputType = {
    userId?: true;
    email?: true;
    password?: true;
    role?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    city?: true;
    country?: true;
    farming?: true;
    scale?: true;
    state?: true;
    profileImage?: true;
};
export type UserCountAggregateInputType = {
    userId?: true;
    email?: true;
    password?: true;
    role?: true;
    firstName?: true;
    lastName?: true;
    createdAt?: true;
    updatedAt?: true;
    bio?: true;
    city?: true;
    country?: true;
    farming?: true;
    scale?: true;
    state?: true;
    profileImage?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: Prisma.userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type userGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.userWhereInput;
    orderBy?: Prisma.userOrderByWithAggregationInput | Prisma.userOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    userId: string;
    email: string;
    password: string;
    role: $Enums.user_role;
    firstName: string | null;
    lastName: string | null;
    createdAt: Date;
    updatedAt: Date;
    bio: string | null;
    city: string | null;
    country: string | null;
    farming: $Enums.user_farming | null;
    scale: $Enums.user_scale;
    state: string | null;
    profileImage: string | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type userWhereInput = {
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    userId?: Prisma.StringFilter<"user"> | string;
    email?: Prisma.StringFilter<"user"> | string;
    password?: Prisma.StringFilter<"user"> | string;
    role?: Prisma.Enumuser_roleFilter<"user"> | $Enums.user_role;
    firstName?: Prisma.StringNullableFilter<"user"> | string | null;
    lastName?: Prisma.StringNullableFilter<"user"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    bio?: Prisma.StringNullableFilter<"user"> | string | null;
    city?: Prisma.StringNullableFilter<"user"> | string | null;
    country?: Prisma.StringNullableFilter<"user"> | string | null;
    farming?: Prisma.Enumuser_farmingNullableFilter<"user"> | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFilter<"user"> | $Enums.user_scale;
    state?: Prisma.StringNullableFilter<"user"> | string | null;
    profileImage?: Prisma.StringNullableFilter<"user"> | string | null;
    farminginformation?: Prisma.FarminginformationListRelationFilter;
    product?: Prisma.ProductListRelationFilter;
    training?: Prisma.TrainingListRelationFilter;
    trainingregisteruser?: Prisma.TrainingregisteruserListRelationFilter;
};
export type userOrderByWithRelationInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    farming?: Prisma.SortOrderInput | Prisma.SortOrder;
    scale?: Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    farminginformation?: Prisma.farminginformationOrderByRelationAggregateInput;
    product?: Prisma.ProductOrderByRelationAggregateInput;
    training?: Prisma.trainingOrderByRelationAggregateInput;
    trainingregisteruser?: Prisma.trainingregisteruserOrderByRelationAggregateInput;
    _relevance?: Prisma.userOrderByRelevanceInput;
};
export type userWhereUniqueInput = Prisma.AtLeast<{
    userId?: string;
    email?: string;
    AND?: Prisma.userWhereInput | Prisma.userWhereInput[];
    OR?: Prisma.userWhereInput[];
    NOT?: Prisma.userWhereInput | Prisma.userWhereInput[];
    password?: Prisma.StringFilter<"user"> | string;
    role?: Prisma.Enumuser_roleFilter<"user"> | $Enums.user_role;
    firstName?: Prisma.StringNullableFilter<"user"> | string | null;
    lastName?: Prisma.StringNullableFilter<"user"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"user"> | Date | string;
    bio?: Prisma.StringNullableFilter<"user"> | string | null;
    city?: Prisma.StringNullableFilter<"user"> | string | null;
    country?: Prisma.StringNullableFilter<"user"> | string | null;
    farming?: Prisma.Enumuser_farmingNullableFilter<"user"> | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFilter<"user"> | $Enums.user_scale;
    state?: Prisma.StringNullableFilter<"user"> | string | null;
    profileImage?: Prisma.StringNullableFilter<"user"> | string | null;
    farminginformation?: Prisma.FarminginformationListRelationFilter;
    product?: Prisma.ProductListRelationFilter;
    training?: Prisma.TrainingListRelationFilter;
    trainingregisteruser?: Prisma.TrainingregisteruserListRelationFilter;
}, "userId" | "email">;
export type userOrderByWithAggregationInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    farming?: Prisma.SortOrderInput | Prisma.SortOrder;
    scale?: Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    profileImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.userCountOrderByAggregateInput;
    _max?: Prisma.userMaxOrderByAggregateInput;
    _min?: Prisma.userMinOrderByAggregateInput;
};
export type userScalarWhereWithAggregatesInput = {
    AND?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    OR?: Prisma.userScalarWhereWithAggregatesInput[];
    NOT?: Prisma.userScalarWhereWithAggregatesInput | Prisma.userScalarWhereWithAggregatesInput[];
    userId?: Prisma.StringWithAggregatesFilter<"user"> | string;
    email?: Prisma.StringWithAggregatesFilter<"user"> | string;
    password?: Prisma.StringWithAggregatesFilter<"user"> | string;
    role?: Prisma.Enumuser_roleWithAggregatesFilter<"user"> | $Enums.user_role;
    firstName?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"user"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"user"> | Date | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    city?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    country?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    farming?: Prisma.Enumuser_farmingNullableWithAggregatesFilter<"user"> | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleWithAggregatesFilter<"user"> | $Enums.user_scale;
    state?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
    profileImage?: Prisma.StringNullableWithAggregatesFilter<"user"> | string | null;
};
export type userCreateInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationUncheckedCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductUncheckedCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingUncheckedCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutUserInput;
};
export type userUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUncheckedUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUncheckedUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUncheckedUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateManyInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
};
export type userUpdateManyMutationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type userUncheckedUpdateManyInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UserScalarRelationFilter = {
    is?: Prisma.userWhereInput;
    isNot?: Prisma.userWhereInput;
};
export type userOrderByRelevanceInput = {
    fields: Prisma.userOrderByRelevanceFieldEnum | Prisma.userOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type userCountOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    farming?: Prisma.SortOrder;
    scale?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
};
export type userMaxOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    farming?: Prisma.SortOrder;
    scale?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
};
export type userMinOrderByAggregateInput = {
    userId?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    farming?: Prisma.SortOrder;
    scale?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    profileImage?: Prisma.SortOrder;
};
export type userCreateNestedOneWithoutProductInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutProductInput, Prisma.userUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutProductInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutProductInput, Prisma.userUncheckedCreateWithoutProductInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutProductInput;
    upsert?: Prisma.userUpsertWithoutProductInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutProductInput, Prisma.userUpdateWithoutProductInput>, Prisma.userUncheckedUpdateWithoutProductInput>;
};
export type userCreateNestedOneWithoutFarminginformationInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutFarminginformationInput, Prisma.userUncheckedCreateWithoutFarminginformationInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutFarminginformationInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutFarminginformationNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutFarminginformationInput, Prisma.userUncheckedCreateWithoutFarminginformationInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutFarminginformationInput;
    upsert?: Prisma.userUpsertWithoutFarminginformationInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutFarminginformationInput, Prisma.userUpdateWithoutFarminginformationInput>, Prisma.userUncheckedUpdateWithoutFarminginformationInput>;
};
export type userCreateNestedOneWithoutTrainingInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutTrainingInput, Prisma.userUncheckedCreateWithoutTrainingInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutTrainingInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutTrainingNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutTrainingInput, Prisma.userUncheckedCreateWithoutTrainingInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutTrainingInput;
    upsert?: Prisma.userUpsertWithoutTrainingInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutTrainingInput, Prisma.userUpdateWithoutTrainingInput>, Prisma.userUncheckedUpdateWithoutTrainingInput>;
};
export type userCreateNestedOneWithoutTrainingregisteruserInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutTrainingregisteruserInput, Prisma.userUncheckedCreateWithoutTrainingregisteruserInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutTrainingregisteruserInput;
    connect?: Prisma.userWhereUniqueInput;
};
export type userUpdateOneRequiredWithoutTrainingregisteruserNestedInput = {
    create?: Prisma.XOR<Prisma.userCreateWithoutTrainingregisteruserInput, Prisma.userUncheckedCreateWithoutTrainingregisteruserInput>;
    connectOrCreate?: Prisma.userCreateOrConnectWithoutTrainingregisteruserInput;
    upsert?: Prisma.userUpsertWithoutTrainingregisteruserInput;
    connect?: Prisma.userWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.userUpdateToOneWithWhereWithoutTrainingregisteruserInput, Prisma.userUpdateWithoutTrainingregisteruserInput>, Prisma.userUncheckedUpdateWithoutTrainingregisteruserInput>;
};
export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role;
};
export type NullableEnumuser_farmingFieldUpdateOperationsInput = {
    set?: $Enums.user_farming | null;
};
export type Enumuser_scaleFieldUpdateOperationsInput = {
    set?: $Enums.user_scale;
};
export type userCreateWithoutProductInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutProductInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationUncheckedCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingUncheckedCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutProductInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutProductInput, Prisma.userUncheckedCreateWithoutProductInput>;
};
export type userUpsertWithoutProductInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutProductInput, Prisma.userUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutProductInput, Prisma.userUncheckedCreateWithoutProductInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutProductInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutProductInput, Prisma.userUncheckedUpdateWithoutProductInput>;
};
export type userUpdateWithoutProductInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutProductInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUncheckedUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUncheckedUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateWithoutFarminginformationInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    product?: Prisma.ProductCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutFarminginformationInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    product?: Prisma.ProductUncheckedCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingUncheckedCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutFarminginformationInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutFarminginformationInput, Prisma.userUncheckedCreateWithoutFarminginformationInput>;
};
export type userUpsertWithoutFarminginformationInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutFarminginformationInput, Prisma.userUncheckedUpdateWithoutFarminginformationInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutFarminginformationInput, Prisma.userUncheckedCreateWithoutFarminginformationInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutFarminginformationInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutFarminginformationInput, Prisma.userUncheckedUpdateWithoutFarminginformationInput>;
};
export type userUpdateWithoutFarminginformationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    product?: Prisma.ProductUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutFarminginformationInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    product?: Prisma.ProductUncheckedUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUncheckedUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateWithoutTrainingInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutTrainingInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationUncheckedCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductUncheckedCreateNestedManyWithoutUserInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutTrainingInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutTrainingInput, Prisma.userUncheckedCreateWithoutTrainingInput>;
};
export type userUpsertWithoutTrainingInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutTrainingInput, Prisma.userUncheckedUpdateWithoutTrainingInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutTrainingInput, Prisma.userUncheckedCreateWithoutTrainingInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutTrainingInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutTrainingInput, Prisma.userUncheckedUpdateWithoutTrainingInput>;
};
export type userUpdateWithoutTrainingInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutTrainingInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUncheckedUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUncheckedUpdateManyWithoutUserNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutUserNestedInput;
};
export type userCreateWithoutTrainingregisteruserInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingCreateNestedManyWithoutUserInput;
};
export type userUncheckedCreateWithoutTrainingregisteruserInput = {
    userId: string;
    email: string;
    password: string;
    role?: $Enums.user_role;
    firstName?: string | null;
    lastName?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    bio?: string | null;
    city?: string | null;
    country?: string | null;
    farming?: $Enums.user_farming | null;
    scale?: $Enums.user_scale;
    state?: string | null;
    profileImage?: string | null;
    farminginformation?: Prisma.farminginformationUncheckedCreateNestedManyWithoutUserInput;
    product?: Prisma.ProductUncheckedCreateNestedManyWithoutUserInput;
    training?: Prisma.trainingUncheckedCreateNestedManyWithoutUserInput;
};
export type userCreateOrConnectWithoutTrainingregisteruserInput = {
    where: Prisma.userWhereUniqueInput;
    create: Prisma.XOR<Prisma.userCreateWithoutTrainingregisteruserInput, Prisma.userUncheckedCreateWithoutTrainingregisteruserInput>;
};
export type userUpsertWithoutTrainingregisteruserInput = {
    update: Prisma.XOR<Prisma.userUpdateWithoutTrainingregisteruserInput, Prisma.userUncheckedUpdateWithoutTrainingregisteruserInput>;
    create: Prisma.XOR<Prisma.userCreateWithoutTrainingregisteruserInput, Prisma.userUncheckedCreateWithoutTrainingregisteruserInput>;
    where?: Prisma.userWhereInput;
};
export type userUpdateToOneWithWhereWithoutTrainingregisteruserInput = {
    where?: Prisma.userWhereInput;
    data: Prisma.XOR<Prisma.userUpdateWithoutTrainingregisteruserInput, Prisma.userUncheckedUpdateWithoutTrainingregisteruserInput>;
};
export type userUpdateWithoutTrainingregisteruserInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUpdateManyWithoutUserNestedInput;
};
export type userUncheckedUpdateWithoutTrainingregisteruserInput = {
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farming?: Prisma.NullableEnumuser_farmingFieldUpdateOperationsInput | $Enums.user_farming | null;
    scale?: Prisma.Enumuser_scaleFieldUpdateOperationsInput | $Enums.user_scale;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profileImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    farminginformation?: Prisma.farminginformationUncheckedUpdateManyWithoutUserNestedInput;
    product?: Prisma.ProductUncheckedUpdateManyWithoutUserNestedInput;
    training?: Prisma.trainingUncheckedUpdateManyWithoutUserNestedInput;
};
/**
 * Count Type UserCountOutputType
 */
export type UserCountOutputType = {
    farminginformation: number;
    product: number;
    training: number;
    trainingregisteruser: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farminginformation?: boolean | UserCountOutputTypeCountFarminginformationArgs;
    product?: boolean | UserCountOutputTypeCountProductArgs;
    training?: boolean | UserCountOutputTypeCountTrainingArgs;
    trainingregisteruser?: boolean | UserCountOutputTypeCountTrainingregisteruserArgs;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountFarminginformationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.farminginformationWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountProductArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTrainingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trainingWhereInput;
};
/**
 * UserCountOutputType without action
 */
export type UserCountOutputTypeCountTrainingregisteruserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trainingregisteruserWhereInput;
};
export type userSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    userId?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bio?: boolean;
    city?: boolean;
    country?: boolean;
    farming?: boolean;
    scale?: boolean;
    state?: boolean;
    profileImage?: boolean;
    farminginformation?: boolean | Prisma.user$farminginformationArgs<ExtArgs>;
    product?: boolean | Prisma.user$productArgs<ExtArgs>;
    training?: boolean | Prisma.user$trainingArgs<ExtArgs>;
    trainingregisteruser?: boolean | Prisma.user$trainingregisteruserArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type userSelectScalar = {
    userId?: boolean;
    email?: boolean;
    password?: boolean;
    role?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bio?: boolean;
    city?: boolean;
    country?: boolean;
    farming?: boolean;
    scale?: boolean;
    state?: boolean;
    profileImage?: boolean;
};
export type userOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"userId" | "email" | "password" | "role" | "firstName" | "lastName" | "createdAt" | "updatedAt" | "bio" | "city" | "country" | "farming" | "scale" | "state" | "profileImage", ExtArgs["result"]["user"]>;
export type userInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    farminginformation?: boolean | Prisma.user$farminginformationArgs<ExtArgs>;
    product?: boolean | Prisma.user$productArgs<ExtArgs>;
    training?: boolean | Prisma.user$trainingArgs<ExtArgs>;
    trainingregisteruser?: boolean | Prisma.user$trainingregisteruserArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $userPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user";
    objects: {
        farminginformation: Prisma.$farminginformationPayload<ExtArgs>[];
        product: Prisma.$ProductPayload<ExtArgs>[];
        training: Prisma.$trainingPayload<ExtArgs>[];
        trainingregisteruser: Prisma.$trainingregisteruserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        userId: string;
        email: string;
        password: string;
        role: $Enums.user_role;
        firstName: string | null;
        lastName: string | null;
        createdAt: Date;
        updatedAt: Date;
        bio: string | null;
        city: string | null;
        country: string | null;
        farming: $Enums.user_farming | null;
        scale: $Enums.user_scale;
        state: string | null;
        profileImage: string | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$userPayload, S>;
export type userCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface userDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user'];
        meta: {
            name: 'user';
        };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: Prisma.SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: Prisma.SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends userFindManyArgs>(args?: Prisma.SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends userCreateArgs>(args: Prisma.SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends userCreateManyArgs>(args?: Prisma.SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends userDeleteArgs>(args: Prisma.SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: Prisma.SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends userDeleteManyArgs>(args?: Prisma.SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: Prisma.SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: Prisma.SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(args?: Prisma.Subset<T, userCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
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
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
    groupBy<T extends userGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: userGroupByArgs['orderBy'];
    } : {
        orderBy?: userGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for user.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__userClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    farminginformation<T extends Prisma.user$farminginformationArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$farminginformationArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    product<T extends Prisma.user$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$productArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    training<T extends Prisma.user$trainingArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$trainingArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    trainingregisteruser<T extends Prisma.user$trainingregisteruserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user$trainingregisteruserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the user model
 */
export interface userFieldRefs {
    readonly userId: Prisma.FieldRef<"user", 'String'>;
    readonly email: Prisma.FieldRef<"user", 'String'>;
    readonly password: Prisma.FieldRef<"user", 'String'>;
    readonly role: Prisma.FieldRef<"user", 'user_role'>;
    readonly firstName: Prisma.FieldRef<"user", 'String'>;
    readonly lastName: Prisma.FieldRef<"user", 'String'>;
    readonly createdAt: Prisma.FieldRef<"user", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"user", 'DateTime'>;
    readonly bio: Prisma.FieldRef<"user", 'String'>;
    readonly city: Prisma.FieldRef<"user", 'String'>;
    readonly country: Prisma.FieldRef<"user", 'String'>;
    readonly farming: Prisma.FieldRef<"user", 'user_farming'>;
    readonly scale: Prisma.FieldRef<"user", 'user_scale'>;
    readonly state: Prisma.FieldRef<"user", 'String'>;
    readonly profileImage: Prisma.FieldRef<"user", 'String'>;
}
/**
 * user findUnique
 */
export type userFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: Prisma.userWhereUniqueInput;
};
/**
 * user findUniqueOrThrow
 */
export type userFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: Prisma.userWhereUniqueInput;
};
/**
 * user findFirst
 */
export type userFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: Prisma.userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * user findFirstOrThrow
 */
export type userFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: Prisma.userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: Prisma.userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * user findMany
 */
export type userFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: Prisma.userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: Prisma.userOrderByWithRelationInput | Prisma.userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: Prisma.userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
/**
 * user create
 */
export type userCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
};
/**
 * user createMany
 */
export type userCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: Prisma.userCreateManyInput | Prisma.userCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * user update
 */
export type userUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: Prisma.userWhereUniqueInput;
};
/**
 * user updateMany
 */
export type userUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: Prisma.XOR<Prisma.userUpdateManyMutationInput, Prisma.userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: Prisma.userWhereInput;
    /**
     * Limit how many users to update.
     */
    limit?: number;
};
/**
 * user upsert
 */
export type userUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: Prisma.userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: Prisma.XOR<Prisma.userCreateInput, Prisma.userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.userUpdateInput, Prisma.userUncheckedUpdateInput>;
};
/**
 * user delete
 */
export type userDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: Prisma.userWhereUniqueInput;
};
/**
 * user deleteMany
 */
export type userDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: Prisma.userWhereInput;
    /**
     * Limit how many users to delete.
     */
    limit?: number;
};
/**
 * user.farminginformation
 */
export type user$farminginformationArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the farminginformation
     */
    select?: Prisma.farminginformationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the farminginformation
     */
    omit?: Prisma.farminginformationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.farminginformationInclude<ExtArgs> | null;
    where?: Prisma.farminginformationWhereInput;
    orderBy?: Prisma.farminginformationOrderByWithRelationInput | Prisma.farminginformationOrderByWithRelationInput[];
    cursor?: Prisma.farminginformationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FarminginformationScalarFieldEnum | Prisma.FarminginformationScalarFieldEnum[];
};
/**
 * user.product
 */
export type user$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * user.training
 */
export type user$trainingArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the training
     */
    select?: Prisma.trainingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the training
     */
    omit?: Prisma.trainingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.trainingInclude<ExtArgs> | null;
    where?: Prisma.trainingWhereInput;
    orderBy?: Prisma.trainingOrderByWithRelationInput | Prisma.trainingOrderByWithRelationInput[];
    cursor?: Prisma.trainingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * user.trainingregisteruser
 */
export type user$trainingregisteruserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the trainingregisteruser
     */
    select?: Prisma.trainingregisteruserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the trainingregisteruser
     */
    omit?: Prisma.trainingregisteruserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.trainingregisteruserInclude<ExtArgs> | null;
    where?: Prisma.trainingregisteruserWhereInput;
    orderBy?: Prisma.trainingregisteruserOrderByWithRelationInput | Prisma.trainingregisteruserOrderByWithRelationInput[];
    cursor?: Prisma.trainingregisteruserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingregisteruserScalarFieldEnum | Prisma.TrainingregisteruserScalarFieldEnum[];
};
/**
 * user without action
 */
export type userDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: Prisma.userSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the user
     */
    omit?: Prisma.userOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.userInclude<ExtArgs> | null;
};
//# sourceMappingURL=user.d.ts.map