import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    text-align: center;

    width: 250px;
    height: 300px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0,0,0,0.12),0px 1px 1px rgba(0,0,0,0.14),0px 2px 1px rgba(0,0,0,0.2);
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding; 5px;
`;

export const Avatar = styled.img`
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-top: 10px;
`;

export const UserInfo = styled.p`
    text-align: center;
    color: #757575;

    margin: 0;
    padding: 0;
    margin-top: 10px;
`;

export const UserName = styled.p`
    margin: 0;
    padding: 0; 
    margin-top: 10px;

    font-weight: 600;
    text-align: center;
    color: black;
`;

export const StatsList = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    line-height: 1.5;

    margin: 0;
    padding: 0;
    margin-top: 35px;
    height: 70px;
    background-color: #F5F4FA;
`;
export const ListItems = styled.li`
    display: flex;
    flex-direction: column;
`;

export const Stats = styled.span`
    color: #757575;
`;

export const Metrics = styled.span`
    font-weight: 600;
    margin-top: 5px;
`;