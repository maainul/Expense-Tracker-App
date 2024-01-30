const ExpTypTbl = ({expenseTypeList}) =>{
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
            </div>
        </>
    )
}

export default ExpTypTbl