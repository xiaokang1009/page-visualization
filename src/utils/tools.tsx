import React from 'react'
import {
  AlertSvg,
  ButtonGroupSvg,
  ButtonSvg,
  ButtonToolBar,
  CardSvg,
  ContainerSvg,
  GridRowSvg,
  HeadingSvg,
  ImageSvg,
  ListGroupSvg,
  HrSvg,
  BreadcrumbSvg,
  PaginationSvg,
  FormSvg,
  TableSvg,
  ParagraphSvg
} from 'common'

type toolProps = {
  svg: JSX.Element
  text: string
}

const tools: Array<toolProps> = [
  {
    svg: <ContainerSvg />,
    text: '盒子'
  },
  {
    svg: <GridRowSvg />,
    text: '网格'
  },
  {
    svg: <ButtonSvg />,
    text: '按钮'
  },
  {
    svg: <ButtonGroupSvg />,
    text: '按钮集合'
  },
  {
    svg: <ButtonToolBar />,
    text: '按钮工具栏'
  },
  {
    svg: <HeadingSvg />,
    text: '标题'
  },
  {
    svg: <ImageSvg />,
    text: '图片'
  },
  {
    svg: <AlertSvg />,
    text: '弹窗'
  },
  {
    svg: <CardSvg />,
    text: '卡片'
  },
  {
    svg: <ListGroupSvg />,
    text: '列表'
  },
  {
    svg: <HrSvg />,
    text: '横向线条'
  },
  {
    svg: <BreadcrumbSvg />,
    text: '面包屑导航'
  },
  {
    svg: <PaginationSvg />,
    text: '分页器'
  },
  {
    svg: <FormSvg />,
    text: '表单'
  },
  {
    svg: <TableSvg />,
    text: '表格'
  },
  {
    svg: <ParagraphSvg />,
    text: '段落'
  }
]
export default tools
