import {Button, Col, Collapse, Grid, Row, Space, Tooltip} from 'ant-design-vue'

export default {
  install(Vue) {
    Vue.use(Button).use(Collapse).use(Space).use(Grid).use(Row).use(Col).use(Tooltip)
  }
}