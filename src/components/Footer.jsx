

const Footer = () => {
  return (
    <div className="max-w-6xl py-10 mx-auto">
<div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-center">
{/* menu and logo container */}
<div className="flex flex-col items-center space-y-8 ms:items-start md:space-y-4">
<div className="h-8">
<img src="/logo.png" alt="logo" className="w-44 md:ml-3 rounded-full"/>
</div>
<div className="flex flex-col items-center h-10 mx-2 space-y-4 font-bold text-white md:flex-row md:space-y-0 md:ml-3">
<a href="#">About</a>
<a href="#">contact</a>
</div>
</div>
</div>
    </div>
  )
}

export default Footer