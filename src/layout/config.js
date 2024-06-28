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
    ]
  },
]