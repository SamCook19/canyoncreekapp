import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="First Name" name="firstName" ref={register} />
      <input type="text" placeholder="Last Name" name="firstName" ref={register} />
      <input type="text" placeholder="First Name" name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="email">female</option>
        <option value="email">male</option>
        <option value="email">other</option>
      </select>
      <input type="submit" />
    </form>
  );
}