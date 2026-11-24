import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model training
 *
 */
export type trainingModel = runtime.Types.Result.DefaultSelection<Prisma.$trainingPayload>;
export type AggregateTraining = {
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
};
export type TrainingMinAggregateOutputType = {
    trainingId: string | null;
    authorId: string | null;
    title: string | null;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.training_status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    country: string | null;
    state: string | null;
    trainingDate: Date | null;
    trainingImage: string | null;
};
export type TrainingMaxAggregateOutputType = {
    trainingId: string | null;
    authorId: string | null;
    title: string | null;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.training_status | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    country: string | null;
    state: string | null;
    trainingDate: Date | null;
    trainingImage: string | null;
};
export type TrainingCountAggregateOutputType = {
    trainingId: number;
    authorId: number;
    title: number;
    city: number;
    place: number;
    description: number;
    status: number;
    createdAt: number;
    updatedAt: number;
    country: number;
    state: number;
    trainingDate: number;
    trainingImage: number;
    _all: number;
};
export type TrainingMinAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    country?: true;
    state?: true;
    trainingDate?: true;
    trainingImage?: true;
};
export type TrainingMaxAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    country?: true;
    state?: true;
    trainingDate?: true;
    trainingImage?: true;
};
export type TrainingCountAggregateInputType = {
    trainingId?: true;
    authorId?: true;
    title?: true;
    city?: true;
    place?: true;
    description?: true;
    status?: true;
    createdAt?: true;
    updatedAt?: true;
    country?: true;
    state?: true;
    trainingDate?: true;
    trainingImage?: true;
    _all?: true;
};
export type TrainingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which training to aggregate.
     */
    where?: Prisma.trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: Prisma.trainingOrderByWithRelationInput | Prisma.trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned trainings
    **/
    _count?: true | TrainingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TrainingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TrainingMaxAggregateInputType;
};
export type GetTrainingAggregateType<T extends TrainingAggregateArgs> = {
    [P in keyof T & keyof AggregateTraining]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTraining[P]> : Prisma.GetScalarType<T[P], AggregateTraining[P]>;
};
export type trainingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trainingWhereInput;
    orderBy?: Prisma.trainingOrderByWithAggregationInput | Prisma.trainingOrderByWithAggregationInput[];
    by: Prisma.TrainingScalarFieldEnum[] | Prisma.TrainingScalarFieldEnum;
    having?: Prisma.trainingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingCountAggregateInputType | true;
    _min?: TrainingMinAggregateInputType;
    _max?: TrainingMaxAggregateInputType;
};
export type TrainingGroupByOutputType = {
    trainingId: string;
    authorId: string;
    title: string;
    city: string | null;
    place: string | null;
    description: string | null;
    status: $Enums.training_status;
    createdAt: Date;
    updatedAt: Date;
    country: string | null;
    state: string | null;
    trainingDate: Date;
    trainingImage: string | null;
    _count: TrainingCountAggregateOutputType | null;
    _min: TrainingMinAggregateOutputType | null;
    _max: TrainingMaxAggregateOutputType | null;
};
export type GetTrainingGroupByPayload<T extends trainingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingGroupByOutputType[P]>;
}>>;
export type trainingWhereInput = {
    AND?: Prisma.trainingWhereInput | Prisma.trainingWhereInput[];
    OR?: Prisma.trainingWhereInput[];
    NOT?: Prisma.trainingWhereInput | Prisma.trainingWhereInput[];
    trainingId?: Prisma.StringFilter<"training"> | string;
    authorId?: Prisma.StringFilter<"training"> | string;
    title?: Prisma.StringFilter<"training"> | string;
    city?: Prisma.StringNullableFilter<"training"> | string | null;
    place?: Prisma.StringNullableFilter<"training"> | string | null;
    description?: Prisma.StringNullableFilter<"training"> | string | null;
    status?: Prisma.Enumtraining_statusFilter<"training"> | $Enums.training_status;
    createdAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    country?: Prisma.StringNullableFilter<"training"> | string | null;
    state?: Prisma.StringNullableFilter<"training"> | string | null;
    trainingDate?: Prisma.DateTimeFilter<"training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"training"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    trainingregisteruser?: Prisma.TrainingregisteruserListRelationFilter;
};
export type trainingOrderByWithRelationInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    place?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
    trainingregisteruser?: Prisma.trainingregisteruserOrderByRelationAggregateInput;
    _relevance?: Prisma.trainingOrderByRelevanceInput;
};
export type trainingWhereUniqueInput = Prisma.AtLeast<{
    trainingId?: string;
    AND?: Prisma.trainingWhereInput | Prisma.trainingWhereInput[];
    OR?: Prisma.trainingWhereInput[];
    NOT?: Prisma.trainingWhereInput | Prisma.trainingWhereInput[];
    authorId?: Prisma.StringFilter<"training"> | string;
    title?: Prisma.StringFilter<"training"> | string;
    city?: Prisma.StringNullableFilter<"training"> | string | null;
    place?: Prisma.StringNullableFilter<"training"> | string | null;
    description?: Prisma.StringNullableFilter<"training"> | string | null;
    status?: Prisma.Enumtraining_statusFilter<"training"> | $Enums.training_status;
    createdAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    country?: Prisma.StringNullableFilter<"training"> | string | null;
    state?: Prisma.StringNullableFilter<"training"> | string | null;
    trainingDate?: Prisma.DateTimeFilter<"training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"training"> | string | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
    trainingregisteruser?: Prisma.TrainingregisteruserListRelationFilter;
}, "trainingId">;
export type trainingOrderByWithAggregationInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    city?: Prisma.SortOrderInput | Prisma.SortOrder;
    place?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrderInput | Prisma.SortOrder;
    state?: Prisma.SortOrderInput | Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.trainingCountOrderByAggregateInput;
    _max?: Prisma.trainingMaxOrderByAggregateInput;
    _min?: Prisma.trainingMinOrderByAggregateInput;
};
export type trainingScalarWhereWithAggregatesInput = {
    AND?: Prisma.trainingScalarWhereWithAggregatesInput | Prisma.trainingScalarWhereWithAggregatesInput[];
    OR?: Prisma.trainingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.trainingScalarWhereWithAggregatesInput | Prisma.trainingScalarWhereWithAggregatesInput[];
    trainingId?: Prisma.StringWithAggregatesFilter<"training"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"training"> | string;
    title?: Prisma.StringWithAggregatesFilter<"training"> | string;
    city?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
    place?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
    status?: Prisma.Enumtraining_statusWithAggregatesFilter<"training"> | $Enums.training_status;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"training"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"training"> | Date | string;
    country?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
    state?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
    trainingDate?: Prisma.DateTimeWithAggregatesFilter<"training"> | Date | string;
    trainingImage?: Prisma.StringNullableWithAggregatesFilter<"training"> | string | null;
};
export type trainingCreateInput = {
    trainingId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
    user: Prisma.userCreateNestedOneWithoutTrainingInput;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutTrainingInput;
};
export type trainingUncheckedCreateInput = {
    trainingId: string;
    authorId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutTrainingInput;
};
export type trainingUpdateInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.userUpdateOneRequiredWithoutTrainingNestedInput;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutTrainingNestedInput;
};
export type trainingUncheckedUpdateInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutTrainingNestedInput;
};
export type trainingCreateManyInput = {
    trainingId: string;
    authorId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
};
export type trainingUpdateManyMutationInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type trainingUncheckedUpdateManyInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type trainingOrderByRelevanceInput = {
    fields: Prisma.trainingOrderByRelevanceFieldEnum | Prisma.trainingOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type trainingCountOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
};
export type trainingMaxOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
};
export type trainingMinOrderByAggregateInput = {
    trainingId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    place?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    state?: Prisma.SortOrder;
    trainingDate?: Prisma.SortOrder;
    trainingImage?: Prisma.SortOrder;
};
export type TrainingScalarRelationFilter = {
    is?: Prisma.trainingWhereInput;
    isNot?: Prisma.trainingWhereInput;
};
export type TrainingListRelationFilter = {
    every?: Prisma.trainingWhereInput;
    some?: Prisma.trainingWhereInput;
    none?: Prisma.trainingWhereInput;
};
export type trainingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumtraining_statusFieldUpdateOperationsInput = {
    set?: $Enums.training_status;
};
export type trainingCreateNestedOneWithoutTrainingregisteruserInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedCreateWithoutTrainingregisteruserInput>;
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutTrainingregisteruserInput;
    connect?: Prisma.trainingWhereUniqueInput;
};
export type trainingUpdateOneRequiredWithoutTrainingregisteruserNestedInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedCreateWithoutTrainingregisteruserInput>;
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutTrainingregisteruserInput;
    upsert?: Prisma.trainingUpsertWithoutTrainingregisteruserInput;
    connect?: Prisma.trainingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.trainingUpdateToOneWithWhereWithoutTrainingregisteruserInput, Prisma.trainingUpdateWithoutTrainingregisteruserInput>, Prisma.trainingUncheckedUpdateWithoutTrainingregisteruserInput>;
};
export type trainingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput> | Prisma.trainingCreateWithoutUserInput[] | Prisma.trainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutUserInput | Prisma.trainingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.trainingCreateManyUserInputEnvelope;
    connect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
};
export type trainingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput> | Prisma.trainingCreateWithoutUserInput[] | Prisma.trainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutUserInput | Prisma.trainingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.trainingCreateManyUserInputEnvelope;
    connect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
};
export type trainingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput> | Prisma.trainingCreateWithoutUserInput[] | Prisma.trainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutUserInput | Prisma.trainingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.trainingUpsertWithWhereUniqueWithoutUserInput | Prisma.trainingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.trainingCreateManyUserInputEnvelope;
    set?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    disconnect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    delete?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    connect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    update?: Prisma.trainingUpdateWithWhereUniqueWithoutUserInput | Prisma.trainingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.trainingUpdateManyWithWhereWithoutUserInput | Prisma.trainingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.trainingScalarWhereInput | Prisma.trainingScalarWhereInput[];
};
export type trainingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput> | Prisma.trainingCreateWithoutUserInput[] | Prisma.trainingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.trainingCreateOrConnectWithoutUserInput | Prisma.trainingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.trainingUpsertWithWhereUniqueWithoutUserInput | Prisma.trainingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.trainingCreateManyUserInputEnvelope;
    set?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    disconnect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    delete?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    connect?: Prisma.trainingWhereUniqueInput | Prisma.trainingWhereUniqueInput[];
    update?: Prisma.trainingUpdateWithWhereUniqueWithoutUserInput | Prisma.trainingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.trainingUpdateManyWithWhereWithoutUserInput | Prisma.trainingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.trainingScalarWhereInput | Prisma.trainingScalarWhereInput[];
};
export type trainingCreateWithoutTrainingregisteruserInput = {
    trainingId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
    user: Prisma.userCreateNestedOneWithoutTrainingInput;
};
export type trainingUncheckedCreateWithoutTrainingregisteruserInput = {
    trainingId: string;
    authorId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
};
export type trainingCreateOrConnectWithoutTrainingregisteruserInput = {
    where: Prisma.trainingWhereUniqueInput;
    create: Prisma.XOR<Prisma.trainingCreateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedCreateWithoutTrainingregisteruserInput>;
};
export type trainingUpsertWithoutTrainingregisteruserInput = {
    update: Prisma.XOR<Prisma.trainingUpdateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedUpdateWithoutTrainingregisteruserInput>;
    create: Prisma.XOR<Prisma.trainingCreateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedCreateWithoutTrainingregisteruserInput>;
    where?: Prisma.trainingWhereInput;
};
export type trainingUpdateToOneWithWhereWithoutTrainingregisteruserInput = {
    where?: Prisma.trainingWhereInput;
    data: Prisma.XOR<Prisma.trainingUpdateWithoutTrainingregisteruserInput, Prisma.trainingUncheckedUpdateWithoutTrainingregisteruserInput>;
};
export type trainingUpdateWithoutTrainingregisteruserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user?: Prisma.userUpdateOneRequiredWithoutTrainingNestedInput;
};
export type trainingUncheckedUpdateWithoutTrainingregisteruserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type trainingCreateWithoutUserInput = {
    trainingId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
    trainingregisteruser?: Prisma.trainingregisteruserCreateNestedManyWithoutTrainingInput;
};
export type trainingUncheckedCreateWithoutUserInput = {
    trainingId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedCreateNestedManyWithoutTrainingInput;
};
export type trainingCreateOrConnectWithoutUserInput = {
    where: Prisma.trainingWhereUniqueInput;
    create: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput>;
};
export type trainingCreateManyUserInputEnvelope = {
    data: Prisma.trainingCreateManyUserInput | Prisma.trainingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type trainingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.trainingWhereUniqueInput;
    update: Prisma.XOR<Prisma.trainingUpdateWithoutUserInput, Prisma.trainingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.trainingCreateWithoutUserInput, Prisma.trainingUncheckedCreateWithoutUserInput>;
};
export type trainingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.trainingWhereUniqueInput;
    data: Prisma.XOR<Prisma.trainingUpdateWithoutUserInput, Prisma.trainingUncheckedUpdateWithoutUserInput>;
};
export type trainingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.trainingScalarWhereInput;
    data: Prisma.XOR<Prisma.trainingUpdateManyMutationInput, Prisma.trainingUncheckedUpdateManyWithoutUserInput>;
};
export type trainingScalarWhereInput = {
    AND?: Prisma.trainingScalarWhereInput | Prisma.trainingScalarWhereInput[];
    OR?: Prisma.trainingScalarWhereInput[];
    NOT?: Prisma.trainingScalarWhereInput | Prisma.trainingScalarWhereInput[];
    trainingId?: Prisma.StringFilter<"training"> | string;
    authorId?: Prisma.StringFilter<"training"> | string;
    title?: Prisma.StringFilter<"training"> | string;
    city?: Prisma.StringNullableFilter<"training"> | string | null;
    place?: Prisma.StringNullableFilter<"training"> | string | null;
    description?: Prisma.StringNullableFilter<"training"> | string | null;
    status?: Prisma.Enumtraining_statusFilter<"training"> | $Enums.training_status;
    createdAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"training"> | Date | string;
    country?: Prisma.StringNullableFilter<"training"> | string | null;
    state?: Prisma.StringNullableFilter<"training"> | string | null;
    trainingDate?: Prisma.DateTimeFilter<"training"> | Date | string;
    trainingImage?: Prisma.StringNullableFilter<"training"> | string | null;
};
export type trainingCreateManyUserInput = {
    trainingId: string;
    title: string;
    city?: string | null;
    place?: string | null;
    description?: string | null;
    status?: $Enums.training_status;
    createdAt?: Date | string;
    updatedAt: Date | string;
    country?: string | null;
    state?: string | null;
    trainingDate: Date | string;
    trainingImage?: string | null;
};
export type trainingUpdateWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingregisteruser?: Prisma.trainingregisteruserUpdateManyWithoutTrainingNestedInput;
};
export type trainingUncheckedUpdateWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingregisteruser?: Prisma.trainingregisteruserUncheckedUpdateManyWithoutTrainingNestedInput;
};
export type trainingUncheckedUpdateManyWithoutUserInput = {
    trainingId?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    place?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumtraining_statusFieldUpdateOperationsInput | $Enums.training_status;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    country?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    state?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainingImage?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type TrainingCountOutputType
 */
export type TrainingCountOutputType = {
    trainingregisteruser: number;
};
export type TrainingCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trainingregisteruser?: boolean | TrainingCountOutputTypeCountTrainingregisteruserArgs;
};
/**
 * TrainingCountOutputType without action
 */
