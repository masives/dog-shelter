const FORM_SCHEMA = [
  {
    fieldName: "name",
    label: "Imie",
    type: "Input",
  },
  {
    fieldName: "age",
    label: "Wiek",
    type: "Number",
  },
  {
    fieldName: "race",
    label: "Rasa",
    options: [
      {
        label: "Pies",
        value: "dog",
      },
      {
        label: "Kot",
        value: "cat",
      },
      {
        label: "Wszystkie",
        value: "",
      },
    ],
    type: "RadioGroup",
  },
  {
    fieldName: "status",
    label: "Status",
    options: [
      {
        label: "Do wzięcia",
        value: "forGrabs",
      },
      {
        label: "Zabrany",
        value: "taken",
      },
      {
        label: "Wszystkie",
        value: "",
      },
    ],
    type: "RadioGroup",
  },
];

export default FORM_SCHEMA;
