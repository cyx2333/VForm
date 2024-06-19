import {Button, Card, Col, Collapse, Divider, Form, FormItem, Grid, Input, InputNumber, Radio, RadioGroup, Row, Space, Switch, TabPane, Tabs, Tooltip} from 'ant-design-vue'

export default {
  install(Vue) {
    Vue
      .use(Button)
      .use(Collapse)
      .use(Space)
      .use(Grid)
      .use(Row)
      .use(Col)
      .use(Tooltip)
      .use(Form)
      .use(FormItem)
      .use(Switch)
      .use(Input)
      .use(InputNumber)
      .use(Divider)
      .use(Card)
      .use(Tabs)
      .use(TabPane)
      .use(RadioGroup)
      .use(Radio)
  }
}