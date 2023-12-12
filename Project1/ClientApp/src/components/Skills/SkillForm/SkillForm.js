import React from "react";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function SkillForm({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for={`name${id}`}>Name</Label>
          <Input
            id={`name${id}`}
            name="name"
            placeholder="Skill Name"
            type="text"
            {...register("name")}
          />
        </FormGroup>
        <Button color="primary" onSubmit={handleSubmit(onSubmit)}>
          Save
        </Button>
      </Form>
      <DevTool control={control}></DevTool>
    </div>
  );
}

export default SkillForm;

// <form onSubmit={handleSubmit(onSubmit)}>
//   {/* register your input into the hook by invoking the "register" function */}
//   <input defaultValue="test" {...register("example")} />

//   {/* include validation with required or other standard HTML validation rules */}
//   <input {...register("exampleRequired", { required: true })} />
//   {/* errors will return when field validation fails  */}
//   {errors.exampleRequired && <span>This field is required</span>}

//   <input type="submit" />
{
  /* </form> */
}
