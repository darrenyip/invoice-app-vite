import LeftArrow from "../assets/svgs/LeftArrow.svg";

function GoBack({ onhandleBack }) {
  return (
    <div className="mb-4 flex justify-left items-center" onClick={onhandleBack}>
      <img className="mr-2" src={LeftArrow} alt="" />
      <div className="font-bold text-xs">Go back</div>
    </div>
  );
}

export default GoBack;
