import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type FloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type Enumfarminginformation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.farminginformation_status | Prisma.Enumfarminginformation_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.farminginformation_status[];
    notIn?: $Enums.farminginformation_status[];
    not?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel> | $Enums.farminginformation_status;
};
export type Enumfarminginformation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.farminginformation_status | Prisma.Enumfarminginformation_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.farminginformation_status[];
    notIn?: $Enums.farminginformation_status[];
    not?: Prisma.NestedEnumfarminginformation_statusWithAggregatesFilter<$PrismaModel> | $Enums.farminginformation_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel>;
};
export type Enumtraining_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.training_status | Prisma.Enumtraining_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.training_status[];
    notIn?: $Enums.training_status[];
    not?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel> | $Enums.training_status;
};
export type Enumtraining_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.training_status | Prisma.Enumtraining_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.training_status[];
    notIn?: $Enums.training_status[];
    not?: Prisma.NestedEnumtraining_statusWithAggregatesFilter<$PrismaModel> | $Enums.training_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel>;
};
export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[];
    notIn?: $Enums.user_role[];
    not?: Prisma.NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role;
};
export type Enumuser_farmingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_farming | Prisma.Enumuser_farmingFieldRefInput<$PrismaModel> | null;
    in?: $Enums.user_farming[] | null;
    notIn?: $Enums.user_farming[] | null;
    not?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel> | $Enums.user_farming | null;
};
export type Enumuser_scaleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_scale | Prisma.Enumuser_scaleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_scale[];
    notIn?: $Enums.user_scale[];
    not?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel> | $Enums.user_scale;
};
export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[];
    notIn?: $Enums.user_role[];
    not?: Prisma.NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
};
export type Enumuser_farmingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_farming | Prisma.Enumuser_farmingFieldRefInput<$PrismaModel> | null;
    in?: $Enums.user_farming[] | null;
    notIn?: $Enums.user_farming[] | null;
    not?: Prisma.NestedEnumuser_farmingNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_farming | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel>;
};
export type Enumuser_scaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_scale | Prisma.Enumuser_scaleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_scale[];
    notIn?: $Enums.user_scale[];
    not?: Prisma.NestedEnumuser_scaleWithAggregatesFilter<$PrismaModel> | $Enums.user_scale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatFilter<$PrismaModel>;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumfarminginformation_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.farminginformation_status | Prisma.Enumfarminginformation_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.farminginformation_status[];
    notIn?: $Enums.farminginformation_status[];
    not?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel> | $Enums.farminginformation_status;
};
export type NestedEnumfarminginformation_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.farminginformation_status | Prisma.Enumfarminginformation_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.farminginformation_status[];
    notIn?: $Enums.farminginformation_status[];
    not?: Prisma.NestedEnumfarminginformation_statusWithAggregatesFilter<$PrismaModel> | $Enums.farminginformation_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfarminginformation_statusFilter<$PrismaModel>;
};
export type NestedEnumtraining_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.training_status | Prisma.Enumtraining_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.training_status[];
    notIn?: $Enums.training_status[];
    not?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel> | $Enums.training_status;
};
export type NestedEnumtraining_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.training_status | Prisma.Enumtraining_statusFieldRefInput<$PrismaModel>;
    in?: $Enums.training_status[];
    notIn?: $Enums.training_status[];
    not?: Prisma.NestedEnumtraining_statusWithAggregatesFilter<$PrismaModel> | $Enums.training_status;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumtraining_statusFilter<$PrismaModel>;
};
export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[];
    notIn?: $Enums.user_role[];
    not?: Prisma.NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role;
};
export type NestedEnumuser_farmingNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_farming | Prisma.Enumuser_farmingFieldRefInput<$PrismaModel> | null;
    in?: $Enums.user_farming[] | null;
    notIn?: $Enums.user_farming[] | null;
    not?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel> | $Enums.user_farming | null;
};
export type NestedEnumuser_scaleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_scale | Prisma.Enumuser_scaleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_scale[];
    notIn?: $Enums.user_scale[];
    not?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel> | $Enums.user_scale;
};
export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Prisma.Enumuser_roleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_role[];
    notIn?: $Enums.user_role[];
    not?: Prisma.NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_roleFilter<$PrismaModel>;
};
export type NestedEnumuser_farmingNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_farming | Prisma.Enumuser_farmingFieldRefInput<$PrismaModel> | null;
    in?: $Enums.user_farming[] | null;
    notIn?: $Enums.user_farming[] | null;
    not?: Prisma.NestedEnumuser_farmingNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_farming | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_farmingNullableFilter<$PrismaModel>;
};
export type NestedEnumuser_scaleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_scale | Prisma.Enumuser_scaleFieldRefInput<$PrismaModel>;
    in?: $Enums.user_scale[];
    notIn?: $Enums.user_scale[];
    not?: Prisma.NestedEnumuser_scaleWithAggregatesFilter<$PrismaModel> | $Enums.user_scale;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumuser_scaleFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map