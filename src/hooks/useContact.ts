import { useCallback, useRef, useState } from 'react';
import { contactFormSchema } from '@/schema/contactFormSchema';

type FormField = 'name' | 'email' | 'subject' | 'content';
type FormStatus = 'idle' | 'pending' | 'success' | 'error';

export function useContact() {
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
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const submittedRef = useRef(false);
  const firstInvalidRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(
    null,
  );

  const validateField = useCallback((name: FormField, value: string) => {
    try {
      const fieldSchema = contactFormSchema.pick({
        [name]: true,
      } as Record<FormField, true>);
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
  }, []);

  const validateAll = useCallback(() => {
    let allValid = true;
    let firstInvalid: HTMLInputElement | HTMLTextAreaElement | null = null;

    (Object.keys(formData) as FormField[]).forEach((field) => {
      const value = formData[field];
      const input = document.getElementById(field) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null;
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

      if (submittedRef.current || errors[name as FormField]) {
        validateField(name as FormField, value);
      }
    },
    [errors, validateField],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!validateAll()) {
        firstInvalidRef.current?.focus();
        return;
      }

      setStatus('pending');
      setErrorMessage('');

      const form = event.currentTarget;
      const action = form.action;

      try {
        const formData = new FormData(form);
        const response = await fetch(action, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', content: '' });
        } else {
          const text = await response.text();
          throw new Error(text || 'Submission failed');
        }
      } catch {
        setStatus('error');
        setErrorMessage(
          'Failed to send message. Please try again or email directly.',
        );
      }

      submittedRef.current = true;
    },
    [formData, validateAll, validateField],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      validateField(name as FormField, value);
    },
    [validateField],
  );

  const resetForm = useCallback(() => {
    setFormData({ name: '', email: '', subject: '', content: '' });
    setErrors({ name: '', email: '', subject: '', content: '' });
    setStatus('idle');
    setErrorMessage('');
    submittedRef.current = false;
  }, []);

  return {
    formData,
    errors,
    status,
    errorMessage,
    handleSubmit,
    handleInputChange,
    handleBlur,
    resetForm,
  };
}
