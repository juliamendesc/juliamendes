import { FC, useEffect, useState } from 'react';
import styles from './ContactForm.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import SectionTitle from 'components/section-title/SectionTitle';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    shouldUseNativeValidation: true,
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { name, email, subject, message } = data;

    await fetch('/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, subject, message }),
    })
      .then((res) => {
        if (res.status === 200) {
          console.log('Message sent successfully! 🎉', res);
          setIsMessageSent(true);
          return res.json();
        }
        console.log('Message not sent', res);
      })
      .catch((err) => {
        console.log('Error sending message', err);
      });
  };

  useEffect(() => {
    if (isMessageSent) {
      setIsMessageSent(false);
      reset();
    }
  }, [isMessageSent, reset]);

  return (
    <section className={styles.contactFormWrapper} id="contact-form">
      <SectionTitle title="Get in touch" />
      <p className={styles.contactFormText}>
        {`I'm always open to new opportunities and challenges. If you have any
        questions or just want to say hi, feel free to contact me.`}
      </p>
      <form
        onSubmit={(data) => void handleSubmit(onSubmit)(data)}
        className={styles.contactForm}
      >
        <fieldset className={styles.formFieldContainer}>
          <label
            htmlFor="name"
            className={styles.formFieldLabel}
            id="formFieldLabel"
          >
            <span id="formFieldSpan" className={styles.formFieldSpan}>
              Your name
            </span>
          </label>
          <input
            className={styles.formFieldInput}
            {...register('name', { required: true, minLength: 3 })}
          />
          {errors.name && (
            <p className={styles.errorMessage}>
              {`I wouldn't like to miss your name. Please don't forget to include
            it 🥺.`}
            </p>
          )}
        </fieldset>
        <fieldset className={styles.formFieldContainer}>
          <label
            htmlFor="email"
            className={styles.formFieldLabel}
            id="formFieldLabel"
          >
            <span id="formFieldSpan" className={styles.formFieldSpan}>
              Your Email
            </span>
          </label>
          <input
            className={styles.formFieldInput}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
              /*
									The email shouldn't contain spaces into the string
									The email shouldn't contain special chars (<:, *,etc)
									The email could contain dots in the middle of mail address before the @
									The email could contain a double domain ( '.de.org' or similar rarity)
									*/
            })}
          />
          {errors.email && (
            <p
              className={styles.errorMessage}
            >{`Please insert a valid email to ensure I'm able to reply 📨.`}</p>
          )}
        </fieldset>
        <fieldset className={styles.formFieldContainer}>
          <label
            htmlFor="subject"
            className={styles.formFieldLabel}
            id="formFieldLabel"
          >
            <span id="formFieldSpan" className={styles.formFieldSpan}>
              Subject
            </span>
          </label>
          <input
            className={styles.formFieldInput}
            {...register('subject', {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          {errors.subject && (
            <p className={styles.errorMessage}>Please type a subject 📝.</p>
          )}
        </fieldset>
        <fieldset className={styles.formFieldContainer}>
          <label
            htmlFor="message"
            className={styles.formFieldLabel}
            id="formFieldLabel"
          >
            <span id="formFieldSpan" className={styles.formFieldSpan}>
              Please type your message
            </span>
          </label>
          <textarea
            className={styles.formFieldTextArea}
            {...register('message', {
              required: true,
              minLength: 3,
              maxLength: 500,
            })}
          />
          {errors.message && (
            <p className={styles.errorMessage}>
              Please type a nice message 🤗.
            </p>
          )}
        </fieldset>
        <div className={styles.ButtonWrapper}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
