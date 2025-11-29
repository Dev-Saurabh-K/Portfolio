

export async function GET() {
    return Response.json([
    {
      name: "LangChain",
      logo: "/langchain.svg",
      percentage: 40,
      title: "Framework for building LLM-powered applications",
      theme: "text-green-400",
      border: "border-green-400",
    },
    {
      name: "Web Scraping",
      logo: "/scraping.svg",
      percentage: 42,
      title: "Extracting structured information from websites",
      theme: "text-yellow-400",
      border: "border-yellow-400",
    },
    {
      name: "OpenAI",
      logo: "/openai.svg",
      percentage: 50,
      title: "API for generative AI models and assistants",
      theme: "text-purple-400",
      border: "border-purple-400",
    },
    {
      name: "Gemini SDK",
      logo: "/gemini.svg",
      percentage: 50,
      title: "Google’s SDK for building AI applications with Gemini models",
      theme: "text-blue-400",
      border: "border-blue-400",
    },
  ])
    
}


