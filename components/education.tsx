import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "./section-header"

export default function Education() {
  const education = [
    {
      institution: "Pandit Deendayal Energy University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "October 2022 – June 2026",
      location: "Gandhinagar, Gujarat",
      result: "9.67 (Upto 5th Sem)",
    },
    {
      institution: "Puna International School",
      degree: "HSC",
      period: "August 2020 – July 2022",
      location: "Gandhinagar, Gujarat",
      result: "93.2%",
    },
    {
      institution: "B-KANAE CBSE School",
      degree: "SSC",
      period: "August 2018 – July 2020",
      location: "Modasa, Gujarat",
      result: "96.2%",
    },
  ]

  return (
    <section id="education">
      <SectionHeader title="Education" subtitle="My academic journey" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {education.map((item, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">{item.institution}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">{item.degree}</p>
              <p className="text-sm text-gray-600 mt-1">{item.period}</p>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="mt-2 font-medium text-blue-700">Result: {item.result}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
