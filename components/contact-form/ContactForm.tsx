import { FC } from 'react';
import styles from './ContactForm.module.css';
import { useForm } from 'react-hook-form';
import * as Tabs from '@radix-ui/react-tabs';

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactForm: FC = () => {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // const onSubmit: SubmitHandler<Inputs> = (data) => {
  //   console.log('data', data);
  // };

  return (
    <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
      <Tabs.List className={styles.TabsList} aria-label="Manage contact form">
        <Tabs.Content value="tab1">
          <form /*onSubmit={handleSubmit(onSubmit)}*/>
            <fieldset className={styles.Fieldset}>
              <label htmlFor="name" className={styles.Label}>
                Your name
              </label>
              <input
                className={styles.Input}
                {...register('name', { required: true, minLength: 3 })}
              />
              {errors.name && (
                <p>
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
                    /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm,
                  /*
									The email shouldn't contain spaces into the string
									The email shouldn't contain special chars (<:, *,etc)
									The email could contain dots in the middle of mail address before the @
									The email could contain a double domain ( '.de.org' or similar rarity)
									*/
                })}
              />
              {errors.email && (
                <p>{`Please insert a valid email to ensure I'm able to reply 📨.`}</p>
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
              {errors.subject && <p>Please type a subject 📝.</p>}
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
              {errors.message && <p>Please type a nice message 🤗.</p>}
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
  );
};

export default ContactForm;
