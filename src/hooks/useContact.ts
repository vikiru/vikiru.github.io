import { useCallback, useRef, useState } from "react";
import { contactFormSchema } from "@/schema/contactFormSchema";

type FormField = "name" | "email" | "subject" | "content";

export function useContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const [errors, setErrors] = useState<Record<FormField, string>>({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  const validateField = useCallback((name: FormField, value: string) => {
    try {
      const fieldSchema = contactFormSchema.pick({
        [name]: true,
      } as Record<FormField, true>);
      fieldSchema.parse({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: "" }));
      return true;
    } catch (e: unknown) {
      if (e && typeof e === "object" && "issues" in e) {
        const zodError = e as { issues: Array<{ message: string }> };
        const error = zodError.issues[0]?.message || "Invalid value";
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
      return false;
    }
  }, []);

  const validateAll = useCallback(() => {
    let allValid = true;
    let firstInvalid: HTMLInputElement | HTMLTextAreaElement | null = null;

    (Object.keys(formData) as FormField[]).forEach((field) => {
      const value = formData[field];
      const input = document.getElementById(field) as HTMLInputElement | HTMLTextAreaElement | null;
      if (!validateField(field, value)) {
        allValid = false;
        if (!firstInvalid && input) {
          firstInvalid = input;
        }
      }
    });

    if (firstInvalid) {
      firstInvalidRef.current = firstInvalid;
    }

    return allValid;
  }, [formData, validateField]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));

      if (errors[name as FormField]) {
        validateField(name as FormField, value);
      }
    },
    [errors, validateField],
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      if (!validateAll()) {
        event.preventDefault();
        firstInvalidRef.current?.focus();
      }
    },
    [validateAll],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      validateField(name as FormField, value);
    },
    [validateField],
  );

  return {
    formData,
    errors,
    handleSubmit,
    handleInputChange,
    handleBlur,
  };
}
