import header from './header'
import handy from './handy'
import base from './base'

const tab = {
	header_bg: new Layer({
		x: 0,
		y: header.header.height,
		width: base.deviceWidth,
		height: 52,
		backgroundColor: "rgba(28,36,41,1)",
	}),
	
	indicator: new Layer({
		x: 0,
		y: header.header.height + 50,
		width: base.deviceWidth/3,
		height: 2,
		backgroundColor: "rgba(10,237,61,1)",
		shadowColor: "rgba(10,237,61,0.3755944293478261)",
		shadowX: 0,
		shadowY: 1,
		shadowBlur: 4,
		shadowSpread: 0,
	}),
	
	discover: new TextLayer({
		text: "探索",
		fontSize: 14,
		fontFamily: "PingFang TC",
		fontWeight: 400,
		letterSpacingCode: 0.0,
		textAlign: "center",
		color: "rgba(10,237,61,1)",
	}),
	
	newsFeed: new TextLayer({
		x: (base.deviceWidth/3)*2-50,
		y: header.header.height + 16,
		text: "動態時報",
		fontSize: 14,
		fontFamily: "PingFang TC",
		fontWeight: 400,
		letterSpacingCode: 0.0,
		textAlign: "center",
		color: "rgba(121,121,121,1)",
	}),
	
	aboutMe: new TextLayer({
		x: (base.deviceWidth/3)*3-100,
		y: header.header.height + 16,
		text: "關於我",
		fontSize: 14,
		fontFamily: "PingFang TC",
		fontWeight: 400,
		letterSpacingCode: 0.0,
		textAlign: "left",
		color: "rgba(121,121,121,1)",
	})
	
}

// 以三等分均分置中
handy.centeredBy3(tab.discover, tab.newsFeed, tab.aboutMe)

// parentAll
handy.parentAll([tab.discover, tab.newsFeed, tab.aboutMe], tab.header_bg)

// todo:
tab.discover.centerY()
tab.newsFeed.centerY()
tab.aboutMe.centerY()

// 點擊「動態時報」
tab.newsFeed.on(Events.Tap, function(event) {
	defautlTextColor()
	currentAtNewsfeed.start()
	tabtoNewsfeed.start()
	
})

// 點擊「探索」
tab.discover.on(Events.Tap, function(event) {
	defautlTextColor() // 先把所有的tab變成遠本的樣式
	currentAtDiscover.start() //文字去探索
	tabtoDiscover.start() //indicator去探索
	
})

// 點擊「關於我」
tab.aboutMe.on(Events.Tap, function(event) {
	defautlTextColor() // 先把所有的tab變成遠本的樣式
	currentAboutMe.start() //文字去探索
	tabtoAboutMe.start() //indicator去探索
	
})

// 清除文字樣式
var defautlTextColor = function () {
	defautlTextColor1.start()
	defautlTextColor2.start()
	defautlTextColor3.start()
}

var defautlTextColor1 = new Animation(tab.discover, {
	color: base.highlightColor
})

var defautlTextColor2 = new Animation(tab.newsFeed, {
	color: base.highlightColor
})

var defautlTextColor3 = new Animation(tab.aboutMe, {
	color: base.highlightColor
})




// 點擊動態時報動畫
var tabtoNewsfeed = new Animation(tab.indicator, {
	width: base.deviceWidth/3,
	x: base.deviceWidth/3
});

var currentAtNewsfeed = new Animation(tab.newsFeed, 
	{
		color: "#0AED3D"
	}
)

// 點擊探索動畫
var tabtoDiscover = new Animation(tab.indicator, {
	width: base.deviceWidth/3,
	x: 0,
});

var currentAtDiscover = new Animation(tab.discover, 
	{
		color: "#0AED3D"
	}
)

// 點擊關於我動畫
var tabtoAboutMe = new Animation(tab.indicator, {
	width: base.deviceWidth/3,
	x: base.deviceWidth/3*2
});

var currentAboutMe = new Animation(tab.aboutMe, 
	{
		color: "#0AED3D"
	}
)







export default tab;
