import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import SectionHeader from "./section-header"

export default function Projects() {
  const projects = [
    {
      title: "Smart City Traffic Optimization System",
      period: "April 2025 – Present",
      description: [
        "Built an AI-based system to optimize traffic lights using real-time video and vehicle detection.",
        "Applied computer vision and deep learning to dynamically adjust signals based on traffic flow patterns.",
        "Created interactive tools for visualizing and analyzing urban traffic congestion data.",
      ],
      link: "#projects",
      tags: ["AI", "Computer Vision", "Deep Learning", "Traffic Analysis"],
    },
    {
      title: "Sedentary Lifestyle Risk Prediction",
      period: "January 2025 – March 2025",
      description: [
        "Built a scalable PySpark pipeline processing 500K+ daily wearable sensor data points for health risk assessment.",
        "Developed and evaluated ML models (Logistic Regression, Random Forest, GBT) with up to 84% accuracy.",
        "Implemented UDF-driven risk scoring and categorization, enhancing interpretability of model predictions.",
      ],
      link: "#projects",
      tags: ["PySpark", "Machine Learning", "Health Analytics", "Big Data"],
    },
    {
      title: "Cloud-Based ETL Pipeline with AWS and Flask",
      period: "January 2025 – March 2025",
      description: [
        "Built a Flask app storing student data in DynamoDB with real-time ingestion via AWS Lambda.",
        "Processed data using AWS Glue and stored transformed output as Parquet in S3 warehouse.",
        "Enabled daily ETL automation and analytics via Athena through Glue Job and Crawler scheduling.",
      ],
      link: "#projects",
      tags: ["AWS", "Flask", "ETL", "DynamoDB", "S3", "Glue"],
    },
    {
      title: "Travel Ticket Booking System",
      period: "October 2024 – December 2024",
      description: [
        "Built a travel ticket booking web app using the MERN stack.",
        "Implemented JWT-based authentication for secure login and account management.",
        "Designed a responsive UI with React and Tailwind CSS, enhancing user experience.",
      ],
      link: "#projects",
      tags: ["MERN", "React", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects">
      <SectionHeader title="Projects" subtitle="My technical work" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center justify-between">
                {project.title}
                <a
                  href={project.link}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </CardTitle>
              <p className="text-sm text-gray-600">{project.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-blue-50">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
