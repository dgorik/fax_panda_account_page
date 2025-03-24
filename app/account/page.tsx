export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to FaxPanda</h1>
        <p className="text-muted-foreground mt-2">
          Select an option from the sidebar to get started.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Send Fax</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Send a fax quickly to your recent contacts.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Recent Faxes</h3>
          <p className="text-sm text-muted-foreground mt-2">
            View your recently sent and received faxes.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h3 className="text-lg font-medium">Account Balance</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Check your current balance and usage.
          </p>
        </div>
      </div>
    </div>
  );
}
