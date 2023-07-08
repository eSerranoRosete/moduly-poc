import { Facebook } from "@/components/social-icons/Facebook";
import { Instagram } from "@/components/social-icons/Instagram";
import { Linkedin } from "@/components/social-icons/Linkedin";
import { Whatsapp } from "@/components/social-icons/Whatsapp";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  return (
    <main className="m-auto max-w-xl min-h-screen p-4 gap-4 grid grid-cols-4 auto-rows-min">
      <div className="bg-white bg-[url(https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80)] bg-cover bg-center grid grid-rows-2 rounded-3xl relative shadow-lg aspect-square col-span-4 overflow-clip">
        <div className="w-full relative h-full text-center p-4 bg-gradient-to-t from-black to-transparent z-10 row-start-2">
          <div className="absolute bottom-5 inset-x-0">
            <h1 className="text-4xl font-bold text-white mb-2">Jane Doe</h1>
            <p className="text-white font-semibold max-w-sm m-auto">
              Moduly.io
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-3xl relative overflow-hidden shadow-lg aspect-square col-span-2">
        <img
          src="/map.png"
          className="absolute w-full h-full object-cover object-center"
        />
        <div className="z-10 bg-white absolute bottom-0 w-full p-3">
          <span className="font-semibold block leading-3">My Office</span>
          <span className="font-semibold text-sm text-zinc-500">2km away</span>
        </div>
      </div>
      <div className="grid grid-cols-2 auto-rows-min gap-3 col-span-2">
        <div className="bg-[#25D366] flex items-center justify-center rounded-2xl shadow-lg aspect-square">
          <Whatsapp className="w-2/5 text-white" />
        </div>
        <div className="bg-[#356FDF] flex items-center justify-center rounded-2xl shadow-lg aspect-square">
          <Facebook className="w-2/5 text-white" />
        </div>
        <div className="bg-[#0077B5] flex items-center justify-center rounded-2xl shadow-lg aspect-square">
          <Linkedin className="w-2/5 text-white" />
        </div>
        <div className="bg-[#E1013C] flex items-center justify-center rounded-2xl shadow-lg aspect-square">
          <Instagram className="w-2/5 text-white" />
        </div>
      </div>
    </main>
  );
}
