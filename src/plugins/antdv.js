import {Alert, Button, Card, Checkbox, CheckboxGroup, Col, Collapse, CollapsePanel, DatePicker, Divider, Form, FormItem, Grid, Input, InputNumber, InputPassword, Modal, Radio, RadioGroup, RangePicker, Row, Select, SelectOption, Space, Switch, TabPane, Tabs, Textarea, TimePicker, TimeRangePicker, Tooltip} from 'ant-design-vue'

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
      .use(InputPassword)
      .use(Divider)
      .use(Card)
      .use(Tabs)
      .use(TabPane)
      .use(RadioGroup)
      .use(Radio)
      .use(Select)
      .use(SelectOption)
      .use(CollapsePanel)
      .use(Modal)
      .use(Alert)
      .use(Textarea)
      .use(Checkbox)
      .use(CheckboxGroup)
      .use(TimePicker)
      .use(TimeRangePicker)
      .use(DatePicker)
      .use(RangePicker)
  }
}