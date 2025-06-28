
function UserForm_Form( props ){
    return(
        <form onSubmit={ props.onConfirm } >
            <input type="name" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Enviar</button>
        </form>
    )
}

export default UserForm_Form;
