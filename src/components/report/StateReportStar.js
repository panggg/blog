import React, { Component } from 'react'
import '../common/css/rem.css'
import '../common/css/wap-common.css'
import '../common/js/rem.js'
import ReportTitle from './ReportTitle'
import ReportStarAbilityHeader from './ReportStarAbilityHeader'
import ReportStarEightAbility from './ReportStarEightAbility'
import './StateReportStar.css'

import acknowledge from '../common/images/acknowledge.png'
import language from '../common/images/language.png'
import maths from '../common/images/math.png'
import music from '../common/images/music.png'
import visual from '../common/images/visual.png'
import observation from '../common/images/observation.png'
import sport from '../common/images/sport.png'
import social from '../common/images/social.png'

let abilityData = {
  "data":[
    {
      imgSrc:acknowledge,
      abilityName:"自我认知",
      abilityStar:2,
      normStar:4,
      proportion:10
    },
    {
      imgSrc:language,
      abilityName:"语言",
      abilityStar:4,
      normStar:4,
      proportion:38
    },
    {
      imgSrc:maths,
      abilityName:"数理逻辑",
      abilityStar:4,
      normStar:5,
      proportion:42
    },
    {
      imgSrc:music,
      abilityName:"音乐",
      abilityStar:6,
      normStar:4,
      proportion:66
    },
    {
      imgSrc:visual,
      abilityName:"视觉空间",
      abilityStar:6,
      normStar:4,
      proportion:62
    },
    {
      imgSrc:observation,
      abilityName:"自然观察",
      abilityStar:7,
      normStar:5,
      proportion:82
    },
    {
      imgSrc:sport,
      abilityName:"运动",
      abilityStar:3,
      normStar:4,
      proportion:22
    },
    {
      imgSrc:social,
      abilityName:"人际交往",
      abilityStar:7,
      normStar:4,
      proportion:86
    }
  ]
}

export default class StateReportStar extends Component {
  render() {
    return (
      <div className="starWrap">
        <ReportTitle reportTitle="阶段性成长评量" />
        <ReportStarAbilityHeader />
        <ReportStarEightAbility abilityData={abilityData} />
      </div>
    )
  }
}