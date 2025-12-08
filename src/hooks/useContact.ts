import { useState } from 'react';
import { contactFormSchema } from '~schema/contactFormSchema';

type FormField = 'name' | 'email' | 'subject' | 'content';

function useContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });

  const [errors, setErrors] = useState<Record<FormField, string>>({
    name: '',
    email: '',
    subject: '',
    content: '',
  });

  const validateField = (name: FormField, value: string) => {
    try {
      const fieldSchema = contactFormSchema.pick({ [name]: true } as Record<
        FormField,
        true
      >);
      fieldSchema.parse({ [name]: value });
      setErrors((prev) => ({ ...prev, [name]: '' }));
      return true;
    } catch (e: unknown) {
      if (e && typeof e === 'object' && 'issues' in e) {
        const zodError = e as { issues: Array<{ message: string }> };
        const error = zodError.issues[0]?.message || 'Invalid value';
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name as FormField, value);
  };

  const handleSubmit = (_event: React.FormEvent<HTMLFormElement>) => {
    const isFormValid = Object.entries(formData).every(([field, value]) =>
      validateField(field as FormField, value),
    );

    if (isFormValid) {
      return true;
    }

    return false;
  };

  return {
    formData,
    errors,
    handleSubmit,
    handleInputChange,
  };
}

export default useContact;
