import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../src/nav.tsx';

const Item = Nav.Item;
const SubNav = Nav.SubNav;


class Page extends React.Component {
    state = {
        mode: 'horizontal',
    }

    render() {
        var state = this.state;
        return <div>
            <Nav style={{minHeight: 50}} mode={state.mode}>
                <SubNav key={0} title={'菜单1'}>
                    <Item key={0}>子选项1</Item>
                    <Item key={1}>子选项2</Item>
                </SubNav>
                <Item key={0}>选项1</Item>
                <Item key={1}>选项2</Item>
                <SubNav key={1} title={'菜单1'}>
                    <Item key={0}>子选项1</Item>
                    <Item key={1}>子选项2</Item>
                    <SubNav title={'子菜单1'}>
                        <Item key={0}>三级选项1</Item>
                        <Item key={1}>三级选项2</Item>
                    </SubNav>
                    <SubNav title={'子菜单2'}>
                        <Item key={0}>三级选项1</Item>
                        <Item key={1}>三级选项2</Item>
                    </SubNav>
                </SubNav>
            </Nav>
            <select style={{display: 'block'}} onChange={(e) => {
                this.setState({mode: e.target.value})
            }}>
                <option value="horizontal">水平</option>
                <option value="vertical">垂直</option>
            </select>
        </div>
    }
}

window.addEventListener('load', () => {
    ReactDOM.render(<Page></Page>, document.getElementById('approot'));
})