import Vue from 'vue'
import Router from 'vue-router'
import HomeBase from '@/components/home/HomeBase'
import HomeIndex from '@/components/home/index/Index'
import HomeMap from '@/components/home/map/Map'
import HomeDocument from '@/components/home/article/Document'
import HomeArticleclass from '@/components/home/article/Articleclass'
import HomeArticlelist from '@/components/home/article/Articlelist'
import HomeArticledetail from '@/components/home/article/Articledetail'
import HomeMemberLogin from '@/components/home/memberlogin/Login'
import HomeMemberForget from '@/components/home/memberforget/Forget'
import HomeMemberRegister from '@/components/home/memberregister/Register'
import HomeMemberBind from '@/components/home/memberbind/Bind'
import HomeSellerLogin from '@/components/home/sellerlogin/Login'
import HomeGoodsclass from '@/components/home/goodsclass/Goodsclass'
import HomeStoreclass from '@/components/home/storeclass/Storeclass'
import HomeBrand from '@/components/home/brand/Brand'
import HomeSearch from '@/components/home/search/Search'
import HomeCart from '@/components/home/cart/Cart'
import HomeStorelist from '@/components/home/storelist/Storelist'
import HomeStoredetail from '@/components/home/storedetail/Storedetail'
import HomeStoreabout from '@/components/home/storeabout/Storeabout'
import HomeStoreVoucher from '@/components/home/storedetail/StoreVoucher'
import HomeGoodslist from '@/components/home/goodslist/Goodslist'
import HomeStoreGoodslist from '@/components/home/storegoodslist/Goodslist'
import HomeStoreGoodsclass from '@/components/home/storegoodsclass/Goodsclass'
import HomeGoodsdetail from '@/components/home/goodsdetail/Goodsdetail'
import HomeMarketcard from '@/components/home/marketmanage/Marketcard'
import HomeMarketzodiac from '@/components/home/marketmanage/Marketzodiac'
import HomeMarketwheel from '@/components/home/marketmanage/Marketwheel'
import HomeMarketegg from '@/components/home/marketmanage/Marketegg'
import HomeBargainlist from '@/components/home/bargain/Bargainlist'
import HomeBargainshare from '@/components/home/bargain/Bargainshare'
import HomeSpecial from '@/components/home/special/Index'

import HomeGoodsConsult from '@/components/home/goodsdetail/GoodsConsult'
import HomePointsgoods from '@/components/home/pointsgoods/Index'
import HomePointsgoodsDetail from '@/components/home/pointsgoods/Detail'
import HomePintuanList from '@/components/home/pintuan/PintuanList'
import HomeBonusDetail from '@/components/home/bonus/Detail'
import HomeGroupBuyList from '@/components/home/groupbuy/GroupBuyList'
import HomeVrGroupBuyList from '@/components/home/vrgroupbuy/GroupBuyList'
import MemberBase from '@/components/member/MemberBase'
import MemberIndex from '@/components/member/index/Index'
import MemberAddressList from '@/components/member/address/AddressList'
import MemberAddressForm from '@/components/member/address/AddressForm'
import MemberBankList from '@/components/member/bank/BankList'
import MemberBankForm from '@/components/member/bank/BankForm'
import MemberConsultList from '@/components/member/consult/ConsultList'
import MemberChatInfo from '@/components/member/chat/ChatInfo'
import MemberChatList from '@/components/member/chat/ChatList'
import MemberFriendList from '@/components/member/friend/FriendList'
import MemberRefundList from '@/components/member/refund/RefundList'
import MemberRefundForm from '@/components/member/refund/RefundForm'
import MemberRefundView from '@/components/member/refund/RefundView'
import MemberVrRefundList from '@/components/member/vrrefund/VrRefundList'
import MemberVrRefundForm from '@/components/member/vrrefund/VrRefundForm'
import MemberVrRefundView from '@/components/member/vrrefund/VrRefundView'
import MemberReturnList from '@/components/member/return/ReturnList'
import MemberReturnForm from '@/components/member/return/ReturnForm'
import MemberReturnView from '@/components/member/return/ReturnView'
import MemberReturnSend from '@/components/member/return/ReturnSend'
import MemberInvoiceList from '@/components/member/invoice/InvoiceList'
import MemberInvoiceForm from '@/components/member/invoice/InvoiceForm'
import MemberBuyStep1 from '@/components/member/buy/step1'
import MemberVrBuyStep1 from '@/components/member/vrbuy/step1'
import MemberPointsCart from '@/components/member/pointscart/Cart'
import MemberPointsBuyStep1 from '@/components/member/pointsbuy/step1'
import MemberPointsOrderList from '@/components/member/pointsorder/OrderList'
import MemberPointsOrderDetail from '@/components/member/pointsorder/OrderDetail'
import MemberComplaintList from '@/components/member/complaint/ComplaintList'
import MemberComplaintForm from '@/components/member/complaint/ComplaintForm'
import MemberInformList from '@/components/member/inform/InformList'
import MemberInformForm from '@/components/member/inform/InformForm'
import MemberBuyPay from '@/components/member/buy/pay'
import MemberFavorite from '@/components/member/favorite/Favorite'
import MemberOrderList from '@/components/member/order/OrderList'
import MemberOrderDetail from '@/components/member/order/OrderDetail'
import MemberOrderDeliver from '@/components/member/order/OrderDeliver'
import MemberOrderEvaluate from '@/components/member/order/OrderEvaluate'

