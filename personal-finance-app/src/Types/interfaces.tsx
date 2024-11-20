import { ReactEventHandler } from "react";

export interface TextInputProps {
    label: string,
    name: string,
    value: string,
    placeholder?: string,
    type?: string,
    error?: string | null,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface PasswordInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string | null;
  }