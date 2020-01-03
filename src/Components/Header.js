import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`

`;

const List = styled.ul`

`;

const Item = styled.li`

`;

const SLink = styled(Link)`

`;

export default () => (
    <Header>
        <List>
            <Item>
                <SLink to="/">
                    영화
                </SLink>
            </Item>
            <Item>
                <SLink to="/tv">
                    TV
                </SLink>
            </Item>
            <Item>
                <SLink to="/search">
                    검색
                </SLink>
            </Item>
        </List>
    </Header>
)