export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-[#0a0a0a]">
      <div className="container max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-playfair text-white mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-500 mb-12 text-sm uppercase tracking-widest">
          Last Updated: January 2026
        </p>

        <div className="space-y-12 text-gray-300 leading-relaxed font-light text-lg">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p>
              At Roots &amp; Care (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we value your trust. This
              Privacy Policy explains how we collect, use, and protect your
              personal information when you use our website and services. By
              engaging with us, you agree to the practices described in this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information to provide better care for your parents.
              This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, and location.
              </li>
              <li>
                <strong>Care Details:</strong> Information about your parents&apos;
                living situation, medical needs, and specific concerns.
              </li>
              <li>
                <strong>Communications:</strong> Records of your interactions
                with us via email, WhatsApp, or video calls.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use this data to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400">
              <li>Assess whether our services are the right fit for your family.</li>
              <li>Coordinate on-ground visits and medical support in Kanpur.</li>
              <li>Send you updates, reports, and emergency notifications.</li>
              <li>Improve our internal processes and service quality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              4. Data Protection
            </h2>
            <p>
              We treat your family&apos;s data with the highest confidentiality. We do
              not sell, trade, or rent your personal information to third
              parties. Access to your data is restricted to our core team and
              necessary medical partners (e.g., doctors) only when required for
              care delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal information
              we hold about you and to ask for it to be corrected or deleted.
              Please contact us if you wish to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">
              6. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:{" "}
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
