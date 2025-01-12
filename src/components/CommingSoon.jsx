import React from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ComingSoon = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-10 flex items-center gap-2 text-white/80 hover:text-white"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-yellow-400" />
          <h1 className="text-6xl font-bold text-white">
            Coming <span className="text-yellow-400">Soon</span>
          </h1>
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>

        <p className="text-xl text-gray-400 max-w-md mx-auto">
          We&apos;re crafting something{" "}
          <span className="text-yellow-400">exciting</span> for you. Stay tuned
          for our launch!
        </p>

        <div className="mt-8 inline-flex px-6 py-3 bg-yellow-400/10 backdrop-blur rounded-lg border border-yellow-400/20">
          <span className="text-yellow-400 font-medium">launching in 2025</span>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
