import { Linkedin } from '@deemlol/next-icons'
import { MailIcon } from 'lucide-react'
import { LinkedinLink } from '../external-links/linkedin-link'

export function Contact() {
  return (
    <section id="contact">
      <div className="space-y-12">
        <h2 className="text-center font-bold text-3xl md:text-4xl">
          Get In Touch
        </h2>

        <div className="space-y-8">
          <h3 className="font-semibold text-2xl">{"Let's work together"}</h3>
          <p>
            {"I'm"} always interested in new opportunities and exciting
            projects. Whether you have a question or just want to say hi, feel
            free to reach out!
          </p>

          <a
            className="flex w-fit items-center gap-4"
            href="mailto:heinonenjaro@proton.me"
          >
            <MailIcon className="h-6 w-6" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">heinonenjaro@proton.me</p>
            </div>
          </a>

          <LinkedinLink className="flex w-max items-center gap-4">
            <Linkedin className="h-6 w-6" />
            <div>
              <p className="font-medium">LinkedIn</p>
              <p className="text-muted-foreground">Jaro Heinonen</p>
            </div>
          </LinkedinLink>
        </div>
      </div>
    </section>
  )
}
