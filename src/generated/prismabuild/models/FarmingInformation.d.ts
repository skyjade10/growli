import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model farminginformation
 *
 */
export type farminginformationModel = runtime.Types.Result.DefaultSelection<Prisma.$farminginformationPayload>;
export type AggregateFarminginformation = {
    _count: FarminginformationCountAggregateOutputType | null;
    _min: FarminginformationMinAggregateOutputType | null;
    _max: FarminginformationMaxAggregateOutputType | null;
};
export type FarminginformationMinAggregateOutputType = {
    farmingId: string | null;
    authorId: string | null;
    status: $Enums.farminginformation_status | null;
    title: string | null;
    article: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    farmingInfoImage: string | null;
};
export type FarminginformationMaxAggregateOutputType = {
    farmingId: string | null;
    authorId: string | null;
    status: $Enums.farminginformation_status | null;
    title: string | null;
    article: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    farmingInfoImage: string | null;
};
export type FarminginformationCountAggregateOutputType = {
    farmingId: number;
    authorId: number;
    status: number;
    title: number;
    article: number;
    createdAt: number;
    updatedAt: number;
    farmingInfoImage: number;
    _all: number;
};
export type FarminginformationMinAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
    farmingInfoImage?: true;
};
export type FarminginformationMaxAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
    farmingInfoImage?: true;
};
export type FarminginformationCountAggregateInputType = {
    farmingId?: true;
    authorId?: true;
    status?: true;
    title?: true;
    article?: true;
    createdAt?: true;
    updatedAt?: true;
    farmingInfoImage?: true;
    _all?: true;
};
export type FarminginformationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which farminginformation to aggregate.
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farminginformations to fetch.
     */
    orderBy?: Prisma.farminginformationOrderByWithRelationInput | Prisma.farminginformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.farminginformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farminginformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farminginformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned farminginformations
    **/
    _count?: true | FarminginformationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FarminginformationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FarminginformationMaxAggregateInputType;
};
export type GetFarminginformationAggregateType<T extends FarminginformationAggregateArgs> = {
    [P in keyof T & keyof AggregateFarminginformation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFarminginformation[P]> : Prisma.GetScalarType<T[P], AggregateFarminginformation[P]>;
};
export type farminginformationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.farminginformationWhereInput;
    orderBy?: Prisma.farminginformationOrderByWithAggregationInput | Prisma.farminginformationOrderByWithAggregationInput[];
    by: Prisma.FarminginformationScalarFieldEnum[] | Prisma.FarminginformationScalarFieldEnum;
    having?: Prisma.farminginformationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FarminginformationCountAggregateInputType | true;
    _min?: FarminginformationMinAggregateInputType;
    _max?: FarminginformationMaxAggregateInputType;
};
export type FarminginformationGroupByOutputType = {
    farmingId: string;
    authorId: string;
    status: $Enums.farminginformation_status;
    title: string | null;
    article: string | null;
    createdAt: Date;
    updatedAt: Date;
    farmingInfoImage: string | null;
    _count: FarminginformationCountAggregateOutputType | null;
    _min: FarminginformationMinAggregateOutputType | null;
    _max: FarminginformationMaxAggregateOutputType | null;
};
export type GetFarminginformationGroupByPayload<T extends farminginformationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FarminginformationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FarminginformationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FarminginformationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FarminginformationGroupByOutputType[P]>;
}>>;
export type farminginformationWhereInput = {
    AND?: Prisma.farminginformationWhereInput | Prisma.farminginformationWhereInput[];
    OR?: Prisma.farminginformationWhereInput[];
    NOT?: Prisma.farminginformationWhereInput | Prisma.farminginformationWhereInput[];
    farmingId?: Prisma.StringFilter<"farminginformation"> | string;
    authorId?: Prisma.StringFilter<"farminginformation"> | string;
    status?: Prisma.Enumfarminginformation_statusFilter<"farminginformation"> | $Enums.farminginformation_status;
    title?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    article?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type farminginformationOrderByWithRelationInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    article?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
    _relevance?: Prisma.farminginformationOrderByRelevanceInput;
};
export type farminginformationWhereUniqueInput = Prisma.AtLeast<{
    farmingId?: string;
    AND?: Prisma.farminginformationWhereInput | Prisma.farminginformationWhereInput[];
    OR?: Prisma.farminginformationWhereInput[];
    NOT?: Prisma.farminginformationWhereInput | Prisma.farminginformationWhereInput[];
    authorId?: Prisma.StringFilter<"farminginformation"> | string;
    status?: Prisma.Enumfarminginformation_statusFilter<"farminginformation"> | $Enums.farminginformation_status;
    title?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    article?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "farmingId">;
export type farminginformationOrderByWithAggregationInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrderInput | Prisma.SortOrder;
    article?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.farminginformationCountOrderByAggregateInput;
    _max?: Prisma.farminginformationMaxOrderByAggregateInput;
    _min?: Prisma.farminginformationMinOrderByAggregateInput;
};
export type farminginformationScalarWhereWithAggregatesInput = {
    AND?: Prisma.farminginformationScalarWhereWithAggregatesInput | Prisma.farminginformationScalarWhereWithAggregatesInput[];
    OR?: Prisma.farminginformationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.farminginformationScalarWhereWithAggregatesInput | Prisma.farminginformationScalarWhereWithAggregatesInput[];
    farmingId?: Prisma.StringWithAggregatesFilter<"farminginformation"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"farminginformation"> | string;
    status?: Prisma.Enumfarminginformation_statusWithAggregatesFilter<"farminginformation"> | $Enums.farminginformation_status;
    title?: Prisma.StringNullableWithAggregatesFilter<"farminginformation"> | string | null;
    article?: Prisma.StringNullableWithAggregatesFilter<"farminginformation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"farminginformation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"farminginformation"> | Date | string;
    farmingInfoImage?: Prisma.StringNullableWithAggregatesFilter<"farminginformation"> | string | null;
};
export type farminginformationCreateInput = {
    farmingId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
    user: Prisma.userCreateNestedOneWithoutFarminginformationInput;
};
export type farminginformationUncheckedCreateInput = {
    farmingId: string;
    authorId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
};
export type farminginformationUpdateInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.userUpdateOneRequiredWithoutFarminginformationNestedInput;
};
export type farminginformationUncheckedUpdateInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationCreateManyInput = {
    farmingId: string;
    authorId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
};
export type farminginformationUpdateManyMutationInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationUncheckedUpdateManyInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationOrderByRelevanceInput = {
    fields: Prisma.farminginformationOrderByRelevanceFieldEnum | Prisma.farminginformationOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type farminginformationCountOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
};
export type farminginformationMaxOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
};
export type farminginformationMinOrderByAggregateInput = {
    farmingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    article?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    farmingInfoImage?: Prisma.SortOrder;
};
export type FarminginformationListRelationFilter = {
    every?: Prisma.farminginformationWhereInput;
    some?: Prisma.farminginformationWhereInput;
    none?: Prisma.farminginformationWhereInput;
};
export type farminginformationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumfarminginformation_statusFieldUpdateOperationsInput = {
    set?: $Enums.farminginformation_status;
};
export type farminginformationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput> | Prisma.farminginformationCreateWithoutUserInput[] | Prisma.farminginformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.farminginformationCreateOrConnectWithoutUserInput | Prisma.farminginformationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.farminginformationCreateManyUserInputEnvelope;
    connect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
};
export type farminginformationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput> | Prisma.farminginformationCreateWithoutUserInput[] | Prisma.farminginformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.farminginformationCreateOrConnectWithoutUserInput | Prisma.farminginformationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.farminginformationCreateManyUserInputEnvelope;
    connect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
};
export type farminginformationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput> | Prisma.farminginformationCreateWithoutUserInput[] | Prisma.farminginformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.farminginformationCreateOrConnectWithoutUserInput | Prisma.farminginformationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.farminginformationUpsertWithWhereUniqueWithoutUserInput | Prisma.farminginformationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.farminginformationCreateManyUserInputEnvelope;
    set?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    disconnect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    delete?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    connect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    update?: Prisma.farminginformationUpdateWithWhereUniqueWithoutUserInput | Prisma.farminginformationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.farminginformationUpdateManyWithWhereWithoutUserInput | Prisma.farminginformationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.farminginformationScalarWhereInput | Prisma.farminginformationScalarWhereInput[];
};
export type farminginformationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput> | Prisma.farminginformationCreateWithoutUserInput[] | Prisma.farminginformationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.farminginformationCreateOrConnectWithoutUserInput | Prisma.farminginformationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.farminginformationUpsertWithWhereUniqueWithoutUserInput | Prisma.farminginformationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.farminginformationCreateManyUserInputEnvelope;
    set?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    disconnect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    delete?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    connect?: Prisma.farminginformationWhereUniqueInput | Prisma.farminginformationWhereUniqueInput[];
    update?: Prisma.farminginformationUpdateWithWhereUniqueWithoutUserInput | Prisma.farminginformationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.farminginformationUpdateManyWithWhereWithoutUserInput | Prisma.farminginformationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.farminginformationScalarWhereInput | Prisma.farminginformationScalarWhereInput[];
};
export type farminginformationCreateWithoutUserInput = {
    farmingId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
};
export type farminginformationUncheckedCreateWithoutUserInput = {
    farmingId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
};
export type farminginformationCreateOrConnectWithoutUserInput = {
    where: Prisma.farminginformationWhereUniqueInput;
    create: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput>;
};
export type farminginformationCreateManyUserInputEnvelope = {
    data: Prisma.farminginformationCreateManyUserInput | Prisma.farminginformationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type farminginformationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.farminginformationWhereUniqueInput;
    update: Prisma.XOR<Prisma.farminginformationUpdateWithoutUserInput, Prisma.farminginformationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.farminginformationCreateWithoutUserInput, Prisma.farminginformationUncheckedCreateWithoutUserInput>;
};
export type farminginformationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.farminginformationWhereUniqueInput;
    data: Prisma.XOR<Prisma.farminginformationUpdateWithoutUserInput, Prisma.farminginformationUncheckedUpdateWithoutUserInput>;
};
export type farminginformationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.farminginformationScalarWhereInput;
    data: Prisma.XOR<Prisma.farminginformationUpdateManyMutationInput, Prisma.farminginformationUncheckedUpdateManyWithoutUserInput>;
};
export type farminginformationScalarWhereInput = {
    AND?: Prisma.farminginformationScalarWhereInput | Prisma.farminginformationScalarWhereInput[];
    OR?: Prisma.farminginformationScalarWhereInput[];
    NOT?: Prisma.farminginformationScalarWhereInput | Prisma.farminginformationScalarWhereInput[];
    farmingId?: Prisma.StringFilter<"farminginformation"> | string;
    authorId?: Prisma.StringFilter<"farminginformation"> | string;
    status?: Prisma.Enumfarminginformation_statusFilter<"farminginformation"> | $Enums.farminginformation_status;
    title?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    article?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"farminginformation"> | Date | string;
    farmingInfoImage?: Prisma.StringNullableFilter<"farminginformation"> | string | null;
};
export type farminginformationCreateManyUserInput = {
    farmingId: string;
    status?: $Enums.farminginformation_status;
    title?: string | null;
    article?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    farmingInfoImage?: string | null;
};
export type farminginformationUpdateWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationUncheckedUpdateWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationUncheckedUpdateManyWithoutUserInput = {
    farmingId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumfarminginformation_statusFieldUpdateOperationsInput | $Enums.farminginformation_status;
    title?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    article?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    farmingInfoImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type farminginformationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    farmingId?: boolean;
    authorId?: boolean;
    status?: boolean;
    title?: boolean;
    article?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farmingInfoImage?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["farminginformation"]>;
export type farminginformationSelectScalar = {
    farmingId?: boolean;
    authorId?: boolean;
    status?: boolean;
    title?: boolean;
    article?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    farmingInfoImage?: boolean;
};
export type farminginformationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"farmingId" | "authorId" | "status" | "title" | "article" | "createdAt" | "updatedAt" | "farmingInfoImage", ExtArgs["result"]["farminginformation"]>;
export type farminginformationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $farminginformationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "farminginformation";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        farmingId: string;
        authorId: string;
        status: $Enums.farminginformation_status;
        title: string | null;
        article: string | null;
        createdAt: Date;
        updatedAt: Date;
        farmingInfoImage: string | null;
    }, ExtArgs["result"]["farminginformation"]>;
    composites: {};
};
export type farminginformationGetPayload<S extends boolean | null | undefined | farminginformationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$farminginformationPayload, S>;
export type farminginformationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<farminginformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FarminginformationCountAggregateInputType | true;
};
export interface farminginformationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['farminginformation'];
        meta: {
            name: 'farminginformation';
        };
    };
    /**
     * Find zero or one Farminginformation that matches the filter.
     * @param {farminginformationFindUniqueArgs} args - Arguments to find a Farminginformation
     * @example
     * // Get one Farminginformation
     * const farminginformation = await prisma.farminginformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends farminginformationFindUniqueArgs>(args: Prisma.SelectSubset<T, farminginformationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Farminginformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {farminginformationFindUniqueOrThrowArgs} args - Arguments to find a Farminginformation
     * @example
     * // Get one Farminginformation
     * const farminginformation = await prisma.farminginformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends farminginformationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, farminginformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farminginformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationFindFirstArgs} args - Arguments to find a Farminginformation
     * @example
     * // Get one Farminginformation
     * const farminginformation = await prisma.farminginformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends farminginformationFindFirstArgs>(args?: Prisma.SelectSubset<T, farminginformationFindFirstArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Farminginformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationFindFirstOrThrowArgs} args - Arguments to find a Farminginformation
     * @example
     * // Get one Farminginformation
     * const farminginformation = await prisma.farminginformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends farminginformationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, farminginformationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Farminginformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farminginformations
     * const farminginformations = await prisma.farminginformation.findMany()
     *
     * // Get first 10 Farminginformations
     * const farminginformations = await prisma.farminginformation.findMany({ take: 10 })
     *
     * // Only select the `farmingId`
     * const farminginformationWithFarmingIdOnly = await prisma.farminginformation.findMany({ select: { farmingId: true } })
     *
     */
    findMany<T extends farminginformationFindManyArgs>(args?: Prisma.SelectSubset<T, farminginformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Farminginformation.
     * @param {farminginformationCreateArgs} args - Arguments to create a Farminginformation.
     * @example
     * // Create one Farminginformation
     * const Farminginformation = await prisma.farminginformation.create({
     *   data: {
     *     // ... data to create a Farminginformation
     *   }
     * })
     *
     */
    create<T extends farminginformationCreateArgs>(args: Prisma.SelectSubset<T, farminginformationCreateArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Farminginformations.
     * @param {farminginformationCreateManyArgs} args - Arguments to create many Farminginformations.
     * @example
     * // Create many Farminginformations
     * const farminginformation = await prisma.farminginformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends farminginformationCreateManyArgs>(args?: Prisma.SelectSubset<T, farminginformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Farminginformation.
     * @param {farminginformationDeleteArgs} args - Arguments to delete one Farminginformation.
     * @example
     * // Delete one Farminginformation
     * const Farminginformation = await prisma.farminginformation.delete({
     *   where: {
     *     // ... filter to delete one Farminginformation
     *   }
     * })
     *
     */
    delete<T extends farminginformationDeleteArgs>(args: Prisma.SelectSubset<T, farminginformationDeleteArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Farminginformation.
     * @param {farminginformationUpdateArgs} args - Arguments to update one Farminginformation.
     * @example
     * // Update one Farminginformation
     * const farminginformation = await prisma.farminginformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends farminginformationUpdateArgs>(args: Prisma.SelectSubset<T, farminginformationUpdateArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Farminginformations.
     * @param {farminginformationDeleteManyArgs} args - Arguments to filter Farminginformations to delete.
     * @example
     * // Delete a few Farminginformations
     * const { count } = await prisma.farminginformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends farminginformationDeleteManyArgs>(args?: Prisma.SelectSubset<T, farminginformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Farminginformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farminginformations
     * const farminginformation = await prisma.farminginformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends farminginformationUpdateManyArgs>(args: Prisma.SelectSubset<T, farminginformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Farminginformation.
     * @param {farminginformationUpsertArgs} args - Arguments to update or create a Farminginformation.
     * @example
     * // Update or create a Farminginformation
     * const farminginformation = await prisma.farminginformation.upsert({
     *   create: {
     *     // ... data to create a Farminginformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farminginformation we want to update
     *   }
     * })
     */
    upsert<T extends farminginformationUpsertArgs>(args: Prisma.SelectSubset<T, farminginformationUpsertArgs<ExtArgs>>): Prisma.Prisma__farminginformationClient<runtime.Types.Result.GetResult<Prisma.$farminginformationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Farminginformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationCountArgs} args - Arguments to filter Farminginformations to count.
     * @example
     * // Count the number of Farminginformations
     * const count = await prisma.farminginformation.count({
     *   where: {
     *     // ... the filter for the Farminginformations we want to count
     *   }
     * })
    **/
    count<T extends farminginformationCountArgs>(args?: Prisma.Subset<T, farminginformationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FarminginformationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Farminginformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarminginformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FarminginformationAggregateArgs>(args: Prisma.Subset<T, FarminginformationAggregateArgs>): Prisma.PrismaPromise<GetFarminginformationAggregateType<T>>;
    /**
     * Group by Farminginformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {farminginformationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends farminginformationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: farminginformationGroupByArgs['orderBy'];
    } : {
        orderBy?: farminginformationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, farminginformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarminginformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the farminginformation model
     */
    readonly fields: farminginformationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for farminginformation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__farminginformationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the farminginformation model
 */
export interface farminginformationFieldRefs {
    readonly farmingId: Prisma.FieldRef<"farminginformation", 'String'>;
    readonly authorId: Prisma.FieldRef<"farminginformation", 'String'>;
    readonly status: Prisma.FieldRef<"farminginformation", 'farminginformation_status'>;
    readonly title: Prisma.FieldRef<"farminginformation", 'String'>;
    readonly article: Prisma.FieldRef<"farminginformation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"farminginformation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"farminginformation", 'DateTime'>;
    readonly farmingInfoImage: Prisma.FieldRef<"farminginformation", 'String'>;
}
/**
 * farminginformation findUnique
 */
export type farminginformationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which farminginformation to fetch.
     */
    where: Prisma.farminginformationWhereUniqueInput;
};
/**
 * farminginformation findUniqueOrThrow
 */
export type farminginformationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which farminginformation to fetch.
     */
    where: Prisma.farminginformationWhereUniqueInput;
};
/**
 * farminginformation findFirst
 */
export type farminginformationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which farminginformation to fetch.
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farminginformations to fetch.
     */
    orderBy?: Prisma.farminginformationOrderByWithRelationInput | Prisma.farminginformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for farminginformations.
     */
    cursor?: Prisma.farminginformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farminginformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farminginformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of farminginformations.
     */
    distinct?: Prisma.FarminginformationScalarFieldEnum | Prisma.FarminginformationScalarFieldEnum[];
};
/**
 * farminginformation findFirstOrThrow
 */
export type farminginformationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which farminginformation to fetch.
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farminginformations to fetch.
     */
    orderBy?: Prisma.farminginformationOrderByWithRelationInput | Prisma.farminginformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for farminginformations.
     */
    cursor?: Prisma.farminginformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farminginformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farminginformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of farminginformations.
     */
    distinct?: Prisma.FarminginformationScalarFieldEnum | Prisma.FarminginformationScalarFieldEnum[];
};
/**
 * farminginformation findMany
 */
export type farminginformationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which farminginformations to fetch.
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of farminginformations to fetch.
     */
    orderBy?: Prisma.farminginformationOrderByWithRelationInput | Prisma.farminginformationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing farminginformations.
     */
    cursor?: Prisma.farminginformationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` farminginformations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` farminginformations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of farminginformations.
     */
    distinct?: Prisma.FarminginformationScalarFieldEnum | Prisma.FarminginformationScalarFieldEnum[];
};
/**
 * farminginformation create
 */
export type farminginformationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a farminginformation.
     */
    data: Prisma.XOR<Prisma.farminginformationCreateInput, Prisma.farminginformationUncheckedCreateInput>;
};
/**
 * farminginformation createMany
 */
export type farminginformationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many farminginformations.
     */
    data: Prisma.farminginformationCreateManyInput | Prisma.farminginformationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * farminginformation update
 */
export type farminginformationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a farminginformation.
     */
    data: Prisma.XOR<Prisma.farminginformationUpdateInput, Prisma.farminginformationUncheckedUpdateInput>;
    /**
     * Choose, which farminginformation to update.
     */
    where: Prisma.farminginformationWhereUniqueInput;
};
/**
 * farminginformation updateMany
 */
