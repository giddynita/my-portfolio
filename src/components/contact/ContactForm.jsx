import FormInput from '../form/FormInput'
import GradientButton from '../global/GradientButton'

function ContactForm() {
  return (
    <form
      name="portfolio-contact"
      method="post"
      className=" rounded-md space-y-8 p-6 hover-glow-primary"
    >
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <h3 className="text-2xl md:text-3xl font-bold">Send a Message</h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <FormInput
            name="email"
            type="email"
            id="email"
            placeholder="Your Email"
          />
        </div>
        <FormInput
          type="text"
          name="subject"
          id="subject"
          placeholder="Subject"
        />
        <textarea
          className="w-full p-3  border focus:border-primary focus:border-2 focus:outline-none placeholder:text-muted-foreground rounded-lg "
          placeholder="Message"
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
        />
      </div>

      <GradientButton text="Send Message" type="submit" />
    </form>
  )
}
export default ContactForm
