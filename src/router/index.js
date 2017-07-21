import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/index'
import OnlineClass from '@/components/OnlineClass'
import Rank from '@/components/Rank'
import RankPersonner from '@/components/RankPersonner'
import RankCommunity from '@/components/RankCommunity'
import VideoPlay from '@/components/VideoPlay'
import Answers from '@/components/Answers'
import MemberCenter from '@/components/MemberCenter'
import BindCommunity from '@/components/BindCommunity'
import MyActivity from '@/components/MyActivity'
import AnswerRecord from '@/components/AnswerRecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnlineClass',
      component: OnlineClass
    },
    {
      path: '/onlineclass',
      name: 'OnlineClass',
      component: OnlineClass
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank,
      redirect: '/rank/rankpersonner',
      children: [
        {
          path: 'rankpersonner',
          name: 'RankPersonner',
          component: RankPersonner
        },
        {
          path: 'rankcommunity',
          name: 'RankCommunity',
          component: RankCommunity
        }
      ]
    },
    {
      path: '/videoplay',
      name: 'VideoPlay',
      component: VideoPlay
    },
    {
      path: '/answers',
      name: 'Answers',
      component: Answers
    },
    {
      path: '/membercenter',
      name: 'MemberCenter',
      component: MemberCenter
    },
    {
      path: '/bindcommunity',
      name: 'BindCommunity',
      component: BindCommunity
    },
    {
      path: '/myActivity',
      name: 'MyActivity',
      component: MyActivity
    },
    {
      path: '/answerRecord',
      name: 'AnswerRecord',
      component: AnswerRecord
    }
  ]
})