export type TrainingCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrainingCountOutputType
     */
    select?: Prisma.TrainingCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TrainingCountOutputType without action
 */
export type TrainingCountOutputTypeCountTrainingregisteruserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.trainingregisteruserWhereInput;
};
export type trainingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    trainingId?: boolean;
    authorId?: boolean;
    title?: boolean;
    city?: boolean;
    place?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    country?: boolean;
    state?: boolean;
    trainingDate?: boolean;
    trainingImage?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    trainingregisteruser?: boolean | Prisma.training$trainingregisteruserArgs<ExtArgs>;
    _count?: boolean | Prisma.TrainingCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["training"]>;
export type trainingSelectScalar = {
    trainingId?: boolean;
    authorId?: boolean;
    title?: boolean;
    city?: boolean;
    place?: boolean;
    description?: boolean;
    status?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    country?: boolean;
    state?: boolean;
    trainingDate?: boolean;
    trainingImage?: boolean;
};
export type trainingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"trainingId" | "authorId" | "title" | "city" | "place" | "description" | "status" | "createdAt" | "updatedAt" | "country" | "state" | "trainingDate" | "trainingImage", ExtArgs["result"]["training"]>;
export type trainingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
    trainingregisteruser?: boolean | Prisma.training$trainingregisteruserArgs<ExtArgs>;
    _count?: boolean | Prisma.TrainingCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $trainingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "training";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
        trainingregisteruser: Prisma.$trainingregisteruserPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        trainingId: string;
        authorId: string;
        title: string;
        city: string | null;
        place: string | null;
        description: string | null;
        status: $Enums.training_status;
        createdAt: Date;
        updatedAt: Date;
        country: string | null;
        state: string | null;
        trainingDate: Date;
        trainingImage: string | null;
    }, ExtArgs["result"]["training"]>;
    composites: {};
};
export type trainingGetPayload<S extends boolean | null | undefined | trainingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$trainingPayload, S>;
export type trainingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<trainingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingCountAggregateInputType | true;
};
export interface trainingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['training'];
        meta: {
            name: 'training';
        };
    };
    /**
     * Find zero or one Training that matches the filter.
     * @param {trainingFindUniqueArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends trainingFindUniqueArgs>(args: Prisma.SelectSubset<T, trainingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Training that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {trainingFindUniqueOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends trainingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, trainingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Training that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindFirstArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends trainingFindFirstArgs>(args?: Prisma.SelectSubset<T, trainingFindFirstArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Training that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindFirstOrThrowArgs} args - Arguments to find a Training
     * @example
     * // Get one Training
     * const training = await prisma.training.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends trainingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, trainingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Trainings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trainings
     * const trainings = await prisma.training.findMany()
     *
     * // Get first 10 Trainings
     * const trainings = await prisma.training.findMany({ take: 10 })
     *
     * // Only select the `trainingId`
     * const trainingWithTrainingIdOnly = await prisma.training.findMany({ select: { trainingId: true } })
     *
     */
    findMany<T extends trainingFindManyArgs>(args?: Prisma.SelectSubset<T, trainingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Training.
     * @param {trainingCreateArgs} args - Arguments to create a Training.
     * @example
     * // Create one Training
     * const Training = await prisma.training.create({
     *   data: {
     *     // ... data to create a Training
     *   }
     * })
     *
     */
    create<T extends trainingCreateArgs>(args: Prisma.SelectSubset<T, trainingCreateArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Trainings.
     * @param {trainingCreateManyArgs} args - Arguments to create many Trainings.
     * @example
     * // Create many Trainings
     * const training = await prisma.training.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends trainingCreateManyArgs>(args?: Prisma.SelectSubset<T, trainingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Training.
     * @param {trainingDeleteArgs} args - Arguments to delete one Training.
     * @example
     * // Delete one Training
     * const Training = await prisma.training.delete({
     *   where: {
     *     // ... filter to delete one Training
     *   }
     * })
     *
     */
    delete<T extends trainingDeleteArgs>(args: Prisma.SelectSubset<T, trainingDeleteArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Training.
     * @param {trainingUpdateArgs} args - Arguments to update one Training.
     * @example
     * // Update one Training
     * const training = await prisma.training.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends trainingUpdateArgs>(args: Prisma.SelectSubset<T, trainingUpdateArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Trainings.
     * @param {trainingDeleteManyArgs} args - Arguments to filter Trainings to delete.
     * @example
     * // Delete a few Trainings
     * const { count } = await prisma.training.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends trainingDeleteManyArgs>(args?: Prisma.SelectSubset<T, trainingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trainings
     * const training = await prisma.training.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends trainingUpdateManyArgs>(args: Prisma.SelectSubset<T, trainingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Training.
     * @param {trainingUpsertArgs} args - Arguments to update or create a Training.
     * @example
     * // Update or create a Training
     * const training = await prisma.training.upsert({
     *   create: {
     *     // ... data to create a Training
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Training we want to update
     *   }
     * })
     */
    upsert<T extends trainingUpsertArgs>(args: Prisma.SelectSubset<T, trainingUpsertArgs<ExtArgs>>): Prisma.Prisma__trainingClient<runtime.Types.Result.GetResult<Prisma.$trainingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Trainings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingCountArgs} args - Arguments to filter Trainings to count.
     * @example
     * // Count the number of Trainings
     * const count = await prisma.training.count({
     *   where: {
     *     // ... the filter for the Trainings we want to count
     *   }
     * })
    **/
    count<T extends trainingCountArgs>(args?: Prisma.Subset<T, trainingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrainingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrainingAggregateArgs>(args: Prisma.Subset<T, TrainingAggregateArgs>): Prisma.PrismaPromise<GetTrainingAggregateType<T>>;
    /**
     * Group by Training.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {trainingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends trainingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: trainingGroupByArgs['orderBy'];
    } : {
        orderBy?: trainingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, trainingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the training model
     */
    readonly fields: trainingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for training.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__trainingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    trainingregisteruser<T extends Prisma.training$trainingregisteruserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.training$trainingregisteruserArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$trainingregisteruserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the training model
 */
export interface trainingFieldRefs {
    readonly trainingId: Prisma.FieldRef<"training", 'String'>;
    readonly authorId: Prisma.FieldRef<"training", 'String'>;
    readonly title: Prisma.FieldRef<"training", 'String'>;
    readonly city: Prisma.FieldRef<"training", 'String'>;
    readonly place: Prisma.FieldRef<"training", 'String'>;
    readonly description: Prisma.FieldRef<"training", 'String'>;
    readonly status: Prisma.FieldRef<"training", 'training_status'>;
    readonly createdAt: Prisma.FieldRef<"training", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"training", 'DateTime'>;
    readonly country: Prisma.FieldRef<"training", 'String'>;
    readonly state: Prisma.FieldRef<"training", 'String'>;
    readonly trainingDate: Prisma.FieldRef<"training", 'DateTime'>;
    readonly trainingImage: Prisma.FieldRef<"training", 'String'>;
}
/**
 * training findUnique
 */
export type trainingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which training to fetch.
     */
    where: Prisma.trainingWhereUniqueInput;
};
/**
 * training findUniqueOrThrow
 */
export type trainingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which training to fetch.
     */
    where: Prisma.trainingWhereUniqueInput;
};
/**
 * training findFirst
 */
export type trainingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which training to fetch.
     */
    where?: Prisma.trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: Prisma.trainingOrderByWithRelationInput | Prisma.trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainings.
     */
    cursor?: Prisma.trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * training findFirstOrThrow
 */
export type trainingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which training to fetch.
     */
    where?: Prisma.trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: Prisma.trainingOrderByWithRelationInput | Prisma.trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for trainings.
     */
    cursor?: Prisma.trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * training findMany
 */
export type trainingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which trainings to fetch.
     */
    where?: Prisma.trainingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of trainings to fetch.
     */
    orderBy?: Prisma.trainingOrderByWithRelationInput | Prisma.trainingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing trainings.
     */
    cursor?: Prisma.trainingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` trainings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` trainings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of trainings.
     */
    distinct?: Prisma.TrainingScalarFieldEnum | Prisma.TrainingScalarFieldEnum[];
};
/**
 * training create
 */
export type trainingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a training.
     */
    data: Prisma.XOR<Prisma.trainingCreateInput, Prisma.trainingUncheckedCreateInput>;
};
/**
 * training createMany
 */
export type trainingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many trainings.
     */
    data: Prisma.trainingCreateManyInput | Prisma.trainingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * training update
 */
export type trainingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a training.
     */
    data: Prisma.XOR<Prisma.trainingUpdateInput, Prisma.trainingUncheckedUpdateInput>;
    /**
     * Choose, which training to update.
     */
    where: Prisma.trainingWhereUniqueInput;
};
/**
 * training updateMany
 */
export type trainingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update trainings.
     */
    data: Prisma.XOR<Prisma.trainingUpdateManyMutationInput, Prisma.trainingUncheckedUpdateManyInput>;
    /**
     * Filter which trainings to update
     */
    where?: Prisma.trainingWhereInput;
    /**
     * Limit how many trainings to update.
     */
    limit?: number;
};
/**
 * training upsert
 */
export type trainingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the training to update in case it exists.
     */
    where: Prisma.trainingWhereUniqueInput;
    /**
     * In case the training found by the `where` argument doesn't exist, create a new training with this data.
     */
    create: Prisma.XOR<Prisma.trainingCreateInput, Prisma.trainingUncheckedCreateInput>;
    /**
     * In case the training was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.trainingUpdateInput, Prisma.trainingUncheckedUpdateInput>;
};
/**
 * training delete
 */
export type trainingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which training to delete.
     */
    where: Prisma.trainingWhereUniqueInput;
};
/**
 * training deleteMany
 */
export type trainingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which trainings to delete
     */
    where?: Prisma.trainingWhereInput;
    /**
     * Limit how many trainings to delete.
     */
    limit?: number;
};
/**
 * training.trainingregisteruser
 */
export type training$trainingregisteruserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * training without action
 */
export type trainingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=training.d.ts.map