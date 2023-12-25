import React from 'react';
import '../Table/Table.css'


const Table = ({
    columns,
    data,
    actions,
    onEdit,
    onDelete
}) => {
    return (

        < div className='table-div' >
            <table className='table-design'>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.key}>
                                {column.label}
                            </th>
                        ))}
                        {actions && <th>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item._id}>
                            {columns.map((column) => (
                                <td key={`${item._id} - ${column.key}`}>
                                    {column.key === 'expenseTypeName' ? (
                                        // Special handling for 'expenseType' column
                                        <>
                                            <div>{item.expenseType.name}</div>
                                        </>
                                    ) : (
                                        // Render other columns as usual
                                        item[column.key]
                                    )}
                                    {column.key === 'expenseTypeIcon' ? (
                                        // Special handling for 'expenseType' column
                                        <>
                                            <div>{item.expenseType.icon}</div>
                                        </>
                                    ) : (
                                        // Render other columns as usual
                                        item[column.key]
                                    )}
                                </td>
                            ))}
                            {actions && (
                                <td>
                                    <button onClick={() => onEdit(item._id)}>Edit</button>
                                    <button onClick={() => onDelete(item._id)}>Delete</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default Table;
