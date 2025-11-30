import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const profileCard = () => {
  const colors = {
    keyword: "text-[#569CD6]",
    string: "text-[#CE9178]",
    number: "text-[#B5CEA8]",
    function: "text-[#DCDCAA]",
    type: "text-[#4EC9B0]",
    variable: "text-[#9CDCFE]",
    comment: "text-[#6A9955]",
    builtin: "text-[#C586C0]",
    normal: "text-gray-300",
  };

  const aboutWords = [
    { key: "w1", word: "I", color: colors.normal },
    { key: "w2", word: "am", color: colors.normal },
    { key: "w3", word: "a", color: colors.normal },
    { key: "w4", word: "dedicated", color: colors.keyword },
    { key: "w5", word: "Web", color: colors.keyword },
    { key: "w6", word: "Engineer", color: colors.keyword },
    { key: "w7", word: "and", color: colors.normal },
    { key: "w8", word: "Cloud", color: colors.keyword },
    { key: "w9", word: "Computing", color: colors.keyword },
    { key: "w10", word: "enthusiast", color: colors.normal },
    { key: "w11", word: "with", color: colors.normal },
    { key: "w12", word: "a", color: colors.normal },
    { key: "w13", word: "passion", color: colors.string },
    { key: "w14", word: "for", color: colors.normal },
    { key: "w15", word: "building", color: colors.function },
    { key: "w16", word: "robust,", color: colors.normal },
    { key: "w17", word: "scalable,", color: colors.normal },
    { key: "w18", word: "and", color: colors.normal },
    { key: "w19", word: "high-performance", color: colors.normal },
    { key: "w20", word: "digital", color: colors.type },
    { key: "w21", word: "solutions.", color: colors.type },

    { key: "w22", word: "I", color: colors.normal },
    { key: "w23", word: "specialize", color: colors.function },
    { key: "w24", word: "in", color: colors.normal },
    { key: "w25", word: "crafting", color: colors.function },
    { key: "w26", word: "modern", color: colors.normal },
    { key: "w27", word: "web", color: colors.keyword },
    { key: "w28", word: "applications", color: colors.type },
    { key: "w29", word: "that", color: colors.normal },
    { key: "w30", word: "combine", color: colors.function },
    { key: "w31", word: "clean", color: colors.normal },
    { key: "w32", word: "architecture,", color: colors.normal },
    { key: "w33", word: "seamless", color: colors.normal },
    { key: "w34", word: "user", color: colors.variable },
    { key: "w35", word: "experiences,", color: colors.variable },
    { key: "w36", word: "and", color: colors.normal },
    { key: "w37", word: "production-ready", color: colors.normal },
    { key: "w38", word: "engineering", color: colors.type },
    { key: "w39", word: "practices.", color: colors.type },

    { key: "w40", word: "Driven", color: colors.string },
    { key: "w41", word: "by", color: colors.normal },
    { key: "w42", word: "curiosity", color: colors.string },
    { key: "w43", word: "and", color: colors.normal },
    { key: "w44", word: "a", color: colors.normal },
    { key: "w45", word: "commitment", color: colors.normal },
    { key: "w46", word: "to", color: colors.normal },
    { key: "w47", word: "continuous", color: colors.normal },
    { key: "w48", word: "learning,", color: colors.string },

    { key: "w49", word: "I", color: colors.normal },
    { key: "w50", word: "thrive", color: colors.function },
    { key: "w51", word: "on", color: colors.normal },
    { key: "w52", word: "solving", color: colors.function },
    { key: "w53", word: "complex", color: colors.normal },
    { key: "w54", word: "problems", color: colors.normal },
    { key: "w55", word: "and", color: colors.normal },
    { key: "w56", word: "leveraging", color: colors.function },
    { key: "w57", word: "cloud", color: colors.keyword },
    { key: "w58", word: "technologies", color: colors.type },
    { key: "w59", word: "to", color: colors.normal },
    { key: "w60", word: "help", color: colors.normal },
    { key: "w61", word: "businesses", color: colors.type },
    { key: "w62", word: "scale", color: colors.function },
    { key: "w63", word: "efficiently.", color: colors.normal },

    { key: "w64", word: "My", color: colors.normal },
    { key: "w65", word: "goal", color: colors.string },
    { key: "w66", word: "is", color: colors.normal },
    { key: "w67", word: "to", color: colors.normal },
    { key: "w68", word: "create", color: colors.function },
    { key: "w69", word: "impactful", color: colors.string },
    { key: "w70", word: "products", color: colors.type },
    { key: "w71", word: "that", color: colors.normal },
    { key: "w72", word: "are", color: colors.normal },
    { key: "w73", word: "not", color: colors.normal },
    { key: "w74", word: "only", color: colors.normal },
    { key: "w75", word: "technically", color: colors.type },
    { key: "w76", word: "sound", color: colors.type },
    { key: "w77", word: "but", color: colors.normal },
    { key: "w78", word: "also", color: colors.normal },
    { key: "w79", word: "meaningful", color: colors.string },
    { key: "w80", word: "for", color: colors.normal },
    { key: "w81", word: "users", color: colors.variable },
    { key: "w82", word: "and", color: colors.normal },
    { key: "w83", word: "organizations.", color: colors.variable },
  ];

  return (
    <Card className="flex flex-row flex-wrap lg:h-fit  lg:w-11/12 rounded-2xl">
      {/* <div className=" w-fit mx-3 bg-amber-50 flex justify-center">
        <img
          src="image.png"
          alt=""
          className="size-64 border-b-8 border-r-8 border-primary"
        />
      </div> */}
      <div className="flex flex-col flex-wrap ">
        <div className=" flex flex-row flex-wrap">
          <div className="flex bg-primary font-extrabold text-black text-6xl size-[200px] items-baseline-last justify-end">
            Hello
          </div>
          <div className="font-bold text-6xl flex justify-end items-end">
            I Am Saurabh Kumar
          </div>
        </div>
        <div className=" lg:text-2xl text-xl my-10 mx-2 font-mono ">
          "
          {aboutWords.map((word) => (
            <span key={word.key} className={`${word.color} sm:text-2xl`}>
              {word.word}{" "}
            </span>
          ))}
          "
          <div className="flex justify-center gap-5 mt-5">
            <a href="/Resume.pdf" download="/Resume.pdf">
              <Button className="rounded-3xl cursor-pointer">
                Download Resume
              </Button>
            </a>

            <Button className="rounded-3xl bg-accent-foreground">
              Contact Me
            </Button>
          </div>
          <div className=" flex justify-end mt-3">
            <Badge variant="default">Verified</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default profileCard;
