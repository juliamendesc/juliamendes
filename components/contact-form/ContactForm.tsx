import { FC, useEffect, useState } from 'react';
import styles from './ContactForm.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Tabs from '@radix-ui/react-tabs';

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
    <>
      <section className={styles.contactForm} id="contact">
        <h1>Get in touch</h1>
      </section>
      <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
        <Tabs.List className={styles.TabsList} aria-label="Manage contact form">
          <Tabs.Content value="tab1">
            <form onSubmit={(data) => void handleSubmit(onSubmit)(data)}>
              <fieldset className={styles.Fieldset}>
                <label htmlFor="name" className={styles.Label}>
                  Your name
                </label>
                <input
                  className={styles.Input}
                  {...register('name', { required: true, minLength: 3 })}
                />
                {errors.name && (
                  <p className={styles.errorMessage}>
                    {`I wouldn't like to miss your name. Please don't forget to include
            it 🥺.`}
                  </p>
                )}
              </fieldset>
              <fieldset className={styles.Fieldset}>
                <label htmlFor="email" className={styles.Label}>
                  Your Email
                </label>
                <input
                  className={styles.Input}
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
              <fieldset className={styles.Fieldset}>
                <label htmlFor="subject" className={styles.Label}>
                  Subject
                </label>
                <input
                  className={styles.Input}
                  {...register('subject', {
                    required: true,
                    minLength: 3,
                    maxLength: 50,
                  })}
                />
                {errors.subject && (
                  <p className={styles.errorMessage}>
                    Please type a subject 📝.
                  </p>
                )}
              </fieldset>
              <fieldset className={styles.Fieldset}>
                <label htmlFor="message" className={styles.Label}>
                  Please type your message
                </label>
                <textarea
                  className={styles.Input}
                  {...register('message', {
                    required: true,
                    minLength: 10,
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
                <button type="submit" className={styles.Button}>
                  Submit
                </button>
              </div>
            </form>
          </Tabs.Content>
        </Tabs.List>
      </Tabs.Root>
    </>
  );
};

export default ContactForm;
