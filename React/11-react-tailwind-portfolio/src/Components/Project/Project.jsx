import Techpill from "./Techpill";

const Project = ({ title, desc, techUsed }) => {
  return (
    <div className="bg-slate-100 max-w-4xl mx-auto rounded-xl shadow-lg mb-2 pb-6 px-4">
      <h1 className="font-semibold mb-2 text-xl">{title}</h1>
      <p className=" text-gray-700 mb-4">{desc}</p>
      {techUsed.map((tech) => (
        <Techpill title={tech} />
      ))}
    </div>
  );
};

export default Project;
