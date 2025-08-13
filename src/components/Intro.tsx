import profile_pic from "../assets/profile_pic.png";
import Layout from "./Layout.tsx";

export default function Intro() {
  return (
    <Layout
      title="Introduction"
      body={
        <>
          A Software Engineer in the age of frameworks and pull-stack developers
          — focused on building with purpose, not just gluing pieces together.
        </>
      }
      rightDiv={
        <div className="w-200 bg-amber-100 shadow-amber-100 shadow-md h-150 overflow-hidden rounded-lg pl-10">
          <img src={profile_pic} className="w-200" />
        </div>
      }
    />
  );
}
