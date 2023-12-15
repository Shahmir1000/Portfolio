import React from "react";
import { useEffect, useState } from "react";
import {
  Form,
  Label,
  FormGroup,
  Input,
  Button,
  FormFeedback,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Container,
  CardBody,
} from "reactstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

function SkillForm({ id, categories, proficiencies, skill }) {
  const [isEdit, setIsEdit] = useState(
    skill === undefined || skill === null || id === 0
  );

  const handleIsEdit = (e) => {
    setIsEdit(!isEdit);
  };

  let defaultValues =
    skill === undefined || skill === null
      ? { name: "", category: "", proficiency: "" }
      : {
          name: skill.name,
          category: categories?.find((x) => x.id === skill.categoryId)?.name,
          proficiency: proficiencies?.find((x) => x.id === skill.proficiencyId)
            ?.name,
        };
  console.log(defaultValues);
  const schema = yup.object().shape({
    name: yup.string().trim().nullable().required("Name is required"),
    category: yup.string().trim().nullable().required("Category is required"),
    proficiency: yup
      .string()
      .trim()
      .nullable()
      .required("Proficiency is required"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const { ref: nameRef, ...registerName } = register("name");
  const { ref: categoryRef, ...registerCategory } = register("category");
  const { ref: proficiencyRef, ...registerProficiency } =
    register("proficiency");

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader hidden={isEdit}>{defaultValues.name}</CardHeader>
          <FormGroup hidden={!isEdit}>
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

          <ListGroup flush>
            <ListGroupItem hidden={isEdit}>
              {defaultValues.category}
            </ListGroupItem>
            <FormGroup hidden={!isEdit}>
              <Label for={`category${id}`}>Category</Label>
              <Input
                id={`category${id}`}
                name="category"
                placeholder="Category"
                type="select"
                {...registerCategory}
                innerRef={categoryRef}
                invalid={!!errors.category}
              >
                {categories.map((category) => (
                  <option>{category.name}</option>
                ))}
              </Input>
              {errors?.category && (
                <FormFeedback>{errors.category.message}</FormFeedback>
              )}
            </FormGroup>
            <ListGroupItem hidden={isEdit}>
              {defaultValues.proficiency}
            </ListGroupItem>
            <FormGroup hidden={!isEdit}>
              <Label for={`proficiency${id}`}>Proficiency</Label>
              <Input
                id={`proficiency${id}`}
                name="proficiency"
                placeholder="proficiency"
                type="select"
                {...registerProficiency}
                innerRef={proficiencyRef}
                invalid={!!errors.proficiency}
              >
                {proficiencies.map((proficiency) => (
                  <option>{proficiency.name}</option>
                ))}
              </Input>
              {errors?.proficiency && (
                <FormFeedback>{errors.proficiency.message}</FormFeedback>
              )}
            </FormGroup>
          </ListGroup>

          <Container>
            <Row xs="4">
              <Col>
                <Button type="submit" color="primary" hidden={!isEdit}>
                  Save
                </Button>
              </Col>
              <Col>
                <Button color="primary" onClick={handleIsEdit} hidden={isEdit}>
                  Edit
                </Button>
              </Col>
              <Col>
                <Button color="danger" hidden={!isEdit}>
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
        <DevTool control={control}></DevTool>
      </CardBody>
    </Card>
  );
}

export default SkillForm;
