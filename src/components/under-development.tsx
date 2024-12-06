import React from "react";
import { Bot, Coffee, Wine } from "lucide-react";

const UnderDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 overflow-hidden">
      <div className="relative bg-white rounded-lg p-8 max-w-lg w-full animate-[wobble_4s_ease-in-out_infinite]">
        {/* Floating bottles */}
        <div className="absolute -top-6 -right-6 rotate-12 animate-bounce">
          <Wine className="w-10 h-10 text-yellow-500" />
        </div>
        <div className="absolute -bottom-6 -left-6 -rotate-12 animate-bounce delay-300">
          <Wine className="w-10 h-10 text-yellow-500" />
        </div>

        <div className="space-y-8 text-center">
          <div className="relative">
            <Bot className="w-20 h-20 mx-auto animate-[spin_3s_ease-in-out_infinite]" />
            <Coffee className="absolute top-12 right-1/3 w-6 h-6 animate-bounce" />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold animate-[bounce_2s_ease-in-out_infinite]">
              *อึ๊ก* 🥃
            </h1>

            <p className="text-lg font-mono rotate-1">
              นักพัฒนากำลังแฮงค์...
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
