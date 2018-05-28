rc-nav
==========
###### [online demo](https://ztx09401515.github.io/rc-nav/demo.html)

### NavProp
 ##### mode
type?:'horizontal' | 'vertical'
default:'horizontal'
### ItemProp
 ##### selected
 type?:boolean,
 ##### onClick
 type?:(e: React.SyntheticEvent) => void,
 ##### href
 type?:string
### SubNavProp
 ##### onTitleClick?
 type:(e: React.SyntheticEvent) => void,
 ##### selected
 type?: boolean,
 ##### display
 type?: boolean,
 ##### title
 type: React.ReactNode,
 ##### href
 type?: string,
