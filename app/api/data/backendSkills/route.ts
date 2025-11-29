

export async function GET() {
    return Response.json([
    {
      name: "Node JS",
      logo: "/nodejs.svg",
      percentage: 70,
      title: "JavaScript runtime built on Chrome's V8 engine",
      theme: "text-green-500",
      border: "border-green-500",
    },
    {
      name: "Express JS",
      logo: "/Express.svg",
      percentage: 65,
      title: "Minimal and flexible Node.js web application framework",
      theme: "text-gray-300",
      border: "border-gray-300",
    },
    {
      name: "TypeScript",
      logo: "/typescript.svg",
      percentage: 40,
      title: "Typed superset of JavaScript for scalable development",
      theme: "text-blue-600",
      border: "border-blue-600",
    },
    {
      name: "Socket.io",
      logo: "/socket.svg",
      percentage: 65,
      title: "Protocol for real-time, two-way communication",
      theme: "text-purple-400",
      border: "border-purple-400",
    },
    {
      name: "JSON Web Token (JWT)",
      logo: "/jwt.svg",
      percentage: 70,
      title: "Secure token-based authentication standard",
      theme: "text-yellow-500",
      border: "border-yellow-500",
    },
    {
      name: "MongoDB",
      logo: "/mongodb.svg",
      percentage: 73,
      title: "Highly Flexible no-sql database using mongoose ODM",
      theme: "text-green-400",
      border: "border-green-400",
    },
  ])
    
}