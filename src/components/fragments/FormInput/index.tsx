import React from "react";

interface FormInputProps {
  data: any;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default class FormInput extends React.Component<FormInputProps> {
  render() {
    const { data, name, onChange } = this.props;
    return (
      <>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={name}>{name}</label>
          <select id={name} name={name} onChange={onChange}>
            <option value="" className='capitalize'>Pilih {name}</option>
            {data.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  }
}


