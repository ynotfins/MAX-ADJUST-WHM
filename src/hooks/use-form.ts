"use client";

import { useState, useCallback, useRef } from "react";
import { z, type ZodSchema } from "zod";

// 1. Props with constrained schema
interface UseFormProps<S extends ZodSchema<object>> {
    initialValues: z.infer<S>;
    schema: S;
    onSubmit: (data: z.infer<S>, self: UseFormReturn<z.infer<S>>) => void;
}

// 2. Return type
interface UseFormReturn<Values extends object> {
    values: Values;
    errors: Partial<Record<keyof Values, string | null>>;
    update: <K extends keyof Values>(field: K, value: Values[K]) => void;
    handleSubmit: (e?: React.FormEvent) => void;
    resetForm: () => void;
    setErrors: React.Dispatch<
        React.SetStateAction<Partial<Record<keyof Values, string | null>>>
    >;
    setValues: React.Dispatch<React.SetStateAction<Values>>;
    updateAtIndex: <K extends keyof Values>(
        field: K,
        index: number,
        value: Values[K] extends Array<infer U> ? U : never
    ) => void;
}

// 3. Hook
export function useForm<S extends ZodSchema<object>>({
    initialValues,
    schema,
    onSubmit,
}: UseFormProps<S>): UseFormReturn<z.infer<S>> {
    type Values = z.infer<S>;

    const [errors, setErrors] = useState<
        Partial<Record<keyof Values, string | null>>
    >({});
    const valuesRef = useRef<Values>(initialValues);

    // Force-update trick
    const [, forceUpdate] = useState({});

    const setValues: React.Dispatch<React.SetStateAction<Values>> = useCallback(
        (newValues) => {
            if (typeof newValues === "function") {
                valuesRef.current = (newValues as (prev: Values) => Values)(
                    valuesRef.current
                );
            } else {
                valuesRef.current = newValues;
            }
            forceUpdate({});
        },
        []
    );

    const update = useCallback(
        <K extends keyof Values>(field: K, value: Values[K]) => {
            const updatedValues = { ...valuesRef.current, [field]: value };
            setValues(updatedValues);

            // Validate just that updated field in context of the entire object
            const result = schema.safeParse(updatedValues);
            if (!result.success) {
                // Use type assertion or check to ensure `fieldErrors` is properly typed
                const fieldErrors = result.error.formErrors
                    .fieldErrors as Record<keyof Values, string[] | undefined>;

                const error = fieldErrors[field]?.[0] ?? null;
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: error,
                }));
            } else {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [field]: null,
                }));
            }
        },
        [schema, setValues]
    );

    const handleSubmit = useCallback(
        (e?: React.FormEvent) => {
            if (e) e.preventDefault();

            const result = schema.safeParse(valuesRef.current);
            if (!result.success) {
                const newErrors: Partial<Record<keyof Values, string | null>> =
                    {};
                Object.entries(result.error.formErrors.fieldErrors).forEach(
                    ([field, fieldErrors]) => {
                        if (
                            Array.isArray(fieldErrors) &&
                            typeof fieldErrors[0] === "string"
                        ) {
                            newErrors[field as keyof Values] =
                                fieldErrors[0] ?? null;
                        }
                    }
                );
                setErrors(newErrors);
            } else {
                setErrors({});
                onSubmit(valuesRef.current, self);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [schema, onSubmit]
    );

    const resetForm = useCallback(() => {
        setValues(initialValues);
        setErrors({});
    }, [initialValues, setValues]);

    const updateAtIndex = useCallback(
        <K extends keyof Values>(
            field: K,
            index: number,
            newValue: Values[K] extends Array<infer U> ? U : never
        ) => {
            const currentArray = (valuesRef.current[field] as unknown[]) ?? [];
            if (!Array.isArray(currentArray)) {
                throw new Error(`Field "${String(field)}" is not an array.`);
            }
            const updatedArray = [...currentArray];
            updatedArray[index] = newValue;
            setValues({
                ...valuesRef.current,
                [field]: updatedArray as Values[K],
            });
        },
        [setValues]
    );

    const self: UseFormReturn<Values> = {
        values: valuesRef.current,
        errors,
        update,
        handleSubmit,
        resetForm,
        setErrors,
        updateAtIndex,
        setValues,
    };

    return self;
}
