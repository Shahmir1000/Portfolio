import React from "react";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

function SkillForm({ id }) {
  const schema = yup.object().shape({
    name: yup.string().trim().nullable().required("Name is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(watch("name")); // watch input value by passing the name of it

  const { ref, ...registerName } = register("name");
  const { ref, ...registerCategory } = register("category");
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
            innerRef={ref}
            {...registerName}
          />
          {errors?.name && (
            <FormFeedback> {errors?.name?.message}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for={`name${id}`}>Category</Label>
          <Input
            id={`category${id}`}
            name="category"
            placeholder="Category"
            type="text"
            innerRef={ref}
            {...registerCategory}
          />
          {errors?.name && (
            <FormFeedback> {errors?.name?.message}</FormFeedback>
          )}
        </FormGroup>
        <Button type="submit" color="primary">
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
