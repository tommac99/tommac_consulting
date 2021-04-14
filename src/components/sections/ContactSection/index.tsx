import { FC, useState } from "react";
import { Text } from "../../index";
import { useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { useMediaQuery } from "@react-hook/media-query";

import cave from "../../../assets/images/cave.jpg";

import { Container, Form } from "./styles";

type FormData = {
  username: string;
  email: string;
  emailRequired: string;
  message: string;
};

export const ContactSection: FC = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const matches = useMediaQuery("only screen and (max-width: 680px)");

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
  init("user_NnJCgkfx8N3TSf5NdkCeM");
  const onSubmit = (data: any) => {
    setSending(true);
    const form = document.querySelector("#contact-form") as HTMLFormElement;

    sendForm("default_service", "template_wg0ducn", "#contact-form").then(
      function (response) {
        setSending(false);
        setSent(true);
        if (form && form !== null) {
          form.reset();
        }
      },
      function (error) {
        console.log("OOPS...", error);
      }
    );
  };

  const renderSendMessage = () => {
    if (!sending || !sent) return "Send";
    if (sending) return "Sending";
    if (sent) return "Sent";
  };

  return (
    <Container>
      <img src={cave} alt={cave} width="100%" />
      <Form>
        <Text variant="h1" align="center" mb={20}>
          Get In Touch
        </Text>
        <div className="line" />
        {sent && (
          <Text variant="h3" align="center" mt={80}>
            Thanks for reaching out!
          </Text>
        )}
        {!sent && (
          <form
            style={{
              padding: matches ? "0 20px" : "",
              width: matches ? "calc(100% - 40px)" : "",
            }}
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
              {...register("email", { required: true })}
            />
            <br />
            <textarea
              className="input"
              placeholder="Message"
              {...register("message", { max: 900 })}
            />
            <br />
            <input
              className="submit"
              type="submit"
              value={renderSendMessage()}
            />
          </form>
        )}
      </Form>
    </Container>
  );
};
