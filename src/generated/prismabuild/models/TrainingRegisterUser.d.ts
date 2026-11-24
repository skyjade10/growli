import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model trainingregisteruser
 *
 */
export type trainingregisteruserModel = runtime.Types.Result.DefaultSelection<Prisma.$trainingregisteruserPayload>;
export type AggregateTrainingregisteruser = {
    _count: TrainingregisteruserCountAggregateOutputType | null;
    _min: TrainingregisteruserMinAggregateOutputType | null;
    _max: TrainingregisteruserMaxAggregateOutputType | null;
};
export type TrainingregisteruserMinAggregateOutputType = {
    registryId: string | null;
    userId: string | null;
    trainingEventId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingregisteruserMaxAggregateOutputType = {
    registryId: string | null;
    userId: string | null;
    trainingEventId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type TrainingregisteruserCountAggregateOutputType = {
    registryId: number;
    userId: number;
    trainingEventId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type TrainingregisteruserMinAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingregisteruserMaxAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type TrainingregisteruserCountAggregateInputType = {
    registryId?: true;
    userId?: true;
    trainingEventId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrainingregisteruserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which trainingregisteruser to aggregate.
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainingregisterusers to fetch.
     */
    orderBy?: Prisma.trainingregisteruserOrderByWithRelationInput | Prisma.trainingregisteruserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.trainingregisteruserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainingregisterusers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainingregisterusers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trainingregisterusers
    **/
    _count?: true | TrainingregisteruserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TrainingregisteruserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TrainingregisteruserMaxAggregateInputType;
};
export type GetTrainingregisteruserAggregateType<T extends TrainingregisteruserAggregateArgs> = {
    [P in keyof T & keyof AggregateTrainingregisteruser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrainingregisteruser[P]> : Prisma.GetScalarType<T[P], AggregateTrainingregisteruser[P]>;
};
export type trainingregisteruserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trainingregisteruserWhereInput;
    orderBy?: Prisma.trainingregisteruserOrderByWithAggregationInput | Prisma.trainingregisteruserOrderByWithAggregationInput[];
    by: Prisma.TrainingregisteruserScalarFieldEnum[] | Prisma.TrainingregisteruserScalarFieldEnum;
    having?: Prisma.trainingregisteruserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingregisteruserCountAggregateInputType | true;
    _min?: TrainingregisteruserMinAggregateInputType;
    _max?: TrainingregisteruserMaxAggregateInputType;
};
export type TrainingregisteruserGroupByOutputType = {
    registryId: string;
    userId: string;
    trainingEventId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TrainingregisteruserCountAggregateOutputType | null;
    _min: TrainingregisteruserMinAggregateOutputType | null;
    _max: TrainingregisteruserMaxAggregateOutputType | null;
};
export type GetTrainingregisteruserGroupByPayload<T extends trainingregisteruserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingregisteruserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingregisteruserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingregisteruserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingregisteruserGroupByOutputType[P]>;
}>>;
export type trainingregisteruserWhereInput = {
    AND?: Prisma.trainingregisteruserWhereInput | Prisma.trainingregisteruserWhereInput[];
    OR?: Prisma.trainingregisteruserWhereInput[];
    NOT?: Prisma.trainingregisteruserWhereInput | Prisma.trainingregisteruserWhereInput[];
    registryId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    userId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    trainingEventId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    createdAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
    training?: Prisma.XOR<Prisma.TrainingScalarRelationFilter, Prisma.trainingWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type trainingregisteruserOrderByWithRelationInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    training?: Prisma.trainingOrderByWithRelationInput;
    user?: Prisma.userOrderByWithRelationInput;
    _relevance?: Prisma.trainingregisteruserOrderByRelevanceInput;
};
export type trainingregisteruserWhereUniqueInput = Prisma.AtLeast<{
    registryId?: string;
    AND?: Prisma.trainingregisteruserWhereInput | Prisma.trainingregisteruserWhereInput[];
    OR?: Prisma.trainingregisteruserWhereInput[];
    NOT?: Prisma.trainingregisteruserWhereInput | Prisma.trainingregisteruserWhereInput[];
    userId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    trainingEventId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    createdAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
    training?: Prisma.XOR<Prisma.TrainingScalarRelationFilter, Prisma.trainingWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "registryId">;
export type trainingregisteruserOrderByWithAggregationInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.trainingregisteruserCountOrderByAggregateInput;
    _max?: Prisma.trainingregisteruserMaxOrderByAggregateInput;
    _min?: Prisma.trainingregisteruserMinOrderByAggregateInput;
};
export type trainingregisteruserScalarWhereWithAggregatesInput = {
    AND?: Prisma.trainingregisteruserScalarWhereWithAggregatesInput | Prisma.trainingregisteruserScalarWhereWithAggregatesInput[];
    OR?: Prisma.trainingregisteruserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.trainingregisteruserScalarWhereWithAggregatesInput | Prisma.trainingregisteruserScalarWhereWithAggregatesInput[];
    registryId?: Prisma.StringWithAggregatesFilter<"trainingregisteruser"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"trainingregisteruser"> | string;
    trainingEventId?: Prisma.StringWithAggregatesFilter<"trainingregisteruser"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"trainingregisteruser"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"trainingregisteruser"> | Date | string;
};
export type trainingregisteruserCreateInput = {
    registryId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    training: Prisma.trainingCreateNestedOneWithoutTrainingregisteruserInput;
    user: Prisma.userCreateNestedOneWithoutTrainingregisteruserInput;
};
export type trainingregisteruserUncheckedCreateInput = {
    registryId: string;
    userId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserUpdateInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    training?: Prisma.trainingUpdateOneRequiredWithoutTrainingregisteruserNestedInput;
    user?: Prisma.userUpdateOneRequiredWithoutTrainingregisteruserNestedInput;
};
export type trainingregisteruserUncheckedUpdateInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserCreateManyInput = {
    registryId: string;
    userId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserUpdateManyMutationInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserUncheckedUpdateManyInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingregisteruserListRelationFilter = {
    every?: Prisma.trainingregisteruserWhereInput;
    some?: Prisma.trainingregisteruserWhereInput;
    none?: Prisma.trainingregisteruserWhereInput;
};
export type trainingregisteruserOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type trainingregisteruserOrderByRelevanceInput = {
    fields: Prisma.trainingregisteruserOrderByRelevanceFieldEnum | Prisma.trainingregisteruserOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type trainingregisteruserCountOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type trainingregisteruserMaxOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type trainingregisteruserMinOrderByAggregateInput = {
    registryId?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    trainingEventId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type trainingregisteruserCreateNestedManyWithoutTrainingInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput> | Prisma.trainingregisteruserCreateWithoutTrainingInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput | Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput[];
    createMany?: Prisma.trainingregisteruserCreateManyTrainingInputEnvelope;
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
};
export type trainingregisteruserUncheckedCreateNestedManyWithoutTrainingInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput> | Prisma.trainingregisteruserCreateWithoutTrainingInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput | Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput[];
    createMany?: Prisma.trainingregisteruserCreateManyTrainingInputEnvelope;
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
};
export type trainingregisteruserUpdateManyWithoutTrainingNestedInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput> | Prisma.trainingregisteruserCreateWithoutTrainingInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput | Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput[];
    upsert?: Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutTrainingInput | Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutTrainingInput[];
    createMany?: Prisma.trainingregisteruserCreateManyTrainingInputEnvelope;
    set?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    disconnect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    delete?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    update?: Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutTrainingInput | Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutTrainingInput[];
    updateMany?: Prisma.trainingregisteruserUpdateManyWithWhereWithoutTrainingInput | Prisma.trainingregisteruserUpdateManyWithWhereWithoutTrainingInput[];
    deleteMany?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
};
export type trainingregisteruserUncheckedUpdateManyWithoutTrainingNestedInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput> | Prisma.trainingregisteruserCreateWithoutTrainingInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput | Prisma.trainingregisteruserCreateOrConnectWithoutTrainingInput[];
    upsert?: Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutTrainingInput | Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutTrainingInput[];
    createMany?: Prisma.trainingregisteruserCreateManyTrainingInputEnvelope;
    set?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    disconnect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    delete?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    update?: Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutTrainingInput | Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutTrainingInput[];
    updateMany?: Prisma.trainingregisteruserUpdateManyWithWhereWithoutTrainingInput | Prisma.trainingregisteruserUpdateManyWithWhereWithoutTrainingInput[];
    deleteMany?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
};
export type trainingregisteruserCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput> | Prisma.trainingregisteruserCreateWithoutUserInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutUserInput | Prisma.trainingregisteruserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.trainingregisteruserCreateManyUserInputEnvelope;
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
};
export type trainingregisteruserUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput> | Prisma.trainingregisteruserCreateWithoutUserInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutUserInput | Prisma.trainingregisteruserCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.trainingregisteruserCreateManyUserInputEnvelope;
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
};
export type trainingregisteruserUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput> | Prisma.trainingregisteruserCreateWithoutUserInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutUserInput | Prisma.trainingregisteruserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutUserInput | Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.trainingregisteruserCreateManyUserInputEnvelope;
    set?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    disconnect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    delete?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    update?: Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutUserInput | Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.trainingregisteruserUpdateManyWithWhereWithoutUserInput | Prisma.trainingregisteruserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
};
export type trainingregisteruserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput> | Prisma.trainingregisteruserCreateWithoutUserInput[] | Prisma.trainingregisteruserUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingregisteruserCreateOrConnectWithoutUserInput | Prisma.trainingregisteruserCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutUserInput | Prisma.trainingregisteruserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.trainingregisteruserCreateManyUserInputEnvelope;
    set?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    disconnect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    delete?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    connect?: Prisma.trainingregisteruserWhereUniqueInput | Prisma.trainingregisteruserWhereUniqueInput[];
    update?: Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutUserInput | Prisma.trainingregisteruserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.trainingregisteruserUpdateManyWithWhereWithoutUserInput | Prisma.trainingregisteruserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
};
export type trainingregisteruserCreateWithoutTrainingInput = {
    registryId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    user: Prisma.userCreateNestedOneWithoutTrainingregisteruserInput;
};
export type trainingregisteruserUncheckedCreateWithoutTrainingInput = {
    registryId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserCreateOrConnectWithoutTrainingInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    create: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput>;
};
export type trainingregisteruserCreateManyTrainingInputEnvelope = {
    data: Prisma.trainingregisteruserCreateManyTrainingInput | Prisma.trainingregisteruserCreateManyTrainingInput[];
    skipDuplicates?: boolean;
};
export type trainingregisteruserUpsertWithWhereUniqueWithoutTrainingInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    update: Prisma.XOR<Prisma.trainingregisteruserUpdateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedUpdateWithoutTrainingInput>;
    create: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedCreateWithoutTrainingInput>;
};
export type trainingregisteruserUpdateWithWhereUniqueWithoutTrainingInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateWithoutTrainingInput, Prisma.trainingregisteruserUncheckedUpdateWithoutTrainingInput>;
};
export type trainingregisteruserUpdateManyWithWhereWithoutTrainingInput = {
    where: Prisma.trainingregisteruserScalarWhereInput;
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateManyMutationInput, Prisma.trainingregisteruserUncheckedUpdateManyWithoutTrainingInput>;
};
export type trainingregisteruserScalarWhereInput = {
    AND?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
    OR?: Prisma.trainingregisteruserScalarWhereInput[];
    NOT?: Prisma.trainingregisteruserScalarWhereInput | Prisma.trainingregisteruserScalarWhereInput[];
    registryId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    userId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    trainingEventId?: Prisma.StringFilter<"trainingregisteruser"> | string;
    createdAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"trainingregisteruser"> | Date | string;
};
export type trainingregisteruserCreateWithoutUserInput = {
    registryId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    training: Prisma.trainingCreateNestedOneWithoutTrainingregisteruserInput;
};
export type trainingregisteruserUncheckedCreateWithoutUserInput = {
    registryId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserCreateOrConnectWithoutUserInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    create: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput>;
};
export type trainingregisteruserCreateManyUserInputEnvelope = {
    data: Prisma.trainingregisteruserCreateManyUserInput | Prisma.trainingregisteruserCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type trainingregisteruserUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    update: Prisma.XOR<Prisma.trainingregisteruserUpdateWithoutUserInput, Prisma.trainingregisteruserUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.trainingregisteruserCreateWithoutUserInput, Prisma.trainingregisteruserUncheckedCreateWithoutUserInput>;
};
export type trainingregisteruserUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.trainingregisteruserWhereUniqueInput;
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateWithoutUserInput, Prisma.trainingregisteruserUncheckedUpdateWithoutUserInput>;
};
export type trainingregisteruserUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.trainingregisteruserScalarWhereInput;
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateManyMutationInput, Prisma.trainingregisteruserUncheckedUpdateManyWithoutUserInput>;
};
export type trainingregisteruserCreateManyTrainingInput = {
    registryId: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserUpdateWithoutTrainingInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutTrainingregisteruserNestedInput;
};
export type trainingregisteruserUncheckedUpdateWithoutTrainingInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserUncheckedUpdateManyWithoutTrainingInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserCreateManyUserInput = {
    registryId: string;
    trainingEventId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type trainingregisteruserUpdateWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    training?: Prisma.trainingUpdateOneRequiredWithoutTrainingregisteruserNestedInput;
};
export type trainingregisteruserUncheckedUpdateWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserUncheckedUpdateManyWithoutUserInput = {
    registryId?: Prisma.StringFieldUpdateOperationsInput | string;
    trainingEventId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type trainingregisteruserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    registryId?: boolean;
    userId?: boolean;
    trainingEventId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    training?: boolean | Prisma.trainingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingregisteruser"]>;
export type trainingregisteruserSelectScalar = {
    registryId?: boolean;
    userId?: boolean;
    trainingEventId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type trainingregisteruserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"registryId" | "userId" | "trainingEventId" | "createdAt" | "updatedAt", ExtArgs["result"]["trainingregisteruser"]>;
export type trainingregisteruserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    training?: boolean | Prisma.trainingDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $trainingregisteruserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "trainingregisteruser";
    objects: {
        training: Prisma.$trainingPayload<ExtArgs>;
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        registryId: string;
        userId: string;
        trainingEventId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["trainingregisteruser"]>;
    composites: {};
};
export type trainingregisteruserGetPayload<S extends boolean | null | undefined | trainingregisteruserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload, S>;
export type trainingregisteruserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<trainingregisteruserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingregisteruserCountAggregateInputType | true;
};
export interface trainingregisteruserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['trainingregisteruser'];
        meta: {
            name: 'trainingregisteruser';
        };
    };
    /**
     * Find zero or one Trainingregisteruser that matches the filter.
     * @param {trainingregisteruserFindUniqueArgs} args - Arguments to find a Trainingregisteruser
     * @example
     * // Get one Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trainingregisteruserFindUniqueArgs>(args: Prisma.SelectSubset<T, trainingregisteruserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Trainingregisteruser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trainingregisteruserFindUniqueOrThrowArgs} args - Arguments to find a Trainingregisteruser
     * @example
     * // Get one Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trainingregisteruserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, trainingregisteruserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Trainingregisteruser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserFindFirstArgs} args - Arguments to find a Trainingregisteruser
     * @example
     * // Get one Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trainingregisteruserFindFirstArgs>(args?: Prisma.SelectSubset<T, trainingregisteruserFindFirstArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Trainingregisteruser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserFindFirstOrThrowArgs} args - Arguments to find a Trainingregisteruser
     * @example
     * // Get one Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trainingregisteruserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, trainingregisteruserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Trainingregisterusers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainingregisterusers
     * const trainingregisterusers = await prisma.trainingregisteruser.findMany()
     *
     * // Get first 10 Trainingregisterusers
     * const trainingregisterusers = await prisma.trainingregisteruser.findMany({ take: 10 })
     *
     * // Only select the `registryId`
     * const trainingregisteruserWithRegistryIdOnly = await prisma.trainingregisteruser.findMany({ select: { registryId: true } })
     *
     */
    findMany<T extends trainingregisteruserFindManyArgs>(args?: Prisma.SelectSubset<T, trainingregisteruserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Trainingregisteruser.
     * @param {trainingregisteruserCreateArgs} args - Arguments to create a Trainingregisteruser.
     * @example
     * // Create one Trainingregisteruser
     * const Trainingregisteruser = await prisma.trainingregisteruser.create({
     *   data: {
     *     // ... data to create a Trainingregisteruser
     *   }
     * })
     *
     */
    create<T extends trainingregisteruserCreateArgs>(args: Prisma.SelectSubset<T, trainingregisteruserCreateArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Trainingregisterusers.
     * @param {trainingregisteruserCreateManyArgs} args - Arguments to create many Trainingregisterusers.
     * @example
     * // Create many Trainingregisterusers
     * const trainingregisteruser = await prisma.trainingregisteruser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends trainingregisteruserCreateManyArgs>(args?: Prisma.SelectSubset<T, trainingregisteruserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Trainingregisteruser.
     * @param {trainingregisteruserDeleteArgs} args - Arguments to delete one Trainingregisteruser.
     * @example
     * // Delete one Trainingregisteruser
     * const Trainingregisteruser = await prisma.trainingregisteruser.delete({
     *   where: {
     *     // ... filter to delete one Trainingregisteruser
     *   }
     * })
     *
     */
    delete<T extends trainingregisteruserDeleteArgs>(args: Prisma.SelectSubset<T, trainingregisteruserDeleteArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Trainingregisteruser.
     * @param {trainingregisteruserUpdateArgs} args - Arguments to update one Trainingregisteruser.
     * @example
     * // Update one Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends trainingregisteruserUpdateArgs>(args: Prisma.SelectSubset<T, trainingregisteruserUpdateArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Trainingregisterusers.
     * @param {trainingregisteruserDeleteManyArgs} args - Arguments to filter Trainingregisterusers to delete.
     * @example
     * // Delete a few Trainingregisterusers
     * const { count } = await prisma.trainingregisteruser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends trainingregisteruserDeleteManyArgs>(args?: Prisma.SelectSubset<T, trainingregisteruserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Trainingregisterusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainingregisterusers
     * const trainingregisteruser = await prisma.trainingregisteruser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends trainingregisteruserUpdateManyArgs>(args: Prisma.SelectSubset<T, trainingregisteruserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Trainingregisteruser.
     * @param {trainingregisteruserUpsertArgs} args - Arguments to update or create a Trainingregisteruser.
     * @example
     * // Update or create a Trainingregisteruser
     * const trainingregisteruser = await prisma.trainingregisteruser.upsert({
     *   create: {
     *     // ... data to create a Trainingregisteruser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trainingregisteruser we want to update
     *   }
     * })
     */
    upsert<T extends trainingregisteruserUpsertArgs>(args: Prisma.SelectSubset<T, trainingregisteruserUpsertArgs<ExtArgs>>): Prisma.Prisma__trainingregisteruserClient<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Trainingregisterusers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserCountArgs} args - Arguments to filter Trainingregisterusers to count.
     * @example
     * // Count the number of Trainingregisterusers
     * const count = await prisma.trainingregisteruser.count({
     *   where: {
     *     // ... the filter for the Trainingregisterusers we want to count
     *   }
     * })
    **/
    count<T extends trainingregisteruserCountArgs>(args?: Prisma.Subset<T, trainingregisteruserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingregisteruserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Trainingregisteruser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingregisteruserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingregisteruserAggregateArgs>(args: Prisma.Subset<T, TrainingregisteruserAggregateArgs>): Prisma.PrismaPromise<GetTrainingregisteruserAggregateType<T>>;
    /**
     * Group by Trainingregisteruser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingregisteruserGroupByArgs} args - Group by arguments.
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
    groupBy<T extends trainingregisteruserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: trainingregisteruserGroupByArgs['orderBy'];
    } : {
        orderBy?: trainingregisteruserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, trainingregisteruserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingregisteruserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the trainingregisteruser model
     */
    readonly fields: trainingregisteruserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for trainingregisteruser.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__trainingregisteruserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    training<T extends Prisma.trainingDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.trainingDefaultArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the trainingregisteruser model
 */
export interface trainingregisteruserFieldRefs {
    readonly registryId: Prisma.FieldRef<"trainingregisteruser", 'String'>;
    readonly userId: Prisma.FieldRef<"trainingregisteruser", 'String'>;
    readonly trainingEventId: Prisma.FieldRef<"trainingregisteruser", 'String'>;
    readonly createdAt: Prisma.FieldRef<"trainingregisteruser", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"trainingregisteruser", 'DateTime'>;
}
/**
 * trainingregisteruser findUnique
 */
export type trainingregisteruserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainingregisteruser to fetch.
     */
    where: Prisma.trainingregisteruserWhereUniqueInput;
};
/**
 * trainingregisteruser findUniqueOrThrow
 */
export type trainingregisteruserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainingregisteruser to fetch.
     */
    where: Prisma.trainingregisteruserWhereUniqueInput;
};
/**
 * trainingregisteruser findFirst
 */
export type trainingregisteruserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainingregisteruser to fetch.
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainingregisterusers to fetch.
     */
    orderBy?: Prisma.trainingregisteruserOrderByWithRelationInput | Prisma.trainingregisteruserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainingregisterusers.
     */
    cursor?: Prisma.trainingregisteruserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainingregisterusers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainingregisterusers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainingregisterusers.
     */
    distinct?: Prisma.TrainingregisteruserScalarFieldEnum | Prisma.TrainingregisteruserScalarFieldEnum[];
};
/**
 * trainingregisteruser findFirstOrThrow
 */
export type trainingregisteruserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainingregisteruser to fetch.
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainingregisterusers to fetch.
     */
    orderBy?: Prisma.trainingregisteruserOrderByWithRelationInput | Prisma.trainingregisteruserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainingregisterusers.
     */
    cursor?: Prisma.trainingregisteruserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainingregisterusers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainingregisterusers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainingregisterusers.
     */
    distinct?: Prisma.TrainingregisteruserScalarFieldEnum | Prisma.TrainingregisteruserScalarFieldEnum[];
};
/**
 * trainingregisteruser findMany
 */
export type trainingregisteruserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainingregisterusers to fetch.
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainingregisterusers to fetch.
     */
    orderBy?: Prisma.trainingregisteruserOrderByWithRelationInput | Prisma.trainingregisteruserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trainingregisterusers.
     */
    cursor?: Prisma.trainingregisteruserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainingregisterusers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainingregisterusers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainingregisterusers.
     */
    distinct?: Prisma.TrainingregisteruserScalarFieldEnum | Prisma.TrainingregisteruserScalarFieldEnum[];
};
/**
 * trainingregisteruser create
 */
export type trainingregisteruserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a trainingregisteruser.
     */
    data: Prisma.XOR<Prisma.trainingregisteruserCreateInput, Prisma.trainingregisteruserUncheckedCreateInput>;
};
/**
 * trainingregisteruser createMany
 */
