import React from 'react';
import Nav from '../src/nav.tsx';

const Item = Nav.Item;
const SubNav = Nav.SubNav;

var c=<Nav mode={'horizontal'}>
    <SubNav key={0} title={'菜单1'}>
        <Item key={0}>子选项1</Item>
        <Item key={1}>子选项2</Item>
    </SubNav>
    <Item key={0}>选项1</Item>
    <Item key={1}>选项2</Item>
    <SubNav key={1} title={'菜单1'}>
        <Item key={0}>子选项1</Item>
        <Item key={1}>子选项2</Item>
        <SubNav title={'子菜单'}>
            <Item key={0}>三级选项1</Item>
            <Item key={1}>三级选项2</Item>
        </SubNav>
    </SubNav>
</Nav>