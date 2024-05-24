import {Button, Col, Collapse, Divider, Form, FormItem, Grid, Input, InputNumber, Row, Space, Switch, Tooltip} from 'ant-design-vue'

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
  }
}