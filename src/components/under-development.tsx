import React from "react";
import Image from "next/image";

const getRandomMeme = () => {
  const index = Math.floor(Math.random() * 8) + 1;
  const extension = [1, 2, 3, 4].includes(index) ? "png" : "jpg";
  return `/images/maintenance-meme-${index}.${extension}`;
};

const UnderDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="relative bg-white rounded-lg p-8 max-w-lg w-full animate-[wobble_4s_ease-in-out_infinite]">
        {/* Floating bottles */}
        <div className="space-y-8 text-center">
          <div className="relative">
            <div className="relative w-[200px] h-[200px] mx-auto">
              <Image
                src={getRandomMeme()}
                alt="Maintenance meme"
                fill
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold animate-[bounce_2s_ease-in-out_infinite]">
              *อึ๊ก* 🥃
            </h1>

            <p className="text-lg font-mono rotate-1">
              นักพัฒนากำลังแฮงค์อยู่...
              <br />
              <span className="italic">{">>> import brain"}</span>
              <br />
              <span className="text-red-500">
                ModuleNotFoundError: brain.exe not found
              </span>
            </p>
          </div>

          {/* Wavy loading dots */}
          <div className="flex justify-center gap-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-black rounded-full"
                style={{
                  animation: "bounce 1s ease-in-out infinite",
                  animationDelay: `${i * 150}ms`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopmentPage;
