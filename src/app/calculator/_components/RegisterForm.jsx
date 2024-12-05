"use client";

import { useContext, useRef } from "react";
import { useFormStatus } from "react-dom";
import { ParametersProvider } from "../ParametersContext";
import { z } from "zod";
import { registerUser } from "../actions/register";
import { App, Button, Input } from "antd";
import { Underlined } from "./Underlined";

const schema = z.object({
  name: z
    .string()
    .min(3, "Name is required")
    .regex(/^[a-zA-Z\s]+$/, "Invalid name"),
  email: z.string().email("Invalid email address"),
  phone_number: z
    .string()
    .regex(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      "Invalid phone number"
    ),
    company_name: z.string().min(3, "Company name is required"),
});

export const RegisterForm = () => {
  const parameters = useContext(ParametersProvider);
  const { message } = App.useApp();
  const { pending } = useFormStatus();
  const formRef = useRef(null);

  const mixerParameters = parameters
    .filter((p) => p.for === "mixer")
    .reduce((acc, p) => {
      acc[p.variable_name] = Number(p.value);
      return acc;
    }, {});
  const cfParameters = parameters
    .filter((p) => p.for === "cf")
    .reduce((acc, p) => {
      acc[p.variable_name] = Number(p.value);
      return acc;
    }, {});
  const machineParameters = parameters
    .filter((p) => p.for === "machine")
    .reduce((acc, p) => {
      acc[p.variable_name] = Number(p.value);
      return acc;
    }, {});

  const clientAction = async (formData) => {
    const userInfo = {
      name: formData.get("nomo"),
      email: formData.get("mailo"),
      company_name: formData.get("compano"),
      phone_number: formData.get("phono"),
    };

    const result = schema.safeParse(userInfo);
    if (!result.success) {
      const errors = result.error.errors
        .map((e) => e.message + ` (${e.code.replace("_", " ")})`)
        .join(", ");
      message.error(`Registration failed: ${errors}`);

      return;
    }

    const res = await registerUser({
      ...result.data,
      mixer: mixerParameters,
      cutting_fluid: cfParameters,
      machine: machineParameters,
    });


    if (res >= 200 && res <= 299) {
      message.success("Registration successful!");

      formRef?.current.reset();
    } else {
      message.error(`Error occured: ${res}`);
    }

    //error
  };

  return (
    <form
      ref={formRef}
      action={clientAction}
      className="flex items-center flex-col gap-6 bg-demo-gradient shadow-lg p-4 rounded-md my-6"
    >
      <p className="text-center text-2xl">
        Want to use your model again without filling in all the data?
      </p>
      <p className="text-md">
        <b>Sure</b>, let's create your <Underlined>free account</Underlined> and
        you will have access to it anytime. Free account is{" "}
        <Underlined>fully functional</Underlined>, but limited to one machine.
        Need to change machine configuration? Get in touch with us and we will
        adjust it. Need to add more machines? Upgrade to paid plan!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-8 [&>div]:rounded [&>div]:px-2 [&>div]:py-[0.5rem] [&>div]:text-lg [&>div]:w-full [&>div>label]:text-sm [&>div>label]:ml-4">
        <div>
          <label htmlFor="nomo">Name</label>
          <Input
            type="text"
            name="nomo"
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="mailo">Email</label>
          <Input
            type="email"
            name="mailo"
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="compano">Company Name</label>
          <Input
            type="text"
            name="compano"
            required
            placeholder="Enter your company name"
          />
        </div>
        <div>
          <label htmlFor="phono">Phone number</label>
          <Input
            type="tel"
            inputMode="tel"
            name="phono"
            required
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      <Button
        type="primary"
        disabled={pending}
        htmlType="submit"
        className="w-2/3"
        size="large"
      >
        Submit
      </Button>
    </form>
  );
};
