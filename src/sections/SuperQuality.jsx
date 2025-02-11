import { Button } from "../components";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max:lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <br />
          <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring that you get the best quality shoes is our top priority. We
          use the best materials and the latest technology to create shoes that
          are not only stylish but also durable.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to quality is what sets us apart from the rest.
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} heigth={522} className="object-contain" />
      </div>
    </section>
  );
};

export default SuperQuality;
