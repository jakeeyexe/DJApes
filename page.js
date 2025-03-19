import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Ape, Gift, PartyPopper, Mic, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function DJApesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-6">
      <motion.h1 
        className="text-5xl font-bold mt-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🎧 DJ APES NFT 🎵
      </motion.h1>
      
      <p className="text-lg text-gray-400 mt-4 text-center max-w-2xl">
        DJ Apes bring music and NFTs together! Join our exclusive community and get a unique NFT that unlocks special events, rewards, and fun on ApeChain.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <Card className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col items-center">
            <Ape size={48} className="text-yellow-500" />
            <h2 className="text-2xl font-bold mt-4">Unique NFTs</h2>
            <p className="text-gray-400 text-center mt-2">
              Each DJ Ape NFT is one-of-a-kind and offers exclusive perks for holders.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col items-center">
            <Gift size={48} className="text-green-500" />
            <h2 className="text-2xl font-bold mt-4">Random Airdrops</h2>
            <p className="text-gray-400 text-center mt-2">
              Get surprise airdrops just for being part of the DJ Apes family.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col items-center">
            <PartyPopper size={48} className="text-blue-500" />
            <h2 className="text-2xl font-bold mt-4">Fun Events</h2>
            <p className="text-gray-400 text-center mt-2">
              Join virtual and real-world events with top DJs in the NFT scene.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col items-center">
            <Mic size={48} className="text-red-500" />
            <h2 className="text-2xl font-bold mt-4">Song Creation</h2>
            <p className="text-gray-400 text-center mt-2">
              Participate in collaborative song creation and exclusive music releases.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <CardContent className="flex flex-col items-center">
            <Users size={48} className="text-purple-500" />
            <h2 className="text-2xl font-bold mt-4">Alpha Call Discord</h2>
            <p className="text-gray-400 text-center mt-2">
              Get access to exclusive alpha calls and NFT insights in our Discord.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 text-lg rounded-xl shadow-md">
          Buy a DJ Ape NFT
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-xl shadow-md">
          Join Our Discord
        </Button>
      </div>
    </div>
  );
}
