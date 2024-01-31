import ExpenseTypeModel from "../../models/ExpenseType.js"


export const getAllExpTypeServ = async ({ req }) => {
    const { sortOrder } = req.body;
    let queryResult = await ExpenseTypeModel.find()
        .sort(
            {
                createdAt: sortOrder === "asc" ? 1 : -1
            }
        );
    //paginaiton
    // const page = Number(req.query.page) || 1
    // const limit = Number(req.query.limit) || 10
    // const skip = (page - 1) * limit
    // queryResult = queryResult.skip(skip).limit(limit)
    // count 
    //  const totalExpTyp = await ExpenseTypeModel.countDocuments(queryResult)
    //   const numOfPage = Math.ceil(totalExpTyp / limit)

    //   const expTyps = await queryResult

    return queryResult
}

