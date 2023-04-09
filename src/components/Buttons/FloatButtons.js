import React from 'react'
import { FloatButton } from 'antd'

import {TwitterOutlined, GithubOutlined} from '@ant-design/icons';
const FloatButtons = () => {
  return (
    <FloatButton.Group
    shape="square"
    style={{
      top: '55%',
      transform: 'translateY(-50%)',
      left: 10, 
    }}
  >
    <FloatButton  icon={<TwitterOutlined style = {{color: '#00adb5'}}/>}  />
    <FloatButton   icon = {<GithubOutlined/>}/>
    <FloatButton />
    <FloatButton />
    <FloatButton.BackTop visibilityHeight={0} />
  </FloatButton.Group>
  )
}

export default FloatButtons