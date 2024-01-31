
const ExpTypTbl = ({ expenseTypeList }) => {
    return (
        <>
            <div className='content-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseTypeList.map((expl) => (
                            <tr>
                                <td>{expl.icon}</td>
                                <td>{expl.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination-container">
                    <span className="paginationNumber"> <i class='pagination-icon bx bx-chevrons-left'></i> </span>
                    <span className="paginationNumber">1</span>
                    <span className="paginationNumber">2</span>
                    <span className="paginationNumber">3</span>
                    <span className="paginationNumber">4</span>
                    <span className="paginationNumber"><i class='pagination-icon bx bx-chevrons-right'></i></span>
                </div>
            </div >
        </>
    )
}

export default ExpTypTbl