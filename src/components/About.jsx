import React from "react";

function About() {
  const handleClick = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div className="w-screen h-screen flex bg-gray-100">
      <section className="w-1/2 h-screen flex flex-col justify-center items-center">
        <h1 className="text-5xl font-custom font-bold pb-4">About</h1>
        <p className="font-custom text-2xl text-center w-[90%] mx-auot">
          I'm Daniel, a passionate tech enthusiast with a strong interest in
          finance. As a high school student at QHSS @ York College, I specialize
          in UI/UX design and backend development, constantly exploring new
          technologies and innovative solutions. Based in New York, I strive to
          create intuitive and engaging web applications while seeking
          opportunities to grow in the tech and finance fields. My journey is
          driven by curiosity and a desire to inspire others through my work.
        </p>
        <h2 className="text-5xl font-custom font-bold pt-10 pb-5">Contact</h2>
        <div className="grid grid-flow-col gap-4 w-1/2 justify-around">
          <img
            src="/linkedin.png"
            alt="linkedin"
            className="cursor-pointer w-24"
            onClick={() =>
              handleClick("https://www.linkedin.com/in/daniel-wu-b1a64929a/")
            }
          />
          <img
            src="/instagram.png"
            alt="instagram"
            className="cursor-pointer w-24"
            onClick={() =>
              handleClick("https://www.instagram.com/danvlue.wubley/")
            }
          />
          <img
            src="/github.png"
            alt="github"
            className="cursor-pointer w-24"
            onClick={() =>
              handleClick("https://www.linkedin.com/in/daniel-wu-b1a64929a/")
            }
          />
          <img
            src="/gmail.png"
            alt="gmail"
            className="cursor-pointer w-24"
            onClick={() => handleClick("mailto:danielw72908@gmail.com")}
          />
        </div>
      </section>
      <aside className="w-1/2 flex justify-center items-center">
        <img src="/headshot.jpg" alt="" className="h-1/2" />
      </aside>
    </div>
  );
}

export default About;