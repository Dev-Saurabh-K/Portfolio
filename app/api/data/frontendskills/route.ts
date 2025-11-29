

export async function GET() {
    return Response.json([
        {
      name: "HTML",
      logo: "/html-light.svg",
      percentage: 96,
      title: "Markup language for structuring pages",
      theme: "text-orange-500",
      border: "border-orange-500",
    },
    {
      name: "CSS",
      logo: "/css-light.svg",
      percentage: 93,
      title: "Styling language for designing web pages",
      theme: "text-blue-500",
      border: "border-blue-500",
    },
    {
      name: "JavaScript",
      logo: "/javascript.svg",
      percentage: 80,
      title: "Programming language for web interactivity",
      theme: "text-yellow-400",
      border: "border-yellow-500",
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind.svg",
      percentage: 85,
      title: "Utility-first CSS framework for fast UI development",
      theme: "text-sky-400",
      border: "border-sky-500",
    },
    {
      name: "React JS",
      logo: "/reactjs.svg",
      percentage: 75,
      title: "JavaScript library for building UI components",
      theme: "text-cyan-400",
      border: "border-cyan-500",
    },
    {
      name: "NEXT JS",
      logo: "/nextjs-light.svg",
      percentage: 65,
      title: "React framework for full-stack and server-rendered apps",
      theme: "text-white-800",
      border: "border-white-500",
    },
    ])
    
}