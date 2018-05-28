import React from 'react';
import styles from './nav.css';
import PropTypes from 'prop-types';

function mergeClass(...names) {
    if (names) {
        var result = '';
        for (var name of names) {
            if (name) {
                result += ' ' + name;
            }
        }
        return result;
    }
}

interface Common {
    style?: object,
    className?: string,
}

interface ItemProps extends Common {
    selected: boolean,
    onClick: (e: React.SyntheticEvent) => void,
    href: string,
}

class Item extends React.Component<ItemProps, any> {
    static propTypes = {
        selected: PropTypes.bool,
        onClick: PropTypes.func,
        href: PropTypes.string,
    }

    static defaultProps = {
        itemContent: styles.itemContent
    }

    handlerClick(pxe) {
        if (this.props.onClick) {
            this.props.onClick.apply(this, [pxe]);
        }
    }

    render() {
        return this.props.children
    }
}

interface SubNavProp extends Common {
    onTitleClick?: (e: React.SyntheticEvent) => void,
    display?: boolean,
    title: React.ReactNode,
    href: string,
}

class SubNav extends React.Component<SubNavProp, any> {
    static propTypes = {
        onTitleClick: PropTypes.func,
        display: PropTypes.bool,
        title: PropTypes.node.isRequired,
        href: PropTypes.string,

    }

    state = {}

    handlerClick(pxe) {
        if (this.props.onTitleClick) {
            this.props.onTitleClick.apply(this, [pxe]);
        }
    }

    // componentWillReceiveProps(nextprops) {
    //     this.setState({display: nextprops.display});
    // }

    render() {
        let props = this.props, state = this.state, display = props.display,
            subNavClass = props.mode === 'vertical' ? styles.subNav + ' ' + styles.subNavVertical : styles.subNav;
        var results = [props.title];
        if (display) {
            results.push(<ul key='subNav' className={subNavClass}>
                {React.Children.map(this.props.children, (el, index) => {
                    if (el.type) {
                        var Type = el.type;
                        switch (Type) {
                            case Item:
                                return <li key={index} onClick={el.props.onClick} className={styles.navItem}>
                                    <a href={el.href} onClick={el.props.onClick}><span><Type {...el.props}
                                                                                             float={'none'}
                                                                                             key={index}></Type></span></a>

                                </li>
                            case SubNav:
                                return <li onMouseLeave={() => {
                                    let nstate = {};
                                    nstate[index] = false;
                                    this.setState(nstate);
                                }} onMouseOver={() => {
                                    let nstate = {};
                                    nstate[index] = true;
                                    this.setState(nstate);
                                }} key={index} onClick={el.props.onTitleClick}
                                           className={styles.navItem}>
                                    <a href={el.href} onClick={el.props.onClick}><span><Type key={index} {...el.props}
                                                                                             display={state[index] ? true : false}
                                                                                             mode={props.mode}
                                                                                             float='none'></Type></span></a>
                                </li>
                            default:
                                break;
                        }
                    }
                })}
            </ul>);
        }
        return results;


    }
}

interface NavProps extends Common {

    mode: 'horizontal' | 'vertical',
}

class Nav extends React.Component<NavProps, any> {
    state = {}
    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.string,
    }
    static defaultProps = {
        mode: 'horizontal',
    }
    static Item = Item;
    static SubNav = SubNav;

    render() {
        let props = this.props, state = this.state, thiscomp = this,
            className = mergeClass(styles.nav, props.className);

        var result = <ul style={props.style} className={className}>

            {React.Children.map(this.props.children, (el, index) => {
                if (el && el.type) {
                    var Type = el.type;
                    switch (el.type) {
                        case Item:
                            return <li key={index} onClick={el.props.onClick} onMouseLeave={() => {
                                let nstate = {};
                                nstate[index] = false;
                                thiscomp.setState(nstate);
                            }} onMouseOver={() => {
                                let nstate = {};
                                nstate[index] = true;
                                thiscomp.setState(nstate);
                            }} className={ el.props.selected ?mergeClass(styles.navItem,styles.itemSelect) : styles.navItem}
                                       style={Object.assign({}, {float: props.mode === 'vertical' ? 'none' : 'left'}, props.navItemStyle ? props.navItemStyle : null)}>
                                <a href={el.href} onClick={el.props.onClick}><span><Type {...el.props}
                                                                                         key={index}></Type></span></a>

                            </li>
                        case SubNav:
                            return <li key={index} onClick={el.props.onTitleClick} onMouseLeave={() => {
                                let nstate = {};
                                nstate[index] = false;
                                thiscomp.setState(nstate);
                            }
                            } onMouseOver={() => {
                                let nstate = {};
                                nstate[index] = true;
                                thiscomp.setState(nstate);
                            }} className={el.props.selected ?mergeClass(styles.navItem,styles.itemSelect) : styles.navItem}
                                       style={Object.assign({}, {float: props.mode == 'vertical' ? 'none' : 'left'}, props.navItemStyle ? props.navItemStyle : null)}>
                                <a href={el.href} onClick={el.props.onClick}><span><Type {...el.props}
                                                                                         mode={props.mode}
                                                                                         display={state[index] ? true : false}
                                                                                         key={index}></Type></span></a>


                            </li>
                        default:
                            break;
                    }
                }
            })}
        </ul>
        return result;
    }
}

export default Nav;
