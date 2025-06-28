import UserForm_Form from "./UserForm_Form";


function UserForm(){

    const onConfirm = ()=> {
        alert("Datos registrados");
    }


    return(
        <div>
            <h2>Ingresa tus datos de usuario</h2>
            <UserForm_Form onConfirm={onConfirm} />
        </div>
    )
}

export default UserForm;
