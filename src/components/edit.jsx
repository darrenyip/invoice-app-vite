import { useOutletContext } from "react-router-dom";

function Edit(props) {
  const [invoice, handleUpdate] = useOutletContext();
  console.log("this is edit", invoice);
  handleUpdate("hahah");
  return <div className="absolute z-10 top-[72px] bg-white w-full">hihihi</div>;
}

export default Edit;
