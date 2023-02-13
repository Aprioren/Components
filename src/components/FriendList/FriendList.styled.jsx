import styled from "styled-components";

export const ListOfFriends = styled.ul`
    display: flex;
    flex-direction:column;
    align-items: center;
    
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: 200px;
`;

export const ListOfFriendsItem = styled.li`
    position: relative;
    display: flex;
    width: 250px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.12),0px 1px 1px rgba(0,0,0,0.14),0px 2px 1px rgba(0,0,0,0.2);
    :not(:first-child){
        margin-top: 20px;
    }
`;

export const Status = styled.span`
    background-color: ${props =>{
        return props.isOnline === true ? "green" : "red"
    }};
    height: 10px;
    width: 10px;
    top: 20px;
    border-radius: 50%;
    align-content: center;
    position: absolute;
    left: 20px;
`;

export const Avatar = styled.img`
    height: auto;
    margin-left:50px;
`;

export const NickName = styled.p`
    text-align: center;
    line-height: 1.14;
    margin-left: 20px;
`