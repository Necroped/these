import { useAuthentication } from '../context/authentication_context'
import { useState } from 'react'
import Guest from '../../app/models/guest'

const ProfileForm = () => {
  const { user } = useAuthentication()
  const [currentUser, setCurrentUser] = useState(user)
  const [isEdited, setIsEdited] = useState(false)

  const edit = async () => {
    const response = await fetch('/edit', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(currentUser),
    })
    await response.json()
    setIsEdited(true)
  }

  return (
    <>
      {isEdited && (
        <div>Thanks for your subscription, you still are able to change what you want</div>
      )}
      <div>
        <input
          type="text"
          onChange={(e) => setCurrentUser((s: Guest) => ({ ...s, fullName: e.target.value }))}
          value={currentUser.fullName || ''}
        />
        <input
          type="email"
          onChange={(e) => setCurrentUser((s: Guest) => ({ ...s, email: e.target.value }))}
          value={currentUser.email}
        />
        <input
          type="checkbox"
          onChange={(e) => setCurrentUser((s: Guest) => ({ ...s, isComing: e.target.checked }))}
          checked={currentUser.isComing}
        />
        <input
          type="checkbox"
          onChange={(e) =>
            setCurrentUser((s: Guest) => ({ ...s, isAccompagnated: e.target.checked }))
          }
          checked={currentUser.isAccompagnated}
        />
        <textarea
          onChange={(e) => setCurrentUser((s: Guest) => ({ ...s, allergies: e.target.value }))}
          value={currentUser.allergies || ''}
        />
        <button type="button" onClick={() => edit()}>
          Editer
        </button>
      </div>
    </>
  )
}

export default ProfileForm
