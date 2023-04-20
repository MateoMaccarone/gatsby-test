import React, { useState } from "react";
import TextInput from "./UiKit/TextInput/TextInput";
import TextArea from "./UiKit/TextArea/TextArea";
import styled from "styled-components";
import axios from "axios";
import PrimaryButton from "./UiKit/PrimaryButton/PrimaryButton";
import { HidableComponent } from "./HidableComponent";
import SecondaryButton from "./UiKit/SecondaryButton/SecondaryButton";

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 65%;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const StyledSecondaryButton = styled(SecondaryButton)`
  width: 100%;
`;

interface ContactFormProps {
  onSend?: (values: ContactFormValues) => void;
  loading?: boolean;
  successMessage?: React.ReactNode;
  mode: "home" | "contact";
}

interface ContactFormValues {
  name: string;
  email: string;
  company: string;
  role: string;
  budget: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = (props) => {
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    role: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});

  const send = async () => {
    try {
      const errors: Partial<ContactFormValues> = {};
      setLoading(true);
      if (values.name === "") {
        errors.name = "Name cannot be empty";
      }
      if (values.email === "") {
        errors.email = "Email cannot be empty";
      }
      if (
        !values.email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        errors.email = "Email field must be a valid email";
      }
      if (values.company === "") {
        errors.company = "Company cannot be empty";
      }
      if (values.role === "") {
        errors.role = "Role cannot be empty";
      }
      if (values.budget === "") {
        errors.budget = "Budget cannot be empty";
      }
      if (values.message === "") {
        errors.message = "Message cannot be empty";
      }

      setErrors(errors);
      console.log(errors);
      if (Object.keys(errors).length > 0) {
        return;
      }

      const response = await axios.post(
        "https://4yxermp725.execute-api.us-west-2.amazonaws.com/default/braintly-site-email-sender",
        {
          body: values,
        }
      );

      props.onSend?.(values);
      setValues({
        name: "",
        email: "",
        company: "",
        role: "",
        budget: "",
        message: "",
      });
    } catch (e) {
      console.error(e);
      alert(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TextInput
        label="Name"
        key={`input-name`}
        placeholder="Your Name"
        error={errors.name}
        value={values.name}
        onChange={(e) => setValues({ ...values, name: e.target.value })}
      />
      <TextInput
        label="Email"
        key={`input-email`}
        placeholder="Email Address"
        error={errors.email}
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <TextInput
        label="Company"
        key={`input-company`}
        placeholder="Name of the Company"
        error={errors.company}
        value={values.company}
        onChange={(e) => setValues({ ...values, company: e.target.value })}
      />
      <TextInput
        label="Role"
        key={`input-role`}
        placeholder="Your Role in the Company"
        error={errors.role}
        value={values.role}
        onChange={(e) => setValues({ ...values, role: e.target.value })}
      />
      <TextInput
        label="Budget"
        key={`input-budget`}
        placeholder="Estimated Budget for your Project"
        error={errors.budget}
        value={values.budget}
        onChange={(e) => setValues({ ...values, budget: e.target.value })}
      />
      <TextArea
        label="Message"
        key={`input-message`}
        placeholder="Say Hello"
        error={errors.message}
        value={values.message}
        onChange={(e) => setValues({ ...values, message: e.target.value })}
      />
      <br />
      <HidableComponent isVisible={props.mode === "contact"}>
        <StyledPrimaryButton
          onClick={async () => {
            await send();
          }}
          loading={props.loading || loading}
        >
          Send Message
        </StyledPrimaryButton>
      </HidableComponent>
      <HidableComponent isVisible={props.mode === "home"}>
        <StyledSecondaryButton
          onClick={async () => {
            await send();
          }}
          loading={props.loading || loading}
        >
          Send Message
        </StyledSecondaryButton>
      </HidableComponent>
    </div>
  );
};

export default ContactForm;
