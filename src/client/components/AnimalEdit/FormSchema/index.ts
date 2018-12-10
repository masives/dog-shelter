const FORM_SCHEMA = [
  {
    fieldName: 'name',
    label: 'Imie',
    type: 'Input',
  },
  {
    fieldName: 'age',
    label: 'Wiek',
    type: 'Number',
  },
  {
    fieldName: 'race',
    label: 'Rasa',
    options: [
      {
        label: 'Pies',
        value: 'dog',
      },
      {
        label: 'Kot',
        value: 'cat',
      },
    ],
    type: 'RadioGroup',
  },
  {
    fieldName: 'livingPlace',
    label: 'Preferowane miejsce zamieszkania',
    options: [
      {
        label: 'Dom',
        value: 'house',
      },
      {
        label: 'Mieszkanie',
        value: 'apartment',
      },
    ],
    type: 'RadioGroup',
  },
  {
    fieldName: 'status',
    label: 'Status',
    options: [
      {
        label: 'Do wzięcia',
        value: 'forGrabs',
      },
      {
        label: 'Zabrany',
        value: 'taken',
      },
    ],
    type: 'RadioGroup',
  },
  {
    fieldName: 'photo',
    label: 'Zdjęcie',
    type: 'File',
  },
  {
    fieldName: 'description',
    label: 'Opis',
    type: 'Textarea',
  },
];

export default FORM_SCHEMA;
