import ExpenseTypeModel from "../../models/ExpenseType.js"


export const getAllExpTypeServ = async ({ sortOrder }) => {
    const expTyp = await ExpenseTypeModel.find().sort({ createdAt: sortOrder === "asc" ? 1 : -1 });
    return expTyp
}

