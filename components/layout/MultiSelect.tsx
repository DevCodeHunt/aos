import React from "react";
import Select, { ActionMeta, MultiValue } from "react-select";

interface MultiSelectProps<T extends React.ReactNode> {
  options: { label: string; value: T; id?: T }[];
  value: MultiValue<{ label: string; value: T; id?: T }> | null;
  onChange: (
    newValue: MultiValue<{ label: string; value: T }> | null,
    actionMeta: ActionMeta<{ label: string; value: T }>
  ) => void;
  width?: string;
  error?: string;
  placeholder?: string;
}
const MultiSelect = <T extends React.ReactNode>({
  options,
  placeholder,
  value,
  onChange,
  error,
}: MultiSelectProps<T>) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "1px solid #99999970",
      background: "transparent",
      borderRadius: "6px",
      padding: "1px",
      outline: "none !important",
      boxShadow: "none",
      "&:focus": {
        outline: "none !important",
      },
    }),
    option: (provided: any) => ({
      ...provided,
      outline: "none !important",
      background: "transparent",
      color: "#000000",
    }),
    multiValue: (provided: any) => ({
      ...provided,
      outline: "none !important",
    }),
  };

  return (
    <div>
     
      <Select
        styles={customStyles}
        isMulti
        options={options}
        className="basic-multi-select outline-0"
        classNamePrefix="select"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default MultiSelect;
