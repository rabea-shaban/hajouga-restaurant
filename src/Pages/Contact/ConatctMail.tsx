import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setIsSubmitting(true);
    emailjs
      .send(
        "hagogah", // Service ID
        "template_6uzf477", // Template ID
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        "_P6Np4VgBBjbktkSA" // User ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // رسالة تم إرسالها بنجاح
          setIsSubmitting(false);
          reset(); // إعادة تعيين النموذج
        },
        (error) => {
          console.log(error.text);
          alert("حدث خطأ أثناء إرسال الرسالة. حاول مرة أخرى!");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="w-full container mx-auto ">
      <h5 className="text-center text-5xl font-bold mb-10 text-orange-400">
        ابقى على اتصال بنا
      </h5>
      <div className=" my-5 p-15 bg-gray-300 shadow-md rounded-md">
        {isSent ? (
          <div className="text-center text-green-600">
            <h3>تم إرسال الرسالة بنجاح!</h3>
            <p>سنتواصل معك قريبًا.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto space-y-4">
            <div className="flex items-center space-x-3">
              <FaUser className="text-gray-600" />
              <input
                {...register("name", { required: "الاسم مطلوب" })}
                id="name"
                type="text"
                placeholder="الاسم بالكامل"
                className="w-full p-2 mt-1 border rounded-md"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-600" />
              <input
                {...register("email", {
                  required: "البريد الإلكتروني مطلوب",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "البريد الإلكتروني غير صالح",
                  },
                })}
                id="email"
                type="email"
                placeholder="البريد الإلكتروني"
                className="w-full p-2 mt-1 border rounded-md"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <FaPhone className="text-gray-600" />
              <input
                {...register("phone", {
                  required: "رقم الهاتف مطلوب",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "رقم الهاتف يجب أن يتكون من 11 أرقام",
                  },
                })}
                id="phone"
                type="tel"
                placeholder="رقم الهاتف"
                className="w-full p-2 mt-1 border rounded-md"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block">
                الرسالة:
              </label>
              <textarea
                {...register("message", { required: "الرسالة مطلوبة" })}
                id="message"
                placeholder="اكتب رسالتك"
                className="w-full p-2 mt-1 border rounded-md"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 ${
                isSubmitting ? "bg-gray-500" : "bg-blue-500"
              } text-white rounded-md hover:bg-blue-600`}>
              {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUsForm;
