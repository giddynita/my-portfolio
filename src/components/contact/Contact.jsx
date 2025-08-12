import Heading from '../global/Heading'
import { contactInfo } from '../../data'
import ContactDetails from './ContactDetails'
import ContactForm from './ContactForm'
import Socials from '../global/Socials'

const Contact = () => {
  return (
    <section id="contact" className="pt-[80px] container">
      <Heading sectionTitle="Let's connect" />
      <div className="space-y-10">
        <ContactForm />
        <div className="space-y-4">
          <h3 className="font-bold text-2xl">Get in Touch</h3>
          <p className=" text-base sm:text-lg text-muted-foreground">
            I'm always interested in new opportunities and exciting projects.
            Whether you're looking for a developer, have a question, or just
            want to say hi, I'll try my best to get back to you!
          </p>

          {contactInfo.map((details) => {
            return <ContactDetails key={details.id} details={details} />
          })}
          <div className="space-y-4 mt-8">
            <h4 className="font-bold text-xl">Follow Me</h4>
            <Socials />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact
