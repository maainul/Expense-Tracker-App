import React from 'react';



const Table = ({
    columns,
    data,
    actions,
    onEdit,
    onDelete
}) => {
    return (

        < div>
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
                                    {column.key.startsWith('expenseType.') ? (
                                        // Special handling for 'expenseType' properties
                                        item.expenseType[column.key.split('.')[1]]
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
