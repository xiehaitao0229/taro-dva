import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import action from '../../utils/action'


import './index.less'

@connect(({ feeds, loading }) => ({
  ...feeds,
  isLoad: loading.effects["feeds/load"],
  isLoadMore: loading.effects["feeds/loadMore"],
}))

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  componentDidMount = () => {
    this.props.dispatch(action("feeds/load"));
  };

  onPullDownRefresh = () => {
    this.props.dispatch(action("feeds/load"));
  };

  onReachBottom = () => {
    this.props.dispatch(action("feeds/loadMore"));
  };

  updateList = () => {
    this.props.dispatch(action("feeds/search", true));
  };

  render() {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
      </View>
    )
  }
}
  
export default Index
