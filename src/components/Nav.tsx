export default function Nav() {
  return (
    <div className="flex justify-between items-center sticky top-0 left-0 right-0 p-5 bg-white z-50">
      <div className="[font-family:'cookie'] leading-7 text-4xl -rotate-12">
        Mo
        <br />
        Khattab
      </div>
      <div>
        <a href="#education"> Education</a>
        <a href="#about"> About</a>
        <a href="#contact"> Contact</a>
      </div>
    </div>
  );
}
