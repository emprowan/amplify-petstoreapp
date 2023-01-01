/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PetCreateFormInputValues = {
    name?: string;
    age?: number;
    image?: string;
    color?: string;
    about?: string;
    PetType?: string;
};
export declare type PetCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    age?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    about?: ValidationFunction<string>;
    PetType?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PetCreateFormOverridesProps = {
    PetCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    age?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
    color?: FormProps<TextFieldProps>;
    about?: FormProps<TextFieldProps>;
    PetType?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PetCreateFormProps = React.PropsWithChildren<{
    overrides?: PetCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onSuccess?: (fields: PetCreateFormInputValues) => void;
    onError?: (fields: PetCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PetCreateFormInputValues) => PetCreateFormInputValues;
    onValidate?: PetCreateFormValidationValues;
} & React.CSSProperties>;
export default function PetCreateForm(props: PetCreateFormProps): React.ReactElement;
