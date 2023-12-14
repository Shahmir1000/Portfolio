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
    category: yup.string().trim().nullable().required("Category is required"),
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
  console.log(watch("name"));

  const { ref: nameRef, ...registerName } = register("name");
  const { ref: categoryRef, ...registerCategory } = register("category");

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label for={`name${id}`}>Name</Label>
          <Input
            id={`name${id}`}
            name="name"
            placeholder="Skill Name"
            type="text"
            {...registerName}
            innerRef={nameRef}
            invalid={!!errors.name}
          />
          {errors?.name && (
            <FormFeedback> {errors?.name?.message}</FormFeedback>
          )}
        </FormGroup>
        <FormGroup>
          <Label for={`category${id}`}>Category</Label>
          <Input
            id={`category${id}`}
            name="category"
            placeholder="Category"
            type="text"
            {...registerCategory}
            innerRef={categoryRef}
            invalid={!!errors.category}
          />
          {errors?.category && (
            <FormFeedback>{errors.category.message}</FormFeedback>
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
