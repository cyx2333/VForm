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
          status: 0,
        }
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