import { useAuth } from '../auth/use-auth'

const HomePage = () => {
  const { user, isAuthenticated, logout } = useAuth()
  return (
    <main className="page-wrap py-16">
      <section className="island-shell rounded-2xl p-8">
        <p className="island-kicker mb-2">Analytics Platform</p>
        <h1 className="display-title text-4xl font-semibold">
          Production scaffold ready
        </h1>
        <p className="mt-4 text-[var(--sea-ink-soft)]">
          Auth foundation and shared architecture modules are now wired.
        </p>
        {isAuthenticated ? (
          <div className="mt-6 space-y-3">
            <p className="text-sm">
              Signed in as <strong>{user?.fullName}</strong> ({user?.email})
            </p>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-[var(--line)] px-4 py-2 text-sm hover:bg-[var(--link-bg-hover)]"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="mt-6 text-sm text-[var(--sea-ink-soft)]">
            Go to <code>/auth/login</code> or <code>/auth/signup</code> to test
            auth flow.
          </p>
        )}
      </section>
    </main>
  )
}

export default HomePage
