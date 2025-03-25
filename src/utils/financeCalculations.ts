import { Balance, Transaction } from "../types";

export function financeCalculations(transactions: Transaction[]): Balance {
    //reduceは繰り返し関数
    return transactions.reduce((acc , transaction)=>{
        if(transaction.type === 'income'){
            acc.income += transaction.amount;
        }else{
            acc.expense += transaction.amount;
        }
        acc.balance = acc.income - acc.expense; 

        return acc;
    }, {income: 0, expense:0, balance:0});//初期を0で設定
}