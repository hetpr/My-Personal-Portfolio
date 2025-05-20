import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "./section-header"

export default function WorkExperience() {
  return (
    <section id="experience">
      <SectionHeader title="Work Experience" subtitle="Professional journey" />
      <Card className="border-l-4 border-l-blue-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">CSSI Internship</CardTitle>
          <p className="text-blue-700 font-medium">Peace Foundation</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">June 2023 – July 2023 | Modasa, Gujarat</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>Conducted 5+ awareness programs on the Right to Education (RTE) Act for 500+ parents and students.</li>
            <li>Assisted 50+ families with RTE admissions, ensuring a 95% success rate in application approvals.</li>
            <li>Provided technical support, resolving 90%+ of application issues within 24 hours.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
