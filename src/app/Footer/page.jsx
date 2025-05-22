const Footer = () => {
  return (
    <footer className="bg-[#1c232f] text-gray-300 px-6 py-10 md:py-16 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        
        {/* Logo and Social Links */}
        <div className="flex flex-col gap-6 md:w-1/4">
          <h1 className="text-white text-2xl font-semibold">halsa<span className="align-super text-xs">®</span></h1>
          <div className="flex flex-col gap-4">
            {[
              { icon: "📷", name: "Instagram" },
              { icon: "🐦", name: "Twitter" },
              { icon: "📘", name: "Facebook" },
            ].map((item, i) => (
              <a key={i} href="#" className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-500">
                  <span className="text-lg">{item.icon}</span>
                </div>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          
        </div>

        {/* Link Sections */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-3/4">
          <div>
            <h4 className="text-white font-semibold mb-4">Pages</h4>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Members</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <button class="mt-4 md:mt-2 w-fit bg-white text-black font-medium px-6 py-2 md:px-5 md:py-2 rounded-full border-2">
            More Templates
          </button>
          </div>
          

          <div>
            <h4 className="text-white font-semibold mb-4">CMS</h4>
            <ul className="space-y-2">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Blog Single</a></li>
              <li><a href="#">Jobs</a></li>
              <li><a href="#">Job Single</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Utility Pages</h4>
            <ul className="space-y-2">
              <li><a href="#">404 Error Page</a></li>
              <li><a href="#">Password Protected</a></li>
              <li><a href="#">Styleguide</a></li>
              <li><a href="#">Licensing</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
        </div>
      </div>
       <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-xs">
        © Made by <a href="#" className="underline hover:text-white">Gola Templates</a> – Powered by <a href="#" className="underline hover:text-white">Webflow</a>
      </div>
    </footer>
  );
};

export default Footer;
