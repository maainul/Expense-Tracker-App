import ExpenseTypeModel from "../../models/ExpenseType.js"


export const updateExpenseTypeByIdServ = async ({ id, name, icon }) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(id)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

    const expTyp = ExpenseTypeModel.findByIdAndUpdate(id, { name, icon }, { new: true })
    return expTyp
}

