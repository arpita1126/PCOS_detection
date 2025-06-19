
export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Mission</h1>
      </header>

      <section className="mb-12">
        <img
          src="https://www.medicoverhospitals.in/images/articles/supporting-womens-health-choices-pune.webp"
          alt="PCOS Awareness"
          width={800}
          height={400}
          className="rounded-lg shadow-md mb-6"
        />
        <p className="text-lg mb-4">
          We are dedicated to improving women's health through early and accurate detection of Polycystic Ovary Syndrome (PCOS). Our team of experts utilizes cutting-edge technology and comprehensive diagnostic approaches to provide reliable PCOS detection services.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What is PCOS?</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="md:w-1/2">
            <p className="text-lg">
              Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder among women of reproductive age. It is characterized by irregular menstrual cycles, excess androgen levels, and polycystic ovaries. PCOS can lead to various health issues, including infertility, obesity, type 2 diabetes, and cardiovascular problems.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://www.medicoverhospitals.in/images/articles/supporting-womens-health-choices-pune.webp"
              alt="PCOS Illustration"
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Detection Methods</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Comprehensive medical history assessment</li>
          <li>Physical examination</li>
          <li>Blood tests to check hormone levels</li>
          <li>Pelvic ultrasound to examine ovaries and detect cysts</li>
          <li>Advanced imaging techniques for detailed ovarian analysis</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p>Our team consists of experienced gynecologists, endocrinologists, and reproductive health specialists.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Advanced Technology</h3>
            <p>We use state-of-the-art diagnostic tools and imaging technology for accurate PCOS detection.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
            <p>We provide individualized treatment plans and ongoing support for women diagnosed with PCOS.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Education and Support</h3>
            <p>We offer educational resources and support groups to help women manage PCOS effectively.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Take the First Step</h2>
        <p className="text-lg mb-6">
          Don't let PCOS go undetected. Schedule your comprehensive PCOS screening today.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Book Your Appointment
        </button>
      </section>
    </div>
  )
}

