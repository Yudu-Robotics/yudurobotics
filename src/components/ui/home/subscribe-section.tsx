export default function SubscribeSection() {
  return (
    <div className="bg-primary rounded-xxl text-primary-foreground px-8 py-16 flex flex-col items-center justify-center">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl mb-4 text-center font-piepie tracking-wide">
        Partner with Yudu
      </h1>

      {/* Subtitle */}
      <p className="text-base md:text-lg text-center font-thin w-[60%]">
        Join us in revolutionizing robotics. Get exclusive updates,
        collaboration opportunities, and insights straight to your inbox. Let’s
        innovate together.
      </p>

      <p className="text-base text-center py-8 font-thin lg:text-lg">
        Stay connected. Stay innovative.
      </p>

      {/* Subscription Input */}
      <div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-2xl px-4 py-2 w-full md:w-80 text-secondary-foreground focus:outline-none"
          />
          <button className="bg-primary shadow-xl border hover:border-primary-foreground text-primary-foreground px-6 py-2 rounded-full md:ml-4 w-full md:w-auto">
            Subscribe
          </button>
        </div>

        {/* Privacy Policy */}
        <p className="text-sm py-2 mt-4 lg:mt-0">
          We care about your data in our{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
