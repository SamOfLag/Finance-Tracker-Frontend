import { ReactEventHandler } from "react";

export interface TextInputProps {
    label: string,
    name: string,
    value: string,
    placeholder?: string,
    type?: string,
    error?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
}