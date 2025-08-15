import GradientButton from '../components/global/GradientButton'

const ThankYou = () => {
  return (
    <div class="container min-h-screen py-20 flex flex-col items-center justify-center gap-2 space-y-4">
      <h1 className="font-bold text-3xl">Thank You!</h1>
      <p className="text-center text-muted-foreground">
        Your submission has been received successfully. <br />
        I'll get back to you soon.
      </p>
      <a href="/" className="w-48">
        <GradientButton text="Back to Home" type="button" />
      </a>
    </div>
  )
}
export default ThankYou
