import { useAuth } from "context/authContext";
import { closeModalForm } from "utils/modalForm";

export const ExpenseTypeDetails = ({ expl }) => {
    const [auth] = useAuth();
    return (
        <>
            <div className='overlay' onClick={closeModalForm}></div>
            <div className='details-modal-form'>
                <span onClick={closeModalForm}>&times;</span>
                <div>This is Details Page</div>
            </div>
        </>
    );
};