import MemberVrOrderList from '@/components/member/vrorder/OrderList'
import MemberVrOrderDetail from '@/components/member/vrorder/OrderDetail'
import MemberVrOrderEvaluate from '@/components/member/vrorder/OrderEvaluate'

import MemberPredepositList from '@/components/member/predeposit/PredepositList'
import MemberRechargeCardList from '@/components/member/predeposit/RechargeCardList'
import MemberWithdrawList from '@/components/member/withdraw/WithdrawList'
import MemberRechargeList from '@/components/member/recharge/RechargeList'
import MemberVoucherList from '@/components/member/voucher/VoucherList'
import MemberNoticeList from '@/components/member/notice/NoticeList'
import MemberSetting from '@/components/member/setting/AccountSet'
import MemberProfileSet from '@/components/member/profile/ProfileSet'
import MemberPointList from '@/components/member/point/PointList'
import MemberPointSignin from '@/components/member/point/PointSignin'
import MemberEvaluateList from '@/components/member/evaluate/EvaluateList'
import MemberInviterManage from '@/components/member/inviter/InviterManage'
import MemberInviterUser from '@/components/member/inviter/InviterUser'
import MemberInviterOrder from '@/components/member/inviter/InviterOrder'
import MemberMarketmanagelog from '@/components/member/marketmanagelog/Marketmanagelog'
import MemberBonusreceive from '@/components/member/bonusreceive/Bonusreceive'
import MemberBargainlist from '@/components/member/bargain/Bargainlist'
import MemberArrivalnotice from '@/components/member/arrivalnotice/Arrivalnotice'
import MemberAuth from '@/components/member/auth/Auth'
import MemberBrowseList from '@/components/member/browse/BrowseList'
import SellerJoinin1 from '@/components/member/sellerjoinin/Step1'
import SellerJoinin2 from '@/components/member/sellerjoinin/Step2'
import SellerJoinin3 from '@/components/member/sellerjoinin/Step3'
import SellerJoinin4 from '@/components/member/sellerjoinin/Step4'
import SellerJoinin5 from '@/components/member/sellerjoinin/Step5'
import SellerBase from '@/components/seller/SellerBase'
import SellerChatInfo from '@/components/seller/chat/ChatInfo'
import SellerChatList from '@/components/seller/chat/ChatList'
import SellerNoticeList from '@/components/seller/notice/NoticeList'
import SellerVoucherList from '@/components/seller/voucher/VoucherList'
import SellerVoucherForm from '@/components/seller/voucher/VoucherForm'
import SellerIndex from '@/components/seller/index/Index'
import SellerConsultList from '@/components/seller/consult/ConsultList'
import SellerAddressList from '@/components/seller/address/AddressList'
import SellerAddressForm from '@/components/seller/address/AddressForm'
import SellerGoodsonline from '@/components/seller/goods/Goodsonline'
import SellerGoodsForm1 from '@/components/seller/goods/GoodsForm1'
import SellerGoodsForm2 from '@/components/seller/goods/GoodsForm2'
import SellerGoodsForm3 from '@/components/seller/goods/GoodsForm3'
import SellerEvaluateList from '@/components/seller/evaluate/EvaluateList'
import SellerOrderList from '@/components/seller/order/OrderList'
import SellerOrderDetail from '@/components/seller/order/OrderDetail'
import SellerOrderDeliver from '@/components/seller/order/OrderDeliver'
import SellerOrderSend from '@/components/seller/order/OrderSend'

