import { useState } from 'react';
const Initial={
  email:"",
  name:"",
  phone:"",
}

const useForm = () => {

  const [values, setValues] = useState(Initial);

  const resetForm =() =>{
    setValues(Initial)
  }

  const handleChange = (event) => {
    const {name , value} = event.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  return {
    handleChange,
    values,
    resetForm
  }
};

export default useForm;