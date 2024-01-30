import MainLayout from 'components/layout/MainLayout/MainLayout'
import { useAllExpenseTypes } from 'hooks/useExpenseTypes';
import ExpTypTbl from 'components/table/ExpTypTbl';
import ButtonPrimary from 'components/buttons/ButtonPrimary';
import ExpenseTypeForm from 'components/form/ExpenseTypeForm';
import { showModalForm } from 'utils/modalForm';

const ExpenseTypes = () => {

    const {expenseTypeList } = useAllExpenseTypes([])
    return (
        <>
        <MainLayout>
            <ExpTypTbl expenseTypeList={expenseTypeList} />
            <div className='add-expense-btn'>
                <ButtonPrimary
                    clsName={"bx bx-plus me-sm-1"}
                    title={"Add"}
                    onClick={showModalForm}
                />
            </div>
        </MainLayout>
        <ExpenseTypeForm />
        </>
    )
}

export default ExpenseTypes