import SellerVrOrderList from '@/components/seller/vrorder/OrderList'
import SellerVrOrderDetail from '@/components/seller/vrorder/OrderDetail'

import SellerBillList from '@/components/seller/bill/BillList'
import SellerComplaintList from '@/components/seller/complaint/ComplaintList'
import SellerComplaintForm from '@/components/seller/complaint/ComplaintForm'
import SellerRefundList from '@/components/seller/refund/RefundList'
import SellerRefundForm from '@/components/seller/refund/RefundForm'
import SellerRefundView from '@/components/seller/refund/RefundView'
import SellerRefundDeliver from '@/components/seller/refund/RefundDeliver'
import SellerSettingIndex from '@/components/seller/setting/Index'
import SellerSettingInfo from '@/components/seller/setting/Info'
import SellerStatisticsGeneral from '@/components/seller/statisticsgeneral/Index'
import SellerInviter from '@/components/seller/inviter/Index'
import SellerInviterGoodsList from '@/components/seller/inviter/GoodsList'
import SellerInviterGoodsForm from '@/components/seller/inviter/GoodsForm'
import SellerInviterOrderList from '@/components/seller/inviter/OrderList'
import SellerAccount from '@/components/seller/account/Index'
import SellerAccountList from '@/components/seller/account/AccountList'
import SellerAccountForm from '@/components/seller/account/AccountForm'
import SellerAccountGroupList from '@/components/seller/accountgroup/AccountGroupList'
import SellerAccountGroupForm from '@/components/seller/accountgroup/AccountGroupForm'
import SellerGoodsClassList from '@/components/seller/goodsclass/GoodsClassList'
import SellerGoodsClassForm from '@/components/seller/goodsclass/GoodsClassForm'
import SellerLogList from '@/components/seller/log/LogList'
import SellerCostList from '@/components/seller/cost/CostList'
import SellerMoney from '@/components/seller/money/Index'
import SellerMoneyLogList from '@/components/seller/money/LogList'
import SellerMoneyWithdrawList from '@/components/seller/money/WithdrawList'
import SellerDeposit from '@/components/seller/deposit/Index'
import SellerDepositList from '@/components/seller/deposit/DepositList'
import SellerDepositWithdrawList from '@/components/seller/deposit/WithdrawList'
import SellerTransportList from '@/components/seller/transport/transportList'
import SellerTransportForm from '@/components/seller/transport/transportForm'
// 摄像头
import LiveBroadcast from '@/components/scan/Livebroadcast'
// 扫一扫
import HomeScan from '@/components/scan/scan'
// 仿饿了么点餐
import Ele from '@/components/scan/Ele'
// 三级联动
import Linkage from '@/components/scan/linkage'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      redirect: '/home/index',
      meta: {
        footer: {
          show: true
        }
      }
    },
    {
      path: '/home/',
      component: HomeBase,
      children: [
        // 首页
        { path: 'index', name: 'HomeIndex', component: HomeIndex, meta: { footer: { show: true } } },
        // 地图
        { path: 'map', name: 'HomeMap', component: HomeMap, meta: { footer: { show: true } } },
        // 注册协议
        { path: 'document', name: 'HomeDocument', component: HomeDocument, meta: { footer: { show: true } } },
        // 文章分类
        { path: 'article_class', name: 'HomeArticleclass', component: HomeArticleclass, meta: { footer: { show: true } } },
        // 文章列表
        { path: 'article_list', name: 'HomeArticlelist', component: HomeArticlelist, meta: { footer: { show: true } } },
        // 文章详情
        { path: 'article_detail', name: 'HomeArticledetail', component: HomeArticledetail, meta: { footer: { show: true } } },
        // 用户注册
        { path: 'memberregister', name: 'HomeMemberRegister', component: HomeMemberRegister, meta: { footer: { show: true } } },
        // 用户绑定
        { path: 'memberbind', name: 'HomeMemberBind', component: HomeMemberBind, meta: { footer: { show: true } } },
        // 用户登录
        { path: 'memberlogin', name: 'HomeMemberLogin', component: HomeMemberLogin, meta: { footer: { show: true } } },
        // 卖家登录
        { path: 'sellerlogin', name: 'HomeSellerLogin', component: HomeSellerLogin, meta: { footer: { show: true } } },
        // 忘记密码
        { path: 'memberforget', name: 'HomeMemberForget', component: HomeMemberForget, meta: { footer: { show: true } } },
        // 分类
        { path: 'goodsclass', name: 'HomeGoodsclass', component: HomeGoodsclass, meta: { footer: { show: true } } },
        // 店铺分类
        { path: 'storeclass', name: 'HomeStoreclass', component: HomeStoreclass, meta: { footer: { show: true } } },
        // 品牌
        { path: 'brand', name: 'HomeBrand', component: HomeBrand, meta: { footer: { show: true } } },
        // 购物车
        { path: 'cart', name: 'HomeCart', component: HomeCart, meta: { footer: { show: true } } },
        // 搜索
        { path: 'search', name: 'HomeSearch', component: HomeSearch, meta: { footer: { show: true } } },
        // 店铺列表
        { path: 'storelist', name: 'HomeStorelist', component: HomeStorelist, meta: { footer: { show: true } } },
        // 店铺详情
        { path: 'storedetail', name: 'HomeStoredetail', component: HomeStoredetail, meta: { footer: { show: false } } },
        // 店铺介绍
        { path: 'storeabout', name: 'HomeStoreabout', component: HomeStoreabout, meta: { footer: { show: false } } },
        // 店铺代金券
        { path: 'storevoucher', name: 'HomeStoreVoucher', component: HomeStoreVoucher, meta: { footer: { show: false } } },
        // 店铺列表
        { path: 'goodslist', name: 'HomeGoodslist', component: HomeGoodslist, meta: { footer: { show: true } } },
        // 店铺商品列表
        { path: 'store_goodslist', name: 'HomeStoreGoodslist', component: HomeStoreGoodslist, meta: { footer: { show: false } } },
        // 店铺搜索
        { path: 'store_goodsclass', name: 'HomeStoreGoodsclass', component: HomeStoreGoodsclass, meta: { footer: { show: false } } },
        // 商品详情
        { path: 'goodsdetail', name: 'HomeGoodsdetail', component: HomeGoodsdetail, meta: { footer: { show: false } } },
        // 商品咨询
        { path: 'goodsconsult', name: 'HomeGoodsConsult', component: HomeGoodsConsult, meta: { footer: { show: false } } },
        // 拼团列表
        { path: 'pintuan_list', name: 'HomePintuanList', component: HomePintuanList, meta: { footer: { show: true } } },
        // 积分兑换商品
        { path: 'pointsgoods', name: 'HomePointsgoods', component: HomePointsgoods, meta: { footer: { show: true } } },
        // 积分兑换商品详情页
        { path: 'pointsgoods_detail', name: 'HomePointsgoodsDetail', component: HomePointsgoodsDetail, meta: { footer: { show: false } } },
        // 红包兑换商品详情页
        { path: 'bonus_detail', name: 'HomeBonusDetail', component: HomeBonusDetail, meta: { footer: { show: false } } },
        // 刮刮卡
        { path: 'marketcard', name: 'HomeMarketcard', component: HomeMarketcard, meta: { footer: { show: false } } },
        // 生肖翻翻看
        { path: 'marketzodiac', name: 'HomeMarketzodiac', component: HomeMarketzodiac, meta: { footer: { show: false } } },
        // 大转盘
        { path: 'marketwheel', name: 'HomeMarketwheel', component: HomeMarketwheel, meta: { footer: { show: false } } },
        // 砸金蛋
        { path: 'marketegg', name: 'HomeMarketegg', component: HomeMarketegg, meta: { footer: { show: false } } },
        // 砍价列表页
        { path: 'bargain_list', name: 'HomeBargainlist', component: HomeBargainlist, meta: { footer: { show: true } } },
        // 砍价分享页面
        { path: 'bargain_share', name: 'HomeBargainshare', component: HomeBargainshare, meta: { footer: { show: true } } },
        // 可编辑页面
        { path: 'special', name: 'HomeSpecial', component: HomeSpecial, meta: { footer: { show: true } } },
        // 抢购列表
        { path: 'groupbuy_list', name: 'HomeGroupBuyList', component: HomeGroupBuyList, meta: { footer: { show: false } } },
        // 虚拟抢购列表
        { path: 'vr_groupbuy_list', name: 'HomeVrGroupBuyList', component: HomeVrGroupBuyList, meta: { footer: { show: false } } },
        // 扫一扫
        { path: 'ele', name: 'HomeEle', component: Ele, meta: { footer: { show: false } } },
        { path: 'live', name: 'Live', component: LiveBroadcast, meta: { footer: { show: false } } },
        { path: 'scan', name: 'HomeScan', component: HomeScan, meta: { footer: { show: false } } },
        { path: 'linkage', name: 'linkage', component: Linkage, meta: { footer: { show: false } } },
        
      ]
    },

    {
      path: '/member/',
      component: MemberBase,
      children: [
        // 用户中心
        { path: 'index', name: 'MemberIndex', component: MemberIndex, meta: { footer: { show: true } } },
        // 资金明细
        { path: 'predeposit_list', name: 'MemberPredepositList', component: MemberPredepositList, meta: { footer: { show: true } } },
        // 充值卡明细
        { path: 'recharge_card_list', name: 'MemberRechargeCardList', component: MemberRechargeCardList, meta: { footer: { show: true } } },
        // 提现明细
        { path: 'withdraw_list', name: 'MemberWithdrawList', component: MemberWithdrawList, meta: { footer: { show: true } } },
        // 聊天信息
        { path: 'chat_info', name: 'MemberChatInfo', component: MemberChatInfo, meta: { footer: { show: false } } },
        // 聊天列表
        { path: 'chat_list', name: 'MemberChatList', component: MemberChatList, meta: { footer: { show: false } } },
        // 好友列表
        { path: 'friend_list', name: 'MemberFriendList', component: MemberFriendList, meta: { footer: { show: false } } },
        // 咨询列表
        { path: 'consult_list', name: 'MemberConsultList', component: MemberConsultList, meta: { footer: { show: true } } },
        // 充值明细
        { path: 'recharge_list', name: 'MemberRechargeList', component: MemberRechargeList, meta: { footer: { show: true } } },
        // 代金券列表
        { path: 'voucher_list', name: 'MemberVoucherList', component: MemberVoucherList, meta: { footer: { show: true } } },
        // 消息列表
        { path: 'notice_list', name: 'MemberNoticeList', component: MemberNoticeList, meta: { footer: { show: true } } },
        // 账号设置
        { path: 'setting', name: 'MemberSetting', component: MemberSetting, meta: { footer: { show: true } } },
        // 个人信息
        { path: 'profile_set', name: 'MemberProfileSet', component: MemberProfileSet, meta: { footer: { show: true } } },
        // 积分明细
        { path: 'point_list', name: 'MemberPointList', component: MemberPointList, meta: { footer: { show: true } } },
        // 签到送积分
        { path: 'point_signin', name: 'MemberPointSignin', component: MemberPointSignin, meta: { footer: { show: true } } },
        // 地址列表
        { path: 'address_list', name: 'MemberAddressList', component: MemberAddressList, meta: { footer: { show: true } } },
        // 地址编辑
        { path: 'address_form', name: 'MemberAddressForm', component: MemberAddressForm, meta: { footer: { show: true } } },
        // 提现账户列表
        { path: 'bank_list', name: 'MemberBankList', component: MemberBankList, meta: { footer: { show: true } } },
        // 提现账户编辑
        { path: 'bank_form', name: 'MemberBankForm', component: MemberBankForm, meta: { footer: { show: true } } },
        // 退款列表
        { path: 'refund_list', name: 'MemberRefundList', component: MemberRefundList, meta: { footer: { show: true } } },
        // 退款编辑
        { path: 'refund_form', name: 'MemberRefundForm', component: MemberRefundForm, meta: { footer: { show: true } } },
        // 退款详情
        { path: 'refund_view', name: 'MemberRefundView', component: MemberRefundView, meta: { footer: { show: true } } },
        // 退款列表
        { path: 'vrrefund_list', name: 'MemberVrRefundList', component: MemberVrRefundList, meta: { footer: { show: true } } },
        // 退款编辑
        { path: 'vrrefund_form', name: 'MemberVrRefundForm', component: MemberVrRefundForm, meta: { footer: { show: true } } },
        // 退款详情
        { path: 'vrrefund_view', name: 'MemberVrRefundView', component: MemberVrRefundView, meta: { footer: { show: true } } },
        // 退货列表
        { path: 'return_list', name: 'MemberReturnList', component: MemberReturnList, meta: { footer: { show: true } } },
        // 退货编辑
        { path: 'return_form', name: 'MemberReturnForm', component: MemberReturnForm, meta: { footer: { show: true } } },
        // 退货详情
        { path: 'return_view', name: 'MemberReturnView', component: MemberReturnView, meta: { footer: { show: true } } },
        // 退货
        { path: 'return_send', name: 'MemberReturnSend', component: MemberReturnSend, meta: { footer: { show: true } } },
        // 发票列表
        { path: 'invoice_list', name: 'MemberInvoiceList', component: MemberInvoiceList, meta: { footer: { show: true } } },
        // 发票编辑
        { path: 'invoice_form', name: 'MemberInvoiceForm', component: MemberInvoiceForm, meta: { footer: { show: true } } },
        // 下单界面
        { path: 'buystep1', name: 'MemberBuyStep1', component: MemberBuyStep1, meta: { footer: { show: false } } },
        // 下单界面
        { path: 'vrbuystep1', name: 'MemberVrBuyStep1', component: MemberVrBuyStep1, meta: { footer: { show: false } } },
        // 积分商品下单
        { path: 'pointsbuystep1', name: 'MemberPointsBuyStep1', component: MemberPointsBuyStep1, meta: { footer: { show: false } } },
        // 积分商品购物车
        { path: 'pointscart', name: 'MemberPointsCart', component: MemberPointsCart, meta: { footer: { show: true } } },
        // 积分订单列表
        { path: 'pointsorder_list', name: 'MemberPointsOrderList', component: MemberPointsOrderList, meta: { footer: { show: true } } },
        // 积分订单详情
        { path: 'pointsorder_detail', name: 'MemberPointsOrderDetail', component: MemberPointsOrderDetail, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'inform_list', name: 'MemberInformList', component: MemberInformList, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'inform_form', name: 'MemberInformForm', component: MemberInformForm, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'complaint_list', name: 'MemberComplaintList', component: MemberComplaintList, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'complaint_form', name: 'MemberComplaintForm', component: MemberComplaintForm, meta: { footer: { show: true } } },
        // 支付界面
        { path: 'buypay', name: 'MemberBuyPay', component: MemberBuyPay, meta: { footer: { show: false } } },
        // 我的订单
        { path: 'order_list', name: 'MemberOrderList', component: MemberOrderList, meta: { footer: { show: true } } },
        // 我的收藏
        { path: 'favorite', name: 'MemberFavorite', component: MemberFavorite, meta: { footer: { show: true } } },
        // 订单详情
        { path: 'order_detail', name: 'MemberOrderDetail', component: MemberOrderDetail, meta: { footer: { show: true } } },
        // 物流跟踪
        { path: 'order_deliver', name: 'MemberOrderDeliver', component: MemberOrderDeliver, meta: { footer: { show: true } } },
        // 评价订单
        { path: 'order_evaluate', name: 'MemberOrderEvaluate', component: MemberOrderEvaluate, meta: { footer: { show: true } } },
        // 订单详情
        { path: 'vrorder_detail', name: 'MemberVrOrderDetail', component: MemberVrOrderDetail, meta: { footer: { show: true } } },
        // 评价订单
        { path: 'vrorder_evaluate', name: 'MemberVrOrderEvaluate', component: MemberVrOrderEvaluate, meta: { footer: { show: true } } },
        // 我的订单
        { path: 'vrorder_list', name: 'MemberVrOrderList', component: MemberVrOrderList, meta: { footer: { show: true } } },

        // 用户订单评价列表
        { path: 'evaluate_list', name: 'MemberEvaluateList', component: MemberEvaluateList, meta: { footer: { show: true } } },
        // 推广海报
        { path: 'inviter_manage', name: 'MemberInviterManage', component: MemberInviterManage, meta: { footer: { show: true } } },
        // 推广会员
        { path: 'inviter_user', name: 'MemberInviterUser', component: MemberInviterUser, meta: { footer: { show: true } } },
        // 推广佣金
        { path: 'inviter_order', name: 'MemberInviterOrder', component: MemberInviterOrder, meta: { footer: { show: true } } },
        // 活动记录
        { path: 'marketmanagelog', name: 'MemberMarketmanagelog', component: MemberMarketmanagelog, meta: { footer: { show: true } } },
        // 红包领取记录
        { path: 'bonusreceive', name: 'MemberBonusreceive', component: MemberBonusreceive, meta: { footer: { show: true } } },
        // 砍价列表页
        { path: 'bargain_list', name: 'MemberBargainlist', component: MemberBargainlist, meta: { footer: { show: true } } },
        // 到货通知页面
        { path: 'arrivalnotice', name: 'MemberArrivalnotice', component: MemberArrivalnotice, meta: { footer: { show: true } } },
        // 浏览历史页面
        { path: 'browse_list', name: 'MemberBrowseList', component: MemberBrowseList, meta: { footer: { show: true } } },
        // 会员认证页面
        { path: 'auth', name: 'MemberAuth', component: MemberAuth, meta: { footer: { show: true } } },
        // 店铺入驻
        { path: 'seller_joinin_1', name: 'SellerJoinin1', component: SellerJoinin1, meta: { footer: { show: true } } },
        // 店铺入驻
        { path: 'seller_joinin_2', name: 'SellerJoinin2', component: SellerJoinin2, meta: { footer: { show: true } } },
        // 店铺入驻
        { path: 'seller_joinin_3', name: 'SellerJoinin3', component: SellerJoinin3, meta: { footer: { show: true } } },
        // 店铺入驻
        { path: 'seller_joinin_4', name: 'SellerJoinin4', component: SellerJoinin4, meta: { footer: { show: true } } },
        // 店铺入驻
        { path: 'seller_joinin_5', name: 'SellerJoinin5', component: SellerJoinin5, meta: { footer: { show: true } } }
      ]
    },
    {
      path: '/seller/',
      component: SellerBase,
      children: [
        // 卖家中心
        { path: 'index', name: 'SellerIndex', component: SellerIndex, meta: { footer: { show: true } } },
        // 咨询列表
        { path: 'consult_list', name: 'SellerConsultList', component: SellerConsultList, meta: { footer: { show: true } } },
        // 聊天信息
        { path: 'chat_info', name: 'SellerChatInfo', component: SellerChatInfo, meta: { footer: { show: false } } },
        // 聊天列表
        { path: 'chat_list', name: 'SellerChatList', component: SellerChatList, meta: { footer: { show: false } } },
        // 店铺发货地址列表
        { path: 'address_list', name: 'SellerAddressList', component: SellerAddressList, meta: { footer: { show: true } } },
        // 编辑店铺发货地址
        { path: 'address_form', name: 'SellerAddressForm', component: SellerAddressForm, meta: { footer: { show: true } } },
        // 店铺消息列表
        { path: 'notice_list', name: 'SellerNoticeList', component: SellerNoticeList, meta: { footer: { show: true } } },
        // 代金券列表
        { path: 'voucher_list', name: 'SellerVoucherList', component: SellerVoucherList, meta: { footer: { show: true } } },
        // 编辑代金券
        { path: 'voucher_form', name: 'SellerVoucherForm', component: SellerVoucherForm, meta: { footer: { show: true } } },
        // 卖家商品管理
        { path: 'goodsonline', name: 'SellerGoodsonline', component: SellerGoodsonline, meta: { footer: { show: true } } },
        // 卖家商品上传步骤1
        { path: 'goods_form_1', name: 'SellerGoodsForm1', component: SellerGoodsForm1, meta: { footer: { show: true } } },
        // 卖家商品上传步骤2
        { path: 'goods_form_2', name: 'SellerGoodsForm2', component: SellerGoodsForm2, meta: { footer: { show: true } } },
        // 卖家商品上传步骤3
        { path: 'goods_form_3', name: 'SellerGoodsForm3', component: SellerGoodsForm3, meta: { footer: { show: true } } },
        // 退款列表
        { path: 'refund_list', name: 'SellerRefundList', component: SellerRefundList, meta: { footer: { show: true } } },
        // 退款编辑
        { path: 'refund_form', name: 'SellerRefundForm', component: SellerRefundForm, meta: { footer: { show: true } } },
        // 退款详情
        { path: 'refund_view', name: 'SellerRefundView', component: SellerRefundView, meta: { footer: { show: true } } },
        // 物流跟踪
        { path: 'refund_deliver', name: 'SellerRefundDeliver', component: SellerRefundDeliver, meta: { footer: { show: true } } },
        // 评价列表
        { path: 'evaluate_list', name: 'SellerEvaluateList', component: SellerEvaluateList, meta: { footer: { show: true } } },
        // 卖家订单列表
        { path: 'orderlist', name: 'SellerOrderList', component: SellerOrderList, meta: { footer: { show: true } } },
        // 订单详情
        { path: 'order_detail', name: 'SellerOrderDetail', component: SellerOrderDetail, meta: { footer: { show: true } } },
        // 物流跟踪
        { path: 'order_deliver', name: 'SellerOrderDeliver', component: SellerOrderDeliver, meta: { footer: { show: true } } },
        // 订单发货
        { path: 'order_send', name: 'SellerOrderSend', component: SellerOrderSend, meta: { footer: { show: true } } },
        // 订单详情
        { path: 'vrorder_detail', name: 'SellerVrOrderDetail', component: SellerVrOrderDetail, meta: { footer: { show: true } } },
        // 我的订单
        { path: 'vrorder_list', name: 'SellerVrOrderList', component: SellerVrOrderList, meta: { footer: { show: true } } },
        // 卖家结算单
        { path: 'billlist', name: 'SellerBillList', component: SellerBillList, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'complaint_list', name: 'SellerComplaintList', component: SellerComplaintList, meta: { footer: { show: true } } },
        // 商家投诉
        { path: 'complaint_form', name: 'SellerComplaintForm', component: SellerComplaintForm, meta: { footer: { show: true } } },
        // 店铺概况
        { path: 'statistics_general', name: 'SellerStatisticsGeneral', component: SellerStatisticsGeneral, meta: { footer: { show: true } } },
        // 店铺基本信息设置管理页
        { path: 'setting_index', name: 'SellerSettingIndex', component: SellerSettingIndex, meta: { footer: { show: true } } },
        // 店铺基本信息设置
        { path: 'setting_info', name: 'SellerSettingInfo', component: SellerSettingInfo, meta: { footer: { show: true } } },
        // 店铺分销页面
        { path: 'inviter', name: 'SellerInviter', component: SellerInviter, meta: { footer: { show: true } } },
        // 分销订单管理
        { path: 'inviter_orderlist', name: 'SellerInviterOrderList', component: SellerInviterOrderList, meta: { footer: { show: true } } },
        // 分销商品管理
        { path: 'inviter_goodslist', name: 'SellerInviterGoodsList', component: SellerInviterGoodsList, meta: { footer: { show: true } } },
        // 分销商品添加/编辑
        { path: 'inviter_goodsform', name: 'SellerInviterGoodsForm', component: SellerInviterGoodsForm, meta: { footer: { show: true } } },
        // 子账户管理界面
        { path: 'account', name: 'SellerAccount', component: SellerAccount, meta: { footer: { show: true } } },
        // 子账户列表
        { path: 'account_list', name: 'SellerAccountList', component: SellerAccountList, meta: { footer: { show: true } } },
        // 添加子账户
        { path: 'account_form', name: 'SellerAccountForm', component: SellerAccountForm, meta: { footer: { show: true } } },
        // 账户组列表
        { path: 'accountgroup_list', name: 'SellerAccountGroupList', component: SellerAccountGroupList, meta: { footer: { show: true } } },
        // 账户组列表
        { path: 'accountgroup_form', name: 'SellerAccountGroupForm', component: SellerAccountGroupForm, meta: { footer: { show: true } } },
        // 账户组列表
        { path: 'goodsclass_list', name: 'SellerGoodsClassList', component: SellerGoodsClassList, meta: { footer: { show: true } } },
        // 账户组列表
        { path: 'goodsclass_form', name: 'SellerGoodsClassForm', component: SellerGoodsClassForm, meta: { footer: { show: true } } },
        // 账户日志记录
        { path: 'log_list', name: 'SellerLogList', component: SellerLogList, meta: { footer: { show: true } } },
        // 账户消费记录
        { path: 'cost_list', name: 'SellerCostList', component: SellerCostList, meta: { footer: { show: true } } },
        // 店铺资金
        { path: 'money', name: 'SellerMoney', component: SellerMoney, meta: { footer: { show: true } } },
        // 店铺资金记录
        { path: 'moneylog_list', name: 'SellerMoneyLogList', component: SellerMoneyLogList, meta: { footer: { show: true } } },
        // 店铺资金提现记录
        { path: 'moneywithdraw_list', name: 'SellerMoneyWithdrawList', component: SellerMoneyWithdrawList, meta: { footer: { show: true } } },
        // 店铺保证金
        { path: 'deposit', name: 'SellerDeposit', component: SellerDeposit, meta: { footer: { show: true } } },
        // 店铺保证金记录
        { path: 'deposit_list', name: 'SellerDepositList', component: SellerDepositList, meta: { footer: { show: true } } },
        // 店铺保证金提现记录
        { path: 'depositwithdraw_list', name: 'SellerDepositWithdrawList', component: SellerDepositWithdrawList, meta: { footer: { show: true } } },
        // 店铺售卖区域
        { path: 'transport_list', name: 'SellerTransportList', component: SellerTransportList, meta: { footer: { show: true } } },
        // 店铺售卖区域
        { path: 'transport_form', name: 'SellerTransportForm', component: SellerTransportForm, meta: { footer: { show: true } } },
      ]
    }

  ]
})
