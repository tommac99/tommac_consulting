import { FC } from "react";
import { Text } from "../../index";
import { useForm } from "react-hook-form";

import { StudioItem } from "./StudioItem";
import cave from "../../../assets/images/cave.jpg";

import { Container, Form } from "./styles";

type FormData = {
  username: string;
  email: string;
  emailRequired: string;
  message: string;
};

export const ContactSection: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <Container>
      <img src={cave} alt={cave} width="100%" />
      <Form>
        <Text variant="h1" align="center" mb={20}>
          Get In Touch
        </Text>
        <div className="line" />
        <form
          className="form"
          id="contact-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="input"
            type="text"
            placeholder="Name"
            {...register("username")}
          />
          {errors.emailRequired && <span>This field is required</span>}
          <br />
          <input
            className="input"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <br />
          <textarea
            className="input"
            placeholder="Message"
            {...register("message")}
          />
          <br />
          <input className="submit" type="submit" />
        </form>
      </Form>
    </Container>
  );
};
