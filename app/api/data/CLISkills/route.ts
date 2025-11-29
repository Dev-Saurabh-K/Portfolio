

export async function GET() {
  // console.log(process.env.DATABASE_URL);
    return Response.json([
    {
      name: "Git",
      logo: "/git.svg",
      percentage: 65,
      title: "CLI tool for version control",
      theme: "text-orange-400",
      border: "border-orange-400",
    },
    {
      name: "Linux",
      logo: "/linux.svg",
      percentage: 66,
      title: "Open-source operating system for development & servers",
      theme: "text-yellow-400",
      border: "border-yellow-400",
    },
    {
      name: "Bash",
      logo: "/bash.svg",
      percentage: 40,
      title: "Command-line shell for automation and scripting",
      theme: "text-green-300",
      border: "border-green-300",
    },
    {
      name: "Docker",
      logo: "/docker.svg",
      percentage: 32,
      title: "Containerization platform for packaging applications",
      theme: "text-blue-400",
      border: "border-blue-400",
    },
  ])
    
}