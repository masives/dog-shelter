const FORM_SCHEMA = [
  {
    label: 'Imie',
    type: 'Input',
    fieldName: 'name'
  },
  {
    label: 'Wiek',
    type: 'Number',
    fieldName: 'age'
  },
  {
    label: 'Rasa',
    type: 'RadioGroup',
    fieldName: 'race',
    options: [
      {
        label: 'Pies',
        value: 'dog'
      },
      {
        label: 'Kot',
        value: 'cat'
      }
    ]
  },
  {
    label: 'Preferowane miejsce zamieszkania',
    type: 'RadioGroup',
    fieldName: 'livingPlace',
    options: [
      {
        label: 'Dom',
        value: 'house'
      },
      {
        label: 'Mieszkanie',
        value: 'apartment'
      }
    ]
  },
  {
    label: 'Status',
    type: 'RadioGroup',
    fieldName: 'status',
    options: [
      {
        label: 'Do wzięcia',
        value: 'forGrabs'
      },
      {
        label: 'Zabrany',
        value: 'taken'
      }
    ]
  },
  {
    label: 'Opis',
    type: 'Textarea',
    fieldName: 'description'
  }
];

export default FORM_SCHEMA;
