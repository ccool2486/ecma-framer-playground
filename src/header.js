import base from './base'

const header = {
  icmenu : new Layer({
    parent: this.header,
    image: "images/menu.png",
    color: "red",
    x: 0 + base.padding,
    y: 0 + base.padding,
    width: 24,
    height: 24,
    opacity:1,
  }),

  header: new Layer({
    x: 0,
    y: 0,
    width: base.deviceWidth,
    height: 52,
    opacity: 1,
    backgroundColor: "#242C31"
  }),

  soociiLogo: new Layer({
    x: (base.deviceWidth/2) - 33,
    y: 16,
    width: 66,
    height: 20,
    image: "images/Soocii_logotype.png"
  }),

  iconHelp: new Layer({
    x: base.deviceWidth - 24 - base.padding,
    y: 16,
    width: 24,
    height: 24,
    image: "images/icon_help.png",
  })
}

header.icmenu.placeBefore(header.header)
header.soociiLogo.placeBefore(header.header)
header.iconHelp.placeBefore(header.header)

export default header;

