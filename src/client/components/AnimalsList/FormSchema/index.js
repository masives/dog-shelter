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
      },

      {
        label: 'Wszystkie',
        value: ''
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
      },
      {
        label: 'Wszystkie',
        value: ''
      }
    ]
  },
];

export default FORM_SCHEMA;
