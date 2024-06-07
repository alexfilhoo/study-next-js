import Select from "react-select";
import AsyncSelect from "react-select/async";

export default function ReactSelect() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "morango", label: "Morango" },
    { value: "baunilha", label: "Baunilha" },
  ];

  const handleChange = (selectedOption) => {
    console.log("Opção selecionada: ", selectedOption);
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      const filteredOptions = options.filter((option) =>
        option.label.toLowerCase().includes(inputValue.toLowerCase())
      );
      console.log("Filtrando opções: ", filteredOptions);
      callback(filteredOptions);
    }, 1000);
  };

  return (
    <>
      <div className="mb-3">
        <Select
          placeholder="Selecione uma opção"
          options={options}
          onChange={handleChange}
          isMulti
        />
      </div>
      <div>
        <AsyncSelect
          placeholder="Selecione uma opção"
          defaultOptions={options}
          loadOptions={loadOptions}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
