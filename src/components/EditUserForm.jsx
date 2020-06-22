import React from 'react'
import { useForm } from 'react-hook-form';

const EditUserForm = (props) => {

    // console.log(props.currenUser)

    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currenUser
    });

    setValue('name', props.currenUser.name);
    setValue('username', props.currenUser.username);

    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currenUser.id;
        props.updateUser(props.currenUser.id, data);
        // Clean fields
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" ref={ register({ required: {value:true, message: 'Campo requerido!'} })} />
            <div>
            { errors?.name?.message }
            </div>
            <label>Username</label>
            <input type="text" name="username" ref={ register({ required: {value:true, message: 'Campo requerido!'} })} />
            <div>
            { errors?.username?.message }
            </div>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;
