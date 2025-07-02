import ReactFlagsSelect from "react-flags-select";

export default function Text(props) {
  const { selected, setSelected, name } = props;

  return (
    <div>
      <ReactFlagsSelect
        width="100px"
        placeholder="Enter City"
        selected={selected}
        selectButtonClassName="!border-0 !border-transparent"
        onSelect={(code) =>
          setSelected({ target: { value: code, name: name } })
        }
        searchable
      />
    </div>
  );
}
