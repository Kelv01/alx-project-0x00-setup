import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="p-2 flex gap-2 mt-2">
        <Button title="Small" styles={"rounded-sm"} />
        <Button title="Medium" styles={"rounded-md"} />
        <Button title="Large" styles={"rounded-lg"} />
        <Button title="Full" styles={"rounded-full"} />
      </div>
    </div>
  );
};

export default Landing;
