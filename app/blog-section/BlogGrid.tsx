import BlogCard from "./BlogCard";
// generated at build-time by Contentlayer
import { allPosts } from ".contentlayer/generated";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";

const Blog = () => {
  return (
    <section className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-32">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        {" "}
        <AnimatedWords2
          title={"ENGINEERING LOGS"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
        />
        <AnimatedBody
          text="What we learn, we share — so others can skip the busywork and focus on results."
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="grid w-[90%] max-w-[1200px] grid-cols-1 place-content-center place-items-center gap-6 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:max-w-[850px] xl:max-w-[1200px]">
        {allPosts
          .filter((p: any) => !p.draft)
          .sort((a: any, b: any) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .slice(0, 6)
          .map((post: any, index: number) => {
          return (
            <BlogCard
              key={index}
              title={post.title}
              image={post.image}
              url={post.url}
              date={new Date(post.date).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
              available={true}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
