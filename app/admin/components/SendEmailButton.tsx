import {
  Box,
  Button,
  FormGroup,
  Input,
  Label,
  Link,
  RichTextEditor,
  TextArea,
} from '@adminjs/design-system'
import { useState } from 'react'

const minMessageLength = 20
const SendEmailButton = (props: any) => {
  const [recipients, setRecipients] = useState(
    props?.records.map(({ params }: any) => params?.email).sort() || []
  )
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const send = async () => {
    console.log(recipients)
    await fetch('/mail', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ recipients, subject, message }),
    })
  }

  const mailTo = `mailto:${recipients.join()}?subject=${subject}&body=${message}`
  const isValid = recipients.length > 0 && subject.length > 0 && message.length > minMessageLength

  return (
    <>
      <Box variant="card">
        <div style={{ margin: '2rem 0' }}>
          <Label htmlFor="recipients" required>
            Destinataires :
          </Label>
          <TextArea
            id="recipients"
            value={recipients}
            disabled
            style={{ width: '100%', resize: 'none' }}
          />
        </div>
        <div style={{ margin: '2rem 0' }}>
          <Label htmlFor="subject" required>
            Sujet :
          </Label>
          <Input
            id="subject"
            value={subject}
            onChange={(e: any) => setSubject(e.target.value)}
            style={{ width: '100%' }}
          />
          {subject.length === 0 && (
            <Label style={{ color: 'red' }}>Le sujet ne peut pas être vide</Label>
          )}
        </div>
        <div style={{ margin: '2rem 0' }}>
          <Label htmlFor="message" required>
            Message :
          </Label>
          <RichTextEditor value={message} onChange={setMessage} />
          {message.length < minMessageLength && (
            <Label style={{ color: 'red' }}>
              Encore {minMessageLength - message.length} caractères pour que ce message soit valide.
            </Label>
          )}
        </div>
        {isValid && (
          <div style={{ margin: '2rem 0' }}>
            <Button type="submit" variant="contained" onClick={send}>
              Envoyer
            </Button>
          </div>
        )}
      </Box>
      <br />
      <Link href={mailTo} variant="info">
        Un problème ? Tu peux essayer la version classique 😀
      </Link>
    </>
  )
}

export default SendEmailButton
