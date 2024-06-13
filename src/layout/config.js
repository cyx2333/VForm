export default [{
    key: 1,
    header: '容器',
    children: [
      {
        type: 'grid',
        title: '栅格',
        icon: 'TableOutlined',
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
        icon: 'CreditCardOutlined',
        options: {
          title: 'card',
          hidden: false,
          showFold: true,
          folded: false,
        },
        children: [],
      },
    ]
  },
  {
    key: 2,
    header: '基础组件',
    children: [
    ]
  },
]