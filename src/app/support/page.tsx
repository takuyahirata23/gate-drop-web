export default function Support() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12 text-gray-700">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        <h1 className="text-3xl font-bold text-gray-800">Support</h1>
        <p className="mt-2 text-sm text-gray-500">Gate Drop</p>
        <section className="mt-8 space-y-6">
          <p>
            Need help with Gate Drop? You can contact us by email and we will do our best to help.
          </p>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
            <p className="mt-2">
              <a
                href="mailto:indiehackerjp@gmail.com"
                className="font-medium text-green-600 hover:text-green-700"

              >
                Email us
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Common Questions
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">
                  Where is my data stored?
                </h3>
                <p className="mt-1">
                  All the data are stored locally on your device.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Does Gate Drop require a subscription?
                </h3>
                <p className="mt-1">
                  No. Gate Drop offers a one-time purchase to unlock lifetime access. There are no subscription fees.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Can I restore my purchase?
                </h3>
                <p className="mt-1">
                  Yes. Use the Restore Purchase option inside the app to restore your lifetime access on the same App Store or Google Play account.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">
                  Can I back up my data?
                </h3>
                <p className="mt-1">
                  Gate Drop supports export and import backups so you can save your data and restore it later.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
