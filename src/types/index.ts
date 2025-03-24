export type TransactionType = 'income' | 'expense';
export type IncomeCategory = '給与' | '副収入' | 'お小遣い';
export type ExpenseCategory = '食費' | '日用品' | '住居費' | '娯楽費' | '交通費' | '光熱費(電気・ガス)' | '水道料金' |'その他';

export interface Transaction {
    id: string,
    date: string,
    amount: number,
    content: string,
    type: TransactionType,
    category: IncomeCategory | ExpenseCategory,
}