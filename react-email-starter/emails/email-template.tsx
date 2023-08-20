import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTemplateProps {
  username?: string;
  sender?: string;
  senderEmail?: string;
  message?: string;
  subject?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

const EmailTemplate = ({
  username = 'Diogo',
  sender = '',
  senderEmail = '',
  message = '',
  subject = '',
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>{username}, tem alguém interessado nos seus serviços!</Preview>
    <Body style={main}>
      <Container style={container}>
        {baseUrl !== '' && (
          <Img
            src={`${baseUrl}/static/digital-atlantico.png`}
            width="120"
            height="80"
            alt="Logo Agência Digital Atlântico"
          />
        )}

        <Text style={title}>
          Olá <strong>{username}</strong>, alguém está interessado nos seus
          serviços.
        </Text>

        <Section style={section}>
          <Text style={text}>
            Remetente: <strong>{sender}</strong>
          </Text>
          <Text style={text}>
            E-mail para contato: <strong>{senderEmail}</strong>
          </Text>
          <Text style={text}>
            Assunto: <strong>{subject}</strong>
          </Text>
        </Section>

        <Section style={section}>
          <Text style={text}>{message}</Text>
        </Section>

        <Text style={footer}>
          Não responda a este e-mail. Ele foi enviado automaticamente por meio
          do seu website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const title = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'center' as const,
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
};

const button = {
  fontSize: '14px',
  backgroundColor: '#28a745',
  color: '#fff',
  lineHeight: 1.5,
  borderRadius: '0.5em',
  padding: '0.75em 1.5em',
};

const links = {
  textAlign: 'center' as const,
};

const link = {
  color: '#0366d6',
  fontSize: '12px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};
