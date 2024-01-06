import React from 'react'
import MainLayout from './../../Components/Layout/MainLayout/MainLayout';

import { useTop10Expenses } from '../../Hooks/useTop10Expenses'
import { useGetDailyExpense } from './../../Hooks/useGetDailyExpense';
import { useCurWeekExp } from './../../Hooks/useCurWeekExp';
import { useCurYearExp } from './../../Hooks/useCurYearExp';
import { useCatWiseExp } from '../../Hooks/useCatWiseExp';
import { useExpenseTypeWise } from '../../Hooks/useExpenseTypeWise';
import { useAllUser } from '../../Hooks/useAllUser';
import { useAuth } from '../../context/auth';

const Home = () => {

    const { top10ExpList, debitCount, creditCount, debitTotalAmount, creditTotalAmount } = useTop10Expenses()
    const dailyExp = useGetDailyExpense()
    const curWeekExp = useCurWeekExp()
    const { curYearExpList, curYearTotal, numberOfTransaction } = useCurYearExp()
    const { catWiseExpList, creditExpTotal, debitExpTotal, numberOfCredit, numberOfDebit } = useCatWiseExp()
    const expenseTypeWiseList = useExpenseTypeWise()
    const userlist = useAllUser()
    const [auth, setAuth] = useAuth()

    return (
        <MainLayout>
            <div></div>
            <div>congrats</div>
            <div>Top Expense(10)
                <div>
                    <p>{JSON.stringify(auth, null, 4)}</p>
                    {/* {top10ExpList.map((exp) => (
                        <p>{exp.category} -{exp.count} - {exp.totalAmount}
                            <span>
                                {exp.expenses.map((ex) => (
                                    <ul>
                                        <li>{ex.amount} - {ex.expenseType} -{ex.category} - {ex.description} </li>
                                    </ul>
                                ))}
                            </span>
                        </p>
                    ))} */}
                </div>
            </div>
            <div>Daily Expense
                {/* {dailyExp.map((gde) => (
                    <p>{gde.amount} - {gde.date} - {gde.description}</p>
                ))} */}
            </div>
            <div>Current Week Expense
                {/* <p>Start Week : {curWeekExp.startWeek}</p> */}
                {/* <p>End Week : {curWeekExp.endWeek}</p> */}
                {/* {curWeekExp.expenses.map((cwe) => ( */}
                {/* <p>{cwe.amount} - {cwe.date} - {cwe.description}-{cwe.expenseType}</p> */}
                {/* ))} */}
            </div>
            <div>Top Income(10)</div>
            <div>Top Transaction(10)</div>
            <div>Expense Activity Last Year
                {/* <p>Count :  {curYearExp[0].count}</p> */}
                {/* <p>Toal Amount :  {curYearExp[0].totalAmount}</p> */}
                <div>
                    {/* {curYearExp[0].expenses.map((ex) => (
                        <p>{ex.amount} - {ex.expenseType} -{ex.category} - {ex.description} - {ex.date} - {ex.expenseType}</p>
                    ))} */}
                </div>
            </div>
            <div>Expense Activity By Category
                <p>Debit</p>
                {/* {catWiseExp.map((exp) => (
                    <p>{exp.count} - {exp._id} - {exp.totalAmount}</p>
                ))} */}

                {/* {debit.map((ex) => (
                    <p>{ex.amount} - {ex.date} - {ex.expenseType} - {ex.category}-{ex.description} </p>
                ))} */}

                <p>Credit</p>
                {/* {credit.map((ex) => (
                    <p>{ex.amount} - {ex.date} - {ex.expenseType} - {ex.category}-{ex.description} </p>
                ))} */}
            </div>
            {/* <div>Credit Total : {creditExpTotal}</div> */}
            <div>Total Income</div>
            <div>Expense</div>
            <div>This Month Income</div>
            <div>This Month Expense</div>
            <div>This Month Credit/Debit</div>
            <div>Expese Category with image</div>
            <div>Total Balance</div>
            <div>Credit/Debit Wise Total Exp
                {/* <p> Credit : {creditExpTotal}</p> */}
                {/* <p> Debit : {debitExpTotal}</p> */}
            </div>

        </MainLayout>
    )
}

export default Home