import React, {Component} from 'react'
import './ClassRank.css'
import '../common/js/rem.js'

import ClassRank from "./ClassRank.js"
import ClassRankTitle from "./ClassRankTitle.js"

import child_boy_mine from "../common/images/child_boy_mine.png"
import child_boy1 from "../common/images/child_boy1.png"
import child_boy2 from "../common/images/child_boy2.png"
import child_boy4 from "../common/images/child_boy4.png"
import child_boy5 from "../common/images/child_boy5.png"
import child_boy6 from "../common/images/child_boy6.png"
import child_boy7 from "../common/images/child_boy7.png"
import child_boy8 from "../common/images/child_boy8.png"
import child_boy9 from "../common/images/child_boy9.png"
import child_boy10 from "../common/images/child_boy10.png"
import child_boy11 from "../common/images/child_boy11.png"
import child_boy12 from "../common/images/child_boy12.png"
import child_boy13 from "../common/images/child_boy13.png"
import child_boy14 from "../common/images/child_boy14.png"
import child_boy15 from "../common/images/child_boy15.png"
import child_boy16 from "../common/images/child_boy16.png"

import child_girl1 from "../common/images/child_girl1.png"
import child_girl2 from "../common/images/child_girl2.png"
import child_girl3 from "../common/images/child_girl3.png"
import child_girl4 from "../common/images/child_girl4.png"
import child_girl5 from "../common/images/child_girl5.png"
import child_girl6 from "../common/images/child_girl6.png"
import child_girl7 from "../common/images/child_girl7.png"
import child_girl8 from "../common/images/child_girl8.png"


let items=[
  {rank:12,name:'王子轩',bg:child_boy_mine,score:39},
  {rank:1,name:'孔祥宁',bg:child_boy1,score:56},
  {rank:2,name:'王艺',bg:child_girl1,score:55},
  {rank:3,name:'朱梦华',bg:child_girl2,score:53},
  {rank:4,name:'蔡子默',bg:child_boy2,score:52},
  {rank:5,name:'李奕然',bg:child_girl3,score:48},
  {rank:6,name:'赵怀瑾',bg:child_boy16,score:46},
  {rank:7,name:'王旭桐',bg:child_girl4,score:45},
  {rank:8,name:'刘梦溪',bg:child_girl5,score:44},
  {rank:9,name:'田潇轩',bg:child_boy4,score:43},
  {rank:10,name:'张语娢',bg:child_girl6,score:42},
  {rank:11,name:'吴振宇',bg:child_boy5,score:41},
  {rank:13,name:'崔梓轩',bg:child_boy6,score:38},
  {rank:14,name:'马卓然',bg:child_boy7,score:37},
  {rank:15,name:'陶欣怡',bg:child_girl7,score:36},
  {rank:16,name:'胡徐均',bg:child_boy8,score:35},
  {rank:17,name:'景熙平',bg:child_boy9,score:34},
  {rank:18,name:'郭思雅',bg:child_boy10,score:32},
  {rank:19,name:'叶展宇',bg:child_boy11,score:31},
  {rank:20,name:'袁一峰',bg:child_boy12,score:30},
  {rank:21,name:'赵晨凯',bg:child_boy13,score:28},
  {rank:22,name:'张语萱',bg:child_girl8,score:20},
  {rank:23,name:'武军',bg:child_boy14,score:18},
  {rank:24,name:'刘越泽',bg:child_boy15,score:17},
]

export default class Ranks extends Component {
  render() {
    return (
      <ClassRankTitle>
        <ClassRank items={items}/>
      </ClassRankTitle>
    )
  }
}
