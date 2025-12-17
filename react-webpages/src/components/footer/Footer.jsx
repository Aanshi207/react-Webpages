import {
  Facebook,
  Instagram,
  Linkedin,
  Sparkles,
  TwitterIcon,
  ChevronsUp,
} from "lucide-react"
import { menuItems, legalItems } from "../../data/Data"

function Footer() {
  return (
    <footer className="bg-white/10 backdrop-blur-2xl border-t border-white/20 px-6 py-10 ">
      
      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1  sm:grid-cols-4  lg:grid-cols-4 gap-50 ">

        {/* LOGO & ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl
              flex items-center justify-center shadow-xl">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">ReactPages</h1>
              <p className="text-xs text-white/60">PREMIUM SUITE</p>
            </div>
          </div>

          <p className="text-sm text-white/60 leading-relaxed">
            This is a React footer built for practice with Tailwind CSS and
            Lucide icons.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex space-x-3 pt-2">
            <SocialIcon gradient="from-purple-500 to-pink-500">
              <Instagram />
            </SocialIcon>
            <SocialIcon gradient="from-blue-500 to-cyan-500">
              <Linkedin />
            </SocialIcon>
            <SocialIcon gradient="from-white to-white">
              <TwitterIcon className="text-blue-500" />
            </SocialIcon>
            <SocialIcon gradient="from-blue-600 to-blue-800">
              <Facebook />
            </SocialIcon>
          </div>
        </div>

        {/* SITE PAGES */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Site Pages</h3>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button className="text-white/70 hover:text-white hover:underline transition">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2">
            {legalItems.map((item, index) => (
              <li key={index}>
                <button className="text-white/70 hover:text-white hover:underline transition">
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        
        {/* <div className="flex items-start">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 text-white font-semibold
            border border-white/20 px-4 py-2 rounded-xl hover:bg-white/10 transition"
          >
            <ChevronsUp />
            <span>Back to top</span>
          </button>
        </div> */}
      </div>

      
    </footer>
  )
}

export default Footer


function SocialIcon({ children, gradient }) {
  return (
    <div
      className={`w-9 h-9 bg-gradient-to-r ${gradient} rounded-xl
      flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition`}
    >
      {children}
    </div>
  )
}
