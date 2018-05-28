import React from 'react';
import ReactDOM from 'react-dom';
import Refractor from 'refractor'
import hljs from 'highlight.js';
window.addEventListener('load', function () {
    const codeString="import React from 'react';\n" +
        "import ReactDOM from 'react-dom';\n" +
        "import Nav from '../src/nav2.tsx';\n" +
        "\n" +
        "const Item = Nav.Item;\n" +
        "const SubNav = Nav.SubNav;\n" +
        "\n" +
        "import _ from 'underscore'\n" +
        "\n" +
        "class Page extends React.Component {\n" +
        "    state = {\n" +
        "        mode: 'horizontal',\n" +
        "    }\n" +
        "\n" +
        "    render() {\n" +
        "        var state = this.state;\n" +
        "        return <div>\n" +
        "            <Nav style={{minHeight: 50}} mode={state.mode}>\n" +
        "                <SubNav key={0} title={'菜单1'}>\n" +
        "                    <Item key={0}>子选项1</Item>\n" +
        "                    <Item key={1}>子选项2</Item>\n" +
        "                </SubNav>\n" +
        "                <Item key={0}>选项1</Item>\n" +
        "                <Item key={1}>选项2</Item>\n" +
        "                <SubNav key={1} title={'菜单1'}>\n" +
        "                    <Item key={0}>子选项1</Item>\n" +
        "                    <Item key={1}>子选项2</Item>\n" +
        "                    <SubNav title={'子菜单'}>\n" +
        "                        <Item key={0}>三级选项1</Item>\n" +
        "                        <Item key={1}>三级选项2</Item>\n" +
        "                    </SubNav>\n" +
        "                </SubNav>\n" +
        "            </Nav>\n" +
        "            <select style={{display: 'block'}} onChange={(e) => {\n" +
        "                this.setState({mode: e.target.value})\n" +
        "            }}>\n" +
        "                <option value=\"horizontal\">水平</option>\n" +
        "                <option value=\"vertical\">垂直</option>\n" +
        "            </select>\n" +
        "        </div>\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "window.addEventListener('load', () => {\n" +
        "    ReactDOM.render(<Page></Page>, document.getElementById('approot'));\n" +
        "})";
    class Page extends React.Component{
        componentDidMount(){
            var nodes=hljs.highlightBlock(this.refs.code);
        }
        render(){
            return <div>
                <pre><code ref={'code'} className="jsx">
                    {codeString}
                </code></pre>
            </div>
        }
    }
    ReactDOM.render(<Page></Page>, window.document.getElementById("code"))
})