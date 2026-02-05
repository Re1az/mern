import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  SelectValue,
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Formik } from "formik";

import * as Yup from "yup";
import { addTodo } from "./todoSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

const todoSchema = Yup.object({
  title: Yup.string().required(),
  gender: Yup.string().required(),
  country: Yup.string().required(),
  message: Yup.string()
    .min(10)
    .max(200)
    .required(`the maessage can't be empty!!`),
  age: Yup.boolean(true).required("age must be above 18!!"),
});

export default function TodoAddForm() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="pl-5">
      <Card className="w-full max-w-sm ">
        <CardHeader>
          <CardTitle>Add some Todos</CardTitle>
          <CardDescription>Enter your todo details</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{
              title: "",
              gender: "",
              country: "",
              message: "",
              age: "",
            }}
            onSubmit={(val) => {
              dispatch(addTodo({ ...val, id: nanoid() }));
              nav(-1);
              console.log(val);
            }}
            export
            validationSchema={todoSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      type="name"
                      name="title"
                      placeholder="todo title"
                      onChange={handleChange}
                    />
                    {errors.title && touched.title && (
                      <div className="text-red-500">{errors.title}</div>
                    )}
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="gender">Gender</Label>
                      <RadioGroup
                        className="w-fit "
                        name="gender"
                        onChange={handleChange}
                      >
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="male" id="male" />
                          <Label htmlFor="r1">Male</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <RadioGroupItem value="female" id="r2" />
                          <Label htmlFor="r2">Female</Label>
                        </div>
                      </RadioGroup>

                      {errors.gender && touched.gender && (
                        <div className="text-red-500">{errors.gender}</div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="country">Select Country</Label>
                      <Select
                        name="country"
                        onValueChange={(e) => setFieldValue("country", e)}
                      >
                        <SelectTrigger className="w-full max-w-48">
                          <SelectValue placeholder="Select a countrt" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="nepal">Nepal</SelectItem>
                            <SelectItem value="india">India</SelectItem>
                            <SelectItem value="china">China</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      {errors.country && touched.country && (
                        <div className="text-red-500">{errors.country}</div>
                      )}
                    </div>
                  </div>
                  <div>
                    <Textarea
                      placeholder="enter the details here"
                      name="message"
                      onChange={handleChange}
                      value={values.message}
                    ></Textarea>
                    {errors.message && touched.message && (
                      <div className="text-red-500">{errors.message}</div>
                    )}
                  </div>
                  <div className="flex flex-col space-x-2">
                    <div className="flex  space-x-2">
                      <Label htmlFor="age">Are you above 18</Label>
                      <Switch
                        id="airplane-mode"
                        name="age"
                        onCheckedChange={(e) => setFieldValue("age", e)}
                      />
                    </div>

                    <div className="flex flex-col">
                      {errors.age && touched.age && (
                        <div className="text-red-500">{errors.age}</div>
                      )}
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}
