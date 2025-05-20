import { Card, CardContent } from "@/components/ui/card"
import SectionHeader from "./section-header"

export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C", "JavaScript", "SQL", "Scala", "HTML", "CSS"],
    },
    {
      category: "AI & ML",
      skills: ["Machine Learning", "Deep Learning", "Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
      category: "Big Data & Databases",
      skills: ["Apache Spark", "Databricks", "MySQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Serverless", "CI/CD"],
    },
    {
      category: "Web Development",
      skills: ["React.js", "Node.js", "Django", "Flask", "Tailwind CSS"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Eclipse IDE", "Postman"],
    },
  ]

  return (
    <section id="skills">
      <SectionHeader title="Technical Skills" subtitle="Technologies I work with" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
