export default [{
    key: 1,
    header: '容器',
    children: [
      {
        type: 'grid',
        title: '栅格',
        icon: 'icon-appstore-outlined1',
        options: {
          hidden: false,
          colHeight: 50,
        },
        defaultChildrenCount: 2,
        defaultChildrenObject: {
          type: 'col',
          options: {
            span: 12,
            offset: 0,
            push: 0,
            pull: 0,
          }
        },
        children:[],
      },
      {
        type: 'card',
        title: '卡片',
        icon: 'icon-icon_creditcard_outlined',
        options: {
          title: 'card',
          hidden: false,
          showFold: true,
          folded: false,
        },
        children: [],
      },
      {
        type: 'tabs',
        title: '标签页',
        icon: 'icon-biaoqianye',
        defaultChildrenCount: 2,
        defaultChildrenObject: {
          type: 'tabPane',
          options: {
            title:''
          }
        },
        options: {
          hidden: false,
          activeKey: '',
        },
        children: [],
      },
    ]
  },
  {
    key: 2,
    header: '基础组件',
    children: [
      {
        type: 'input',
        icon: 'icon-input',
        title: '单行输入',
        options: {
          label: 'input',
          labelSpan: 2,
          wrapperSpan: 22,
          type: 'text',
          labelAlign: 'right',
          placeholder: '',
          defaultValue: '',
          required: false,
          requiredHint: '',
          validation: '', // 字段校验类型
          validationHint: '',
          allowClear: false,
          disabled: false,
          onChange: null,
          onInput: null,
        },
      },
      {
        type: 'textarea',
        icon: 'icon-textarea',
        title: '多行输入',
        options: {
          label: 'textarea',
          labelSpan: 2,
          wrapperSpan: 22,
          labelAlign: 'right',
          placeholder: '',
          rows: 3,
          defaultValue: '',
          required: false,
          requiredHint: '',
          validation: '', // 字段校验类型
          validationHint: '',
          allowClear: false,
          disabled: false,
          onChange: null,
          onInput: null,
        },
      },
      {
        type: 'radio',
        icon: 'icon-radiobox',
        title: '单选项',
        options: {
          label: 'radio',
          labelSpan: 2,
          wrapperSpan: 22,
          defaultValue: '',
          labelAlign: 'right',
          disabled: false,
          size: 'default',
          optionType: 'default',
          buttonStyle: 'solid',
          optionItems: [
            {label: 'value1', value: 1},
            {label: 'value2', value: 2},
            {label: 'value3', value: 3},
          ],
          onChange: null,
        },
      },
      {
        type: 'checkbox',
        icon: 'icon-checkbox-checked',
        title: '多选项',
        options: {
          label: 'checkbox',
          labelSpan: 2,
          wrapperSpan: 22,
          defaultValue: [],
          labelAlign: 'right',
          disabled: false,
          size: 'default',
          optionType: 'default',
          buttonStyle: 'solid',
          optionItems: [
            {label: 'value1', value: 1},
            {label: 'value2', value: 2},
            {label: 'value3', value: 3},
          ],
          onChange: null,
        },
      },
      {
        type: 'select',
        icon: 'icon-select-field',
        title: '选择器',
        options: {
          label: 'select',
          labelSpan: 2,
          wrapperSpan: 22,
          defaultValue: '',
          labelAlign: 'right',
          disabled: false,
          size: 'default',
          optionType: 'default',
          buttonStyle: 'solid',
          allowClear: false,
          showSearch: true,
          multiple: false,
          optionItems: [
            {label: 'value1', value: 1},
            {label: 'value2', value: 2},
            {label: 'value3', value: 3},
          ],
          onChange: null,
        },
      },
    ]
  },
]