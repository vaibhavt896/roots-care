export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
      <div className="container max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-playfair text-white mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">
          Last Updated: January 2026
        </p>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light text-lg">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Agreement to Terms
            </h2>
            <p>
              By accessing our website and using our services, you agree to be
              bound by these Terms of Service. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Description of Service
            </h2>
            <p>
              Roots & Care provides care management and coordination services for
              elderly individuals in Kanpur. We act as a local point of contact
              to facilitate medical visits, household maintenance, and companionship.
              We are not a hospital or a replacement for emergency medical services
              (ambulance/police), though we assist in coordinating them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. User Responsibilities
            </h2>
            <p>
              You agree to provide accurate and complete information about your
              parents' health and living situation. You are responsible for ensuring
              that we have up-to-date emergency contact details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Service Limitations
            </h2>
            <p>
              While we strive to provide reliable support, our services are subject
              to local conditions, availability of third-party vendors (doctors,
              plumbers, etc.), and unforeseen circumstances. We do not guarantee specific medical outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Cancellation and Refunds
            </h2>
            <p>
              You may cancel our service at any time. Our plans are flexible and do
              not require long-term contracts. Refund policies for partial months
              will be determined on a case-by-case basis as per our service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Roots & Care shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              7. Contact Information
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at:{" "}
              <a
                href="mailto:rootsandcare@gmail.com"
                className="text-[var(--gold-rich)] hover:underline"
              >
                rootsandcare@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
