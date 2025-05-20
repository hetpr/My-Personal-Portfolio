import Image from "next/image"
import SectionHeader from "./section-header"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-8">
      <SectionHeader title="About Me" subtitle="Get to know me better" />
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:hidden relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-100 mb-4">
              <Image src="/images/het-profile.png" alt="Het Prajapati" fill className="object-cover" />
            </div>
            <div className="space-y-4">
              <p>
                I'm a Computer Science Engineering student at Pandit Deendayal Energy University with a passion for
                building innovative solutions using cutting-edge technologies. My interests span across AI, machine
                learning, big data, and web development.
              </p>
              <p>
                With a strong academic background and hands-on experience in various projects, I'm constantly exploring
                new technologies and methodologies to solve real-world problems. I believe in the power of technology to
                transform lives and am committed to contributing to this transformation.
              </p>
              <p>
                Beyond academics, I take on leadership roles like Vice President of the Cafeteria Mess Committee, where
                I've implemented initiatives that improved student satisfaction and reduced food waste.
              </p>
              <p>
                I'm always open to new opportunities, collaborations, and challenges that can help me grow
                professionally and make a positive impact.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
