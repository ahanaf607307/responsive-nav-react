import { PiCheckCircleFill } from "react-icons/pi";

function Feature({ gymFeature }) {
  return (
    <div>
      <ul>
        <li className="border border-teal-100  px-2 py-2 rounded-xl flex gap-x-2 items-center"><PiCheckCircleFill /> {gymFeature}</li>
      </ul>
    </div>
  );
}

export default Feature;
