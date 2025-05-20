import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SectionHeader from "./section-header"

export default function Activities() {
  return (
    <section id="activities">
      <SectionHeader title="Extracurricular Activities" subtitle="Beyond academics" />
      <Card className="border-l-4 border-l-blue-600">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Vice President</CardTitle>
          <p className="text-blue-700 font-medium">Cafeteria Mess Committee</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">January 2024 – Present | Pandit Deendayal Energy University</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              Supervised daily operations for 5,000+ students, ensuring 95%+ satisfaction in food quality surveys.
            </li>
            <li>
              Collaborated with mess vendors and administration to address student feedback and improve meal options.
            </li>
            <li>Spearheaded 5+ new initiatives, including monthly special meal events, reducing food waste by 20%.</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
