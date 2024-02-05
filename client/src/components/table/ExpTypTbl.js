import { closeDetailsModalForm, showDetails } from "utils/modalForm"

const ExpTypTbl = ({ expenseTypeList, handleEditForm }) => {

    return (
        <>
            <div className='content-container'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expenseTypeList.map((expl) => (
                            <tr>
                                <td>{expl._id}</td>
                                <td>{expl.icon}</td>
                                <td>{expl.name}</td>
                                <td key={expl.id}>
                                    <i class="bx bx-dots-vertical-rounded dashboard-icon"></i>
                                    <i class="bx bx-dots-vertical-rounded dashboard-icon"
                                        onClick={() => showDetails({ expl })}
                                    ></i>

                                    <i class="bx bxs-edit dashboard-icon editIcon"
                                        onClick={() => handleEditForm({ expl })}
                                    ></i>
                                </td>
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
            <div className="modal-width">
                <div className='overlay' onClick={closeDetailsModalForm}></div>
                <div className='details-modal-form'>
                    <span onClick={closeDetailsModalForm}>&times;</span>
                </div>
            </div>
        </>
    )
}

export default ExpTypTbl