export type farminginformationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update farminginformations.
     */
    data: Prisma.XOR<Prisma.farminginformationUpdateManyMutationInput, Prisma.farminginformationUncheckedUpdateManyInput>;
    /**
     * Filter which farminginformations to update
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * Limit how many farminginformations to update.
     */
    limit?: number;
};
/**
 * farminginformation upsert
 */
export type farminginformationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the farminginformation to update in case it exists.
     */
    where: Prisma.farminginformationWhereUniqueInput;
    /**
     * In case the farminginformation found by the `where` argument doesn't exist, create a new farminginformation with this data.
     */
    create: Prisma.XOR<Prisma.farminginformationCreateInput, Prisma.farminginformationUncheckedCreateInput>;
    /**
     * In case the farminginformation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.farminginformationUpdateInput, Prisma.farminginformationUncheckedUpdateInput>;
};
/**
 * farminginformation delete
 */
export type farminginformationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which farminginformation to delete.
     */
    where: Prisma.farminginformationWhereUniqueInput;
};
/**
 * farminginformation deleteMany
 */
export type farminginformationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which farminginformations to delete
     */
    where?: Prisma.farminginformationWhereInput;
    /**
     * Limit how many farminginformations to delete.
     */
    limit?: number;
};
/**
 * farminginformation without action
 */
export type farminginformationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=farminginformation.d.ts.map