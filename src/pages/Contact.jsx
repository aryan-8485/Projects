import emailjs from "emailjs-com";
import { useRef, useState } from "react";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // 🔁 Replace this
        "YOUR_TEMPLATE_ID", // 🔁 Replace this
        form.current,
        "YOUR_USER_ID" // 🔁 Replace this (or public key)
      )
      .then(() => {
        setNotification("Message sent successfully!");
        form.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setNotification("Failed to send the message. Please try again.");
      })
      .finally(() => {
        setIsLoading(false);
        setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
      });
  };

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-6 transition-colors duration-500">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10">
          Contact me for any help
        </h2>

        {/* Notification */}
        {notification && (
          <div className="mb-4 text-center text-green-600 dark:text-green-400 font-semibold">
            {notification}
          </div>
        )}

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-md text-white transition duration-300 ${
              isLoading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
