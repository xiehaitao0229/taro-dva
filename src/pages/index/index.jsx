import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'


import './index.less'

@connect(({ home, loading }) => ({
  ...home,
  ...loading
}))

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'home/banner',
    });
  };



  render() {
    console.log(this.props,888)

    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}
  
export default Index
