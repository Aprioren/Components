import styled from "styled-components";

export const Statisctic = styled.section`
    margin: 0 auto;
    text-align: center;
    margin-top: 100px;
`;

export const StatiscticTitle = styled.h2`
    margin: 0;
    padding: 0;

    text-align: center;
    text-decoration: uppercase;
    font-weight: 800;
`;

export const StatList = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
    line-height: 1.5;

    margin: 0;
    padding: 0;
`;
export const StatListItem = styled.li`
    background-color: ${(precantage) =>{
        return precantage > 4 ? "#F45B69" : "orangered";
    }};  
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

export const Label = styled.span`
    color: #FFF;
    
`;

export const Percentage = styled.span`
    color: #FFF;
    line-height: 1.17;
    font-size: 24px;
    margin-top: 5px;
`