export type trainingregisteruserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many trainingregisterusers.
     */
    data: Prisma.trainingregisteruserCreateManyInput | Prisma.trainingregisteruserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * trainingregisteruser update
 */
export type trainingregisteruserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a trainingregisteruser.
     */
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateInput, Prisma.trainingregisteruserUncheckedUpdateInput>;
    /**
     * Choose, which trainingregisteruser to update.
     */
    where: Prisma.trainingregisteruserWhereUniqueInput;
};
/**
 * trainingregisteruser updateMany
 */
export type trainingregisteruserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update trainingregisterusers.
     */
    data: Prisma.XOR<Prisma.trainingregisteruserUpdateManyMutationInput, Prisma.trainingregisteruserUncheckedUpdateManyInput>;
    /**
     * Filter which trainingregisterusers to update
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * Limit how many trainingregisterusers to update.
     */
    limit?: number;
};
/**
 * trainingregisteruser upsert
 */
export type trainingregisteruserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the trainingregisteruser to update in case it exists.
     */
    where: Prisma.trainingregisteruserWhereUniqueInput;
    /**
     * In case the trainingregisteruser found by the `where` argument doesn't exist, create a new trainingregisteruser with this data.
     */
    create: Prisma.XOR<Prisma.trainingregisteruserCreateInput, Prisma.trainingregisteruserUncheckedCreateInput>;
    /**
     * In case the trainingregisteruser was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.trainingregisteruserUpdateInput, Prisma.trainingregisteruserUncheckedUpdateInput>;
};
/**
 * trainingregisteruser delete
 */
export type trainingregisteruserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which trainingregisteruser to delete.
     */
    where: Prisma.trainingregisteruserWhereUniqueInput;
};
/**
 * trainingregisteruser deleteMany
 */
export type trainingregisteruserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which trainingregisterusers to delete
     */
    where?: Prisma.trainingregisteruserWhereInput;
    /**
     * Limit how many trainingregisterusers to delete.
     */
    limit?: number;
};
/**
 * trainingregisteruser without action
 */
export type trainingregisteruserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=trainingregisteruser.d.ts.map