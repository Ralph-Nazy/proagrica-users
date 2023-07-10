import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { UserFormData } from "../../types";

import { RiCloseFill } from "react-icons/ri";
import axios from "axios";


//passing the props to control open and close of the modal
interface AddUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserForm: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  //default from react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>();

  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phonePattern = /^\d{10}$/;

  //on submit we pasing the userfromdata model from types
  const onSubmit = async (data: UserFormData) => {
    setIsSending(true); 
    setError("");
    try {
      await axios.post("https://dummyjson.com/users/add", data);
      setIsSent(true);
      reset();
    } catch (error: any) {
      setError(error.message); 
    }
    setIsSending(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99]
                 bg-[#3C5564] bg-opacity-75 h-screen w-screen top-0 left-0"
        >
          <div
            className="relative min-h-[200px] flex flex-col mx-2 transform overflow-hidden rounded-[10px] px-0 lg:px-0 p-[15px] pb-0 lg:pb-0 lg:p-[30px]
                   bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[700px]"
          >
            <RiCloseFill
              onClick={onClose}
              className="ml-auto cursor-pointer absolute right-4 top-4"
            />

            <div className="bg-white  p-[30px]">
              <div className="container">
                <div className="grid grid-cols-1 mb-6">
                  <div>
                    <h1
                      className="md:text-center text-[20px]  
                                    leading-[22px] md:text-[32px] md:leading-[36px]"
                    >
                      Add User
                    </h1>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="pt-[30px] pb-[30px]">
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-6">
                            <input
                              {...register("name", {
                                required: "Name is required",
                                minLength: {
                                  value: 8,
                                  message: "Name must not be less than 8",
                                },
                              })}
                              className="input-fields px-5"
                              type="text"
                              placeholder="Name"
                            />
                            {errors.name && (
                              <p className="my-1 text-[red] font-[300] leading-[20px]">
                                {errors.name.message}
                              </p>
                            )}
                          </div>
                          <div className="mb-6">
                            {" "}
                            <input
                              {...register("phone", {
                                required: "Phone number is required",
                                minLength: {
                                  value: 10,
                                  message:
                                    "Phone number must be 10 digits long",
                                },
                                pattern: {
                                  value: phonePattern,
                                  message: "Invalid phone number",
                                },
                                maxLength: {
                                  value: 10,
                                  message:
                                    "Phone number must be 10 digits long",
                                },
                              })}
                              className="input-fields px-5"
                              type="text"
                              placeholder="Phone"
                            />
                            {errors.phone && (
                              <p className="my-1 text-[red] font-[300] leading-[20px]">
                                {errors.phone.message}
                              </p>
                            )}
                          </div>
                          <div className="mb-6">
                            <input
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: emailPattern,
                                  message: "Invalid email address",
                                },
                              })}
                              className="input-fields px-5"
                              type="email"
                              placeholder="Email"
                            />
                            {errors.email && (
                              <p className="my-1 text-[red] font-[300] leading-[20px]">
                                {errors.email.message}
                              </p>
                            )}
                          </div>
                          <div>
                            {error && (
                              <p className="my-2 text-[#dc2626] font-[300] leading-[20px]">
                                {error}
                              </p>
                            )}
                            {isSent ? (
                              <p className="my-2 px-4 bg-green-500 py-3 rounded-[5px] text-white font-[300] leading-[20px]">
                                User successfully added.
                              </p>
                            ) : (
                              <></>
                            )}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-auto modal-footer">
              <div className="container mx-auto">
                <div className="grid grid-cols-1">
                  <div className="text-center">
                    <button
                      disabled={isSending}
                      onClick={handleSubmit(onSubmit)}
                      className={`bg-[#008184] hover:bg-[#008184] text-white font-bold py-2 px-4 rounded`}
                    >
                      {isSending ? "Sending..." : "Add User"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserForm;
