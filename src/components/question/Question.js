import React, {Component} from 'react'
import './Question.css'
import woniu from '../common/images/woniu.png'
import  $ from 'jquery'

export default class Question extends Component {
  componentDidMount(){
    show(this.props.subjectsOpc)
  }
  render(){
    const{ subjectsOpc } = this.props
    return(
      <div className="QuesMain">
        <div className="progressBar clearfix">
          <p className="numRatio">0/{subjectsOpc.length}</p>
          <div className="grayBar">
            <div className="doingBar">
              <img src={woniu} className="wn" role="presentation"/>
            </div>
          </div>
        </div>
        <div className='docker'>
          {
            subjectsOpc.map(function(item,index){
              return(
                <div className="subject" key={index}>
                  <div className="ques">{item.title}</div>
                  {
                    item.content.map(function(itemContent){
                      return(
                        <p className="opc" data-num={itemContent.id} key={itemContent.id}>
                          <span className="opcList">{itemContent.contentTitle}</span>
                          <em className="opcDetail">{itemContent.contentCon}</em>
                        </p>
                      )
                    })
                  }
                </div>
              )
            })
          }
        </div>
        <p className="upQues"></p>
      </div>
    )
  }
}
function show(subjectsOpc){
  /*小乌龟的进度*/
  var stepWidth = 2.5/subjectsOpc.length;
  /*已经做了多少题*/
  var checkEnd = [];
  /*j代表当前第几题的下标*/
  var j=0;
  $('.numRatio').html(0+'/'+subjectsOpc.length);
  /*上一题按钮隐藏*/
  $(".upQues").html("");
  /*点击当前题目的当前的选项*/
  $('.opc').on('click',function(){
    $(this).children('span').addClass('blue').siblings('em').addClass('blueWord');
    $(this).siblings().children('span').removeClass('blue').siblings('em').removeClass('blueWord');
    var classAll = $(this).children('span').prop("class");
    var classBlue = classAll.split(' ');
    var blue = classBlue[1];
    var that = $(this);
    if(blue === "blue"){
      setTimeout(function(){
        that.parent().next().show().siblings('.subject').hide();
      },500)
    }
    /*把选中的项存在数组里*/
    var checkNum = $(this).attr('data-num');
    checkEnd.splice(j, subjectsOpc.length, checkNum);
    if(j < subjectsOpc.length - 1) {
      setTimeout(function() {
       j++;
      }, 0);
    }
    if(j === subjectsOpc.length - 1) {
      $('.jump').show();
      $('.nextStep').show();
    }
    $(".upQues").html("上一题");
    var wid = stepWidth * checkEnd.length;
    $(".doingBar").css("width", wid + "rem");
    $(".numRatio").html((j + 1) + "/" + subjectsOpc.length);
  });
  /*点击上一步切换至上一题*/
  $(".upQues").on('click',function(){
    j--;
    $(".numRatio").html((j+1)+"/"+subjectsOpc.length);
    if(j===0){
      $(".upQues").html("");
      $(".numRatio").html("1/"+subjectsOpc.length);
    }
    $('.nextStep').hide();
    console.log(j);
    $('.subject').eq(j).show().siblings().hide();
    $(".opc").eq(checkEnd[j]-1).addClass("blue");
    var wid = stepWidth*j;
    $(".doingBar").css("width",wid+"rem");
  })
}



