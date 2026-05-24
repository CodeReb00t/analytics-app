import { useState, type FormEvent } from 'react'
import { useAuth } from '../use-auth'

const SignupPage = () => {
  const { signup, isAuthenticated, user, error, clearError } = useAuth()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clearError()
    await signup({ fullName, email, password })
  }

  return (
    <main className="page-wrap py-16">
      <section className="island-shell mx-auto w-full max-w-md rounded-2xl p-8">
        <p className="island-kicker mb-2">Auth</p>
        <h1 className="display-title text-3xl font-semibold">Create account</h1>
        {isAuthenticated ? (
          <p className="mt-4 text-sm">Account ready for {user?.email}.</p>
        ) : (
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <label className="block text-sm">
              <span>Full name</span>
              <input
                type="text"
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white/70 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span>Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white/70 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span>Password</span>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-1 w-full rounded-lg border border-[var(--line)] bg-white/70 px-3 py-2"
              />
            </label>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            <button
              type="submit"
              className="w-full rounded-lg border border-[var(--line)] bg-[var(--lagoon)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--lagoon-deep)]"
            >
              Create account
            </button>
          </form>
        )}
      </section>
    </main>
  )
}

export default SignupPage
