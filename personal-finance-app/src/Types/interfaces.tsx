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

export interface StatCardProps {
    title: string;
    value: string;
    percentage: string;
    isPositive: boolean;
  }

export interface StatCardsProps {
    stats: Array<{
      title: string;
      value: string;
      percentage: string;
      isPositive: boolean;
    }>;
  }

export interface Stat {
    title: string;
    value: string;
    percentage: string;
    isPositive: boolean;
  }
  
export interface StatsContextType {
    stats: Stat[] | null;
    loading: boolean;
    error: string | null;
  }

export interface StatsContextProps {
    stats: {
      totalIncome: number;
      totalExpenses: number;
      balance: number;
      incomeBreakdown: Array<{ _id: string; total: number }>;
      expenseBreakdown: Array<{ _id: string; total: number }>;
    } | null;
    loading: boolean;
  }
  