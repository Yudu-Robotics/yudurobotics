// pages/TestimonialBanner.tsx

import renderImg from "@/imgImport";
import ImageWithText from "./testimonial-img-with-text";
import renderSvg from "@/svgImport";

export default function TestimonialBanner() {
  return (
    <div className="flex flex-col space-y-16 py-20">
      <div className="flex justify-between px-10 lg:px-40">
        <div>{renderSvg("star1")}</div>
        <div>{renderSvg("star1")}</div>
      </div>

      <div className="flex overflow-hidden relative ">
        <div className="sm:h-[165vh]  flex animate-mobile-scroll sm:animate-loop-scroll">
          <Content />
        </div>
      </div>

      <div className="flex justify-center items-center">
        {renderSvg("star1")}
      </div>
    </div>
  );
}

function Content() {
  return (
    <>
      {[...Array(1)].map((_, index) => (
        <div className="flex space-x-8 font-tthoves-medium" key={index}>
          {/* Each set of items */}
          <div className="flex flex-col space-y-8 flex-shrink-0">
            <div>
              <img src={renderImg("bannerImg1")} />
            </div>
            <div className="relative w-full">
              <ImageWithText
                imgSrc="bg1"
                text1="PeeCee TED with the Plode app simplifies teaching robotics,
                  bringing ideas to life through dynamic visual programming."
                text2="- Dr Shekhar Jain, Founder and Director"
                text3="On My Own Technology Pvt Ltd"
              />
            </div>
          </div>

          <div className="flex flex-col space-y-8 flex-shrink-0">
            <div className="relative">
              <img
                src={renderImg("bg2")}
                alt="Background"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 text-secondary-foreground text-xs lg:text-lg flex flex-col justify-between text-center py-24 px-10">
                <h2>
                  "Yudu Robotics and Roboki with the Plode app have made
                  robotics fun and easy to learn, simplifying complex concepts
                  through engaging visual programming."
                </h2>
                <p className=" text-nowrap">Magnum School Solutions</p>
                <h2>- Mr. Abhishek Reddy, Director</h2>
              </div>
            </div>
            <div className="relative">
              <img
                src={renderImg("bg3")}
                alt="Background"
                className="w-full h-full object-cover "
              />
              <div className="absolute inset-0 text-green-400 flex flex-col justify-center px-20">
                <h2 className="text-xl lg:text-6xl font-extrabold">500K+</h2>
                <h2 className="lg:text-4xl font-light text-green-300">
                  Children
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 flex-shrink-0">
            <div className="flex space-x-6">
              <div>
                <img src={renderImg("bannerImg2")} />
              </div>
              <div className="relative">
                <img
                  src={renderImg("bg4")}
                  alt="Background"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 text-secondary-foreground text-xs lg:text-lg flex flex-col  text-center py-16 px-20 space-y-2">
                  <h2>
                    "Crawl-e and Klaw-b, paired with the Plode app, have
                    transformed our classroom with hands-on, interactive
                    robotics lessons."
                  </h2>
                  <h2>Dabotics India Pvt Ltd</h2>
                  <h2>- Sachin Srivastav, Director</h2>
                </div>
              </div>
            </div>
            <div className="flex space-x-8">
              <div>
                <img src={renderImg("bannerImg3")} />
              </div>
              {/* currenlty */}
              <div className="flex flex-col space-y-6">
                <div className="flex space-x-8">
                  <div className="relative ">
                    <img
                      src={renderImg("bg5")}
                      alt="Background"
                      className=" object-cover  "
                    />
                    <div className="absolute inset-0 text-primary flex flex-col justify-center px-20">
                      <h2 className="text-xl lg:text-6xl font-extrabold">
                        1M+
                      </h2>
                      <h2 className="lg:text-4xl font-light text-primary">
                        Innovations
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={renderImg("bg6")}
                    alt="Background"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 text-secondary-foreground text-xs lg:text-lg flex flex-col space-y-4 text-center py-16 px-20">
                    <h2>
                      "Zing and the Plode app make robotics accessible to all,
                      sparking creativity and problem-solving through visual
                      programming."
                    </h2>
                    <h2>Air Stem Labs</h2>
                    <h2>- Mr Goutham Paplikar, Co-Founder</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-8 flex-shrink-0">
            <div className="-ml-96">
              <img src={renderImg("bannerImg4")} />
            </div>
          </div>

          <div className="flex flex-col space-y-8 flex-shrink-0">
            <div>
              <img src={renderImg("bannerImg5")} />
            </div>
            <div className="flex space-x-8">
              <div>
                <img src={renderImg("bannerImg6")} />
              </div>

              <div className="relative">
                <img
                  src={renderImg("bg7")}
                  alt="Background"
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 text-yellow-400 flex flex-col justify-center px-20">
                  <h2 className="text-xl lg:text-6xl font-extrabold">10+</h2>
                  <h2 className="lg:text-2xl font-light text-yellow-300">
                    Years Expertise
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
