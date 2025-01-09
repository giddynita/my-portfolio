import Heading from './Heading'
import { contactInfo } from '../data'
import ContactDetails from './ContactDetails'
import { Form, useNavigation } from 'react-router-dom'
import FormInput from './FormInput'

const Contact = () => {
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  return (
    <section id="contact" className="pt-14 pb-14 section m-auto bg-base-100">
      <Heading sectionTitle="contact" sectionSubtitle="Get in Touch" />
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="md:w-1/2">
          {contactInfo.map((details) => {
            return <ContactDetails key={details.id} details={details} />
          })}
        </div>
        {/* <Form className="md:w-1/2" method="POST">
          <div className="flex flex-col gap-5 lg:flex-row ">
            <FormInput type="text" name="name" id="name" placeholder="Name" />
            <FormInput
              name="email"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <textarea
            className="block w-full p-3 my-5 border border-base-300 focus:border-primary focus:outline-none  "
            placeholder="Message"
            name="message"
            id="message"
            cols="30"
            rows="5"
            required
          />
          <button
            type="submit"
            className="w-full bg-primary p-3 text-white cursor-not-allowed hover:text-primary-content"
            disabled
          >
            {isSubmitting ? 'SENDING...' : ' SEND MESSAGE'}
          </button>
        </Form> */}
      </div>
    </section>
  )
}
export default Contact
