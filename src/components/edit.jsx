import { useOutletContext } from "react-router-dom";
import { useForm } from "react-hook-form";

import GoBack from "./GoBack";

function Edit(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [invoice, handleUpdate, handleBack] = useOutletContext();
  const onSubmit = (data) => {
    console.log(data);
    handleUpdate(data);
  };
  console.log(watch("example"));
  return (
    <>
      <div className="absolute z-10 p-6 bg-[#F8F8FB] top-[72px] w-full min-h-[100vh]">
        <GoBack onhandleBack={handleBack} />
        <div className="text-[24px] font-bold text-[#0C0E16]">
          Edit <span className="text-[#888EB0]">#</span> {invoice.id}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input defaultValue="test" {...register("example")} />

          {/* include validation with required or other standard HTML validation rules */}
          <input {...register("exampleRequired", { required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Edit;
