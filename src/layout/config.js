export default [{
    key: 1,
    header: '容器',
    children: [
      {
        type: 'grid',
        setType: 'grid',
        title: '栅格',
        icon: 'TableOutlined',
        options: {
          hidden: false,
          colHeight: 50,
          defaultChildrenCount: 2,
          defaultChildrenOptions: {
            span: 12,
            type: 'col',
            setType: 'grid'
          }
        },
        children:[],
      },
      {
        type: 'card',
        title: '卡片',
        icon: 'CreditCardOutlined'
      },
    ]
  },
  {
    key: 2,
    header: '容器',
    children: [{
        type: 'grid2',
        title: '栅格',
        icon: 'TableOutlined'
      },
      {
        type: 'card2',
        title: '卡片',
        icon: 'CreditCardOutlined'
      },
    ]
  },
]