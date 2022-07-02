import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import CalendarSVG from "../assets/svgs/calendar.svg";
import DatePicker from "react-datepicker";
import GoBack from "./GoBack";
import "react-datepicker/dist/react-datepicker.css";
function Edit(props) {
  const [invoice, handleUpdate, handleBack] = useOutletContext();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm(invoice);
  const onSubmit = (data) => {
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    if (typeof data.invoiceDate === "object") {
      const dateString = data.invoiceDate.toLocaleDateString("en-us", options);
      const convertedDate = {
        ...data,
        invoiceDate: dateString,
      };
      handleUpdate(convertedDate);
    } else if (!data.invoiceDate) {
      data.invoiceDate = invoice.invoiceDate;
      handleUpdate(data);
    }
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <div className="w-full" onClick={onClick} ref={ref}>
      <div className="calenderInput calendar-disable flex justify-between items-center">
        <div className="">{value}</div>
        <img src={CalendarSVG} alt="" />
      </div>
    </div>
  ));

  const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
    <>
      <label className="text-[#7E88C3] text-xs">{label}</label>
      <select
        className="select-box"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="1">Next Day</option>
        <option value="7" selected>
          Net 7 Days
        </option>
        <option value="30">Net 30 Days</option>
      </select>
    </>
  ));
  // console.log(watch("example"));

  return (
    <>
      <div className="absolute z-10 p-6 bg-[#F8F8FB] top-[72px] w-full min-h-[100vh]">
        <GoBack onhandleBack={handleBack} />
        <div className="text-[24px] font-bold text-[#0C0E16]">
          Edit <span className="text-[#888EB0]">#</span> {invoice.id}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* Bill from  */}
          <div className="flex flex-col w-full">
            <div className="text-[12px] text-[#7C5DFA] font-bold">
              Bill From
            </div>
            <div className="flex flex-col w-full mb-6">
              <div className="text-[#7E88C3] text-xs">Street Address</div>
              <input
                type="text"
                defaultValue={invoice?.address1}
                {...register("address1")}
              />
            </div>
            <div className="flex w-full mb-6 gap-[23px] justify-between items-center">
              <div className="w-[50%]">
                <div className="text-[#7E88C3] text-xs">City</div>
                <input
                  className="w-full"
                  type="text"
                  defaultValue={invoice?.address2}
                  {...register("address2")}
                />
              </div>
              <div className="w-[50%]">
                <div className="text-[#7E88C3] text-xs">Post Code</div>
                <input
                  className="w-full "
                  type="text"
                  defaultValue={invoice?.country}
                  {...register("country")}
                />
              </div>
            </div>
          </div>
          {/* bill to  */}
          <div className="flex flex-col w-full">
            <div className="text-[12px] text-[#7C5DFA] font-bold">Bill To</div>
            <div className="flex flex-col w-full mb-6">
              <div className="text-[#7E88C3] text-xs">Client's Name</div>
              <input
                type="text"
                defaultValue={invoice?.name}
                {...register("name")}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <div className="text-[#7E88C3] text-xs">Client's Email</div>
              <input
                type="text"
                defaultValue={invoice?.sentTo}
                {...register("sentTo")}
              />
            </div>
            <div className="flex flex-col w-full mb-6">
              <div className="text-[#7E88C3] text-xs">Street Address</div>
              <input
                type="text"
                defaultValue={invoice?.address1}
                {...register("address1")}
              />
            </div>
            <div className="flex w-full mb-6 gap-[23px] justify-between items-center">
              <div className="w-[50%]">
                <div className="text-[#7E88C3] text-xs">City</div>
                <input
                  className="w-full"
                  type="text"
                  defaultValue={invoice?.address2}
                  {...register("address2")}
                />
              </div>
              <div className="w-[50%]">
                <div className="text-[#7E88C3] text-xs">Post Code</div>
                <input
                  className="w-full "
                  type="text"
                  defaultValue={invoice?.country}
                  {...register("country")}
                />
              </div>
            </div>
          </div>
          {/* invoice type */}
          <div className="flex flex-col">
            {/* invoice date */}
            <div className="flex flex-col w-full mb-6">
              <div className="text-[#7E88C3] text-xs">Invoice Date</div>

              <Controller
                control={control}
                name="invoiceDate"
                render={({ field }) => (
                  <DatePicker
                    // disabled={Date.parse(invoice.invoiceDate)}
                    dateFormat="dd MMM yyyy"
                    disabledKeyboardNavigation
                    closeOnScroll={true}
                    popperPlacement="bottom-end"
                    selected={
                      field.value
                        ? field.value
                        : Date.parse(invoice.invoiceDate)
                    }
                    onChange={(date) => field.onChange(date)}
                    placeholderText="Select Date"
                    customInput={<ExampleCustomInput />}
                  />
                )}
              />
            </div>
          </div>
          {/* terms */}
          <Select label="Payment Terms" {...register("terms")} />
          {/* items */}
          {/* add new */}

          {/* sumbit button */}
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default Edit;
